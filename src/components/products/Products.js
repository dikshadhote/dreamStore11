import React from "react";
import { Navbar, Footer } from "../components";
export default function Products() {
  return (
    <div>
      <Navbar />
      <div class="d-flex">
        <div class="d-flex flex-column sidebar-container mt-2 ml-2">
          <div class="d-flex flex-justify-space-between align-items-center mb-2">
            <h4>Filters</h4>
            <a class="underline clear-all" title="Clear all filters">
              Clear all
            </a>
          </div>
          <div class="mb-2">
            <h4 class="pb-1">Price</h4>
            <input type="range" name="range" min="0" max="100" value="50" />
          </div>
          <div class="mb-2">
            <h4 class="pb-1">Category</h4>
            <ul class="list-style-none">
              <li>
                <input
                  id="checkbox-furniture"
                  class="form-check-input"
                  type="checkbox"
                  checked
                />
                <label for="checkbox-furniture">Furniture</label>
              </li>
              <li>
                <input
                  id="checkbox-appliance"
                  class="form-check-input"
                  type="checkbox"
                />
                <label for="checkbox-appliance">Kitchen & appliances</label>
              </li>
              <li>
                <input
                  id="checkbox-bed"
                  class="form-check-input"
                  type="checkbox"
                />
                <label for="checkbox-bed">Beds & mattresses</label>
              </li>
              <li>
                <input
                  id="checkbox-decor"
                  class="form-check-input"
                  type="checkbox"
                />
                <label for="checkbox-decor">Decoration</label>
              </li>
            </ul>
          </div>
          <div class="mb-2">
            <h4 class="pb-1">Rating</h4>
            <ul class="list-style-none">
              <li>
                <input
                  id="radio-four"
                  class="form-check-input"
                  type="radio"
                  name="rating"
                  checked
                />
                <label for="radio-four">4 stars & above</label>
              </li>
              <li>
                <input
                  id="radio-three"
                  class="form-check-input"
                  type="radio"
                  name="rating"
                />
                <label for="radio-three">3 stars & above</label>
              </li>
              <li>
                <input
                  id="radio-two"
                  class="form-check-input"
                  type="radio"
                  name="rating"
                />
                <label for="radio-two">2 stars & above</label>
              </li>
              <li>
                <input
                  id="radio-one"
                  class="form-check-input"
                  type="radio"
                  name="rating"
                />
                <label for="radio-one">1 stars & above</label>
              </li>
            </ul>
          </div>
          <div class="mb-2">
            <h4 class="pb-1">Sort by</h4>
            <ul class="list-style-none">
              <li>
                <input
                  id="radio-low"
                  class="form-check-input"
                  type="radio"
                  name="sort"
                  checked
                />
                <label for="radio-low">Price:Low to High</label>
              </li>
              <li>
                <input
                  id="radio-high"
                  class="form-check-input"
                  type="radio"
                  name="sort"
                />
                <label for="radio-high">Price:High to Low</label>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
