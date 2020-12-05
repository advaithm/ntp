import { ReactElement } from "react";
import { WidgetComponent } from "../widgets";
import { PLUGIN_ID_REGEX } from "./constants";
import { Settings } from "./settings";

interface IWidget {
    id: string;
    name: string;
    author: string;
    
    settings?: Settings;

    component: WidgetComponent;
}

export class Widgets {
    static registeredWidgets: IWidget[] = []

    constructor() {}

    static registerWidget({ id, name, author, component }: IWidget) {
        if(!PLUGIN_ID_REGEX.test(id)) throw new Error("Plugin or widget ID is invalid.")

        const settings = new Settings({ id, name, author });

        component.id = id;
        component.name = name;
        component.author = author;

        this.registeredWidgets.push({ id, name, author, component, settings });

    }
}