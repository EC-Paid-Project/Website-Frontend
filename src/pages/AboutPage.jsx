import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./AboutPage.css";
import "typeface-poppins";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div className="about-page-main min-h-screen relative">
        <div className="cover-image">
          <h2 className="text-5xl font-bold text-white absolute z-10">
            About Us
          </h2>
          <img src="https://picsum.photos/1920/320" alt="" />
          <div className="about-page-overlay"></div>
        </div>
        <div className="about-page-content">
          <p>
            Welcome to <span className="company-name">SmartGas Solutions</span>,
            a leading gas manufacturing company dedicated to providing
            high-quality gas cylinders for various industries and applications.
            With years of experience and a commitment to excellence, we have
            established ourselves as a trusted name in the industry. <br />
            <br />
            At <span className="company-name">SmartGas Solutions</span>, we take
            pride in our superior manufacturing processes and stringent quality
            control measures. Our state-of-the-art facilities and advanced
            technology enable us to produce gas cylinders that meet the highest
            standards of safety and performance. We offer a wide range of
            cylinders suitable for diverse gases, ensuring that our customers
            find the perfect solution for their specific needs. <br />
            <br />
            Customer satisfaction is at the core of our business philosophy. We
            strive to build long-lasting relationships with our clients by
            understanding their requirements and delivering personalized
            solutions. Our team of experts is always ready to provide
            professional guidance and support, ensuring a seamless experience
            from order placement to delivery. <br />
            <br />
            As a responsible and environmentally conscious company, we
            prioritize sustainability and adhere to strict environmental
            regulations. We constantly invest in research and development to
            innovate and improve our products, ensuring that we stay at the
            forefront of the industry. <br />
            <br />
            Choose <span className="company-name">SmartGas Solutions</span> as
            your trusted partner for all your gas cylinder needs. Experience our
            commitment to quality, reliability, and customer satisfaction.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
