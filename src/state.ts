const defaultState = {
  slots: {},
  background: {
    provider: 'unsplash',
    src: ''
  }
};

export default class State {
  constructor() {
    const storage = this.parse();

    localStorage.setItem(
      `ntp-storage`,
      JSON.stringify({ ...storage, ...defaultState })
    );
  }

  public reset() {
    localStorage.setItem(`ntp-storage`, JSON.stringify({ ...defaultState }));
  }

  public parse(): any {
    try {
      const raw: any = localStorage.getItem(`ntp-storage`);
      return JSON.parse(raw);
    } catch (e) {
      console.log('Failed to parse ntp-storage');
      console.error(e);

      this.reset();
      return this.parse();
    }
  }

  get() {
    return this.parse();
  }

  set(data: any) {
    const storage = this.parse();
    const newStorage = data;

    console.log({ ...storage, ...newStorage });
    localStorage.setItem(
      `ntp-storage`,
      JSON.stringify({ ...storage, ...newStorage })
    );

    return data;
  }

  setSlot(
    id: string,
    slot:
      | 'top-left'
      | 'top-center'
      | 'top-right'
      | 'center-left'
      | 'center-center'
      | 'center-right'
      | 'bottom-left'
      | 'bottom-center'
      | 'bottom-right'
  ) {
    this.set({ slots: { [id]: slot } });

    return slot;
  }
}
