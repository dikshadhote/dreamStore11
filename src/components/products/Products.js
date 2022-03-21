import React, { useState, useEffect } from "react";
import { Navbar, Footer } from "../components";
import axios from "axios";
import FilterProduct from "./FilterProduct";

export default function Products() {
  const [productsList, setProductList] = useState([]);
  async function apiCall() {
    const { data } = await axios.get("/api/products");
    const { products } = data;
    setProductList(products);
  }

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="productspage-container">
        <FilterProduct />
        <div className="m-2 ">
          <h3 className="pb-1 pl-2 ">Products</h3>
          <div className="d-flex align-items-stretch main-container flex-wrap">
            {productsList.map(
              (
                {
                  subtitle,
                  productImg,
                  categoryName,
                  description,
                  discountPrice,
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
                        <span className="orignal-price">Rs 20000</span>
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
