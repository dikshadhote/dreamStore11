import React from "react";
import { useProductsFilter } from "../../context/products-filter-context";
import { Navbar, Footer } from "../components";
import { sortByPrice } from "../../utils/sort-functions";
import FilterProduct from "./FilterProduct";

export default function Products() {
  const { productsList, state } = useProductsFilter();
  const { sortBy } = state;
  console.log(sortBy);
  const filterProduct = sortByPrice(productsList, sortBy);
  console.log(filterProduct);
  return (
    <div>
      <Navbar />
      <div className="productspage-container">
        <FilterProduct />
        <div className="m-2 ">
          <h3 className="pb-1 pl-2 ">Products</h3>
          <div className="d-flex align-items-stretch main-container flex-wrap">
            {filterProduct.map(
              (
                {
                  subtitle,
                  productImg,
                  categoryName,
                  description,
                  discountPrice,
                  orignalPrice,
                },
                index
              ) => {
                return (
                  <div
                    className="card flex-column card-vert card-shadow"
                    key={index}
                  >
                    <span className="badge add-to-fav" title="Add to Wishlist">
                      <span className="material-icons icon-red">
                        {" "}
                        favorite{" "}
                      </span>
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
                        <span className="discount-price">
                          Rs {discountPrice}
                        </span>
                      </div>
                      <button
                        href="#"
                        className="btn persian-blue-bg white-text-color btn-card btn-size"
                      >
                        <span className="material-icons card-btn-icon">
                          shopping_cart
                        </span>
                        <p>Move to cart</p>
                      </button>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
