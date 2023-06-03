import React from "react";
// import bg from "../assets/bg.jpg";
import "./HomePage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomCarousel from "../components/Carousel";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="relative min-h-screen ">
        <CustomCarousel />
        <div className="product-1">
          <div className="product-1-content"></div>
        </div>
        <div className="product-2">
          <div className="product-2-content"></div>
        </div>
        <div className="product-3">
          <div className="product-3-content"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
