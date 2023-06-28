import React, { useEffect, useState } from "react";
import "./OrderHistory.css";
import { fetchorderhistory } from "../api";
import { useNavigate } from "react-router-dom";
import { Circles } from "react-loader-spinner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function OrderHistory() {
  const [orderHistory, setOrderHistory] = useState([]);
  //ISLOADING
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoading(true);
    fetchorderhistory()
      .then((data) => setOrderHistory(data.data))
      .catch((error) => console.error("Error: ", error));
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="container" style={{ width: "10px", margin: "auto" }}>
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
    );
  }

  return (
    <div className="h-screen relative">
      <Navbar />
      <div className="order-history">
        <h1 className="order-history__title">Order Detail</h1>
        <div className="order-history__list">
          {orderHistory.length === 0 ? (
            <p className="order-history__empty">No Data Found</p>
          ) : (
            <ul>
              {orderHistory.map((order) => (
                <li
                  key={order.id}
                  className="order-history__item"
                  onClick={() => navigate(`/orderDetail/${order.id}`)}
                >
                  <div className="order-history__item-content">
                    <div className="order-history__item-info">
                      <span className="order-history__item-id">
                        Order ID: {order.id}
                      </span>
                      <span className="order-history__item-status">
                        Status: {order.status}
                      </span>
                    </div>
                    <div className="order-history__item-qty">
                      Qty: {order.totalItemsQty}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <Footer className="absolute bottom-0"/>
    </div>
  );
}

export default OrderHistory;
