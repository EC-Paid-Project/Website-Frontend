import React from "react";
import "./ProductView.css";
import { Link } from "react-router-dom";
import { baseURL } from "../api";

const ProductView = (props) => {
  const renderBanner = () => {
    if (props.discount) {
      return (
        <div className="product-view-banner bg-red-500 text-yellow-200 font-bold py-1 px-2 absolute  text-center top-2 right-2 w-1/6">
          On Sale
        </div>
      );
    }
    return null;
  };

  return (
    <div className="product-view-main">
      <div className={`product-view-card ${props.color1} relative`}>
        {renderBanner()}
        <div className="product-view-image">
          <img src={`${baseURL}${props.image}`} alt="product-image" />
        </div>
        <div className="product-view-section p-4">
          <Link to={`/product/${props.id}`}>
            <h3 className="product-view-title text-lg font-bold mb-2">
              {props.title}
            </h3>
          </Link>
          {props.discount ? (
            <div className="product-view-price-wrapper mb-2">
              <span className="product-view-cancel-price line-through text-gray-500">
                PKR {props.price}
              </span>
              <span className="product-view-discount-price text-red-600 font-bold ml-2">
                PKR {props.price -(props.discount*props.price/100)}
              </span>
            </div>
          ) : (
            <h4 className="product-view-price mb-2">PKR {props.price}</h4>
          )}
          <p className="product-view-desc text-gray-700">
            {props.desc.length > 10
              ? props.desc.slice(0, 110) + "..."
              : props.desc}
          </p>
          {/* <h4 className="product-view-details">{!props.availability? "Available":"Not available"}  </h4> */}
          {/* <h4 className="product-view-details">Size: {props.size}</h4> */}
          <h4 className="product-view-details mt-2">Weight: {props.weight}Kg</h4>
          <Link to={`product/${props.id}`}>
            <div className="product-view-button mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer">
              Shop Now
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
