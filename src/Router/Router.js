import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Wishlist,
  Products,
  Cart,
  Login,
  Home,
} from "./../components/components";
export default function () {
  return (
    <Routes>
      <Route exact path="/" component={Home} />
      <Route path="/products" element={<Products />} />
      <Route path="/wishlist" component={Wishlist} />
      <Route path="/cart" component={Cart} />
      <Route path="/login" component={Login} />
    </Routes>
  );
}
