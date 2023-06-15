import "./CartItem.css";
import { useDispatch } from "react-redux";
import {addProductToCart,removeProductFromCart} from "../reduxStore/reducer"
import React, { useEffect, useState } from "react";
import {RiDeleteBin6Fill} from "react-icons/ri";


const CartItem = ({ product, onIncrement, onDecrement }) => {
  const { title, image, price } = product;
  const [quantity, setQuantity] = useState(product.quantity);
  const dispatch = useDispatch();
  useEffect(() => {
    setQuantity(product.quantity);
  }, [product.quantity]);

  const handleIncrement = () => {
    if (product.id != null) {
      dispatch(addProductToCart(product));
      setQuantity(quantity +1 )
    }
  };
  
  const handleDecrement = () => {
    if (quantity > 0) {
      dispatch(removeProductFromCart(product)); 
      setQuantity(quantity - 1)
    }
  };

  const handleRemoveProduct = () => {
    if (quantity > 0) {
      // onRemove();
      console.log(product)
      setQuantity(0);
    }
  };

  return (

    <div className="cart-product">
      <div className="product-container">
        <div className="product-image-container">
          <img className="product-image" src={`https://owaisali246.pythonanywhere.com/${product.image}`} alt={product.title} />
        </div>
        <div className="product-details">
          <h3 className="product-name">{product.name}</h3>
          <span className="product-name">PKR {product.price}</span>
          <div className="product-quantity">
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
    </div>
  );
};

export default CartItem;
