export default class State {
    constructor() {
        const storage = this.parse();

        localStorage.setItem(`ntp-storage`, JSON.stringify({ ...storage, slots: {} }))
    }

    public parse() {
        let raw: any = localStorage.getItem(`ntp-storage`);
        return JSON.parse(raw);
    }

    get() {
        return this.parse();
    }

    set(data: any) {
        const storage = this.parse();
        const newStorage = data;

        localStorage.setItem(`ntp-storage`, JSON.stringify({ ...storage, ...newStorage }));

        return data;
    }

    setSlot(
        id: string, 
        slot: 'top-left' | 
              'top-center' | 
              'top-right' | 
              'center-left' | 
              'center-center' | 
              'center-right' | 
              'bottom-left' |
              'bottom-center' |
              'bottom-right'
    ) {
        this.set({ slots: { [id]: slot } });

        return slot;
    }
}