import React, { Component } from "react";

export class DigitalClock extends Component {
  constructor(props) {
    super(props);
    this.state = { time: "" };
  }
  componentDidMount() {
    this.tick();
  }
  tick() {
    const hrs = new Date().getHours();
    const mins = new Date().getMinutes();
    const seco = new Date().getSeconds();
    const uptime = `${hrs}:${mins}:${seco}`;
    this.setState({ time: uptime });
  }
  componentDidUpdate(prevState) {
    console.log("prevState time=", prevState.time);
    console.log(this.state.time);
    if (this.state.time !== prevState.time) {
      setInterval(() => {
        this.tick();
      }, 1000);
    }
  }

  render() {
    return <div>{this.state.time}</div>;
  }
}
export default DigitalClock;
