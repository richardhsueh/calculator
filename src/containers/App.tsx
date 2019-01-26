import React, { Component } from "react";
import "./App.scss";

interface State {
  firstNum: string;
  secondNum: string;
  currentOperator: string;
  previousKeyType: "" | "number" | "operator";
}

class App extends Component {
  state = {
    firstNum: "0",
    secondNum: "0",
    currentOperator: "",
    previousKeyType: ""
  };
  render() {
    const { firstNum, secondNum, currentOperator } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <div className="calculator__container">
            <div className="calculator__screen">
              <input type="text" value={firstNum} readOnly />
            </div>
            <div className="calculator__control">
              <button
                type="button"
                className="function"
                onClick={this.onActionClick}
                data-action="clear"
              >
                {firstNum === "0" && secondNum === "" ? "AC" : "C"}
              </button>
              <button
                type="button"
                className="function"
                onClick={this.onActionClick}
                data-action="alt"
              >
                +/-
              </button>
              <button
                type="button"
                className="function"
                onClick={this.onActionClick}
                data-action="percentage"
              >
                %
              </button>
              <button
                type="button"
                className={`operator  ${currentOperator === "divide" &&
                  "active"}`}
                onClick={this.onActionClick}
                data-action="divide"
              >
                &divide;
              </button>
              <button
                type="button"
                className="number"
                onClick={this.onNumberClick}
                value={7}
              >
                7
              </button>
              <button
                type="button"
                className="number"
                onClick={this.onNumberClick}
                value={8}
              >
                8
              </button>
              <button
                type="button"
                className="number"
                onClick={this.onNumberClick}
                value={9}
              >
                9
              </button>
              <button
                type="button"
                className={`operator ${currentOperator === "times" &&
                  "active"}`}
                onClick={this.onActionClick}
                data-action="times"
              >
                &times;
              </button>
              <button
                type="button"
                className="number"
                onClick={this.onNumberClick}
                value={4}
              >
                4
              </button>
              <button
                type="button"
                className="number"
                onClick={this.onNumberClick}
                value={5}
              >
                5
              </button>
              <button
                type="button"
                className="number"
                onClick={this.onNumberClick}
                value={6}
              >
                6
              </button>
              <button
                type="button"
                className={`operator ${currentOperator === "minus" &&
                  "active"}`}
                onClick={this.onActionClick}
                data-action="minus"
              >
                -
              </button>
              <button
                type="button"
                className="number"
                onClick={this.onNumberClick}
                value={1}
              >
                1
              </button>
              <button
                type="button"
                className="number"
                onClick={this.onNumberClick}
                value={2}
              >
                2
              </button>
              <button
                type="button"
                className="number"
                onClick={this.onNumberClick}
                value={3}
              >
                3
              </button>
              <button
                type="button"
                className={`operator ${currentOperator === "plus" && "active"}`}
                onClick={this.onActionClick}
                data-action="plus"
              >
                +
              </button>
              <button
                type="button"
                className="number"
                onClick={this.onNumberClick}
                value={0}
              >
                0
              </button>
              <button
                type="button"
                className="number"
                onClick={this.onNumberClick}
                value={"."}
              >
                .
              </button>
              <button
                type="button"
                className="operator"
                onClick={this.onActionClick}
                data-action="equal"
              >
                =
              </button>
            </div>
          </div>
        </header>
      </div>
    );
  }

  calculate = (firstNum: string, operator: string, secondNum: string) => {
    let result = 0;
    switch (operator) {
      case "divide":
        result = parseFloat(firstNum) / parseFloat(secondNum);
        break;
      case "times":
        result = parseFloat(firstNum) * parseFloat(secondNum);
        break;
      case "minus":
        result = parseFloat(firstNum) - parseFloat(secondNum);
        break;
      case "plus":
        result = parseFloat(firstNum) + parseFloat(secondNum);
        break;
    }
    this.setState({
      firstNum: result,
      secondNum: '0',
      currentOperator: "",
      previousKeyType: ""
    })
  };

  onNumberClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { value } = e.currentTarget;
    const { firstNum, secondNum, previousKeyType } = this.state;

    if (previousKeyType !== "operator" && secondNum === "0") {
      this.setState({
        firstNum: firstNum === "0" ? `${value}` : `${firstNum}${value}`,
        previousKeyType: "number"
      });
    } else {
      this.setState({
        secondNum: secondNum === "0" ? `${value}` : `${secondNum}${value}`,
        previousKeyType: "number"
      });
    }
  };

  onActionClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { dataset } = e.currentTarget;
    const { action } = dataset;
    const {
      firstNum,
      secondNum,
      currentOperator,
      previousKeyType
    } = this.state;
    console.log(action);
    switch (action) {
      case "clear":
        this.setState({
          firstNum: "0",
          secondNum: "0",
          currentOperator: "",
          previousKeyType: ""
        });
        return;
      case "alt":
        if (previousKeyType !== "operator" && secondNum === "0") {
          this.setState(({ firstNum }: State) => ({
            firstNum: (parseInt(firstNum) * -1).toString()
          }));
        } else {
          this.setState(({ secondNum }: State) => ({
            secondNum: (parseInt(secondNum) * -1).toString()
          }));
        }
        return;
      case "percent":
        return;
      case "divide":
        this.setState({
          currentOperator: "divide",
          previousKeyType: "operator"
        });
        return;
      case "times":
        this.setState(({ firstNum, secondNum }: State) => ({
          currentOperator: "times",
          previousKeyType: "operator"
        }));
        return;
      case "minus":
        this.setState({
          currentOperator: "minus",
          previousKeyType: "operator"
        });
        return;
      case "plus":
        this.setState({
          currentOperator: "plus",
          previousKeyType: "operator"
        });
        return;
      case "equal":
        this.calculate(firstNum, currentOperator, secondNum);
        return;
      default:
        return;
    }
  };
}

export default App;
