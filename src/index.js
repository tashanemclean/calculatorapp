import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import * as math from "mathjs";

import Button from "./button.js";
import Input from "./input";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      ops: [
        ["7", "8", "9", "/"],
        ["4", "5", "6", "*"],
        ["1", "2", "3", "+"],
        ["^", "0", ".", "-"]
      ]
    };
  }

  handleChange = val => {
    this.setState({
      input: this.state.input + val
    });
  };

  handleEqual = () => {
    this.setState({
      input: math.eval(this.state.input)
    });
  };

  renderBtns = () => {
    return this.state.ops.map(row => {
      return (
        <div className="row">
          {row.map(digit => {
            return <Button handleClick={this.handleChange}>{digit}</Button>;
          })}
        </div>
      );
    });
  };

  render() {
    return (
      <div className="app">
        <Input input={this.state.input} />
        {this.renderBtns()}
        <div className="row">
          <Button
            label="clear-btn"
            handleClick={() => this.setState({ input: "" })}
          >
            <i class="fas fa-eraser" />
          </Button>
          <Button label="equal" handleClick={this.handleEqual}>
            =
          </Button>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
