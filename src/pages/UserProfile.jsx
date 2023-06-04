import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./UserProfile.css";
import { useParams } from "react-router-dom";
import userImg from "../assets/Cartoonify.png";

const UserProfile = () => {
  const { userId } = useParams();

  return (
    <div>
      <Navbar />
      <div className="user-page-main min-h-screen">
        <div className="cover-image">
          <img src="https://picsum.photos/1920/400" alt="" />
        </div>
        <div className="user-image">
          <img src={userImg} alt="" />
        </div>
        <div className="user-profile-details"></div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
