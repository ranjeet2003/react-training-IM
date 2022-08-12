import React, { Component } from "react";

export default class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      int1: 0,
      int2: 0,
      result: 0,
    };
    // this.inputRef1 = React.createRef();
    // this.inputRef2 = React.createRef();
    this.onSubmitPlusHandler = this.onSubmitPlusHandler.bind(this);
    this.onSubmitMinusHandler = this.onSubmitMinusHandler.bind(this);
    this.onChange1 = this.onChange1.bind(this);
    this.onChange2 = this.onChange2.bind(this);
  }
  onChange1(e) {
    this.setState({
      int1: e.target.value,
    });
    // console.log;
  }
  onChange2(e) {
    this.setState({
      int2: e.target.value,
    });
  }
  onSubmitPlusHandler(e) {
    this.setState({
      result: parseInt(this.state.int1) + parseInt(this.state.int2),
    });
    console.log(this.state.result);
  }

  onSubmitMinusHandler(e) {
    this.setState({
      result: parseInt(this.state.int1) - parseInt(this.state.int2),
    });
    console.log(this.state.result);
  }
  render() {
    return (
      <div className=" justify-content-center mt-2">
        <div className="col-6">
          <input
            className="form-control border-warning"
            type="text"
            name="inp1"
            onChange={this.onChange1}
          />
          <br />
        </div>
        <div className="col-6">
          <input
            className="form-control border-warning"
            type="text"
            name="inp2"
            onChange={this.onChange2}
          />{" "}
          <br />
        </div>
        <div className="col-6">
          <button
            className="btn btn-outline-primary mt-2"
            type="submit"
            onClick={this.onSubmitPlusHandler}
          >
            +
          </button>
        </div>
        <br />
        <div className="col-6">
          <button
            className="btn btn-outline-danger mt-2"
            type="submit"
            onClick={this.onSubmitMinusHandler}
          >
            -
          </button>
        </div>
        <br />
        <h3>The Result is: {this.state.result}</h3>
      </div>
    );
  }
}
