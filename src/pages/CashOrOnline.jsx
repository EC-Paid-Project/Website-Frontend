import React, { useState } from 'react';

const PaymentPage = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleOnlinePaymentClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmPayment = () => {
    // Perform online payment logic
    setShowConfirmation(false);
  };

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <button
          style={{
            backgroundColor: 'green',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '24px',
            padding: '10px 20px',
            marginRight: '5px',
          }}
          onClick={() => {}}
        >
          <span style={{ marginRight: '10px' }}>Cash On Delivery</span>
          <i className="fas fa-money-bill-wave" />
        </button>
        <hr style={{ border: '1px solid black', width: '1px', margin: '0 20px', display: 'inline-block' }} />
        <button
          style={{
            backgroundColor: 'blue',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '24px',
            padding: '10px 20px',
          }}
          onClick={handleOnlinePaymentClick}
        >
          <span style={{ marginRight: '10px' }}>Online Payment</span>
          <i className="fas fa-credit-card" />
        </button>
      </div>
      {showConfirmation && (
        <div style={{ textAlign: 'center' }}>
          <p>Please confirm your online payment.</p>
          <button
            style={{
              backgroundColor: 'blue',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '16px',
              padding: '8px 16px',
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
