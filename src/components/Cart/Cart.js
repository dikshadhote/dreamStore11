import React, { useState } from "react";
import { Navbar, Footer } from "../components";
import { useCart } from "../../context/cart-context";
import { Link } from "react-router-dom";
export default function Cart() {
  const { stateCart, dispatchCart } = useCart();
  console.log(stateCart);
  const { cart, quantity } = stateCart;

  return (
    <div>
      <Navbar />
      <div className="m-2">
        <div className="d-flex flex-justify-center">
          <h3 className="pb-1 pl-2 ">My Cart</h3>
        </div>
        {cart.length == 0 ? (
          <div>
            Please add items to your Cart
            <Link
              className="card-category-txt orange-bg btn-shop"
              to="/products"
            >
              Shop now
            </Link>
          </div>
        ) : (
          <div className="card-checkout-container">
            <div className="d-flex flex-column">
              {cart.map((item) => {
                const {
                  categoryName,
                  description,
                  discountPrice,
                  _id,
                  orignalPrice,
                  productImg,
                  rating,
                  subtitle,
                } = item.product;

                return (
                  <div className="card hori-card card-shadow" key={_id}>
                    <span
                      className="badge cancel-card"
                      title="Remove from cart"
                      onClick={() =>
                        dispatchCart({ type: "REMOVE_TO_CART", payload: _id })
                      }
                    >
                      <span className="material-icons"> cancel </span>
                    </span>
                    <div className="card-img-hori">
                      <img
                        src={productImg}
                        className="responsive-img img-hori"
                      />
                    </div>
                    <div className="card-body flex-column">
                      <a className="card-title" href="#">
                        {subtitle}
                      </a>
                      <span className="card-subtitle">{categoryName}</span>
                      <p className="card-text">{description}</p>
                      <div className="price-container">
                        <span className="orignal-price">
                          Rs {discountPrice}
                        </span>
                        <span className="discount-price">
                          Rs {orignalPrice}
                        </span>
                      </div>
                      <div className="d-flex align-items-center flex-justify-space-between">
                        <button
                          href="#"
                          className="btn persian-blue-bg white-text-color btn-card "
                        >
                          <span className="material-icons card-btn-icon">
                            favorite
                          </span>
                          <p>Move to Wishlist</p>
                        </button>
                        <div className="ml-1 mb-1 d-flex align-items-center">
                          <span className="mr-1">Quantity: </span>
                          <button
                            className="inc-dec-btn"
                            onClick={() =>
                              dispatchCart({
                                type: "DECREASE_QUANTITY",
                              })
                            }
                          >
                            -
                          </button>
                          <span className="p-1">{quantity}</span>
                          <button
                            className="inc-dec-btn"
                            onClick={() =>
                              dispatchCart({
                                type: "INCREASE_QUANTITY",
                              })
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className=" mt-2 mb-2">
              <div className="d-flex flex-column card-shadow card-checkout ml-2">
                <h3 className="p-1">Price details</h3>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
