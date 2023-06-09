import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./UserProfile.css";
import { useParams } from "react-router-dom";
import userImg from "../assets/Cartoonify.png";
import { IoMdLogOut } from "react-icons/io";

const UserProfile = () => {
  const { userId } = useParams();

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const updateUserDetails = () => {
    alert("User details updated successfully!");
  };

  const [fullName, setFullName] = useState("John Doe");
  const [username, setUsername] = useState("johndoe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [phone, setPhone] = useState("1234567890");
  const [address, setAddress] = useState("123 ABC Street");
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdateClick = () => {
    // Perform update logic here, such as making an API request

    // After updating, set isEditing back to false to lock the inputs
    setIsEditing(false);
  };

  return (
    <div>
      <Navbar />
      <div className="user-page-main min-h-screen relative">
        <div className="cover-image">
          <img src="https://picsum.photos/1920/400" alt="" />
          <div className="user-page-overlay"></div>
        </div>
        <button className="logout-btn" onClick={() => handleLogout()}>
          <IoMdLogOut className="mr-2 text-lg" /> Logout
        </button>
        <div className="user-image z-10">
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
        <form className="user-form">
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="fullName">Full Name:</label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                readOnly={!isEditing}
              />
            </div>
            <div className="form-field">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
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
                value={email}
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
