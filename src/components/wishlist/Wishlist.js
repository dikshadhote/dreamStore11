import React from "react";
import { Navbar, Footer } from "../components";
import { useWishlist } from "../../context/wishlist-context";
import { Link } from "react-router-dom";
export default function Wishlist() {
  const { stateWishlist } = useWishlist();
  const { wishlist } = stateWishlist;
  return (
    <div>
      <Navbar />
      <div className="m-2">
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
          <div class="d-flex align-items-stretch flex-wrap flex-justify-center"></div>
        )}
      </div>
      <Footer />
    </div>
  );
}
