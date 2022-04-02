import { useReducer, createContext, useContext } from "react";

const CartContext = createContext(null);

const cartReducer = (stateCart, action) => {
  console.log(action.type);
  console.log(action.payload);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...stateCart,
        cart: [...stateCart.cart, { product: action.payload }],
      };
    case "REMOVE_TO_CART":
      return {
        ...stateCart,
        cart: stateCart.cart.filter(
          (item) => item.product._id !== action.payload
        ),
      };
    case "INCREASE_QUANTITY":
      return { ...stateCart, quantity: stateCart.quantity + 1 };
    case "DECREASE_QUANTITY":
      if (stateCart.quantity === 0) return { ...stateCart, quantity: 0 };
      return { ...stateCart, quantity: stateCart.quantity - 1 };
  }
};

const CartProvider = ({ children }) => {
  const [stateCart, dispatchCart] = useReducer(cartReducer, {
    cart: [],
    quantity: 1,
  });

  return (
    <CartContext.Provider value={{ stateCart, dispatchCart }}>
      {children}
    </CartContext.Provider>
  );
};
const useCart = () => useContext(CartContext);
export { useCart, cartReducer, CartProvider };
