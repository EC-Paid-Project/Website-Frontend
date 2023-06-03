import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import cartIcon from "../assets/cart.png";
import profileImage from "../assets/Cartoonify.png";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <img src={logo} alt="Logo" className="logo" />
        </li>
        <li>
          <ul className="">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </li>
        <li>
          <div className="navRight">
            <button className="cart-button">
              <img src={cartIcon} alt="Cart" />
            </button>
            <div className="user-profile">
              <img src={profileImage} alt="Profile" className="profile-image" />
              <span className="username">John Doe</span>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
