import React from "react";
import "./ProductView.css";

const ProductView = (props) => {
  return (
    <div className="product-view-main">
      {/* <div className="product-view-back-1 ${prop}"></div> */}
      <div className={`product-view-back-1 ${props.color1}`}></div>
      <div className={`product-view-back-2 ${props.color0}`}></div>
      <div className="product-view-card">
        <div className="product-view-image">
          <img src={props.image} alt="product-image" />
        </div>
        <div className="product-view-section">
          <h3 className="product-view-title">{props.title}</h3>
          <h4 className="product-view-price">PKR {props.price}</h4>
          <p className="product-view-desc">{props.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
