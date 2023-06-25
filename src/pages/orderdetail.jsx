import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
// import moment from 'moment';
import './orderdetail.css';
import { fetchOrderDetails } from '../api';
import { Circles } from 'react-loader-spinner';

const OrderDetailPage = () => {
  const { id } = useParams();
//   const history = useHistory();
  const [order, setOrder] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
setLoading(true)
    fetchOrderDetails(id).then((data) => {
        setOrder(data.data)
    }).catch((error) => {
        console.error('Error: ', error);
    })
    setLoading(false)
  }, [id]);

  const handleCancelOrder = () => {
    // Implement cancel order logic here
    // You can show a confirmation dialog before canceling the order
    // After canceling, navigate back to the homepage or any desired page
    // history.push('/mainPage');
  };



  if (isLoading) {
    return  <div className="container"  style={{width:"10px",margin:"auto"}}>
    <Circles
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  </div>
  }
  if (!order) {
    return <div className="no-data">No order data found</div>;
  }

  return (
    <div className="order-detail-page">
      <h2 className="order-detail-page__title">Order Detail</h2>
      <div className="order-detail-page__container">
        <div className="order-detail-page__section">
          <h3 className="order-detail-page__section-title">Order Information</h3>
          <ul className="order-detail-page__info-list">
            <li>
              <span className="order-detail-page__info-label">Date:</span>
              <span className="order-detail-page__info-value">
                {((order.order_info).date)}
              </span>
            </li>
            <li>
              <span className="order-detail-page__info-label">Distributor ID:</span>
              <span className="order-detail-page__info-value">{(order.order_info).distributor}</span>
            </li>
            <li>
              <span className="order-detail-page__info-label">Status:</span>
              <span className="order-detail-page__info-value">{order.order_info.status}</span>
            </li>
            <li>
              <span className="order-detail-page__info-label">Address:</span>
              <span className="order-detail-page__info-value">{order.order_info.address}</span>
            </li>
            <li>
              <span className="order-detail-page__info-label">Total Items Qty:</span>
              <span className="order-detail-page__info-value">{order.order_info.totalItemsQty}</span>
            </li>
            <li>
              <span className="order-detail-page__info-label">Total Price:</span>
              <span className="order-detail-page__info-value">{order.order_info.totalPrice}</span>
            </li>
          </ul>
        </div>
        <div className="order-detail-page__section">
          <h3 className="order-detail-page__section-title">Order Items</h3>
          <ul className="order-detail-page__item-list">
            {order.order_item.map((item) => (
              <li key={item.id} className="order-detail-page__item">
                <span className="order-detail-page__item-label">Product ID:</span>
                <span className="order-detail-page__item-value">{item.id}</span>
                <span className="order-detail-page__item-label">Quantity:</span>
                <span className="order-detail-page__item-value">{item.quantity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button className="order-detail-page__cancel-btn" onClick={handleCancelOrder}>
        Cancel Order
      </button>
    </div>
  );
};

export default OrderDetailPage;
