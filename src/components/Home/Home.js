import React, { useState, useEffect } from "react";
import { Navbar, Footer } from "../components";
import { Link } from "react-router-dom";
import "./../../App.css";
import axios from "axios";
export default function Home() {
  const [categoriesData, setCategoriesData] = useState([]);
  async function apiCall() {
    const { data } = await axios.get("/api/categories");
    const { categories } = data;
    setCategoriesData(categories);
    console.log(categories);
  }
  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="pt-2">
        <div className="carousel-banner d-flex  mt-4">
          <img
            className="banner-img responsive-img"
            src="https://img.freepik.com/free-photo/living-room-interior-wall-mockup-warm-tones-with-leather-sofa-which-is-kitchen-3d-rendering_41470-3753.jpg?w=826"
          />
          <div className="d-flex flex-column flex-justify-center align-items-center">
            <h1 className="banner-text ">You dream,</h1>
            <h1 className="banner-text ">we build!!</h1>
            <Link
              className="card-category-txt orange-bg btn-shop"
              to="/products"
            >
              Shop now
            </Link>
          </div>
        </div>
        <div className="d-flex flex-justify-center">
          <h3 className="mt-1">Top categories</h3>
        </div>
      </div>
      <div className="d-flex flex-justify-center align-items-stretch flex-wrap">
        {categoriesData.map(({ categoryImg, categoryName }, index) => {
          return (
            <div className="card flex-column card-vert card-shadow" key={index}>
              <img src={categoryImg} className="category-card-img" />
              <div className="d-flex flex-justify-center">
                <Link className="card-category-txt" to="/products">
                  {categoryName}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
