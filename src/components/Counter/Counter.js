import React, { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }
  onClickPlusHandler() {
    this.setState({ value: this.state.value + 5 });
  }
  onClickMinusHandler() {
    this.setState({ value: this.state.value - 5 });
  }
  render() {
    return (
      <div>
        <h2 className="text-success">
          The Current Value is: {this.state.value}
        </h2>
        <button
          className="btn btn-outline-primary"
          onClick={this.onClickPlusHandler.bind(this)}
        >
          +5
        </button>
        <br />
        <button
          className="btn btn-outline-danger"
          onClick={this.onClickMinusHandler.bind(this)}
        >
          -5
        </button>
      </div>
    );
  }
}
