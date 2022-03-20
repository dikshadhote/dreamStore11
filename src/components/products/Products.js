import React, { useEffect } from "react";
import { Navbar, Footer } from "../components";
import axios from "axios";
import { products } from "../../backend/db/products";
import FilterProduct from "./FilterProduct";

export default function Products() {
  async function apiCall() {
    const { data } = await axios.get("/api/products");
    const { products } = data;
    console.log(products);
  }

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="page-container">
        <FilterProduct />
        <div class="m-2 ">
          <h3 class="pb-1 pl-2 ">Products</h3>
          <div class="d-flex align-items-stretch main-container flex-wrap">
            {products.map(
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
                    class="card flex-column card-vert card-shadow"
                    key={index}
                  >
                    <span class="badge add-to-fav" title="Add to Wishlist">
                      <span class="material-icons icon-red"> favorite </span>
                    </span>
                    <img src={productImg} class="card-img-vert" />
                    <div class="card-body">
                      <a class="card-title" href="#">
                        {subtitle}
                      </a>
                      <span class="card-subtitle">{categoryName}</span>
                      <p class="card-text">{description}</p>
                      <div class="price-container">
                        <span class="orignal-price">Rs 20000</span>
                        <span class="discount-price">Rs {discountPrice}</span>
                      </div>
                      <button
                        href="#"
                        class="btn persian-blue-bg white-text-color btn-card btn-size"
                      >
                        <span class="material-icons card-btn-icon">
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
