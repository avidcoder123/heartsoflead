//Add firebase mapping object here
class FirebaseMap {
    public path = ""

    constructor(path: string, gameid: number) {
        this.path = `/game/${gameid}/data/${path}`
    }

    
}