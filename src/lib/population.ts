import { getMapKeys, mapData } from "../lib/country-data";

export let PopulationController = {
    population: new Map<string, number>(),

    getPopulation(cid: string) {
        return PopulationController.population.get(cid)!
    },

    addPopulation(cid: string, amount: number) {
        let current = PopulationController.population.get(cid)!
        PopulationController.population.set(cid, current + Math.floor(amount))
    },

    decreasePopulation: (cid: string, amount: number) => PopulationController.addPopulation(cid, -amount)
}

for(let cid of getMapKeys()) {
    PopulationController.population.set(cid, mapData[cid as keyof typeof mapData].population)
}