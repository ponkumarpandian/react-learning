import React, { Component } from "react";

class DeleteProduct extends Component {
  render() {
    return (
      <div className="btn-group mr-2" role="group">
        <button
          onClick={() => this.props.onDelete(this.props.product)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default DeleteProduct;
