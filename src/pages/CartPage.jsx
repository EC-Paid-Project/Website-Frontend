import React from "react";
import "./CartPage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CartPage = () => {
  return (
    <div>
      <Navbar />
      <div className="cart-page-main min-h-screen">Cart Page</div>
      <Footer />
    </div>
  );
};

export default CartPage;
