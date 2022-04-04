import { useReducer, createContext, useContext } from "react";

const CartContext = createContext(null);

const cartReducer = (stateCart, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      //some property returns true if same card foundś
      const repeatCard = stateCart.cart.some(
        (item) => item.product._id === action.payload._id
      );

      if (repeatCard)
        return {
          ...stateCart,
          cart: stateCart.cart.map((item) => {
            return item.product._id === action.payload._id
              ? { ...item, quantity: item.quantity + 1 }
              : { ...item };
          }),
        };
      else
        return {
          ...stateCart,
          cart: [...stateCart.cart, { product: action.payload, quantity: 1 }],
        };
    case "REMOVE_TO_CART":
      return {
        ...stateCart,
        cart: stateCart.cart.filter(
          (item) => item.product._id !== action.payload
        ),
      };
    case "INCREASE_QUANTITY":
      return {
        ...stateCart,
        cart: stateCart.cart.map((item) =>
          item.product._id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : { ...item }
        ),
      };
    case "DECREASE_QUANTITY":
      return {
        ...stateCart,
        cart: stateCart.cart.map((item) =>
          item.product._id === action.payload && item.quantity >= 1
            ? { ...item, quantity: item.quantity - 1 }
            : { ...item }
        ),
      };
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
