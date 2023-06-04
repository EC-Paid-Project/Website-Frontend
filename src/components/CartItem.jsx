import React from "react";
import "./CartItem.css";

const CartItem = ({ item }) => {
  return (
    <div className="cart-item-main">
      <div className="cart-item-title">{item.title}</div>
      <div className="cart-item-quantity">{"  quantity " + item.quantity}</div>
      <div className="cart-item-price">
        PKR {parseInt(item.price) * parseInt(item.quantity)}
      </div>
    </div>
  );
};

export default CartItem;
