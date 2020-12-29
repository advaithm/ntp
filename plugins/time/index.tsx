import React from "react";
import ReactDOM from "react-dom";

class Time extends React.Component {
    public state = ""

    componentDidMount() {
        setInterval(() => {
            const d = new Date();

            this.setState(`${d.getHours()}:${d.getMinutes()}`)
        }, 500)
    }

    render() {
        return (
            <time>{this.state}</time>
        )
    }
}

// export default Time;