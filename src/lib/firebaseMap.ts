import { child, get, increment, onValue, ref, set } from "firebase/database"
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

    writeQueue: {key: string, increment?: number, set?: any}[] = []
    readQueue: string[] = []

    constructor(path: string, callback?: () => void) {
        super()
        this.gameid = localStorage.getItem("currentGame")!
        this.path = path

        get(child(ref(db), `game/${this.gameid}/${path}`)).then(x => {
            let val = x.val()
            for(let key in val) {
                super.set(key, val[key])
            }
        })

        onValue(ref(db, `game/${this.gameid}/${path}`), x => {
            this.readQueue.push(x.key!)
        })

        setInterval(() => {
            //Read all incoming reads
            for(let read of this.readQueue) {
                get(child(ref(db), `game/${this.gameid}/${this.path}/${read}`)).then(x => x.val())
                .then(val => super.set(read, val))
            }

            this.readQueue = []
            //Write all write queue
            for(let write of this.writeQueue) {
                if(write.set) {
                    set(ref(db, `game/${this.gameid}/${this.path}/${write.key}`), write.set)
                }
                else if(write.increment) {
                    set(ref(db, `game/${this.gameid}/${this.path}/${write.key}`), increment(write.increment))
                }
            }

            this.writeQueue = []
        },100)
    }

    set(key: string, value: V): typeof this {
        super.set(key, value)
        console.log(this.path, key, value)
        this.writeQueue.push({
            key,
            set: value
        })
        return this
    }

    increment(key: string, amount: number) {
        // console.log(this)
        // console.log(key)
        // console.trace()
        //return
        let current = super.get(key)! as number
        console.log(this.path, key, amount)
        //console.trace()
        //@ts-ignore
        super.set(key, current + amount)
        this.writeQueue.push({
            key,
            increment: amount
        })
        return this
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