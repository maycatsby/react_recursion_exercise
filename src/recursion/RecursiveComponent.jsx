import React, { Component } from "react";

export default class RecursiveComponent extends Component {
  recursive(arr) {
    const nextArray = arr.filter((cur, i) => i > 0);
    if (arr.length > 1) {
      return arr[0].prototype.render(this.recursive(nextArray));
    }
    return arr[0].prototype.render();
  }

  render() {
    return <div>{this.recursive(this.props.components)}</div>;
  }
}
