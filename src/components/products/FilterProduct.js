import React, { useState, useEffect } from "react";

import { useProductsFilter } from "../../context/products-filter-context";

export default function FilterProduct() {
  const categories = [
    "Sofas & armchairs",
    "Cookware & Table ware",
    "Beds & mattresses",
    "Storage & Organisation",
  ];

  const { stateProduct, dispatch } = useProductsFilter();

  const rating = [4, 3, 2, 1];
  return (
    <div className="d-flex flex-column sidebar-container mt-2 ml-2">
      <div className="d-flex flex-justify-space-between align-items-center mb-2">
        <h4>Filters</h4>
        <a
          className="underline clear-all"
          title="Clear all filters"
          onClick={() => {
            dispatch({ type: "clearAllFilters" });
          }}
        >
          Clear all
        </a>
      </div>
      <div className="mb-2">
        <h4 className="pb-1">Price</h4>
        <input
          type="range"
          name="range"
          min="0"
          max="60000"
          step="500"
          defaultValue="30000"
          onChange={(e) =>
            dispatch({ type: "sortByRange", payload: e.target.value })
          }
        />
      </div>
      <div className="mb-2">
        <h4 className="pb-1">Category</h4>
        <ul className="list-style-none">
          {categories.map((categoryName, index) => {
            return (
              <li key={index}>
                <input
                  id={index}
                  className="form-check-input"
                  type="checkbox"
                  checked={stateProduct.sortCategory.includes(categoryName)}
                  onChange={() => {
                    dispatch({ type: "sortByCategory", payload: categoryName });
                  }}
                />
                <label htmlFor={index}>{categoryName}</label>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mb-2">
        <h4 className="pb-1">Rating</h4>
        <ul className="list-style-none">
          {rating.map((rating, index) => {
            return (
              <li key={index}>
                <input
                  id={index}
                  className="form-check-input"
                  type="radio"
                  name="rating"
                  checked={stateProduct.sortRating === rating}
                  onChange={() =>
                    dispatch({ type: "sortByRating", payload: rating })
                  }
                />
                <label htmlFor={index}>{rating} stars & above</label>
              </li>
            );
          })}
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
              checked={stateProduct.sortBy === "low-to-high"}
              onChange={() =>
                dispatch({ type: "sortByPrice", payload: "low-to-high" })
              }
            />
            <label htmlFor="radio-low">Price:Low to High</label>
          </li>
          <li>
            <input
              id="radio-high"
              className="form-check-input"
              type="radio"
              name="sort"
              checked={stateProduct.sortBy === "high-to-low"}
              onChange={() =>
                dispatch({ type: "sortByPrice", payload: "high-to-low" })
              }
            />
            <label htmlFor="radio-high">Price:High to Low</label>
          </li>
        </ul>
      </div>
    </div>
  );
}
