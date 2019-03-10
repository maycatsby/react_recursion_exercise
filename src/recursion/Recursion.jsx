import React, { Component } from "react";
import RecursiveComponent from "./RecursiveComponent";

// write components here
// const One and so on...
class One extends Component {
  render(n) {
    return <div className="App-box"> One {n}</div>;
  }
}
class Two extends Component {
  render(n) {
    return <div className="App-box">Two {n}</div>;
  }
}
class Three extends Component {
  render(n) {
    return <div className="App-box">Three {n}</div>;
  }
}

// assign components below
const components = [One, Two, Three];

export default class Recursion extends Component {
  render() {
    return (
      <div className="App-wrapper">
        <RecursiveComponent components={components} />
      </div>
    );
  }
}
