import { options } from "../lib/options";
import  {getMapData, getMapKeys, mapData } from "../lib/country-data"
import { mapBorders } from "../lib/borders"
import { OwnershipController } from "./ownership";
import { MilitaryController } from "./military";
import { PopulationController } from "./population";

export let data: any = {}

let zoom: any = undefined

export let map = {} as any

async function bootstrap() {
    data = mapData
    map = await svgWorldMap(options, data);
    let mapContainer = document.querySelector("div#svg-world-map-container")
    //@ts-ignore
    mapContainer.style.width = "80%"
    //@ts-ignore
    zoom = svgPanZoom(map.worldMap)

    window.addEventListener("keydown", e => {
        const panSpeed = 20
        switch (e.key) {
            case "=":
                zoom.zoomBy(1.1)
                break
            case "-":
                zoom.zoomBy(0.9)
                break
            case "w":
                zoom.panBy({y: panSpeed, x: 0})
                break
            case "s":
                zoom.panBy({y: -panSpeed, x: 0})
                break
            case "a":
                zoom.panBy({y: 0, x: panSpeed})
                break
            case "d":
                zoom.panBy({y: 0, x: -panSpeed})
                break
        }
    })
    getMapKeys().map(id => {
        //Randomize territories
        OwnershipController.giveOwnership(id, Math.floor(Math.random() * 8))
    })


    return map
}

export async function main() {
    let tickSpeed = 100
    let tps = parseInt((new URLSearchParams(window.location.search)).get("tps")!) || 100
    if (tps == 100 || tps == 1000 || tps == 50) {
        tickSpeed = tps
    }

    map = await bootstrap()
    console.log("Bootstrapped map")

    getMapKeys().map(key => {
        MilitaryController.reserveArmies.set(key, Math.floor(getMapData(key).population * 0.05 / 1000))
        PopulationController.decreasePopulation(key, getMapData(key).population * 0.05)
        MilitaryController.activeArmies.set(key, new Map())
        MilitaryController.maneuverQueue.set(key, new Map())
        MilitaryController.returnQueue.set(key, 0)
    })

    //Train divisions ever second
    setInterval(() => {
        MilitaryController.trainTick()
        MilitaryController.militaryTick()
        MilitaryController.maneuverTick()
        MilitaryController.returnTick()
    }, 1000/tickSpeed)
}