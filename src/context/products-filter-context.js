import {
  useEffect,
  useReducer,
  useState,
  createContext,
  useContext,
} from "react";
import axios from "axios";

const ProductFilterContext = createContext(null);

const useProductsFilter = () => useContext(ProductFilterContext);

const ProductsFilterProvider = ({ children }) => {
  const [productsList, setProductList] = useState([]);
  async function fetchProducts() {
    const { data } = await axios.get("/api/products");
    const { products } = data;
    setProductList(products);
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  const sortPriceReducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "sortByPrice":
        console.log("hello");
        return { ...state, sortBy: action.payload };
      default:
        return data;
    }
  };

  const [state, dispatch] = useReducer(sortPriceReducer, {
    sortBy: "",
  });

  return (
    <ProductFilterContext.Provider value={{ productsList, state, dispatch }}>
      {children}
    </ProductFilterContext.Provider>
  );
};

export { useProductsFilter, ProductsFilterProvider };
