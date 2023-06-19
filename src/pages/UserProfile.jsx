import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./UserProfile.css";
// import { useParams } from "react-router-dom";
import userImg from "../assets/Cartoonify.png";
import { IoMdLogOut } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

const UserProfile = () => {
  // const { userId } = useParams();
  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  const user = JSON.parse(localStorage.getItem("lpgUser"));
  console.log(user);


  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [status, setStatus] = useState(null)
  useEffect(() => { 
   
   
  }, [])

  useEffect(() => {
    // Check if values exist in localStorage
    // const storedFullName = localStorage.getItem("fullName");
    // const storedUsername = localStorage.getItem("username");
    // const storedEmail = localStorage.getItem("email");
    // const storedPhone = localStorage.getItem("phone");
    // const storedAddress = localStorage.getItem("address");

    // Set values to localStorage values if available, otherwise set default values
    // setFullName(storedFullName || "John Doe");
    // setUsername(storedUsername || "johndoe");
    // setEmail(storedEmail || "johndoe@example.com");
    // setPhone(storedPhone || "1234567890");
    // setAddress(storedAddress || "123 ABC Street");
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdateClick = () => {
    // Perform update logic here, such as making an API request
    // localStorage.setItem("fullName", fullName);
    // localStorage.setItem("username", username);
    // localStorage.setItem("email", email);
    // localStorage.setItem("phone", phone);
    // localStorage.setItem("address", address);
    // After updating, set isEditing back to false to lock the inputs
    setIsEditing(false);
    window.location.reload();
  };

  return (
    <div>
      <Navbar />
      <div className="user-page-main min-h-screen relative">
        <div className="cover-image">
          <img src="https://picsum.photos/1920/320" alt="" />
          <div className="user-page-overlay"></div>
        </div>
        {status && <button className="logout-btn" onClick={() => handleLogout()}>
          <IoMdLogOut className="mr-2 text-lg" /> Logout
        </button>}
        <div className="user-image z-10" data-aos='zoom-out' data-aos-duration='1500'>
          <img src={userImg} alt="" />
        </div>
        {/* <div className="user-profile-details"> */}
        {/* <form action="">
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Full Name"
            />
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" placeholder="Email" />
            <label htmlFor="phone">Phone:</label>
            <input type="tel" name="phone" id="phone" placeholder="Phone" />
            <label htmlFor="address">Address:</label>
            <textarea
              name="address"
              id="address"
              cols="30"
              rows="10"
              placeholder="Address"
            ></textarea>
            <button className="update-btn" onClick={() => updateUserDetails()}>
              Update
            </button>
          </form> */}
        <form className="user-form" data-aos='fade-up' data-aos-duration='1500'>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="fullName">Full Name:</label>
              <input
                type="text"
                id="fullName"
                value={user.first_name+" "+user.last_name}
                onChange={(e) => setFullName(e.target.value)}
                readOnly={!isEditing}
              />
            </div>
            <div className="form-field">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={user.username}
                onChange={(e) => setUsername(e.target.value)}
                readOnly={!isEditing}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={user.email}
                onChange={(e) => setEmail(e.target.value)}
                readOnly={!isEditing}
              />
            </div>
            <div className="form-field">
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                readOnly={!isEditing}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                readOnly={!isEditing}
              />
            </div>
          </div>
          <div className="form-row btn-row">
            {isEditing ? (
              <button
                type="button"
                className="edit-btn"
                onClick={handleUpdateClick}
              >
                Update
              </button>
            ) : (
              <button
                type="button"
                className="edit-btn"
                onClick={handleEditClick}
              >
                Edit
              </button>
            )}
          </div>
        </form>
      </div>
      {/* </div> */}
      <Footer />
    </div>
  );
};

export default UserProfile;
