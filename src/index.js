import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductsFilterProvider } from "./context/products-filter-context";
import { CartProvider } from "./context/cart-context";
import { WishlistProvider } from "./context/wishlist-context";
// Call make Server
makeServer();

ReactDOM.render(
  <BrowserRouter>
    <CartProvider>
      <WishlistProvider>
        <ProductsFilterProvider>
          <App />
        </ProductsFilterProvider>
      </WishlistProvider>
    </CartProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
