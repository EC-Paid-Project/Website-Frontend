import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ProductPage.css";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCart,
  removeProductFromCart,
  addProductQuantity,
} from "../reduxStore/reducer";
import { fetchOneProduct } from "../actions/action";
import AOS from "aos";
import "aos/dist/aos.css";
import { Circles } from "react-loader-spinner";
import { baseURL } from "../api";

const ProductPage = () => {
  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  const { cart, isLoading } = useSelector((state) => state.centralStore);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState({});
  const Navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addProductToCart(product));
    Navigate("/cart");
  };

  const handlePlus = (product) => {
    if (product.id != null) {
      setQuantity(quantity + 1);
    }
  };

  const handleMinus = (product) => {
    if (quantity === 1) {
      return;
    }
    dispatch(removeProductFromCart(product));
    setQuantity(quantity - 1);
  };

  useEffect(() => {
    dispatch(fetchOneProduct(id)).then((res) => {
      setProduct({ ...res, quantity: 0 });
    });
  }, [id]);

  useEffect(() => {
    if (cart.length > 0) {
      const productInCart = cart.find((item) => item.id === product.id);
      if (productInCart) {
        setQuantity(productInCart.quantity);
      } else {
        setQuantity(0);
      }
    }
  }, [cart, product.quantity]);

  if (isLoading) {
    return (
      <div className="container" style={{ width: "10px", margin: "auto" }}>
        <Circles
          height="80"
          width="80"
          color="#2c9fe6"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  const calculateDiscountedPrice = () => {
    if (product.discount && product.price) {
      const discountAmount = (product.price * product.discount) / 100;
      return product.price - discountAmount;
    }
    return null;
  };

  const discountedPrice = calculateDiscountedPrice();

  return (
    <div>
      <Navbar />
      <div className="product-page-main">
        <h2 className="product-page-title-main">{product.name}</h2>
        <div className={`product-page-back-1 bg-color-white`}></div>
        <div className={`product-page-back-2 bg-color-blue`}></div>
        <div
          className="product-page-card"
          data-aos="zoom-out"
          data-aos-duration="2000"
        >
          <div className="product-page-image">
            <img src={`${baseURL}${product.image}`} alt="product-image" />
          </div>
          <div className="product-page-section">
            <Link to={`/product/${product.id}`}>
              <h3 className="product-page-title">{product.name}</h3>
            </Link>
            {discountedPrice ? (
              <div className="product-page-price-wrapper">
                <span className="product-page-cancel-price line-through text-gray-500">
                  PKR {product.price}
                </span>
                <span className="product-page-discount-price text-red-600 font-bold ml-2">
                  PKR {discountedPrice}
                </span>
              </div>
            ) : (
              <h4 className="product-page-price">PKR {product.price}</h4>
            )}
            <h4 className="product-page-price"> Weight: {product.weight}</h4>
            <h4 className="product-page-price">Size: {product.size}</h4>
            <p className="product-page-desc">
              <span className="product-page-desc-heading">Description:</span>{" "}
              <br /> {product.description}
            </p>
            <button
              className="add-to-cart"
              onClick={() => {
                handleAddToCart(product);
                Navigate("/cart");
              }}
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
