import React from "react";
import "./CartItem.css";

const CartItem = ({item}) => {
  return <>
   <div>{item.title }</div>
   <div>{"  quantity "+item.quantity}</div>
  </>
};

export default CartItem;
