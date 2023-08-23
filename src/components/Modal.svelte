<script>
    export let cancelFn
</script>

<div class="w-screen h-screen bg-black opacity-50 z-40 fixed top-0 left-0"></div>
<div class="w-[55%] bg-slate-200 h-[60%] rounded-xl z-50 opacity-100 fixed top-[50%] left-[50%] p-3 flex" style="transform: translate(-50%, -50%);">
    <slot />
    <button class="text-white text-lg bg-red-500 rounded-lg w-32 h-12 mt-auto" on:click={cancelFn}>
        Cancel
    </button>
</div>