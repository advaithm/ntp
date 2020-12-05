import React from "react";

import { WidgetComponent, WidgetProps } from "..";
import { Attribution } from "../../components/types";
import { Widgets } from "../../src/widget";
import { StyledWidget } from "../style";

import Link from 'next/link'

import { SettingsBackground, SettingsContainer, SettingsDialog } from "./style";

export class Settings extends WidgetComponent {
    public constructor(props: any) {
        super(props);

        Widgets.registerWidget({
            id: "ntp.compass.settings",
            name: "Settings",
            author: "Dot HQ <contact@dothq.co>",
            component: this
        })
    }

    public render() {
        return (
            <StyledWidget visible={true} position={this.position}>
                <Link href={"/"}>
                    <SettingsBackground />
                </Link>
                <SettingsContainer>
                    <SettingsDialog />
                </SettingsContainer>
            </StyledWidget>
        );
    }
}
