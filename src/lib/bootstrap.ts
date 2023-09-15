import { options } from "../lib/options";
import  {getMapData, getMapKeys, mapData } from "../lib/country-data"
import { mapBorders } from "../lib/borders"
import { OwnershipController } from "./ownership";
import { MilitaryController } from "./military";
import { PopulationController } from "./population";
import { child, get, ref } from "firebase/database";
import { db } from "./firebase";

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
    let id = parseInt((new URLSearchParams(window.location.search)).get("id")!)

    if (!id) {
        window.location.href = ""
    }
    let gameData = (await get(child(ref(db), `games/${id}/metadata`))).val()
    
    let tickSpeed = ({
        "slow": 50,
        "normal": 100,
        "blitzkrieg": 1000
    } as any)[gameData.speed] as number

    map = await bootstrap()
    console.log("Bootstrapped map")

    getMapKeys().map(key => {
        let population = getMapData(key).population
        let armies = Math.floor(
            population *
            1 /  
            (30 * (Math.log(population) / Math.log(10)))
             / 1000
        )
        MilitaryController.reserveArmies.set(key, armies)
        PopulationController.decreasePopulation(key, armies * 1000)
        MilitaryController.activeArmies.set(key, new Map())
        MilitaryController.maneuverQueue.set(key, new Map())
        MilitaryController.returnQueue.set(key, 0)
    })

    const trainSkips = 1 //Magnitude of training slowdown
    let skips = 0
    //Train divisions ever second
    setInterval(() => {
        skips++
        if(skips % trainSkips == 0) MilitaryController.trainTick() // Train armies every 100 ticks
        MilitaryController.militaryTick()
        MilitaryController.maneuverTick()
        MilitaryController.returnTick()
    }, 1000/tickSpeed)
}