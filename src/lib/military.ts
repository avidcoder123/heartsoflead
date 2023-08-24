
const divisionSize = 1000 //1000 people in a single division

export let MilitaryController = {
    //Statistics of how many reserve divisions each country has
    reserveArmies: new Map<string, number>(),
    //The queued divisions which still need to be trained
    trainingQueue: new Map<string, number>(),
    trainingRate: 1, //How many divisions to train per second

    //Queue up divisions to be trained
    train: (country:string, divisions: number) => {
        const currentDivisions = MilitaryController.trainingQueue.get(country) || 0
        MilitaryController.trainingQueue.set(country, currentDivisions + divisions)
    },

    getDivisions: (country: string) => {
        return MilitaryController.reserveArmies.get(country) || 0
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

        // for(let cid in MilitaryController.trainingQueue) {
        //     //Remove 1 division in trianing queue and add it to trained divisions.
        //     let toTrain = MilitaryController.trainingQueue.get(cid) || 0
        //     MilitaryController.trainingQueue.set(cid, toTrain - MilitaryController.trainingRate)
        //     let current = MilitaryController.reserveArmies.get(cid) || 0
        //     MilitaryController.reserveArmies.set(cid, current + MilitaryController.trainingRate)

        //     if(current - 1 == 0) {
        //         MilitaryController.trainingQueue.delete(cid)
        //     }
        // }
    }
}

//Train divisions ever second
setInterval(MilitaryController.trainTick, 1000)