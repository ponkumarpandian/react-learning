import React, { Component } from "react";

class Counter extends Component {
  //Way of define style
  // styles = {
  //   fontSize: 10,
  //   fontWeight: "bold"
  // };

  //This is old way of binding any event using constructor, instead of use arrow function to bind events
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClassNames()}>
          {this.formatCounter()}
        </span>
        <div className="btn-group mr-2" role="group">
          <button
            onClick={() => this.props.onIncrement(this.props.product)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.product)}
            className="btn btn-secondary btn-sm"
            disabled={this.props.product.quantity <= 0}
          >
            -
          </button>
        </div>
      </React.Fragment>
    );
  }

  getBadgeClassNames() {
    let classes = "badge m-2 badge-";
    classes += this.props.product.quantity === 0 ? "warning" : "primary";
    return classes;
  }

  formatCounter() {
    return this.props.product.quantity === 0
      ? "0"
      : this.props.product.quantity;
  }
}

export default Counter;
