import { useReducer, createContext, useContext } from "react";

const CartContext = createContext(null);

const cartReducer = (stateCart, action) => {
  console.log(action.type);
  console.log(action.payload);
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...stateCart, cart: action.payload };
    case "REMOVE_TO_CART":
      return;
    case "INCREASE_QUANTITY":
      return;
    case "DECREASE_QUANTITY":
  }
};

const CartProvider = ({ children }) => {
  const [stateCart, dispatchCart] = useReducer(cartReducer, {
    cart: [],
  });

  return (
    <CartContext.Provider value={{ stateCart, dispatchCart }}>
      {children}
    </CartContext.Provider>
  );
};
const useCart = () => useContext(CartContext);
export { useCart, cartReducer, CartProvider };
