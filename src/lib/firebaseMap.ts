import { child, get, ref, set } from "firebase/database"
import { db } from "./firebase"

//Add firebase mapping object here
export class FirebaseMap <T> {
    public path = ""

    constructor(path: string, gameid: number) {
        this.path = `/games/${gameid}/data/${path}/`
    }

    async get(key: string) {
        const x = await get(child(ref(db), this.path + key))
        return x.val()
    }

    async set(key: string, value: T) {
        await set(ref(db, this.path + key), value)
    }

    async map(lambda: (value: any, index: number, array: any[]) => any) {
        let obj = await get(child(ref(db), this.path)).then(x => x.val())
        console.log(obj)
        const objectMap = (obj: any, fn: any) =>
        Object.fromEntries(
            Object.entries(obj).map(
            ([k, v], i) => [k, fn(v, k, i)]
            )
        )
        return objectMap(obj, lambda)
    }
}

export class FirebaseDoubleMap <T> {
    public path = ""

    constructor(path: string, gameid: number) {
        this.path = `/games/${gameid}/data/${path}/`
    }

    async get(key1: string, key2: string) {
        const x = await get(child(ref(db), this.path + `${key1}/${key2}`))
        return x.val()
    }

    async set(key1: string, key2: string, value: T) {
        await set(ref(db, this.path + `${key1}/${key2}`), value)
    }
}