import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductView from "../components/ProductView";
import productData from "../data/productData";
import "./ProductPage.css";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, removeProductFromCart } from "../reduxStore/reducer";

const ProductPage = () => {
  const { cart } = useSelector((state) => state.centralStore);
  const dispatch = useDispatch();

  const { id } = useParams();
  const product = productData.find((product) => product.id === parseInt(id));
  const [quantity, setQuantity] = useState(0);
  const Navigate = useNavigate();

  const handleAddToCart = (product) => {
    // dispatch(addProductToCart(product));
    console.log(cart);
    Navigate("/cart");
  };
  const handlePlus = (product) => {
    if (product.id != null) {
      dispatch(addProductToCart(product));
      console.log(cart);
    }
  };
  const handleMinus = (product) => {
    if (quantity > 0) {
      dispatch(removeProductFromCart(product));
      console.log(cart);
    }
  };

  useEffect(() => {
    if (cart.length > 0 && product) {
      const productInCart = cart.find((item) => item.id === product.id);
      if (productInCart) {
        setQuantity(productInCart.quantity);
      } else {
        setQuantity(0);
      }
    }
  }, [cart, product]);

  return (
    <div>
      <Navbar />
      <div className="product-page-main">
        <h2 className="product-page-title-main">{product.title}</h2>
        <div className={`product-page-back-1 bg-color-white`}></div>
        <div className={`product-page-back-2 bg-color-blue`}></div>
        <div className="product-page-card">
          <div className="product-page-image">
            <img src={product.image} alt="product-image" />
          </div>
          <div className="product-page-section">
            <Link to={`/product/${product.id}`}>
              <h3 className="product-page-title">{product.title}</h3>
            </Link>
            <h4 className="product-page-price">PKR {product.price}</h4>
            <p className="product-page-desc">
              <span className="product-page-desc-heading">Description:</span>{" "}
              <br /> {product.desc}
            </p>
            <div className="product-page-quantity">
              <button
                onClick={() => handleMinus(product)}
                className="minus-button"
              >
                <AiFillMinusCircle />
              </button>
              <h4 className="product-page-quantity-number">{quantity}</h4>
              <button
                onClick={() => handlePlus(product)}
                className="plus-button"
              >
                <AiFillPlusCircle />
              </button>
            </div>
            <button
              className="add-to-cart"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
