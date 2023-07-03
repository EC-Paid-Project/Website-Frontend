import React, { useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";


const ConfirmationPage = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    // Simulating an order confirmation after a delay of 3 seconds
    const timer = setTimeout(() => {
      setShowConfirmation(true);
      navigate("/orderhistory",{replace:true});
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-max h-max mx-auto my-[30vh]">
      {showConfirmation ? (
        <div className="confirmation-animation" style={{ color: "green" }}>
          <h2>Order Confirmed!</h2>
          <p>Your order has been successfully placed.</p>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center w-max ">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#2c9fe6"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
          <h2>Processing Order...</h2>
          <p>Please wait while we process your order.</p>
        </div>
      )}
    </div>
  );
};

export default ConfirmationPage;
