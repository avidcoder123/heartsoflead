import { mapData } from "../lib/country-data";

export let PopulationController = {
    getPopulation(cid: string) {
        return (mapData as any)[cid]["population"] as number
    }
}