import { getMapData, getMapKeys } from "./country-data"
import { OwnershipController } from "./ownership"
import { PopulationController } from "./population"
export let MilitaryController = {
    //Statistics of how many reserve divisions each country has
    reserveArmies: new Map<string, number>(),
    //How many armies each country has in each country
    activeArmies: new Map<string, Map<string, number>>(),
    //The queued divisions which still need to be trained
    trainingQueue: new Map<string, number>(),
    trainingRate: 100, //How many divisions to train per second
    //Maneuvering queue
    maneuverQueue: new Map<string, Map<string, number>>(),

    divisionSize: 1000, //1000 people in a single division

    //Queue up divisions to be trained
    train: (country:string, divisions: number) => {
        const currentDivisions = MilitaryController.trainingQueue.get(country) || 0
        MilitaryController.trainingQueue.set(country, currentDivisions + divisions)
        PopulationController.decreasePopulation(country, divisions * MilitaryController.divisionSize)
    },

    getDivisions: (country: string) => {
        return MilitaryController.reserveArmies.get(country) || 0
    },

    deployDivisions(attacker: string, defendant: string, divisions: number) {
        let currentReserve = MilitaryController.reserveArmies.get(attacker) || 0
        MilitaryController.reserveArmies.set(attacker, currentReserve - divisions)
        let currentActive = MilitaryController.activeArmies.get(attacker)!.get(defendant) || 0
        MilitaryController.activeArmies.get(attacker)!.set(defendant, divisions + currentActive)
    },

    maneuverDivisions(from: string, to: string, divisions: number) {
        let currentManeuver = MilitaryController.maneuverQueue.get(from)!.get(to)!
        let currentFromArmies = MilitaryController.reserveArmies.get(from)!
        MilitaryController.maneuverQueue.get(from)!.set(to, currentManeuver + divisions)
        MilitaryController.reserveArmies.set(from, currentFromArmies - divisions)
    },

    sumActive(cid: string) {
        let total = 0
        MilitaryController.activeArmies.get(cid)?.forEach(x => total += x)
        return total
    },

    militaryTick: () => {
        MilitaryController.activeArmies.forEach((i, attacker) => {
            i.forEach((armies, defender) => {
                let currentAttack = armies
                let currentDefend = MilitaryController.getDivisions(defender)

                if(currentDefend <= 0 && armies > 0) {
                    let currentReserve = MilitaryController.reserveArmies.get(attacker)!
                    MilitaryController.reserveArmies.set(attacker, currentReserve + armies)
                    MilitaryController.activeArmies.get(attacker)!.set(defender, 0)
                    //Give ownership of country to user 0
                    OwnershipController.giveOwnership(defender, 0)
                    return
                }
                if(currentAttack <= 0) return

                MilitaryController.activeArmies.get(attacker)!.set(defender, Math.max(currentAttack - 100, 0))
                MilitaryController.reserveArmies.set(defender, Math.max(currentDefend - 100,0))

            })
        })
    },

    maneuverTick: () => {
        MilitaryController.maneuverQueue.forEach((i, from) => {
            i.forEach((armies, to) => {
                console.log(armies)
                if(armies <= 0) return
                let currentTo = MilitaryController.reserveArmies.get(to)!

                MilitaryController.maneuverQueue.get(from)!.set(to, armies - MilitaryController.trainingRate)
                MilitaryController.reserveArmies.set(to, currentTo + MilitaryController.trainingRate)
            })
        })
    },

    //Process to run every second to train divisions
    trainTick: () => {
        MilitaryController.trainingQueue.forEach((value, cid) => {
            let toTrain = value || 0
            if(toTrain - 1 <= 0) {
                MilitaryController.trainingQueue.delete(cid)
            }
            MilitaryController.trainingQueue.set(cid, toTrain - MilitaryController.trainingRate)
            let current = MilitaryController.reserveArmies.get(cid) || 0
            MilitaryController.reserveArmies.set(cid, current + MilitaryController.trainingRate)

        })
    }

}

getMapKeys().map(key => {
    MilitaryController.reserveArmies.set(key, Math.floor(getMapData(key).population * 0.05 / 1000))
    PopulationController.decreasePopulation(key, getMapData(key).population * 0.05)
    MilitaryController.activeArmies.set(key, new Map())
    MilitaryController.maneuverQueue.set(key, new Map())
})

//Train divisions ever second
setInterval(() => {
    MilitaryController.trainTick()
    MilitaryController.militaryTick()
    MilitaryController.maneuverTick()
}, 1000)