import { getMapData, getMapKeys } from "./country-data"
import { FirebaseDoubleMap, FirebaseMap } from "./firebaseMap"
import { OwnershipController } from "./ownership"
import { PlayersController } from "./player"
import { PopulationController } from "./population"
export let MilitaryController = {
    //Statistics of how many reserve divisions each country has
    reserveArmies: new FirebaseMap<number>("data/reserveArmies"),
    //How many armies each country has in each country
    activeArmies: new FirebaseDoubleMap<number>("data/activeArmies"),
    //How many armies are in the process of returning home after a battle
    returnQueue: new FirebaseMap<number>("data/returnQueue"),
    //The queued divisions which still need to be trained
    trainingQueue: new FirebaseMap<number>("data/trainingQueue"),
    //Maneuvering queue
    maneuverQueue: new FirebaseDoubleMap<number>("data/maneuverQueue"),

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
        let currentManeuver = MilitaryController.maneuverQueue.get(from)!.get(to) || 0
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
                    MilitaryController.activeArmies.get(attacker)!.set(defender, 0)
                    //Give ownership of country to user 0
                    OwnershipController.giveOwnership(defender, PlayersController.currentPlayer)
                    MilitaryController.returnQueue.set(attacker, armies)
                    return
                }
                if(currentAttack <= 0) return

                MilitaryController.activeArmies.get(attacker)!.set(defender, Math.max(currentAttack - 1, 0))
                MilitaryController.reserveArmies.set(defender, Math.max(currentDefend - 1,0))

            })
        })
    },

    maneuverTick: () => {
        MilitaryController.maneuverQueue.forEach((i, from) => {
            i.forEach((armies, to) => {
                console.log(armies)
                if(armies <= 0) return
                let currentTo = MilitaryController.reserveArmies.get(to)!

                MilitaryController.maneuverQueue.get(from)!.set(to, Math.max(0, armies - 1))
                MilitaryController.reserveArmies.set(to, currentTo + Math.min(1, armies))
            })
        })
    },

    returnTick: () => {
        MilitaryController.returnQueue.forEach((number, cid) => {
            if(number <= 0) return
            MilitaryController.returnQueue.set(cid, number - 1)
            let armies = MilitaryController.reserveArmies.get(cid) || 0
            MilitaryController.reserveArmies.set(cid, armies + 1)
        })
    },

    //Process to run every second to train divisions
    trainTick: () => {
        MilitaryController.trainingQueue.forEach((value, cid) => {
            let toTrain = value || 0
            if(toTrain <= 0) return
            MilitaryController.trainingQueue.set(cid, toTrain - 1)
            let current = MilitaryController.reserveArmies.get(cid) || 0
            MilitaryController.reserveArmies.set(cid, current + 1)

        })
    }

}



