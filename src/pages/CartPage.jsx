import React, { useState } from "react";
import "./CartPage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";

const CartPage = () => {
  const [cartItems, setCartItems] = useState(2);

  return (
    <div>
      <Navbar />
      <div className="cart-page-main min-h-screen">
        {/* <div className="cart-page-center"> */}
        <div className="cart-page-section-left">
          <h2 className="cart-page-section-title">
            Cart Items ({cartItems} Items)
          </h2>
          <div className="cart-page-cart-item">
            <CartItem />
          </div>
        </div>
        <div className="cart-page-section-right"></div>
        {/* </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
