import { child, get, onValue, ref, set } from "firebase/database"
import { db } from "./firebase"
import { mapBorders } from "./borders"

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

export class FirebaseMap<V> extends Map<string, V> {

    gameid: string
    path: string

    queue: {path: string, increment?: number, set?: any}[] = []

    constructor(path: string, callback?: () => void) {
        super()
        this.gameid = localStorage.getItem("currentGame")!
        this.path = path

        onValue(ref(db, `game/${this.gameid}/${path}`), x => {
            let val = x.val()
            for(let key in val) {
                super.set(key, val[key])
            }
            if(callback) callback()
        })
    }

    set(key: string, value: V): typeof this {
        super.set(key, value)
        set(ref(db, `game/${this.gameid}/${this.path}/${key}`), value)
        return this
    }

    increment(key: string, amount: number) {
        let current = super.get(key)! as number
        //@ts-ignore
        super.set(key, current + amount)

    }
}


export class FirebaseDoubleMap<V> extends Map<string, FirebaseMap<V>> {
    constructor(path: string, callback?: () => void) {
        super()
        
        for(let key in mapBorders) {
            this.set(key, new FirebaseMap<V>(`${path}/${key}`, callback))
        }
    }
}