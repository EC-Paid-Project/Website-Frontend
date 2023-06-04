import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./UserProfile.css";

const UserProfile = () => {
  return (
    <div>
      <Navbar />
      <div className="user-page-main min-h-screen">User Profile page</div>
      <Footer />
    </div>
  );
};

export default UserProfile;
