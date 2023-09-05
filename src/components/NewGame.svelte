<script>
    let name = ""
    let maxPlayers = 2
</script>
<div class="flex flex-col p-10 items-center gap-5">
	<h1 class="text-white text-5xl text-center">Create New Game</h1>
    <h1 class="text-white text-2xl">Game Name</h1>
    <input bind:value={name} class="rounded-md w-96 h-10" />
    <h1 class="text-white text-2xl">Max players</h1>
    <input bind:value={maxPlayers} type="range" min="2" max="8" class="w-96 h-6" />
    <span class="text-white">{maxPlayers}</span>
    <button class="bg-blue-500 rounded-lg w-52 h-14 ">Create Game</button>
</div>