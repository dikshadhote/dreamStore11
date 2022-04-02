import React from "react";
import { Navbar, Footer } from "../components";
import { useCart } from "../../context/cart-context";
export default function Cart() {
  const { stateCart } = useCart();
  console.log(stateCart);
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
}
