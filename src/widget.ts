import { ReactElement } from "react";
import { PLUGIN_ID_REGEX } from "./constants";
import { Settings } from "./settings";

interface IWidget {
    id: string;
    name: string;
    author: string;
    
    settings?: Settings;

    component: React.Component | any;
}

export class Widgets {
    static registeredWidgets: IWidget[] = []

    constructor() {}

    static registerWidget({ id, name, author, component }: IWidget) {
        if(!PLUGIN_ID_REGEX.test(id)) throw new Error("Plugin or widget ID is invalid.")

        const settings = new Settings({ id, name, author });

        this.registeredWidgets.push({ id, name, author, component, settings });

    }
}