<script lang="ts">
    //import "../lib/svg-world-map";

    import { main } from "../lib/bootstrap"
    import { PlayersController } from "../lib/playercontroller";
    import { newBorders } from "../lib/newborders";
    import { mapData } from "../lib/country-data";
    import { options } from "../lib/options";

    let countryID = "";
    //@ts-ignore
    window["mapClick"] = (path) => {
        countryID = path.country.id

        if (countryID == "Ocean" || countryID == "World") {
            countryID = ""
        }
    }

    let nextTask = ""


    function taskNext() {
        for(let key in newBorders) {
            if(newBorders[key as keyof typeof newBorders].length == 0) {
                
                (map as any).update(JSON.parse(`{"${key}":"#ff0000"}`))
                console.log(key)
                nextTask = mapData[key as keyof typeof mapData].name as string
                break
            }
        }
    }
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


    return map
    }
    bootstrap().then(()=>taskNext())
</script>

<div class="w-screen h-[20%] bg-slate-600 fixed bottom-0 z-30 p-10 flex flex-row gap-5">

    {#if countryID != ""}
        <h1 class="text-xl text-white">{countryID}</h1>
    {:else}
        <h1 class="text-xl text-white">{nextTask}</h1>
    {/if}
</div>
<div class="h-[80%] w-[20%] bg-slate-800 fixed top-0 right-0 z-30 p-10 flex flex-col">
    <span class="text-white text-xl mt-3 flex flex-row items-center gap-2">
        You are 
        <div class="h-4 w-4 border-white border-2" style={`background-color:#${PlayersController.colors[PlayersController.currentPlayer]};`}></div>
         {PlayersController.colorNames[PlayersController.currentPlayer]}
    </span>
    <div class="flex flex-col gap-2 pt-2">
    </div>
    
    <h1 class="text-white text-lg mt-auto mb-5">
        Use WASD or drag mouse to pan the map.
        <br><br>
        Use - and = or the scroll wheel to zoom in/out.
    </h1>
</div>