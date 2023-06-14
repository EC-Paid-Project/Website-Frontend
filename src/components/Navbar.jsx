import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import cartIcon from "../assets/cart.png";
import profileImage from "../assets/Cartoonify.png";
import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </li>
        <li>
          <ul className="">
            <li>
              <Link to="/" className="font-bold">
                Home
              </Link>
            </li>
            <li>
              <a href="/about" className="font-bold">
                About
              </a>
            </li>
            <li>
              <a href="#" className="font-bold">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="font-bold">
                Contact
              </a>
            </li>
          </ul>
        </li>
        <li>
          <div className="navRight">
            <Link to={"/cart"}>
              <button className="cart-button">
                <HiShoppingCart />
              </button>
            </Link>
            <Link to={"/profile"}>
              <div className="user-profile">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="profile-image"
                />
                <span className="username">John Doe</span>
              </div>
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
