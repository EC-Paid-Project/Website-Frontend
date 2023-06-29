import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import playStore from "../assets/get-on-playStore.svg";
import appStore from "../assets/get-on-appStore.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-column">
          <h4 className="font-bold text-lg">Company Info</h4>
          <p className="text-sm">
            <span className="font-bold">Address:</span> A-23, St-12, Sector
            14-B, Karachi, Pakistan
          </p>
          <p className="text-sm">
            <span className="font-bold">Phone:</span> 123-456-7890
          </p>
          <p className="text-sm">
            <span className="font-bold">Email:</span> info@yourcompany.com
          </p>
        </div>
        <div className="footer-column">
          <h4 className="font-bold text-lg">Working Hours</h4>
          <p className="text-sm">
            <span className="font-bold">Monday - Friday:</span> 9am - 6pm
          </p>
          <p className="text-sm">
            <span className="font-bold">Saturday:</span> 9am - 2pm
          </p>
          <h4 className="font-bold text-lg mt-5">Our Socials</h4>
          <div className="social-icons">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <AiFillInstagram />
            </a>
          </div>
        </div>
        <div className="footer-column">
          <h4 className="font-bold text-lg">Download Our App</h4>
          <a href="#" className="app-link">
            <img
              src={playStore}
              alt="Android App"
              className="mb-2"
              title="Download for Android"
            />
          </a>
          <a href="#" className="app-link">
            <img src={appStore} alt="iOS App" title="Download for IOS" />
          </a>
        </div>
        <div className="footer-column">
          <h4 className="font-bold text-lg">Our Vision</h4>
          <p className="text-sm">
            To provide a user-friendly and informative platform that serves as a
            one-stop solution for all gas-related needs. We aim to provide a
            seamless online experience where customers can easily browse and
            purchase gas cylinders.
          </p>
        </div>
      </div>
      <p className="ml-[1rem]">
        &copy; 2023 Your Company. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
