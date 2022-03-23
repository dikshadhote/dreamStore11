import React, { useReducer } from "react";
import { sortByPrice } from "../../utils/sort-functions";

const sortPriceReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "sortByPrice":
      return { ...state, sortBy: action.payload };
    default:
      return data;
  }
};

export default function FilterProduct({ products }) {
  console.log(products);

  const categories = [
    "Sofas & armchairs",
    "Cookware & Table ware",
    "Beds & mattresses",
    "Storage & Organisation",
  ];

  const [state, dispatch] = useReducer(sortPriceReducer, {
    sortBy: "",
  });
  const { sortBy } = state;

  const filterProductByPrice = sortByPrice(products, sortBy);

  const rating = [4, 3, 2, 1];
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
          {categories.map((categoryName, index) => {
            return (
              <li>
                <input
                  id={index}
                  className="form-check-input"
                  type="checkbox"
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
              <li>
                <input
                  id={index}
                  className="form-check-input"
                  type="radio"
                  name="rating"
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
              onChange={(e) =>
                dispatch({ type: "sortByPrice", payload: e.target.value })
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
              onChange={(e) =>
                dispatch({ type: "sortByPrice", payload: e.target.value })
              }
            />
            <label htmlFor="radio-high">Price:High to Low</label>
          </li>
        </ul>
      </div>
    </div>
  );
}
