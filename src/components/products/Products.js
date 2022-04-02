import React, { useEffect } from "react";
import { useProductsFilter } from "../../context/products-filter-context";
import { useCart } from "../../context/cart-context";
import { Navbar, Footer } from "../components";
import FilterProduct from "./FilterProduct";
import { useLocation } from "react-router-dom";

export default function Products() {
  const { filteredProducts, dispatch } = useProductsFilter();
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
                  <span className="badge add-to-fav" title="Add to Wishlist">
                    <span className="material-icons icon-red"> favorite </span>
                  </span>
                  <img src={productImg} className="card-img-vert" />
                  <div className="card-body">
                    <a className="card-title" href="#">
                      {subtitle}
                    </a>
                    <span className="card-subtitle">{categoryName}</span>
                    <p className="card-text">{description}</p>
                    <div className="price-container">
                      <span className="orignal-price">{orignalPrice}</span>
                      <span className="discount-price">Rs {discountPrice}</span>
                    </div>
                    <Link
                      className="btn persian-blue-bg white-text-color btn-card btn-size"
                      to="/cart"
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
                    </Link>
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
