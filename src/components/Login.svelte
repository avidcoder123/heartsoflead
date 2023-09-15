<script lang="ts">
    import { db } from "../lib/firebase";
    import { child, ref, get, set } from "firebase/database";

    let id = parseInt((new URLSearchParams(window.location.search)).get("id")!)

    let numPlayers = 0
    let playersList: any[] = []

    get(child(ref(db), `games/${id}/players`))
    .then(snap => snap.val())
    .then(val => {
        numPlayers = val.length - 1
        playersList = new Array(...val).slice(1)
        claimedList = playersList.map(x => x.claimed)
    })

    let username = ""
    let password = ""
    let playerID = 0

    let claimedList: boolean[] = []

    setInterval(() => {
        console.log(        !(claimedList[playerID] && password.length > 0) ||
        !(!claimedList[playerID] && username.length > 0 && password.length > 0))

    }, 1000)

    async function login() {
        console.log(playerID)
        if(claimedList[playerID]) {
            let player = (await get(child(ref(db), `/games/${id}/players/${playerID + 1}`))).val()
            if(player.password == password) {
                localStorage.setItem(id.toString(), (playerID + 1).toString())
                window.location.href = `/game?id=${id}`
            }
        } else {
            await set(ref(db, `/games/${id}/players/${playerID + 1}`), {
                claimed: true,
                username,
                password
            })
            localStorage.setItem(id.toString(), (playerID + 1).toString())
            window.location.href = `/game?id=${id}`
        }
    }

</script>
<div class="flex flex-col p-10 items-center gap-5">
	<h1 class="text-white text-5xl text-center">Select Player</h1>
    <h1 class="text-white text-2xl">Choose Player</h1>
    <select class="w-54 h-8 p-1 rounded-md" bind:value={playerID}>
        {#each playersList as player, x}
            <option value={x}>{player.username || "<Unclaimed>"}</option>
        {/each}
    </select>
    {#if !claimedList[playerID] || false}
        <h1 class="text-white text-2xl">Set Username</h1>
        <input bind:value={username} class="rounded-md w-96 h-10 p-1" />
    {/if}
    <h1 class="text-white text-2xl">Password</h1>
    <input bind:value={password} type="password" class="rounded-md w-96 h-10 p-1" />
    <button class="bg-blue-500 rounded-lg w-52 h-14" on:click={() => login().then(() => null)} disabled={
        !(claimedList[playerID] && password.length > 0) ||
        !(!claimedList[playerID] && username.length > 0 && password.length > 0)
    }>Create Game</button>
</div>