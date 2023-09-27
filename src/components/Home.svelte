<script lang="ts">
    import { child, get, ref } from "firebase/database";
    import { db } from "../lib/firebase";

    let _games = get(child(ref(db), "game")).then(v => v.val())
    _games.then(console.log)


</script>

<div class="flex flex-col p-10 items-center gap-5">
    <h1 class="text-white text-5xl text-center">Hearts of Lead</h1>
    <div class="flex flex-row gap-5">
        <img src="https://d3i6fh83elv35t.cloudfront.net/newshour/app/uploads/2017/07/GettyImages-541320861-1024x683.jpg" class="h-72 rounded-xl">
    </div>
    <button class="bg-cyan-500 rounded-lg w-36 h-16" on:click={() => window.location.href = '/new'}>
        Create New Game
    </button>
    <hr>
    <h1 class="text-white text-2xl text-center">
        Join existing game
    </h1>
    {#await _games then games}
        {#each Object.keys(games) as game}
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="w-[50rem] h-24 bg-slate-600 rounded-lg justify-center items-center flex flex-row gap-5 cursor-pointer" on:click={() => window.location.href = "/login?id="+game}>
                <h1 class="text-white text-center text-3xl">{games[game].metadata.name}</h1>
                <h1 class="text-white text-center text-xl">Speed: {games[game].metadata.speed}</h1>
                <h1 class="text-white text-center text-xl">Players: {
                Object.keys(games[game].players).map(
                    k => games[game].players[k].claimed
                ).reduce((part, x) => part + (x ? 1 : 0))
                }/{games[game].metadata.players}</h1>
            </div>
        {/each}
    {/await}
</div>