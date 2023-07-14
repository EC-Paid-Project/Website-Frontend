import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import noUser from "../assets/noUser.png";
import { Link, useNavigate } from "react-router-dom";
import { HiShoppingCart, HiArchive } from "react-icons/hi";
import { CiLogout ,CiLogin} from "react-icons/ci";
import { logout } from "../api";
import { FirebaseSignOut } from "../pages/Firebase/config";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  const [img, setImg] = useState(
    user?.img ||
      "https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg"
  );

  const navigate = useNavigate();

  const handleProductsClick = (e) => {
    e.preventDefault();
    navigate("/", { state: { scrollTarget: "products" } });
  };

  return (
    <nav className="w-full">
      <ul >
        <li >
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
            <li>
              <Link to="/map" className="font-bold">
                Distributors
              </Link>
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
              <div className="user-profile  mr-14">
                {user ? (
                  <img src={img} alt="Profile" className="profile-image" />
                ) : (
                  <img src={noUser} alt="Profile" className="profile-image" />
                )}
                {user ? (
                  <span className="username justify-center">{user?.name}</span>
                ) : (
                  <span className="username justify-center">User</span>
                )}
              </div>
            </Link>
            {!user ? (
              <Link to={"/signin"}>
                <div className="cursor-pointer">
                  <button className="signin-btn"><CiLogin/></button>
                </div>
              </Link>
            ) : (
              <button
                onClick={async()=>{
                  // FirebaseSignOut();
                  try{

                    const a=await
                     logout();
                     if(a.status===200){

                       localStorage.removeItem("user");
                       localStorage.removeItem("authToken");
                       navigate("/signin");
                     }
                  }catch(err){
                    console.log(err);
                  }
                }}>
                <CiLogout/>
              </button>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
