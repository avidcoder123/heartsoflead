<script>
    //import "../lib/svg-world-map";
    import { options } from "../lib/options";
    import  {mapData } from "../lib/country-data"
    import { mapBorders } from "../lib/borders"
    import { formatNumber } from "../lib/util";

    let data = {}


    async function bootstrap() {
        data = mapData

        let map = await svgWorldMap(options, data);
        document.querySelector("div#svg-world-map-container").style.width = "80%"
        svgPanZoom(map.worldMap)
        return map
    }

    let countryID = undefined;

    window.mapClick = path => {
        countryID = path.country.id

        if (countryID === "Ocean" || countryID === "World") {
            countryID = undefined
        }
    }

    async function main() {
        let map = await bootstrap()
        console.log("Bootstrapped map")
        map.update({US: "#200ac4", CA: "#200ac4", MX: "#200ac4"})
    }
    main().then(() => console.log("Finished"))
</script>

<div class="w-screen h-[20%] bg-slate-600 fixed bottom-0 z-50 p-10">
    <h1 class="text-white justify-center text-xl ">
        {#if countryID != undefined}
            {data[countryID].longname} ({data[countryID].name})
            <br>
            Population: {formatNumber(data[countryID].population)}
        {:else}
            The World
            <br>
            Population: {formatNumber(data["World"].population)}
        {/if}
    </h1>
</div>
<div class="h-[80%] w-[20%] bg-slate-800 fixed top-0 right-0 z-50 p-10">
    <h1 class="text-white justify-center text-xl ">
        Side Dashboard
    </h1>
</div>