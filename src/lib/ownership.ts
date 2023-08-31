import { getMapKeys } from "./country-data"
import { map } from "./bootstrap";

export let OwnershipController = {
    ownershipMap: new Map<string, number>(),

    giveOwnership(cid: string, player: number) {
        OwnershipController.ownershipMap.set(cid, player)
        //;(map as any).update({US: "#200ac4"})
    }
}

getMapKeys().map(id => {
    //Give all territories to player 1
    OwnershipController.giveOwnership(id, 1)
})

//Give player 1 access to USA
OwnershipController.giveOwnership("US", 0)