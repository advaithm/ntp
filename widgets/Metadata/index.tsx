import React from "react";

import { WidgetComponent, WidgetProps } from "..";
import { Attribution } from "../../components/types";
import { Widgets } from "../../src/widget";
import { StyledWidget } from "../style";

import { AttributionText, Geolocation } from "./style";

export class Metadata<Props> extends WidgetComponent {
    public props: any = {
        attribution: null,
        actions: []
    }

    public constructor(props: Props) {
        super(props);

        Widgets.registerWidget({
            id: "co.dothq.unsplashmetadata",
            name: "Unsplash Metadata",
            author: "Dot HQ <contact@dothq.co>",
            component: this
        })
    }

    public render() {
        const { attribution, actions } = this.props;

        return (
            <StyledWidget visible={!!attribution} position={this.position}>
                <div onMouseEnter={() => actions[0](true)} onMouseLeave={() => actions[0](false)}>
                    {attribution && <AttributionText>
                        <a target={"__blank"} href={attribution.p}>Photo</a> by <a target={"__blank"} href={`https://unsplash.com/@${attribution.usn}`}>{attribution.n}</a> on <a target={"__blank"} href={`https://unsplash.com`}>Unsplash</a>
                    </AttributionText>}

                    {(attribution && attribution.l) && <Geolocation>
                        <a style={{ cursor: "pointer" }}>{attribution.l}</a>
                    </Geolocation>}
                </div>
            </StyledWidget>
        );
    }
}
