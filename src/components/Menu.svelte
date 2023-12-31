<script lang="ts">
    import Modal from "./Modal.svelte";
    import { MilitaryController } from "../lib/military";
    import { PopulationController } from "../lib/population"
    import { getMapBorders } from "../lib/borders";
    import { getMapData } from "../lib/country-data";
    import { formatNumber } from "../lib/util";
    import { data } from "../lib/bootstrap";
    import { OwnershipController } from "../lib/ownership";
    import { PlayersController } from "../lib/player";

    export let countryID = ""
    enum Page {
        Home,
        Military
    }

    let currentPage = Page.Home
    let toTrain = 0
    let maxTrain = Math.floor((PopulationController.getPopulation(countryID) / 1000))
    let toAttack = ""
    let attackArmies = 0
    let toManeuver = ""
    let maneuverArmies = 0

    function validateDivisions() {
        if(toTrain < 0) {
            toTrain = 0
        } else if (toTrain > maxTrain) {
            toTrain = maxTrain
        }
    }

    function validateAttack() {
        if(attackArmies < 0) {
            attackArmies = 0
        } else if(attackArmies > MilitaryController.getDivisions(countryID)) {
            attackArmies = MilitaryController.getDivisions(countryID)
        }
    }

    function validateManeuver() {
        if(maneuverArmies < 0) {
            maneuverArmies = 0
        } else if(maneuverArmies > MilitaryController.getDivisions(countryID)) {
            maneuverArmies = MilitaryController.getDivisions(countryID)
        }
    }

    function launchAttack() {
        if(toAttack == "" || attackArmies == 0) return
        MilitaryController.deployDivisions(countryID, toAttack, Math.floor(attackArmies))
        toAttack = ""
        attackArmies = 0

        currentPage = Page.Home
    }

    function maneuverTroops() {
        if(toManeuver == "" || maneuverArmies == 0) return
        MilitaryController.maneuverDivisions(countryID, toManeuver, maneuverArmies)
        toManeuver = ""
        maneuverArmies = 0

        currentPage = Page.Home

    }

    //How many reserve divisions
    let resDivs = ""
    let actDivs = ""
    setInterval(() => {
        resDivs = formatNumber(MilitaryController.getDivisions(countryID)) 
        actDivs = formatNumber(MilitaryController.sumActive(countryID))
        maxTrain = Math.floor((PopulationController.getPopulation(countryID) / 1000))
    }, 100)
</script>

<h1 class="text-white justify-center text-xl">
    {data[countryID].longname} ({data[countryID].name})
    <br>
    Working Population: {formatNumber(PopulationController.getPopulation(countryID))}
    <br>
    Reserve Divisions: {resDivs}
    <br>
    Active divisions: {actDivs}
</h1>
<div class="flex flex-row gap-5">
    {#if currentPage == Page.Home}
        {#if OwnershipController.ownerOf(countryID) == PlayersController.currentPlayer}
            <button class="text-white text-lg bg-cyan-600 rounded-lg w-36 h-16" on:click={() => currentPage=Page.Military}>
                Military
            </button>
        {/if}
    {:else if currentPage == Page.Military}
        <Modal cancelFn={()=>{currentPage=Page.Home}}>
            <div class="flex flex-col gap-5">
                <h1 class="text-xl">Train divisions</h1>
                <input class="w-64 h-12 p-1 rounded-md" type="number" max={maxTrain} bind:value={toTrain} on:input={() => validateDivisions()}/>
                <h1 class="text-lg">{(toTrain || 0).toLocaleString()}/max {maxTrain.toLocaleString()} divisions <br> ({((toTrain || 0) * 1000).toLocaleString()} population used)</h1>
                <button class="w-48 h-16 text-xl rounded-lg text-white bg-green-500" on:click={() => {
                    MilitaryController.train(countryID, toTrain);
                    toTrain = 0;
                    currentPage = Page.Home;
                }}>
                    Queue Training
                </button>
            </div>
            <div class="flex flex-col gap-5">
                <h1 class="text-xl">Attack</h1>
                <select class="w-48 h-12 bg-white rounded-md" bind:value={toAttack}>
                    <option value="">Select A Country</option>
                    {#each (getMapBorders(countryID)||[]).filter(cid => OwnershipController.ownerOf(cid) != 0) as country}
                        <option value={country}>{getMapData(country).name}</option>
                    {/each}
                </select>
                <h1 class="text-lg">Deploy Divisions (Max {MilitaryController.getDivisions(countryID)})</h1>
                <input class="w-64 h-12 p-1 rounded-md" type="number" max={MilitaryController.getDivisions(countryID)} bind:value={attackArmies} on:input={() => validateAttack()}/>
                <button class="w-36 h-14 text-xl rounded-lg text-white bg-orange-500" on:click={() => launchAttack()}>
                    Attack!
                </button>
            </div>
            <div class="flex flex-col gap-5">
                <h1 class="text-xl">Maneuver</h1>
                <select class="w-48 h-12 bg-white rounded-md" bind:value={toManeuver}>
                    <option value="">Select A Country</option>
                    {#each (getMapBorders(countryID)||[]).filter(cid => OwnershipController.ownerOf(cid) == PlayersController.currentPlayer) as country}
                        <option value={country}>{getMapData(country).name}</option>
                    {/each}
                </select>
                <h1 class="text-lg">Maneuver Divisions (Max {MilitaryController.getDivisions(countryID)})</h1>
                <input class="w-64 h-12 p-1 rounded-md" type="number" max={MilitaryController.getDivisions(countryID)} bind:value={maneuverArmies} on:input={() => validateManeuver()}/>
                <button class="w-36 h-14 text-xl rounded-lg text-white bg-blue-500" on:click={() => maneuverTroops()}>
                    Maneuver
                </button>
            </div>
        </Modal>
    {/if}
</div>