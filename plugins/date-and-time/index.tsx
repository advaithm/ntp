import React from "react";
import { StyledTime } from "./style";

class Time extends React.Component {
    public state = { time: "" }

    componentDidMount() {
        const tick = () => {
            const d = new Date();

            this.setState({ time: `${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}` })
        }

        tick();

        setInterval(tick, 995) // 995? Better than 500 that's for sure.
    }

    render() {
        return (
            <StyledTime>{this.state.time}</StyledTime>
        )
    }
}

export default Time;
