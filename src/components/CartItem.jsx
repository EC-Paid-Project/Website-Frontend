import "./CartItem.css";
import React, { useEffect, useState } from "react";
import {RiDeleteBin6Fill} from "react-icons/ri";

const CartItem = ({ item, onIncrement, onDecrement }) => {
  const { title, image, price } = item;
  const [quantity, setQuantity] = useState(item.quantity);

  useEffect(() => {
    setQuantity(item.quantity);
  }, [item.quantity]);

  const handleIncrement = () => {
    onIncrement();
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      onDecrement();
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="cart-item">
        <div className="item-image-container">
          <img className="item-image" src={image} alt={title} />
        </div>
        <div className="item-details">
          <div class="details-left">
            <h3 className="item-name">{title}</h3>
            <button type="button" className="remove-item"> <RiDeleteBin6Fill className="mr-2" /> Remove Item</button>
          </div>
          <span className="item-price">PKR {price}</span>
          <div className="item-quantity">
            <button className="quantity-button" onClick={handleDecrement}>
              -
            </button>
            <span className="quantity">{quantity}</span>
            <button className="quantity-button" onClick={handleIncrement}>
              +
            </button>
          </div>
        </div>
    </div>
  );
};

export default CartItem;
