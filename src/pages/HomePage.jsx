import React, { useEffect } from "react";
import "./HomePage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomCarousel from "../components/Carousel";
import ProductView from "../components/ProductView";
import productData from "../data/productData";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="relative min-h-screen ">
        <div data-aos="zoom-in" data-aos-duration="1000">
          <CustomCarousel />
        </div>
        <div className="product-title">
          <h2 className="underline">Our Products</h2>
        </div>
        <div className="product-1" data-aos="fade-up">
          <ProductView
            title={productData[0].title}
            id={productData[0].id}
            image={productData[0].image}
            // image={bg}
            desc={productData[0].desc}
            price={productData[0].price}
            color1={"bg-color-white"}
            color0={"bg-color-blue"}
          />
        </div>
        <div data-aos="fade-up" className="product-1">
          <ProductView
            title={productData[1].title}
            id={productData[1].id}
            image={productData[1].image}
            desc={productData[1].desc}
            price={productData[1].price}
            color1={"bg-color-blue"}
            color0={"bg-color-white"}
          />
        </div>
        <div data-aos="fade-up" className="product-1">
          <ProductView
            title={productData[2].title}
            id={productData[2].id}
            image={productData[2].image}
            desc={productData[2].desc}
            price={productData[2].price}
            color1={"bg-color-white"}
            color0={"bg-color-blue"}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
