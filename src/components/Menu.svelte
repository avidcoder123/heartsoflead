<script lang="ts">
    let countryID: string = ""
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
        <div class="w-screen h-screen bg-black opacity-50 z-40 fixed top-0 left-0"></div>
            <div class="w-96 h-96 bg-white rounded-xl z-50 opacity-100 fixed top-[50%] left-[50%]" style="transform: translate(-50%, -50%);">
                <h1>Among us haiwan</h1>
            </div>
    {/if}
</div>