import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <footer class="d-flex flex-justify-around mt-2 footer-ecom">
      <div class="ml-3">
        <p class="p-1">© 2021, All rights reserved</p>
        <p class="pl-1">
          Made with{" "}
          <span class="material-icons heart-icon icon-red"> favorite </span> by
          Diksha Dhote
        </p>
      </div>
      <div class="mr-3">
        <h4 class="pl-1">Contact Us</h4>
        <p class="p-1">Location: Central bazar road, HB Town, Nagpur - 44604</p>
        <p class="pl-1">Call Us: (+91) 1800 0000 99</p>
      </div>
    </footer>
  );
}
