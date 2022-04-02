import {
  useEffect,
  useReducer,
  useState,
  createContext,
  useContext,
} from "react";

const CartContext = createContext(null);

const cartReducer = (stateCart, action) => {
  console.log(action.type);
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...stateCart, addToCart: action.payload };
    case "REMOVE_TO_CART":
      return;
    case "INCREASE_QUANTITY":
      return;
    case "DECREASE_QUANTITY":
  }
};

const CartProvider = ({ children }) => {
  const [stateCart, dispatchCart] = useReducer(cartReducer, {
    addToCart: [],
    removeFromCart: [],
    increaseQuantity: 0,
    decreaseQuantity: 0,
  });

  return (
    <CartContext.Provider value={{ stateCart, dispatchCart }}>
      {children}
    </CartContext.Provider>
  );
};
const useCart = () => useContext(CartContext);
export { useCart, cartReducer, CartProvider };
