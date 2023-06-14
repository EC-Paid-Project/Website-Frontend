import React from "react";
import "./ProductView.css";
import { Link } from "react-router-dom";

const ProductView = (props) => {
  return (
    <div className="product-view-main">
      <div className={`product-view-back-1 ${props.color1}`}></div>
      <div className={`product-view-back-2 ${props.color0}`}></div>
      <div className="product-view-card">
        <div className="product-view-image">
          <img src={props.image} alt="product-image" />
        </div>
        <div className="product-view-section">
          <Link to={`/product/${props.id}`}>
            <h3 className="product-view-title">{props.title}</h3>
          </Link>
          <h4 className="product-view-price">PKR {props.price}</h4>
          <p className="product-view-desc">
            {props.desc.length > 50
              ? props.desc.slice(0, 250) + "..."
              : props.desc}
          </p>
              <h4 className="product-view-price"> {!props.availability? "Available":"Not available"}  </h4>
              <h4 className="product-view-price">size {props.size}</h4>
              <h4 className="product-view-price">weight {props.weight}</h4>
          <Link to={`products/${props.id}`}>
            <div className="product-view-button">Shop Now</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
