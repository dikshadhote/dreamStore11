import React from "react";
import { Navbar, Footer } from "../components";
import { useCart } from "../../context/cart-context";
export default function Cart() {
  const { stateCart } = useCart();
  console.log(stateCart);
  const {
    categoryName,
    description,
    discountPrice,
    _id,
    orignalPrice,
    productImg,
    rating,
    subtitle,
  } = stateCart.cart;
  console.log(categoryName, orignalPrice);
  return (
    <div>
      <Navbar />
      <div className="m-2">
        <div className="d-flex flex-justify-center">
          <h3 className="pb-1 pl-2 ">My Cart</h3>
        </div>
        <div className="card-checkout-container">
          <div className="d-flex flex-column">
            <div className="card hori-card card-shadow">
              <span className="badge cancel-card" title="Remove from cart">
                <span className="material-icons"> cancel </span>
              </span>
              <div className="card-img-hori">
                <img src={productImg} className="responsive-img img-hori" />
              </div>
              <div className="card-body flex-column">
                <a className="card-title" href="#">
                  {subtitle}
                </a>
                <span className="card-subtitle">{categoryName}</span>
                <p className="card-text">{description}</p>
                <div className="price-container">
                  <span className="orignal-price">Rs {discountPrice}</span>
                  <span className="discount-price">Rs {orignalPrice}</span>
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
                    <button className="inc-dec-btn">-</button>
                    <span className="p-1">1</span>
                    <button className="inc-dec-btn">+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class=" mt-2 mb-2">
            <div class="d-flex flex-column card-shadow card-checkout ml-2">
              <h3 class="p-1">Price details</h3>
              <span class="d-flex flex-justify-space-between">
                <p class="p-1">Price</p>
                <p class="p-1">Rs{orignalPrice}</p>
              </span>
              <span class="d-flex flex-justify-space-between">
                <p class="p-1">Discount</p>
                <p class="p-1">-Rs{discountPrice}</p>
              </span>
              <span class="d-flex flex-justify-space-between">
                <p class="p-1">Delivery charges</p>
                <p class="p-1">-Rs300</p>
              </span>
              <span class="d-flex flex-justify-space-between align-items-center">
                <p class="p-1 font-weight-bold">Coupon</p>
                <a class="p-1 orange-bg btn-shop apply-btn">Apply</a>
              </span>
              <span class="d-flex flex-justify-space-between total-amt pt-1">
                <p class="p-1 font-weight-bold">Total Amount</p>
                <p class="p-1 font-weight-bold">
                  Rs{Number(orignalPrice) - Number(discountPrice) - 300}
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
