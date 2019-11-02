import React, { Component } from "react";
import Counter from "./counter";
import DeleteProduct from "./deleteProduct";

class products extends Component {
  state = {
    products: [
      {
        producId: 10000,
        productName: "product1",
        productDescription: "product1",
        price: 50,
        quantity: 0
      },
      {
        producId: 10001,
        productName: "product2",
        productDescription: "product2",
        price: 200,
        quantity: 0
      },
      {
        producId: 10002,
        productName: "product3",
        productDescription: "product3",
        price: 150,
        quantity: 0
      }
    ]
  };

  render() {
    return (
      <React.Fragment>
        {this.renderProducts()}
        {/* <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Counter
        </button> */}
      </React.Fragment>
    );
  }

  renderProducts() {
    console.log("render products");
    const { products } = this.state;
    if (this.state.products.length === 0)
      return <p>There is no product found! </p>;
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Quntity</th>
            <th>Unit Price</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.producId}>
              <td>{product.producId}</td>
              <td>{product.productName}</td>
              <td>
                <Counter
                  key={product.producId}
                  product={product}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                ></Counter>
              </td>
              <td>₹{product.price}</td>
              <td>₹{product.price * product.quantity}</td>
              <td>
                <DeleteProduct
                  key={product.producId}
                  product={product}
                  onDelete={this.handleDelete}
                ></DeleteProduct>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  handleDelete = product => {
    const products = this.state.products.filter(
      p => p.producId !== product.producId
    );
    console.log(products);
    this.setState({ products });
  };

  handleIncrement = product => {
    const products = [...this.state.products]; //... clone the products object
    const index = products.indexOf(product);
    products[index] = { ...product }; //cloning the product to update
    products[index].quantity = products[index].quantity + 1; //Increment the current prodcut quantity
    this.setState({ products }); // Update the state
  };

  handleDecrement = product => {
    const products = [...this.state.products]; //... clone the products object
    const index = products.indexOf(product);
    products[index] = { ...product }; //cloning the product to update
    products[index].quantity = products[index].quantity - 1; //Decrement the current prodcut quantity
    this.setState({ products }); // Update the state
  };

  getBadgeClassNames() {
    let classes = "badge m-2 badge-";
    classes += this.state.counter === 0 ? "warning" : "primary";
    return classes;
  }
}

export default products;
