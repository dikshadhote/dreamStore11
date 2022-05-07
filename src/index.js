import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
  AuthProvider,
  WishlistProvider,
  CartProvider,
  ProductsFilterProvider,
} from "./context";
// Call make Server
makeServer();

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <CartProvider>
        <WishlistProvider>
          <ProductsFilterProvider>
            <App />
          </ProductsFilterProvider>
        </WishlistProvider>
      </CartProvider>
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById("root")
);
