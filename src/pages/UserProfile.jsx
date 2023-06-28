import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./UserProfile.css";
// import { useParams } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

const UserProfile = () => {
  // const { userId } = useParams();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))

  
  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, [user]);

  const [fullName, setFullName] = useState(user?.name || "John Doe");
  const [username, setUsername] = useState(user?.username || "johndoe");
  const [email, setEmail] = useState(user?.email || "johndow@example.com");
  const [phone, setPhone] = useState(user?.phone || "1234567890");
  const [img, setImg] = useState(user?.img || "https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg")
  const [address, setAddress] = useState(user?.address || "123 ABC Street");
  const [isEditing, setIsEditing] = useState(false);
  
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };



  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdateClick = () => {
    const updatedUser = {
      ...user,
      name : fullName,
      username : username,
      email : email,
      phone : phone,
      address : address
    }
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setIsEditing(false);
    // window.location.reload();
  };

  return (
    <div>
      <Navbar />
      <div className="user-page-main min-h-screen relative">
        <div className="cover-image">
          <img src="https://picsum.photos/1920/320" alt="" />
          <div className="user-page-overlay"></div>
        </div>
        {user && <button className="logout-btn" onClick={() => handleLogout()}>
          <IoMdLogOut className="mr-2 text-lg" /> Logout
        </button>}
        <div className="user-image z-10" data-aos='zoom-out' data-aos-duration='1500'>
          <img src={img} alt="" />
        </div>
        <form className="user-form" data-aos='fade-up' data-aos-duration='1500'>
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
