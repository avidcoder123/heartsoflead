
const divisionSize = 1000 //1000 people in a single division

export let MilitaryController = {
    //Statistics of how many reserve divisions each country has
    reserveArmies: new Map<string, number>(),
    //The queued divisions which still need to be trained
    trainingQueue: new Map<string, number>(),
    trainingRate: 1, //How many divisions to train per second

    //Queue up divisions to be trained
    train(country:string, divisions: number) {
        const currentDivisions = this.trainingQueue.get(country) || 0
        this.trainingQueue.set(country, currentDivisions + divisions)
    },

    getDivisions(country: string) {
        return this.reserveArmies.get(country) || 0
    },

    //Process to run every second to train divisions
    trainTick() {
        for(const cid in this.trainingQueue.keys()) {
            //Remove 1 division in trianing queue and add it to trained divisions.
            let toTrain = this.trainingQueue.get(cid) || 0
            this.trainingQueue.set(cid, toTrain - this.trainingRate)
            let current = this.reserveArmies.get(cid) || 0
            this.reserveArmies.set(cid, current + this.trainingRate)

            if(current - 1 == 0) {
                this.trainingQueue.delete(cid)
            }
        }
    }
}

//Train divisions ever second
setInterval(MilitaryController.trainTick, 1000)