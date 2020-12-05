import React from "react";

import { WidgetComponent, WidgetProps } from "..";
import { Widgets } from "../../src/widget";
import { StyledWidget } from "../style";

import { StyledTime } from "./style";

export class Time<WidgetProps> extends WidgetComponent {
    private timeIntervalId: number | undefined;

    public state = {
        time: ''
    }

    public constructor(props: WidgetProps) {
        super(props);

        Widgets.registerWidget({
            id: "co.dothq.time",
            name: "Time",
            author: "Dot HQ <contact@dothq.co>",
            component: this
        })
    }

    public componentDidMount() {
        this.tick()
        this.timeIntervalId = setInterval(() => this.tick(), 500);
    }

    public componentWillUnmount() {
        clearInterval(this.timeIntervalId);
    }

    public tick() {
        const d = new Date();
	
        const getH = () => {
            return d.getHours().toString().length == 1 ? "0" + d.getHours() : d.getHours()
        }

        const getM = () => {
            return d.getMinutes().toString().length == 1 ? "0" + d.getMinutes() : d.getMinutes()
        }

        const getS = () => {
            return d.getSeconds().toString().length == 1 ? "0" + d.getSeconds() : d.getSeconds()
        }

        this.setState({ time: [getH(), getM(), getS()].join(":") })
    }

    public render() {
        return (
            <StyledWidget visible={true} position={this.position}>
                <StyledTime>
                    {this.state.time}
                </StyledTime>
            </StyledWidget>
        );
    }
}
