import { child, get, ref } from "firebase/database"
import { db } from "./firebase"

//Add firebase mapping object here
class FirebaseMap {
    public path = ""

    constructor(path: string, gameid: number) {
        this.path = `/game/${gameid}/data/${path}/`
    }

    get(key: string) {
        get(child(ref(db), this.path + key))
    }
}