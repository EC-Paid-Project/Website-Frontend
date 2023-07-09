import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { sendOrder } from "../actions/action";
import ReactAlfaPayment from "react-alfa-payment";
import "./CashOrOnline.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { deleteCart } from "../reduxStore/reducer";

const PaymentPage = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { addressAndPhone, cart } = useSelector((state) => state.centralStore);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnlinePaymentClick = () => {
    setShowConfirmation(true);
  };

  const handleCashPayment = async () => {
    // Perform online payment logic


    const distributor = JSON.parse(localStorage.getItem("lpgDistributor"));
    console.log(distributor);
    const a = await dispatch(
      sendOrder(addressAndPhone, cart, distributor?.id, "COD")
    );
    if (a != null) {
      navigate("/confirm",{replace:true});
      dispatch(deleteCart());

    }
  };
  const handleConfirmPayment = () => {
    // Perform online payment logic
    setShowConfirmation(false);
    const distributor = JSON.parse(localStorage.getItem("lpgDistributor"));
    console.log(distributor);
    dispatch(
      sendOrder(
        addressAndPhone,
        cart,
        distributor?.id,
        "Alpha Pay",
        generateRandomNumber
      )
    );
    navigate("/confirm", { replace: true });
  };

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 900000000) + 100000000;
    return randomNumber;
  };

  const randomOrderNumber = generateRandomNumber();

  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "70vh",
        }}
      >
        <button className="cod-checkout-btn" onClick={handleCashPayment}>
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
            merchantId: `${process.env.REACT_APP_MERCHANT_ID}`,
            storeId: `${process.env.REACT_APP_STORE_ID}`,
            channelId: `${process.env.REACT_APP_CHANNEL_ID}`,
            merchantHash: `${process.env.REACT_APP_MERCHANT_HASH}`,
            merchantUsername: `${process.env.REACT_APP_MERCHANT_USERNAME}`,
            merchantPassword: `${process.env.REACT_APP_MERCHANT_PASSWORD}`,
            redirectUrl: `${process.env.REACT_APP_REDIRECT_URL}`,
            secretKey1: `${process.env.REACT_APP_SECRET_KEY_1}`,
            secretKey2: `${process.env.REACT_APP_SECRET_KEY_2}`,
            transactionReferenceNumber: `${randomOrderNumber}`,
            transactionAmount: 10,
          }}
          message="Proceed to Pay"
          className="alfa-checkout-btn"
          isSandbox={true}
          onSuccess={(response) => {
            console.log(response);
          }}
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
      <Footer />
    </div>
  );
};

export default PaymentPage;
// owaisali246.soa@gmail.com
// 930003009542301
// 03363042666
