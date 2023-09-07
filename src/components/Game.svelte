<script lang="ts">
    //import "../lib/svg-world-map";

    import { main } from "../lib/bootstrap"
    import { mapData } from "../lib/country-data";
    import { newBorders } from "../lib/newborders";
    import { PlayersController } from "../lib/player";
    import Menu from "./Menu.svelte";

    let countryID = "";
    //@ts-ignore
    window["mapClick"] = (path) => {
        countryID = path.country.id

        if (countryID == "Ocean" || countryID == "World") {
            countryID = ""
        }
    }






    main().then(() => console.log("Bootstrapped"))
</script>

<div class="w-screen h-[20%] bg-slate-600 fixed bottom-0 z-30 p-10 flex flex-row gap-5">

    {#if countryID != ""}
        <Menu {countryID} />
    {:else}
        <h1 class="text-xl text-white">Click on a country to access its menu</h1>
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