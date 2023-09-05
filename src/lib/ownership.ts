import { getMapKeys } from "./country-data"
import { map } from "./bootstrap";

export let OwnershipController = {
    ownershipMap: new Map<string, number>(),

    //Max 8 players
    colors: ["200ac4", "20ab45", "edb724", "ed8524", "14b8a2", "6e14b8", "b81471", "035e26"],

    updateMapColor() {
        let colormap = ""
        OwnershipController.ownershipMap.forEach((owner, country) => {
            colormap += `"${country}": "#${OwnershipController.colors[owner]}",`
        })

        ;(map as any).update(JSON.parse(`{${colormap.slice(0, -1)}}`))
    },

    ownerOf(cid: string) {
        return this.ownershipMap.get(cid)!
    },

    giveOwnership(cid: string, player: number) {
        OwnershipController.ownershipMap.set(cid, player)
        console.log(map)
        try {
            OwnershipController.updateMapColor()
        } catch(e) {
            console.log(e)
        }
    }
}
