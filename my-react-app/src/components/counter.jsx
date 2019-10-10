import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0,
    products: [
      {
        producId: 10000,
        productName: "product1",
        productDescription: "product1",
        price: 50
      },
      {
        producId: 10001,
        productName: "product2",
        productDescription: "product2",
        price: 200
      },
      {
        producId: 10002,
        productName: "product3",
        productDescription: "product3",
        price: 150
      }
    ]
  };

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

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClassNames()}>
          {this.formatCounter()}
        </span>
        {this.renderProducts()}
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Counter
        </button>
      </React.Fragment>
    );
  }

  renderProducts() {
    const { products } = this.state;
    let min = 1;
    let max = 5;
    if (this.state.products.length === 0)
      return <p>There is no product found! </p>;
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Quntity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.producId}>
              <td>{p.producId}</td>
              <td>{p.productName}</td>
              <td>{Math.floor(Math.random() * (+max - +min)) + +min}</td>
              <td>
                ₹
                {Math.floor(
                  Math.random() * (+max * 100 - +min * 10) + +min * 10
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  getBadgeClassNames() {
    let classes = "badge m-2 badge-";
    classes += this.state.counter === 0 ? "warning" : "primary";
    return classes;
  }

  formatCounter() {
    const { counter } = this.state;
    return counter === 0 ? "Zero" : counter;
  }
}

export default Counter;
