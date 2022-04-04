import { useReducer, createContext, useContext } from "react";

const WishlistContext = createContext();

const wishlistReducer = (stateWishlist, action) => {
  //   console.log(action);
  const { wishlist } = stateWishlist;
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return {
        ...stateWishlist,
        wishlist: [...wishlist, action.payload],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...stateWishlist,
        wishlist: wishlist.filter(
          (item) => item.product._id !== action.payload
        ),
      };
    default:
      return {
        ...stateWishlist,
      };
  }
};

const WishlistProvider = ({ children }) => {
  const [stateWishlist, dispatchWishlist] = useReducer(wishlistReducer, {
    wishlist: [],
  });

  console.log(stateWishlist);
  return (
    <WishlistContext.Provider value={{ stateWishlist, dispatchWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);
export { WishlistProvider, useWishlist };
