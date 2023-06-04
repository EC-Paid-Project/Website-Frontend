import "./CartItem.css"
import React, { useEffect, useState } from 'react';

const CartItem = ({ item, onIncrement, onDecrement }) => {
  const { title, image,price } = item;
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
      <div className="item-container">
        <div className="item-image-container">
          <img className="item-image" src={image} alt={title} />
        </div>
        <div className="item-details">
          <h3 className="item-name">{title}</h3>
            <span className="item-name">{price}</span>
          <div className="item-quantity">
            <button className="quantity-button" onClick={handleDecrement}>-</button>
            <span className="quantity">{quantity}</span>
            <button className="quantity-button" onClick={handleIncrement}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
