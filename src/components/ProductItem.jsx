import { CheckOutlined } from "@ant-design/icons";
import { ImageLoader } from "@/components/common";
import { displayMoney } from "@/helpers/utils";
import PropTypes from "prop-types";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useHistory } from "react-router-dom";
import "../pages/GridPage.css";

const ProductItem = ({ product, isItemOnBasket, addToBasket }) => {
  const history = useHistory();

  const onClickItem = () => {
    if (!product) return;

    if (product.id) {
      history.push(`/product/${product.id}`);
    }
  };

  const itemOnBasket = isItemOnBasket ? isItemOnBasket(product.id) : false;

  const handleAddToBasket = () => {
    if (addToBasket) addToBasket(product);
  };

  return (
    <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
      <div
        className={`product-card ${!product.id ? "product-loading" : ""}`}
        style={{
          border: product && itemOnBasket ? "1px solid #a6a5a5" : "",
          boxShadow:
            product && itemOnBasket ? "0 10px 15px rgba(0, 0, 0, .07)" : "none",
        }}
      >
        {itemOnBasket && (
          <CheckOutlined className="fa fa-check product-card-check" />
        )}
        <div
          className="product-card-content"
          onClick={onClickItem}
          role="presentation"
        >
          <div className="product-card-img-wrapper">
            {product.image ? (
              <ImageLoader
                alt={product.title}
                className="product-card-img"
                src={product.image}
              />
            ) : (
              <Skeleton width="100%" height="90%" />
            )}
          </div>
          <div className="product-details">
            <h5 className="product-card-name text-overflow-ellipsis margin-auto">
              {product.title || <Skeleton width={80} />}
            </h5>
            <h4 className="product-card-price">
              {product.price ? (
                displayMoney(product.price)
              ) : (
                <Skeleton width={40} />
              )}
            </h4>
          </div>
        </div>
        {product.id && (
          <button
            className={`product-card-button button-small button button-block ${
              itemOnBasket ? "button-border button-border-gray" : ""
            }`}
            onClick={handleAddToBasket}
            type="button"
          >
            {itemOnBasket ? "Remove from basket" : "Add to basket"}
          </button>
        )}
      </div>
    </SkeletonTheme>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  isItemOnBasket: PropTypes.func,
  addToBasket: PropTypes.func,
};

export default ProductItem;
