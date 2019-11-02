import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <span className="navbar-brand">
          Shopping Cart{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.totalProducts}
          </span>
        </span>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto"></ul>
          <form className="form-inline mt-2 mt-md-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default NavBar;
