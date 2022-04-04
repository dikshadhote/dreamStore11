import React, { useState, useEffect } from "react";
import { Navbar, Footer } from "../components";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import { Link } from "react-router-dom";
export default function Cart() {
  const { stateCart, dispatchCart } = useCart();
  const { cart } = stateCart;
  const { dispatchWishlist } = useWishlist();
  const [originalPrice, setOriginalPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);

  useEffect(() => {
    setOriginalPrice(
      cart.reduce(
        (acc, curr) =>
          acc + Number(curr.product.orignalPrice) * Number(curr.quantity),
        0
      )
    );
    setDiscountPrice(
      cart.reduce(
        (acc, curr) =>
          acc + Number(curr.product.discountPrice) * Number(curr.quantity),
        0
      )
    );
  }, [cart]);

  return (
    <div>
      <Navbar />
      <div className="m-2">
        <div className="d-flex flex-justify-center">
          <h3 className="pb-1 pl-2 ">My Cart ({stateCart.cart.length}) </h3>
        </div>
        {cart.length == 0 ? (
          <div className="d-flex flex-justify-center ">
            <div className="empty-cart">
              <p className="fs-3 mb-3">Please add items to your Cart</p>
              <div>
                <Link to="/products" className="orange-bg btn-shop-cart">
                  shop now
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="card-checkout-container">
            <div className="d-flex flex-column card-container">
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
                        <span className="orignal-price">Rs {orignalPrice}</span>
                        <span className="discount-price">
                          Rs {discountPrice}
                        </span>
                      </div>
                      <div className="d-flex align-items-center flex-justify-space-between">
                        <Link
                          href="#"
                          className="btn persian-blue-bg white-text-color btn-card "
                          onClick={() =>
                            dispatchWishlist({
                              type: "ADD_TO_WISHLIST",
                              payload: item.product,
                            })
                          }
                          to="/wishlist"
                        >
                          <span className="material-icons card-btn-icon">
                            favorite
                          </span>
                          <p>Move to Wishlist</p>
                        </Link>
                        <div className="ml-1 mb-1 d-flex align-items-center">
                          <span className="mr-1">Quantity: </span>
                          <button
                            className="inc-dec-btn"
                            onClick={() =>
                              dispatchCart({
                                type: "DECREASE_QUANTITY",
                                payload: _id,
                              })
                            }
                          >
                            -
                          </button>
                          <span className="p-1">{item.quantity}</span>
                          <button
                            className="inc-dec-btn"
                            onClick={() =>
                              dispatchCart({
                                type: "INCREASE_QUANTITY",
                                payload: _id,
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
                <span className="d-flex flex-justify-space-between">
                  <p className="p-1">Orignal Price</p>
                  <p className="p-1">Rs{originalPrice}</p>
                </span>
                <span className="d-flex flex-justify-space-between">
                  <p className="p-1">Price after discount</p>
                  <p className="p-1">Rs{discountPrice}</p>
                </span>
                <span className="d-flex flex-justify-space-between">
                  <p className="p-1">Delivery charges</p>
                  <p className="p-1">-Rs300</p>
                </span>
                <span className="d-flex flex-justify-space-between align-items-center">
                  <p className="p-1 font-weight-bold">Coupon</p>
                  <a className="p-1 orange-bg btn-shop apply-btn">Apply</a>
                </span>
                <span className="d-flex flex-justify-space-between total-amt pt-1">
                  <p className="p-1 font-weight-bold">Total Amount</p>
                  <p className="p-1 font-weight-bold">
                    {originalPrice - discountPrice - 300}
                  </p>
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
