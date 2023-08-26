import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./UserProfile.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [localuser, setLocalUser] = useState(JSON.parse(localStorage.getItem("user-profile")) || {});
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || {});
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  const [fullName, setFullName] = useState(user.first_name ||user.name  || "");
  const [username, setUsername] = useState(user.username || "");
  const [email, setEmail] = useState(user.email || localuser.email || "");
  const [phone, setPhone] = useState(localuser.phone || "");
  const [img, setImg] = useState(
    user.img ||
      "https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg"
  );
  const [address, setAddress] = useState(localuser.address || "");
  const [isEditing, setIsEditing] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");
    navigate("/signin");
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdateClick = () => {
    const updatedUser = {
      ...user,
      name: fullName,
      username: username,
      email: email,
      phone: phone,
      address: address,
    };
    localStorage.setItem("user-profile", JSON.stringify(updatedUser));
    setIsEditing(false);
  };

  return (
    <div>
      <Navbar />
      <div className="user-page-main min-h-screen relative">
        <form className="user-form" data-aos="fade-up" data-aos-duration="1500">
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
      <Footer />
    </div>
  );
};

export default UserProfile;
