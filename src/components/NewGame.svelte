<script lang="ts">
    import { child, increment, push, ref, set } from "firebase/database";
    import { db } from "../lib/firebase";
    import { getMapData, getMapKeys, mapData } from "../lib/country-data";

    let name = ""
    let maxPlayers = 2
    let speed = "normal"

    function submit() {
        if(name.length <= 0) return

        let id = Date.now()

        set(ref(db, `games/${id}/metadata`), {
            name,
            players: maxPlayers,
            speed: speed
        })
        .then(() => {
            for(let i = 1; i <= maxPlayers; i++) {
                set(ref(db, `games/${id}/players/${i}`), {
                    claimed: false
                })
            }
        })
        .then(() => {
            getMapKeys().map((key, idx) => {
                let population = getMapData(key).population
                let armies = Math.floor(
                    population *
                    1 /  
                    (30 * (Math.log(population) / Math.log(10)))
                    / 1000
                )

                let randomizer = Math.floor(Math.random() * maxPlayers)

                Promise.all([
                    set(ref(db, `games/${id}/data/reserveArmies/${key}`), armies),
                    set(ref(db, `games/${id}/data/population/${key}`), population),
                    set(ref(db, `games/${id}/data/population/${key}`), increment(-armies * 1000)),
                    set(ref(db, `games/${id}/data/returnQueue/${key}`), 0),
                    set(ref(db, `games/${id}/data/ownership/${key}`), ((idx+randomizer)%maxPlayers)+1)
                ]).then(()=>null)

                // MilitaryController.reserveArmies.set(key, armies)
                // PopulationController.decreasePopulation(key, armies * 1000)
                // MilitaryController.activeArmies.set(key, new Map())
                // MilitaryController.maneuverQueue.set(key, new Map())
                // MilitaryController.returnQueue.set(key, 0)
            })
        })
        .then(() => window.location.href = `login/?id=${id}`)
    }
</script>
<div class="flex flex-col p-10 items-center gap-5">
	<h1 class="text-white text-5xl text-center">Create New Game</h1>
    <h1 class="text-white text-2xl">Game Name</h1>
    <input bind:value={name} class="rounded-md w-96 h-10 p-1" />
    <h1 class="text-white text-2xl">Number of players</h1>
    <input bind:value={maxPlayers} type="range" min="2" max="8" class="w-96 h-6" />
    <span class="text-white text-xl">{maxPlayers} Players</span>
    <h1 class="text-white text-2xl">Game Speed</h1>
    <select class="w-54 h-8 p-1 rounded-md" bind:value={speed}>
        <option value="slow">Slow (50 tps)</option>
        <option value="normal">Normal (100 tps)</option>
        <option value="blitz">Blitzkrieg (1000tps)</option>
    </select>
    <button class="bg-blue-500 rounded-lg w-52 h-14" on:click={submit} disabled={name.length <= 0}>Create Game</button>
</div>