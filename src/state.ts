export default class State {
    constructor(id: string) {
        const storage = this.parse();

        localStorage.setItem(`ntp-storage`, JSON.stringify({ ...storage, [id]: {} }))
    }

    private parse() {
        let raw: any = localStorage.getItem(`ntp-storage`);
        return JSON.parse(raw);
    }

    get(id: string) {
        
    }

    set(id: string, data: any) {

    }
}