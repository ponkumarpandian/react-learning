import React, { Component } from "react";
import NavBar from "./components/navebar";
import Products from "./components/products";
import "./App.css";

class App extends Component {
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

  handleReset = () => {
    const products = [...this.state.products];
    products.map(p => (p.quantity = 0));
    this.setState({ products });
  };

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

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalProducts={this.state.products.filter(p => p.quantity > 0).length}
        />
        <main className="container">
          <Products
            products={this.state.products}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
