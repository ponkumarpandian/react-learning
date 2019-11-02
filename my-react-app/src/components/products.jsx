import React, { Component } from "react";
import Counter from "./counter";
import DeleteProduct from "./deleteProduct";

class products extends Component {
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
    const { products } = this.props;
    if (products.length === 0) return <p>There is no products in cart! </p>;
    return (
      <React.Fragment>
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
                    onIncrement={this.props.onIncrement} //bubling the event to parent component (app.js)
                    onDecrement={this.props.onDecrement} //bubling the event to parent component (app.js)
                  ></Counter>
                </td>
                <td>₹{product.price}</td>
                <td>₹{product.price * product.quantity}</td>
                <td>
                  <DeleteProduct
                    key={product.producId}
                    product={product}
                    onDelete={this.props.onDelete} //bubling the event to parent component (app.js)
                  ></DeleteProduct>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={this.props.onReset} //bubling the event to parent component (app.js)
          className="btn btn-secondary btn-sm"
        >
          Reset
        </button>
      </React.Fragment>
    );
  }
}

export default products;
