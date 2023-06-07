import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div className="about-page-main min-h-screen relative">
        <div className="cover-image">
          <h2 className="text-5xl font-bold text-white absolute z-10">
            About Us
          </h2>
          <img src="https://picsum.photos/1920/400" alt="" />
          <div className="about-page-overlay"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
