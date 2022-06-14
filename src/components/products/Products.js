import React, { useEffect, useState } from "react";
import { useProductsFilter } from "../../context/products-filter-context";
import { useCart } from "../../context/cart-context";
import { Navbar, Footer } from "../components";
import FilterProduct from "./FilterProduct";
import { useLocation, Link } from "react-router-dom";
import { useWishlist } from "../../context/wishlist-context";

export default function Products() {
  const { filteredProducts, dispatch } = useProductsFilter();
  const { stateWishlist, dispatchWishlist } = useWishlist();
  const { dispatchCart } = useCart();

  const location = useLocation();
  const categoryName = location?.state;

  useEffect(() => {
    if (categoryName) {
      dispatch({ type: "sortByCategory", payload: categoryName });
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="productspage-container">
        <FilterProduct />
        <div className="m-2 ">
          <h3 className="pb-1 pl-2 ">Products ({filteredProducts.length})</h3>
          <div className="d-flex align-items-stretch main-container flex-wrap">
            {filteredProducts.map((product) => {
              const {
                _id,
                subtitle,
                productImg,
                categoryName,
                description,
                discountPrice,
                orignalPrice,
                rating,
              } = product;
              return (
                <div
                  className="card flex-column card-vert card-shadow"
                  key={_id}
                >
                  <span
                    className="badge add-to-fav badge-hov"
                    title="Add to Wishlist"
                    onClick={() => {
                      dispatchWishlist({
                        type: "ADD_TO_WISHLIST",
                        payload: product,
                      });
                    }}
                  >
                    <span
                      className={
                        stateWishlist.wishlist.some((item) => item._id === _id)
                          ? "material-icons icon-red "
                          : "material-icons icon-black "
                      }
                    >
                      {" "}
                      favorite{" "}
                    </span>
                  </span>
                  <img src={productImg} className="card-img-vert" />
                  <div className="card-body">
                    <a className="card-title">{subtitle}</a>
                    <span className="card-subtitle">{categoryName}</span>
                    <p className="card-text">{description}</p>
                    <div className="price-container">
                      <span className="orignal-price">{orignalPrice}</span>
                      <span className="discount-price">Rs {discountPrice}</span>
                    </div>
                    <button
                      className="btn persian-blue-bg white-text-color btn-card btn-size"
                      onClick={() =>
                        dispatchCart({
                          type: "ADD_TO_CART",
                          payload: product,
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
      </div>

      <Footer />
    </div>
  );
}
