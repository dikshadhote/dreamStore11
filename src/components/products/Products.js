import React, { useEffect } from "react";
import { Navbar, Footer } from "../components";
import axios from "axios";
import { products } from "../../backend/db/products";

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
      <div className="d-flex">
        <div className="d-flex flex-column sidebar-container mt-2 ml-2">
          <div className="d-flex flex-justify-space-between align-items-center mb-2">
            <h4>Filters</h4>
            <a className="underline clear-all" title="Clear all filters">
              Clear all
            </a>
          </div>
          <div className="mb-2">
            <h4 className="pb-1">Price</h4>
            <input type="range" name="range" min="0" max="100" value="50" />
          </div>
          <div className="mb-2">
            <h4 className="pb-1">Category</h4>
            <ul className="list-style-none">
              <li>
                <input
                  id="checkbox-furniture"
                  className="form-check-input"
                  type="checkbox"
                />
                <label htmlFor="checkbox-furniture">Furniture</label>
              </li>
              <li>
                <input
                  id="checkbox-appliance"
                  className="form-check-input"
                  type="checkbox"
                />
                <label htmlFor="checkbox-appliance">Kitchen & appliances</label>
              </li>
              <li>
                <input
                  id="checkbox-bed"
                  className="form-check-input"
                  type="checkbox"
                />
                <label htmlFor="checkbox-bed">Beds & mattresses</label>
              </li>
              <li>
                <input
                  id="checkbox-decor"
                  className="form-check-input"
                  type="checkbox"
                />
                <label htmlFor="checkbox-decor">Decoration</label>
              </li>
            </ul>
          </div>
          <div className="mb-2">
            <h4 className="pb-1">Rating</h4>
            <ul className="list-style-none">
              <li>
                <input
                  id="radio-four"
                  className="form-check-input"
                  type="radio"
                  name="rating"
                  checked
                />
                <label htmlFor="radio-four">4 stars & above</label>
              </li>
              <li>
                <input
                  id="radio-three"
                  className="form-check-input"
                  type="radio"
                  name="rating"
                />
                <label htmlFor="radio-three">3 stars & above</label>
              </li>
              <li>
                <input
                  id="radio-two"
                  className="form-check-input"
                  type="radio"
                  name="rating"
                />
                <label htmlFor="radio-two">2 stars & above</label>
              </li>
              <li>
                <input
                  id="radio-one"
                  className="form-check-input"
                  type="radio"
                  name="rating"
                />
                <label htmlFor="radio-one">1 stars & above</label>
              </li>
            </ul>
          </div>
          <div className="mb-2">
            <h4 className="pb-1">Sort by</h4>
            <ul className="list-style-none">
              <li>
                <input
                  id="radio-low"
                  className="form-check-input"
                  type="radio"
                  name="sort"
                  checked
                />
                <label htmlFor="radio-low">Price:Low to High</label>
              </li>
              <li>
                <input
                  id="radio-high"
                  className="form-check-input"
                  type="radio"
                  name="sort"
                />
                <label htmlFor="radio-high">Price:High to Low</label>
              </li>
            </ul>
          </div>
        </div>
        <div class="m-2">
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
