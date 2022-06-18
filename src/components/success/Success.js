import React, { useEffect } from "react";
import { Navbar, Footer } from "../components";
import { Link } from "react-router-dom";
import { useCart, useOrder } from "../../context";
export default function Success() {
  const { stateCart, dispatchCart } = useCart();
  const { stateOrder, dispatchOrder } = useOrder();
  console.log(stateCart);
  console.log(stateOrder);
  useEffect(() => {
    dispatchOrder({ type: "ADD_ORDER", payload: [...stateCart.cart] });
  }, []);

  useEffect(() => {
    dispatchCart({ type: "RESET_CART" });
  }, [stateOrder]);

  return (
    <div>
      <Navbar />
      <div className="m-2 mb-5">
        <div className="d-flex flex-justify-center">
          <div className="empty-cart">
            <p className="fs-3 mb-3">Your order is successfully placed!!</p>
            <div>
              <Link
                to="/products"
                className="persian-blue-bg white-text-color btn-shop-cart btn-order"
              >
                shop more
              </Link>
              <Link to="/orders" className="orange-bg btn-shop-cart btn-order ">
                see your order
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
