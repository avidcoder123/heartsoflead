<script>
    import "../lib/svg-world-map";
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

        return await svgWorldMap(options, newdata);
    }

    async function main() {
        let map = await bootstrap()
        map.update({DE: "#000000"})
    }
    main().then(() => console.log("Finished"))
</script>
