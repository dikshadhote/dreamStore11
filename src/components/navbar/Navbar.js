import React from "react";
import "./../../App.css";
import { Link, useNavigate } from "react-router-dom";
import storeLogo from "../../assets/location.png";
import { useCart, useWishlist, useAuth } from "../../context";
export default function Navbar() {
  const { stateCart } = useCart();
  const { cart } = stateCart;
  const { stateWishlist } = useWishlist();
  const { wishlist } = stateWishlist;
  const { authState, setAuthState } = useAuth();
  const navigateTo = useNavigate();
  //logout handler
  const logOutHandler = () => {
    localStorage.removeItem("token");
    setAuthState({ isUserLoggedIn: false });
    navigateTo("/login");
  };

  return (
    <div>
      <div className="nav-bar nav-yellow-shadow">
        <div className="nav-logo-section">
          <img src={storeLogo} alt="dreamStore-logo" className="mb-1" />
          <h3 className="mr-4 aqua-color">dreamStore</h3>
          <Link className="black-text-color" to="/products">
            <h5> Products</h5>
          </Link>
          <Link className="black-text-color ml-2" to="/">
            <h5>Home</h5>
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
            <div className="icon-container">
              <span className="material-icons mr-1 ml-1" title="wishlist">
                favorite
              </span>
              {wishlist.length > 0 && (
                <span className="badge orange-bg position-mail-badge small-badge">
                  <small className="number">{wishlist.length}</small>
                </span>
              )}
            </div>
          </Link>
          <Link className="black-text-color" to="/cart">
            <div className="icon-container">
              <span className="material-icons mr-1 ml-1" title="cart">
                shopping_cart
              </span>
              {cart.length > 0 && (
                <span className="badge orange-bg position-mail-badge small-badge">
                  <small className="number">{cart.length}</small>
                </span>
              )}
            </div>
          </Link>
          <div>
            {authState.isUserLoggedIn && localStorage.getItem("token") ? (
              <button
                type="button"
                className="btn orange-bg login-button ml-3 font-weight-bold btn-size"
                onClick={() => logOutHandler()}
              >
                Logout
              </button>
            ) : (
              <Link className="black-text-color" to="/login">
                <span className="material-icons ml-1" title="account">
                  account_circle
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
