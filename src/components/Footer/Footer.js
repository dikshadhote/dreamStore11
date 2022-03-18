import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="d-flex flex-justify-around mt-2 footer-ecom">
      <div className="ml-3 rights-align">
        <p className="pl-1">© 2022, All rights reserved</p>
        <p className="pl-1">
          Made with{" "}
          <span className="material-icons heart-icon icon-red"> favorite </span>
          by Diksha Dhote
        </p>
      </div>
      <div className="mr-3">
        <h4 className="pl-1">Contact Us</h4>
        <p className="p-1">
          Location: Central bazar road, HB Town, Nagpur - 44604
        </p>
        <p className="pl-1">Call Us: (+91) 1800 0000 99</p>
      </div>
    </footer>
  );
}
