import React, {useEffect, useRef, useState} from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import cartIcon from "../assets/cart.png";
import profileImage from "../assets/Cartoonify.png";
import { Link, useNavigate } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = ({productsSectionRef}) => {
  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);
  const [status, setStatus] = useState(null)
  const [userName, setUserName] = useState(null)
  useEffect(() => { 
    const status = localStorage.getItem("user");
    const userName = localStorage.getItem("fullName");
    setStatus(status || null)
    setUserName(userName || "John Doe")
  }, [userName])

  const navigate = useNavigate();

  const handleProductsClick = (e) => {
    e.preventDefault();
    navigate('/', { state: { scrollTarget: 'products' } });
  };


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
              <a href="/" onClick={handleProductsClick} className="font-bold">
                Products
              </a>
            </li>
            <li>
              <Link to="/about" className="font-bold">
                About
              </Link>
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
                <span className="username">{userName}</span>
              </div>
            </Link>
            {!status && <Link to={"/signin"}>
              <div className="signin">
                <button className="signin-btn">Login</button>
              </div>
            </Link>}
          </div>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
