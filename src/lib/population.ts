import { ref, runTransaction } from "firebase/database";
import { getMapKeys, mapData } from "../lib/country-data";
import { FirebaseMap } from "./firebaseMap";
import { db } from "./firebase";

export let PopulationController = {
    population: new FirebaseMap<number>("data/population"),

    getPopulation(cid: string) {
        return PopulationController.population.get(cid)!
    },

    addPopulation(cid: string, amount: number) {
        PopulationController.population.increment(cid, Math.floor(amount))
    },

    decreasePopulation: (cid: string, amount: number) => PopulationController.addPopulation(cid, -amount)
}

// for(let cid of getMapKeys()) {
//     PopulationController.population.set(cid, mapData[cid as keyof typeof mapData].population)
// }