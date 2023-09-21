import { child, get, onValue, ref, set } from "firebase/database"
import { db } from "./firebase"
import { K } from "../../dist/_astro/firebase.2db194f0"

//TODO: Make firebasemap simply sync map to firebase instead of replacing the entire object
// export class FirebaseMap <T> {
//     public path = ""

//     constructor(path: string, gameid: number) {
//         this.path = `/games/${gameid}/data/${path}/`
//     }

//     async get(key: string) {
//         const x = await get(child(ref(db), this.path + key))
//         return x.val()
//     }

//     async set(key: string, value: T) {
//         await set(ref(db, this.path + key), value)
//     }

//     async map(lambda: (value: any, index: number, array: any[]) => any) {
//         let obj = await get(child(ref(db), this.path)).then(x => x.val())
//         console.log(obj)
//         const objectMap = (obj: any, fn: any) =>
//         Object.fromEntries(
//             Object.entries(obj).map(
//             ([k, v], i) => [k, fn(v, k, i)]
//             )
//         )
//         return objectMap(obj, lambda)
//     }
// }

export function FirebaseMap<K,V>(gameid: string, path: string, callback?: () => void): Map<K, V> {
    let map = new Map<K, V>()
    onValue(ref(db, `game/${gameid}/${path}`), x => {
        let val = x.val()
        for(let key in val) {
            map.set(key as K, val[key])
        }
        if(callback) callback()
    })

    map.set = (key: K, value: V) => {
        map.set(key, value)
        //TODO: sync set with firebase
        return map
    }
    return map
}

export class FirebaseDoubleMap <T> {
    public path = ""

    constructor(path: string, gameid: number) {
        this.path = `/game/${gameid}/data/${path}/`
    }

    async get(key1: string, key2: string) {
        const x = await get(child(ref(db), this.path + `${key1}/${key2}`))
        return x.val()
    }

    async set(key1: string, key2: string, value: T) {
        await set(ref(db, this.path + `${key1}/${key2}`), value)
    }
}