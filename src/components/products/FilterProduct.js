import React from "react";

export default function FilterProduct() {
  return (
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
            <label htmlFor="checkbox-furniture">Sofas & armchairs</label>
          </li>
          <li>
            <input
              id="checkbox-appliance"
              className="form-check-input"
              type="checkbox"
            />
            <label htmlFor="checkbox-appliance">Cookware & Table ware</label>
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
            <label htmlFor="checkbox-decor">Storage & Organisation</label>
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
  );
}
