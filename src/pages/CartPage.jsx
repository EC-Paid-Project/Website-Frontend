import React, { useState, useEffect } from "react";
import "./CartPage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";
import { useDispatch,useSelector } from "react-redux";
import { addProductToCart, removeProductFromCart } from "../reduxStore/reducer";
import { removeListener } from "@reduxjs/toolkit";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const {cart}=useSelector(state=>state.centralStore)
  const dispatch=useDispatch()
  useEffect(() => {
    // Retrieve cart from local storage
    if (cart && cart.length > 0) {
      setCartItems(cart);
    } else {
      setCartItems([]);
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="cart-title">
          <h2 className="underline">Cart</h2>
        </div>
      <div className="cart-page-main min-h-screen">
        <div className="cart-page-section-left">
          <h2 className="cart-page-section-title">
            Cart Items ({cartItems.length} Items)
          </h2>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-page-cart-item">
              <CartItem item={item} onIncrement={()=>dispatch(addProductToCart(item))}
              onDecrement={()=>removeProductFromCart} />
            </div>
          ))}
        </div>
        <div className="cart-page-section-right"></div>``
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
