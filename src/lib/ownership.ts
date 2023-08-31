import { getMapKeys } from "./country-data"
import { map } from "./bootstrap";

export let OwnershipController = {
    ownershipMap: new Map<string, number>(),

    giveOwnership(cid: string, player: number) {
        OwnershipController.ownershipMap.set(cid, player)
        console.log(map)
        try {
            (map as any).update({US: "#200ac4"})
        } catch(e) {
            console.log(e)
        }
    }
}

// getMapKeys().map(id => {
//     //Give all territories to player 1
//     OwnershipController.giveOwnership(id, 1)
// })

let colormap = ""
colormap += '"US": "#200ac4",'
colormap += '"IN": "#200ac4",'
colormap += '"RU": "#200ac4",'

setTimeout(() => (map as any).update(JSON.parse(`{${colormap.slice(0, -1)}}`)), 2000)