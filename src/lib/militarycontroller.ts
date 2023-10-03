import { ref, runTransaction } from "firebase/database"
import { getMapData, getMapKeys } from "./country-data"
import { FirebaseDoubleMap, FirebaseMap } from "./firebaseMap"
import { OwnershipController } from "./ownershipcontroller"
import { PlayersController } from "./playercontroller"
import { PopulationController } from "./populationcontroller"
import { db } from "./firebase"
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
        MilitaryController.trainingQueue.increment(country, divisions)
        PopulationController.decreasePopulation(country, divisions * MilitaryController.divisionSize)
    },

    getDivisions: (country: string) => {
        return MilitaryController.reserveArmies.get(country) || 0
    },

    deployDivisions(attacker: string, defendant: string, divisions: number) {
        MilitaryController.reserveArmies.increment(attacker, -divisions)
        MilitaryController.activeArmies.get(attacker)!.increment(defendant, divisions)
    },
    
    maneuverDivisions(from: string, to: string, divisions: number) {
        MilitaryController.maneuverQueue.get(from)!.increment(to, divisions)
        MilitaryController.reserveArmies.increment(from, -divisions)
    },

    sumActive(cid: string) {
        let total = 0
        MilitaryController.activeArmies.get(cid)?.forEach(x => total += x)
        return total
    },

    militaryTick: () => {
        MilitaryController.activeArmies.forEach((i, attacker) => {
            i.forEach((armies, defender) => {
                console.log(i)
                if(!armies) return
                let currentAttack = armies
                let currentDefend = MilitaryController.getDivisions(defender)
                if(currentDefend <= 0 && armies > 0) {
                    MilitaryController.activeArmies.get(attacker)!.set(defender, 0)
                    OwnershipController.giveOwnership(defender, PlayersController.currentPlayer)
                    MilitaryController.returnQueue.set(attacker, armies)
                    return
                }
                if(currentAttack <= 0) return

                MilitaryController.activeArmies.get(attacker)!.increment(defender, -1)
                MilitaryController.reserveArmies.increment(defender, -1)
            })
        })
    },
    
    maneuverTick: () => {
        MilitaryController.maneuverQueue.forEach((i, from) => {
            i.forEach((armies, to) => {
                if(armies <= 0) return

                MilitaryController.maneuverQueue.get(from)!.increment(to, -1)
                MilitaryController.reserveArmies.increment(to, 1)
            })
        })
    },

    returnTick: () => {
        MilitaryController.returnQueue.forEach((number, cid) => {
            if(number <= 0) return
            MilitaryController.returnQueue.increment(cid, -1)
            MilitaryController.reserveArmies.increment(cid, 1)
        })
    },

    //Process to run every second to train divisions
    //TODO: Fix bug where defender reserve divions do not update
    trainTick: () => {
        MilitaryController.trainingQueue.forEach((value, cid) => {
            let toTrain = value || 0
            if(toTrain <= 0) return
            MilitaryController.trainingQueue.increment(cid, -1)
            MilitaryController.reserveArmies.increment(cid, 1)

        })
    }
}



