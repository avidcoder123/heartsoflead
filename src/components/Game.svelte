<script lang="ts">
    //import "../lib/svg-world-map";

    import { main } from "../lib/bootstrap"
    import { mapData } from "../lib/country-data";
    import { newBorders } from "../lib/newborders";
    import { PlayersController } from "../lib/player";
    import Menu from "./Menu.svelte";
    import Modal from "./Modal.svelte";

    let countryID = "";
    //@ts-ignore
    window["mapClick"] = (path) => {
        countryID = path.country.id

        if (countryID == "Ocean" || countryID == "World") {
            countryID = ""
        }
    }

    let tutorial = false


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
    <h1 class="text-white text-lg mt-3">Adjust tickspeed (Refreshes page!)</h1>
    <div class="flex flex-row gap-2 pt-2">
        <button class="w-20 h-10 rounded-md bg-cyan-500" on:click={() => document.location = "/game?tps=50"}>50tps</button>
        <button class="w-20 h-10 rounded-md bg-cyan-500" on:click={() => document.location = "/game?tps=100"}>100tps</button>
        <button class="w-20 h-10 rounded-md bg-cyan-500" on:click={() => document.location = "/game?tps=1000"}>1000tps</button>
    </div>
    <button class="w-36 rounded-md bg-cyan-500 h-12 mt-10" on:click={() => tutorial = true}>Tutorial</button>
    <h1 class="text-white text-lg mt-auto mb-5">
        Use WASD or drag mouse to pan the map.
        <br><br>
        Use - and = or the scroll wheel to zoom in/out.
    </h1>
</div>
{#if tutorial}
    <Modal cancelFn={() => tutorial = false}>
        <div class="flex flex-col">
            <h1 class="text-xl">Welcome to Hearts of Lead</h1><br>
            <p class="text-lg leading-8">
                Hearts of Lead is a game where you control a certain color of countries and try to take over the world.<br>
                In singleplayer, you control the dark blue countries. In multiplayer, check the side dashboard to see your color.<br><br>

                You can click a country to enter its menu. In the menu, you can see the country's working population. The working population is your population not in the military.<br>
                Your <b>reserve divisions</b> are the amount of divisions in your military which are not in combat.<br>
                Your <b>active divisions</b> are the divisions who are currently in combat. <br><br>

                Click the Military button on the menu to control your country's military. You can Train, Attack, or Maneuver.<br>
                <b>Training</b> allows you to recruit your working population into the military over time.<br>
                <b>Attacking</b> allows you to fight another country and take over another country. <br>
                <b>Maneuvering</b> allows you to slowly move troops from one country to an adjacent country which is owned by you.
            </p>
        </div>
    </Modal>
{/if}