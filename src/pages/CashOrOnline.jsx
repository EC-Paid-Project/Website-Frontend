import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { sendOrder } from "../actions/action";
import ReactAlfaPayment from 'react-alfa-payment'
import './CashOrOnline.css'


const PaymentPage = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { addressAndPhone, cart } = useSelector((state) => state.centralStore);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnlinePaymentClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmPayment = () => {
    // Perform online payment logic
    setShowConfirmation(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <button
        className="cod-checkout-btn"
        onClick={() => {
          const distributor = JSON.parse(
            localStorage.getItem("lpgDistributor")
          );
          console.log(distributor);
          dispatch(sendOrder(addressAndPhone, cart, distributor?.id, "COD"));
          navigate("/confirm");
        }}
      >
        <span style={{ marginRight: "10px" }}>Cash On Delivery</span>
        <i className="fas fa-money-bill-wave" />
      </button>
      <div style={{ display: "flex", alignItems: "center" }}>
        <hr
          style={{ border: "1px solid black", flex: "1", margin: "0 10px" }}
        />
        <span style={{ fontSize: "20px", fontWeight: "bold" }}>OR</span>
        <hr
          style={{ border: "1px solid black", flex: "1", margin: "0 10px" }}
        />
      </div>
      {/* <button
        style={{
          backgroundColor: "blue",
          color: "white",
          fontWeight: "bold",
          fontSize: "24px",
          padding: "10px 20px",
          marginTop: "10px",
        }}
        onClick={handleOnlinePaymentClick}
      >
        <span style={{ marginRight: "10px" }}>Online Payment</span>
        <i className="fas fa-credit-card" />
      </button> */}
      <ReactAlfaPayment 
        alfaConfig={{
            merchantId: '23063',
            storeId: '030678',
            channelId: '1001',
            merchantHash: 'zWsOsg0VNuC82S3w1/nOQq5y6u+PizCOIRxBaFOv2Uw=',
            merchantUsername: 'erenet',
            merchantPassword: 'wH4Lea3Q3VtvFzk4yqF7CA==',
            redirectUrl: 'http://127.0.0.1:3000/',
            secretKey1: '7rUGPrSgzy5ce3ra',
            secretKey2: '5352936840690238',
            transactionReferenceNumber: '5467',
            transactionAmount: 10,
        }} 
        message="Proceed to Pay"
        className="alfa-checkout-btn"
        isSandbox = {true}
    />
      {showConfirmation && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <p>Please confirm your online payment.</p>
          <button
            style={{
              backgroundColor: "blue",
              color: "white",
              fontWeight: "bold",
              fontSize: "16px",
              padding: "8px 16px",
            }}
            onClick={handleConfirmPayment}
          >
            Confirm
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
