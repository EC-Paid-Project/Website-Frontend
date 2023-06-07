import React from "react";
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
        <div className="user-profile-details"></div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
