<script>
    //import "../lib/svg-world-map";
    import { options } from "../lib/options";

    async function bootstrap() {
        let res = await fetch("/worldmap/country-data.json");
        console.log(res);
        let data = await res.json();
        let newdata = {};
        for (let key in data) {
            newdata[key] = {
                name: data[key].name,
                population: data[key].population,
            };
        }

        let map = await svgWorldMap(options, newdata);
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
        map.update({US: "#200ac4"})
    }
    main().then(() => console.log("Finished"))
</script>

{#if countryID != undefined}
    <div class="w-screen h-36 bg-slate-600 fixed bottom-0 z-50"></div>
{/if}