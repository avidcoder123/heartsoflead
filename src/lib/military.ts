import { getMapData, getMapKeys } from "./country-data"
import { PopulationController } from "./population"
export let MilitaryController = {
    //Statistics of how many reserve divisions each country has
    reserveArmies: new Map<string, number>(),
    //How many armies each country has in each country
    activeArmies: new Map<string, Map<string, number>>,
    //The queued divisions which still need to be trained
    trainingQueue: new Map<string, number>(),
    trainingRate: 100, //How many divisions to train per second

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
        MilitaryController.activeArmies.get(attacker)!.set(defendant, divisions)
    },

    //Process to run every second to train divisions
    trainTick: () => {
        MilitaryController.trainingQueue.forEach((value, cid) => {
            let toTrain = value || 0
            MilitaryController.trainingQueue.set(cid, toTrain - MilitaryController.trainingRate)
            let current = MilitaryController.reserveArmies.get(cid) || 0
            MilitaryController.reserveArmies.set(cid, current + MilitaryController.trainingRate)
            if(toTrain - 1 == 0) {
                MilitaryController.trainingQueue.delete(cid)
            }
        })
    }
}

getMapKeys().map(key => {
    MilitaryController.reserveArmies.set(key, Math.floor(getMapData(key).population * 0.05 / 1000))
    PopulationController.decreasePopulation(key, getMapData(key).population * 0.05)
    MilitaryController.activeArmies.set(key, new Map())
})

//Train divisions ever second
setInterval(MilitaryController.trainTick, 1000)