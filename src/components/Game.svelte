<script lang="ts">
    //import "../lib/svg-world-map";

    import Menu from "./Menu.svelte";
    import { OwnershipController } from "../lib/ownership";
    import { main } from "../lib/bootstrap"

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
    <h1 class="text-white justify-center text-xl ">
        Side Dashboard
    </h1>
    <h1 class="text-white text-lg mt-auto mb-5">
        Use WASD or drag mouse to pan the map.
        <br><br>
        Use - and = or the scroll wheel to zoom in/out.
    </h1>
</div>