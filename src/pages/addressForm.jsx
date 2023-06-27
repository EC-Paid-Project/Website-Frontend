import React, { useState } from 'react';
import './addressForm.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAddressAndPhone} from '../reduxStore/reducer';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { findClosestDistributor } from '../actions/closest_distributor';
import { getDistributors } from '../actions/action';


const MyAddressForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [houseNo, setHouseNo] = useState('');
  const [postCode, setPostCode] = useState('');
  const [area, setArea] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async() => {
    // Validate input fields
    if (
      houseNo === '' ||
      postCode === '' ||
      area === '' ||
      city === '' ||
      phone === ''
    ) {
      setErrorMessage('Please fill in all fields.');
    } else if (phone.length !== 10) {
      setErrorMessage('Phone number should be 10 digits long.');
    } else {
      // Send data to backend
      const data = {
        houseNo,
        postCode,
        area,
        city,
        phone: `+92${phone}`,
      };

      // Perform backend request here...
dispatch(setAddressAndPhone(data))
      // Reset form
      setHouseNo('');
      setPostCode('');
      setArea('');
      setCity('');
      setPhone('');
      setErrorMessage('');
      navigate('/paymentPage');
await dispatch(getDistributors())
    }
  };

  return (
    <div>
    <Navbar/>
      <div className="form-container">
        <h2 className="form-title">Enter Your Details</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="form-group">
          <label>House Number:</label>
          <input
            type="text"
            value={houseNo}
            onChange={(e) => setHouseNo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Postcode:</label>
          <input
            type="number"
            value={postCode}
            onChange={(e) => setPostCode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Area:</label>
          <input
            type="text"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>City:</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <div style={{display:"flex",alignItems:"center"}}>
          <span className="phone-prefix">+92</span>
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            
            />
            </div>
        </div>
        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <Footer/>
    </div>
  );

};

export default MyAddressForm;
