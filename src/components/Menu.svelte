<script lang="ts">
    import Modal from "./Modal.svelte";
    import { MilitaryController } from "../lib/military";
    import { PopulationController } from "../lib/population"

    export let countryID: string = ""
    enum Page {
        Home,
        Military
    }

    let currentPage = Page.Home
    let toTrain = 0
    let maxTrain = Math.floor((PopulationController.getPopulation(countryID) / 1000) - MilitaryController.getDivisions(countryID))

    function validateDivisions() {
        if(toTrain < 0) {
            toTrain = 0
        } else if (toTrain > maxTrain) {
            toTrain = maxTrain
        }
    }
</script>
<div class="flex flex-row gap-5">
    {#if currentPage == Page.Home}
        <button class="text-white text-lg bg-cyan-600 rounded-lg w-36 h-16" on:click={() => currentPage=Page.Military}>
            Military
        </button>
    {:else if currentPage == Page.Military}
        <Modal cancelFn={()=>{currentPage=Page.Home}}>
            <h1 class="text-xl">Train divisions</h1>
            <input class="w-64 h-12 p-1 rounded-md" type="number" min={0} max={maxTrain} bind:value={toTrain} on:input={() => validateDivisions()}/>
            <h1 class="text-lg">{(toTrain || 0).toLocaleString()}/max {maxTrain.toLocaleString()} divisions ({((toTrain || 0) * 1000).toLocaleString()} population used)</h1>
        </Modal>
    {/if}
</div>