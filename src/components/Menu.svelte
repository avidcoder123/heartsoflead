<script lang="ts">
    import Modal from "./Modal.svelte";

    export let countryID: string = ""
    enum Page {
        Home,
        Military
    }

    let currentPage = Page.Home
</script>
<div class="flex flex-row gap-5">
    {#if currentPage == Page.Home}
        <button class="text-white text-lg bg-cyan-600 rounded-lg w-36 h-16" on:click={() => currentPage=Page.Military}>
            Military
        </button>
    {:else if currentPage == Page.Military}
        <Modal cancelFn={()=>{currentPage=Page.Home}}>

        </Modal>
    {/if}
</div>