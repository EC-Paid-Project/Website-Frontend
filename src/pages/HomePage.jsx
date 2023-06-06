import React from "react";
import "./HomePage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomCarousel from "../components/Carousel";
import ProductGrid from "./GridPage";
import productData from "../data/productData"; // Updated import

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="relative min-h-screen ">
        <CustomCarousel />
        <div className="product-title">
          <h2 className="underline">Our Products</h2>
        </div>
        <div className="product-1">
          <ProductGrid products={productData} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
