import { options } from "../lib/options";
import  {getMapKeys, mapData } from "../lib/country-data"
import { mapBorders } from "../lib/borders"
import { OwnershipController } from "./ownership";

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
    map = await bootstrap()
    console.log("Bootstrapped map")
}