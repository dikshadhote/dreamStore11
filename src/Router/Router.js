import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Wishlist,
  Products,
  Cart,
  Login,
  Home,
  MockmanComponent,
  Signup,
} from "./../components/components";
import PrivateRoute from "./PrivateRoute";
export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route
        path="/wishlist"
        element={<PrivateRoute navigateToPath={<Wishlist />}></PrivateRoute>}
      />
      <Route
        path="/cart"
        element={<PrivateRoute navigateToPath={<Cart />}></PrivateRoute>}
      />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/mockman" element={<MockmanComponent />} />
    </Routes>
  );
}
