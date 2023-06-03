import React from "react";
import "./HomePage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomCarousel from "../components/Carousel";
import ProductView from "../components/ProductView";
import productData from "../data/productData";

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
          <ProductView
            title={productData[0].title}
            id={productData[0].id}
            image={productData[0].image}
            // image={bg}
            desc={productData[0].desc}
            price={productData[0].price}
            color1={"product-view-color-white"}
            color0={"product-view-color-blue"}
          />
        </div>
        <div className="product-1">
          <ProductView
            title={productData[1].title}
            id={productData[1].id}
            image={productData[1].image}
            desc={productData[1].desc}
            price={productData[1].price}
            color1={"product-view-color-blue"}
            color0={"product-view-color-white"}
          />
        </div>
        <div className="product-1">
          <ProductView
            title={productData[2].title}
            id={productData[2].id}
            image={productData[2].image}
            desc={productData[2].desc}
            price={productData[2].price}
            color1={"product-view-color-white"}
            color0={"product-view-color-blue"}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
