import React, {useEffect, useRef, useState} from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import cartIcon from "../assets/cart.png";
// import profileImage from "../assets/Cartoonify.png";
import noUser from "../assets/noUser.png";
import { Link, useNavigate } from "react-router-dom";
import { HiShoppingCart,HiArchive } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";
import { logout } from "../api";
import { FirebaseSignOut } from "../pages/Firebase/config";


const Navbar = ({productsSectionRef}) => {

  const user=JSON.parse(localStorage.getItem("user"))
  const [img, setImg] = useState(user?.img || "https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg")

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
            <Link to={"/orderhistory"}>
              <button className="cart-button">
                <HiArchive />
              </button>
            </Link>
            <Link to={"/profile"}>
              <div className="user-profile">
                {user?
                  <img
                  src={img}
                  alt="Profile"
                  className="profile-image"
                />:
                <img
                  src={noUser}
                  alt="Profile"
                  className="profile-image"
                />}
                {user ?
                  <span className="username">{user?.name}</span>:
                  <span className="username">User</span>}
              </div>
            </Link>
            {!user ?<Link to={"/signin"}> 
              <div className="signin">
                <button className="signin-btn">Login</button>
              </div>
            </Link>:
              <div className="signin">
                <button className="signin-btn"
                onClick={async()=>{
                  FirebaseSignOut();
                  await logout();
                  localStorage.clear();
                  navigate("/signin");
                }}>Logout</button>
              </div>
            }
          </div>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
