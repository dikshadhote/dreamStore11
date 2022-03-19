import React from "react";
import { Navbar, Footer } from "../components";
import { Link } from "react-router-dom";
import "./../../App.css";
export default function Home() {
  return (
    <div className="page-container">
      <Navbar />
      <div className="content-container">
        <div class="carousel-banner d-flex  mt-4">
          <img
            class="banner-img responsive-img"
            src="https://img.freepik.com/free-photo/living-room-interior-wall-mockup-warm-tones-with-leather-sofa-which-is-kitchen-3d-rendering_41470-3753.jpg?w=826"
          />
          <div class="d-flex flex-column flex-justify-center align-items-center">
            <h1 class="banner-text ">You dream,</h1>
            <h1 class="banner-text ">we build!!</h1>
            <Link class="card-category-txt orange-bg btn-shop" to="/products">
              Shop now
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
