import React, { useEffect } from "react";
import { Navbar, Footer } from "../components";
import { Link } from "react-router-dom";
import { useCart } from "../../context/cart-context";
export default function Success() {
  const { dispatchCart } = useCart();
  useEffect(() => {
    dispatchCart({ type: "RESET_CART" });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="m-2 mb-5">
        <div className="d-flex flex-justify-center">
          <div className="empty-cart">
            <p className="fs-3 mb-3">Your order is successfully placed!!</p>
            <div>
              <Link to="/products" className="orange-bg btn-shop-cart">
                shop more
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
