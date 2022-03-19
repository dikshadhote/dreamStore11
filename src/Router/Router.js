import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Wishlist,
  Products,
  Cart,
  Login,
  Home,
  MockmanComponent,
} from "./../components/components";
export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mockman" element={<MockmanComponent />} />
    </Routes>
  );
}
