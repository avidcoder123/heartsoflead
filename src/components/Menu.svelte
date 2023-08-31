<script lang="ts">
    import Modal from "./Modal.svelte";
    import { MilitaryController } from "../lib/military";
    import { PopulationController } from "../lib/population"
    import { getMapBorders } from "../lib/borders";
    import { getMapData } from "../lib/country-data";
    import { formatNumber } from "../lib/util";
    import { data } from "../lib/bootstrap";

    export let countryID = ""
    enum Page {
        Home,
        Military
    }

    let currentPage = Page.Home
    let toTrain = 0
    $: maxTrain = Math.floor((PopulationController.getPopulation(countryID) / 1000))
    let toAttack = ""
    let attackArmies = 0

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

    function launchAttack() {
        if(toAttack == "" || attackArmies == 0) return
        MilitaryController.deployDivisions(countryID, toAttack, Math.floor(attackArmies))
        toAttack = ""
        attackArmies = 0

        currentPage = Page.Home
    }

    //How many reserve divisions
    let resDivs = ""
    let actDivs = ""
    setInterval(() => {
        resDivs = formatNumber(MilitaryController.getDivisions(countryID)) 
        actDivs = formatNumber(MilitaryController.sumActive(countryID))
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
        <button class="text-white text-lg bg-cyan-600 rounded-lg w-36 h-16" on:click={() => currentPage=Page.Military}>
            Military
        </button>
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
                    {#each getMapBorders(countryID) as country}
                        <option value={country}>{getMapData(country).name}</option>
                    {/each}
                </select>
                <h1 class="text-lg">Deploy Divisions (Max {MilitaryController.getDivisions(countryID)})</h1>
                <input class="w-64 h-12 p-1 rounded-md" type="number" max={MilitaryController.getDivisions(countryID)} bind:value={attackArmies} on:input={() => validateAttack()}/>
                <button class="w-36 h-14 text-xl rounded-lg text-white bg-orange-500" on:click={() => launchAttack()}>
                    Attack!
                </button>
            </div>
        </Modal>
    {/if}
</div>