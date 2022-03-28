import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductsFilterProvider } from "./context/products-filter-context";
// Call make Server
makeServer();

ReactDOM.render(
  <BrowserRouter>
    <ProductsFilterProvider>
      <App />
    </ProductsFilterProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
