import { getMapKeys } from "./country-data"
import { map } from "./bootstrap";
import { PlayersController } from "./player";
import { FirebaseMap } from "./firebaseMap";

export let OwnershipController = {
    ownershipMap: new FirebaseMap<number>("ownership", parseInt(localStorage.getItem("currentGame")!)),

    updateMapColor() {
        let colormap = ""
        OwnershipController.ownershipMap.map((owner, country) => {
            colormap += `"${country}": "#${PlayersController.colors[owner]}",`
            console.log(country, owner)
        }).then(
            () => (map as any).update(JSON.parse(`{${colormap.slice(0, -1)}}`))
        )
    },

    ownerOf(cid: string) {
        return this.ownershipMap.get(cid)!
    },

    async giveOwnership(cid: string, player: number) {
        await OwnershipController.ownershipMap.set(cid, player)
        try {
            OwnershipController.updateMapColor()
        } catch(e) {
            console.log(e)
        }
    }
}
