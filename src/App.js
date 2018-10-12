import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      number: '',
      operation: '',
      firstNumberSaved: '',
      secondNumberSaved: '',
      secondNumberTime: false
    }
  };

  changeNumber = (number) => {
    if (!this.state.operation) {
      let currentNumber;
      currentNumber = this.state.number + number;
      this.setState({
        number: currentNumber
      });
    }
    else if (this.state.operation && this.state.secondNumberTime) {
      let currentNumber;
      currentNumber = this.state.number + number;
      this.setState({
        number: currentNumber
      });
    } else {
      this.setState({
        number: ""
      }, () => {
        let currentNumber;
        currentNumber = this.state.number + number;
        this.setState({
          number: currentNumber,
          secondNumberTime: true
        });
      });
    }
  };

  addDecimal = () => {
    let currentNumber;
    currentNumber = this.state.number + ".";
    this.setState({
      number: currentNumber
    });
  };

  addition = () => {
    this.setState({
      operation: "addition",
      firstNumberSaved: parseFloat(this.state.number)
    });
  };
  subtraction = () => {
    this.setState({
      operation: "subtraction",
      firstNumberSaved: parseFloat(this.state.number)
    });
  };
  multiplication = () => {
    this.setState({
      operation: "multiplication",
      firstNumberSaved: parseFloat(this.state.number)
    });
  };
  division = () => {
    this.setState({
      operation: "division",
      firstNumberSaved: parseFloat(this.state.number)
    });
  };

  allClear = () => {
    this.setState({
      number: '',
      operation: '',
      result: '',
      firstNumberSaved: '',
      secondNumberSaved: '',
      secondNumberTime: false
    });
  };

  equals = () => {
    this.setState({
      secondNumberSaved: parseFloat(this.state.number)
    }, () => {
      if (this.state.operation === "addition") {
        let result = (this.state.firstNumberSaved) + (this.state.secondNumberSaved);
        this.setState({
          number: result,
          operation: "",
          secondNumberTime: false
        });
      } else if (this.state.operation === "subtraction") {
        let result = (this.state.firstNumberSaved) - (this.state.secondNumberSaved);
        this.setState({
          number: result,
          operation: "",
          secondNumberTime: false
        });
      } else if (this.state.operation === "multiplication") {
        let result = (this.state.firstNumberSaved) * (this.state.secondNumberSaved);
        this.setState({
          number: result,
          operation: "",
          secondNumberTime: false
        });
      } else if (this.state.operation === "division") {
        let result = (this.state.firstNumberSaved) / (this.state.secondNumberSaved);
        this.setState({
          number: result,
          operation: "",
          secondNumberTime: false
        });
      } else {
        this.setState({
          number: "",
          operation: ""
        });
      }
    });
  };

  checkStates = () => {
    console.log(this.state.number);
    console.log(this.state.operation);
    console.log(this.state.result);
    console.log(this.state.firstNumberSaved);
    console.log(this.state.secondNumberSaved);
  };
  render() {
    const operation = this.state.operation;
    const resultState = this.state.result;
    const number = this.state.numnber;
    let subtraction;
    let addition;
    let multiplication;
    let division;
    if (operation === "addition") {
      addition = "operationActive"
    } else {
      addition = ""
    }
    if (operation === "subtraction") {
      subtraction = "operationActive"
    } else {
      subtraction = ""
    }
    if (operation === "multiplication") {
      multiplication = "operationActive"
    } else {
      multiplication = ""
    }
    if (operation === "division") {
      division = "operationActive"
    } else {
      division = ""
    }
    return (
      <div>
        <div className="title">
          <h5>React Calculator - Chris Yang</h5>
        </div>
        <div className = "output">
          <h6>{this.state.number}</h6>
        </div>
        <div className="calculatorBody">
          <div className="row" id="calcRow">
            <div className="col s4 m4">
              <a onClick={() => this.changeNumber(7)}>&nbsp;7&nbsp;</a>
            </div>
            <div className="col s4 m4">
              <a onClick={() => this.changeNumber(8)}>&nbsp;8&nbsp;</a>
            </div>
            <div className="col s4 m4">
              <a onClick={() => this.changeNumber(9)}>&nbsp;9&nbsp;</a>
            </div>
          </div>
          <div className="row" id="calcRow">
            <div className="col s4 m4">
              <a onClick={() => this.changeNumber(4)}>&nbsp;4&nbsp;</a>
            </div>
            <div className="col s4 m4">
              <a onClick={() => this.changeNumber(5)}>&nbsp;5&nbsp;</a>
            </div>
            <div className="col s4 m4">
              <a onClick={() => this.changeNumber(6)}>&nbsp;6&nbsp;</a>
            </div>
          </div>
          <div className="row" id="calcRow">
            <div className="col s4 m4">
              <a id="smallbutton" onClick={() => this.changeNumber(1)}>&nbsp;1&nbsp;</a>
            </div>
            <div className="col s4 m4">
              <a onClick={() => this.changeNumber(2)}>&nbsp;2&nbsp;</a>
            </div>
            <div className="col s4 m4">
              <a onClick={() => this.changeNumber(3)}>&nbsp;3&nbsp;</a>
            </div>
          </div>
          <div className="row" id="calcRow">
            <div className="col s4 m4">
              <a onClick={() => this.changeNumber(0)}>&nbsp;0&nbsp;</a>
            </div>
            <div className="col s4 m4">
              <a id="smallbutton" onClick={this.addDecimal}>&nbsp;.&nbsp;</a>
            </div>
            <div className="col s4 m4">
              <a onClick = {this.allClear}>AC</a>
            </div>
          </div>
        </div>
        <div className="operators">
          <div className="row" id="calcRow">
            <div className="col s3 m3">
              <a id={addition} onClick={this.addition}>&nbsp;&#43;&nbsp;</a>
            </div>
            <div className="col s3 m3">
              <a id={subtraction} onClick={this.subtraction}>&nbsp;&#8722;&nbsp;</a>
            </div>
            <div className="col s3 m3">
              <a id={multiplication} onClick={this.multiplication}>&nbsp;&#215;&nbsp;</a>
            </div>
            <div className="col s3 m3">
              <a id={division} onClick={this.division}>&nbsp;&#247;&nbsp;</a>
            </div>
          </div>
        </div>
        <div className = "equals">
          <a onClick={this.equals}>&nbsp;=&nbsp;</a>
        </div>
      </div>
    )
  }

};

export default App;
