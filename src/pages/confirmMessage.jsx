import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const ConfirmationPage = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    // Simulating an order confirmation after a delay of 3 seconds
    const timer = setTimeout(() => {
      setShowConfirmation(true);
      navigate('/');
    }, 3000);

    return () => 
    clearTimeout(timer);
  }, []);

  return (
    <div className="center-screen">
      {showConfirmation ? (
        <div className="confirmation-animation" style={{"color":"green"}}>
          <h2>Order Confirmed!</h2>
          <p>Your order has been successfully placed.</p>
        </div>
      ) : (
        <div className="loading-animation">
          <h2>Processing Order...</h2>
          <p>Please wait while we process your order.</p>
        </div>
      )}
    </div>
  );
};

export default ConfirmationPage;
