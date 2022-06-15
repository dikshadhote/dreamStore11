import React from "react";
import { Navbar, Footer } from "../components";
import { useWishlist } from "../../context/wishlist-context";
import { useCart } from "../../context/cart-context";
import { Link } from "react-router-dom";

export default function Wishlist() {
  const { stateWishlist, dispatchWishlist } = useWishlist();
  const { wishlist } = stateWishlist;
  const { dispatchCart } = useCart();
  return (
    <div>
      <Navbar />
      <div className="m-2">
        <div className="d-flex flex-justify-center">
          <h3 className="pb-1 pl-2 ">My Wishlist ({wishlist.length}) </h3>
        </div>
        {wishlist.length === 0 ? (
          <div className="d-flex flex-justify-center ">
            <div className="empty-cart empty-wishlist">
              <p className="fs-3 mb-3">Please add items to your Wishlist</p>
              <div>
                <Link to="/products" className="orange-bg btn-shop-cart">
                  Add items
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="d-flex align-items-stretch flex-wrap flex-justify-center">
              {wishlist.map((item) => {
                const {
                  categoryName,
                  _id,
                  subtitle,
                  description,
                  discountPrice,
                  orignalPrice,
                  productImg,
                } = item;
                return (
                  <div
                    className="card flex-column card-vert card-shadow"
                    key={_id}
                  >
                    <span
                      className="badge cancel-card"
                      title="Remove from wishlist"
                      onClick={() =>
                        dispatchWishlist({
                          type: "REMOVE_FROM_WISHLIST",
                          payload: _id,
                        })
                      }
                    >
                      <span className="material-icons"> cancel </span>
                    </span>
                    <img src={productImg} className="card-img-vert" />
                    <div className="card-body">
                      <a className="card-title" href="#">
                        {subtitle}
                      </a>
                      <span className="card-subtitle">{categoryName}</span>
                      <p className="card-text">{description}</p>
                      <div className="price-container">
                        <span className="orignal-price">Rs {orignalPrice}</span>
                        <span className="discount-price">
                          Rs {discountPrice}
                        </span>
                      </div>
                      <button
                        className="btn persian-blue-bg white-text-color btn-card btn-size"
                        onClick={() =>
                          dispatchCart({
                            type: "ADD_TO_CART",
                            payload: item,
                          })
                        }
                      >
                        <span className="material-icons card-btn-icon">
                          shopping_cart
                        </span>
                        Move to cart
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
