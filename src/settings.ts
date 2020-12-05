import { PLUGIN_AUTHOR_REGEX, PLUGIN_ID_REGEX, PLUGIN_NAME_REGEX } from "./constants";

export class Settings {
    private id: string;

    constructor({ id, name, author }: { id: string, name: string, author: string }) {
        if(!PLUGIN_ID_REGEX.test(id)) throw new Error("Plugin or widget ID is invalid.")
        if(!PLUGIN_NAME_REGEX.test(name)) throw new Error("Plugin or widget name is invalid.")
        if(!PLUGIN_AUTHOR_REGEX.test(author)) throw new Error("Plugin or widget author is invalid.")

        this.id = id;

        localStorage.setItem(`widget-${id}`, JSON.stringify({
            id: id,
            data: {}
        }))
    }

    private get(key?: string) {
        const data = localStorage.getItem(`widget-${this.id}`)

        if(!data || (JSON.parse(data) && JSON.parse(data).id !== this.id) || (key && typeof(JSON.parse(data)[key]) == "undefined")) throw new Error("Malformed data.")
    
        return JSON.parse(data);
    }

    public getItem(key: string) {
        return this.get(key)[key];
    }

    public setItem(key: string, value: string) {
        const item = this.get(key);

        item.data[key] = value;

        localStorage.setItem(`widget-${this.id}`, JSON.stringify(item));
    }
}