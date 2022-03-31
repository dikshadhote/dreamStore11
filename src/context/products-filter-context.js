import {
  useEffect,
  useReducer,
  useState,
  createContext,
  useContext,
} from "react";
import axios from "axios";
import {
  sortByPrice,
  sortByRating,
  sortByCategory,
  sortByRange,
} from "../utils/sort-functions";
const ProductFilterContext = createContext(null);

const useProductsFilter = () => useContext(ProductFilterContext);

const ProductsFilterProvider = ({ children }) => {
  const [productsList, setProductList] = useState([]);

  async function fetchProducts() {
    try {
      const { data } = await axios.get("/api/products");
      const { products } = data;
      setProductList(products);
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const sortReducer = (state, action) => {
    switch (action.type) {
      case "sortByPrice":
        return { ...state, sortBy: action.payload };
      case "sortByRating":
        return { ...state, sortRating: action.payload };
      case "sortByCategory":
        // the category coming from action.payload if not present remove from array else add selected category to arr
        if (state.sortCategory.includes(action.payload)) {
          return {
            ...state,
            sortCategory: state.sortCategory.filter(
              (selectedCategory) => selectedCategory !== action.payload
            ),
          };
        }
        return {
          ...state,
          sortCategory: [...state.sortCategory, action.payload],
        };
      case "sortByRange":
        return { ...state, sortRange: action.payload };
      case "clearAllFilters":
        return {
          sortBy: "",
          sortRating: null,
          sortCategory: [],
          sortRange: 0,
        };
      default:
        return data;
    }
  };

  const [stateProduct, dispatch] = useReducer(sortReducer, {
    sortBy: "",
    sortRating: null,
    sortCategory: [],
    sortRange: 0,
  });

  // if state changed ,it passes current state and productlist/filtered accumalator list to sort function
  // and applies current sort function
  const filterProductsBySorting = (productFilterState, ...sortFunctionArr) => {
    return (productsList) =>
      sortFunctionArr.reduce((filteredListAcc, currFilterFunction) => {
        return currFilterFunction(filteredListAcc, productFilterState);
      }, productsList);
  };

  // currying function : pass state, sort functions in first function and
  //productslist will be passed on to return function of the currying function
  const filteredProducts = filterProductsBySorting(
    stateProduct,
    sortByPrice,
    sortByRating,
    sortByCategory,
    sortByRange
  )(productsList);

  return (
    <ProductFilterContext.Provider
      value={{ filteredProducts, stateProduct, dispatch }}
    >
      {children}
    </ProductFilterContext.Provider>
  );
};

export { useProductsFilter, ProductsFilterProvider };
