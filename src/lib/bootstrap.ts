import { options } from "../lib/options";
import  {mapData } from "../lib/country-data"
import { mapBorders } from "../lib/borders"

let data = {}

let zoom: any = undefined
async function bootstrap() {
    data = mapData

    let map = await svgWorldMap(options, data);
    let mapContainer = document.querySelector("div#svg-world-map-container")
    mapContainer.style.width = "80%"
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
    return map
}

let countryID = "";
//@ts-ignore
window["mapClick"] = (path) => {
    countryID = path.country.id

    if (countryID == "Ocean" || countryID == "World") {
        countryID = ""
    }
}
export let map: any
async function main() {
    map = await bootstrap()
    console.log("Bootstrapped map")
}

main().then(() => console.log("Finished"))