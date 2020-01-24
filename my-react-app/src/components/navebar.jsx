import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
          <span className="navbar-brand">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/cart" className="nav-link">
                  Cart{" "}
                  <span className="badge badge-pill badge-secondary">
                    {this.props.totalProducts}
                  </span>
                </Link>
              </li>
            </ul>
          </span>
        </div>
      </nav>
    );
  }
}

export default NavBar;
