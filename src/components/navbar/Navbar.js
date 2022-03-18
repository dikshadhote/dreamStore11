import React from "react";
import "./../../App.css";
import { Link } from "react-router-dom";
import storeLogo from "../../assets/location.png";

export default function Navbar() {
  return (
    <div>
      {" "}
      <div className="nav-bar nav-yellow-shadow">
        <div className="nav-logo-section">
          <img src={storeLogo} className="mb-1" />
          <h3 className="mr-4 aqua-color">dreamStore</h3>
          <Link className="black-text-color" to="/products">
            <h5>products</h5>
          </Link>
        </div>
        <div className="search-bar-section">
          <div className="search-container">
            <input placeholder="search" className="search-bar" />
            <span className="material-icons"> search </span>
          </div>
        </div>
        <div className="nav-items">
          <Link className="black-text-color" to="/wishlist">
            <span className="material-icons mr-1" title="wishlist">
              favorite
            </span>
          </Link>
          <Link className="black-text-color" to="/cart">
            <span className="material-icons mr-1 ml-1" title="cart">
              shopping_cart
            </span>
          </Link>
          <Link className="black-text-color" to="/login">
            <span className="material-icons ml-1" title="account">
              account_circle
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
