import { useReducer, createContext, useContext } from "react";

const OrderContext = createContext(null);

const OrderReducer = (stateOrder, action) => {
  switch (action.type) {
    case "ADD_ORDER":
      return {
        ...stateOrder,
        orders: [...action.payload],
      };
  }
};

const OrderProvider = ({ children }) => {
  const [stateOrder, dispatchOrder] = useReducer(OrderReducer, {
    orders: [],
  });

  return (
    <OrderContext.Provider value={{ stateOrder, dispatchOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
const useOrder = () => useContext(OrderContext);
export { useOrder, OrderProvider };
