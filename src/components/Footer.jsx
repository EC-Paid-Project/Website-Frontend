import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    // <footer>
    //   <div className="footer-content">
    //     <ul className="footer-links">
    //       <li>
    //         <a href="#">Company Info</a>
    //       </li>
    //       <li>
    //         <a href="#">About</a>
    //       </li>
    //       <li>
    //         <a href="#">Services</a>
    //       </li>
    //       <li>
    //         <a href="#">Contact</a>
    //       </li>
    //     </ul>
    //     <p>&copy; 2023 Your Company. All rights reserved.</p>
    //   </div>
    // </footer>
    <footer>
      <div className="footer-content">
        <div className="footer-column">
          <h4>Company Info</h4>
          <p>Address: Your Company Address</p>
          <p>Phone: 123-456-7890</p>
          <p>Email: info@yourcompany.com</p>
        </div>
        <div className="footer-column">
          <h4>Working Hours</h4>
          <p>Monday - Friday: 9am - 6pm</p>
          <p>Saturday: 9am - 2pm</p>
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
          <h4>Download Our App</h4>
          <a href="#" className="app-link">
            <img src="android-app-icon.png" alt="Android App" />
          </a>
          <a href="#" className="app-link">
            <img src="ios-app-icon.png" alt="iOS App" />
          </a>
        </div>
        <div className="footer-column">
          <h4>Our Vision</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            tristique tellus ut libero vehicula, sed finibus metus mollis.
          </p>
        </div>
      </div>
      <p>&copy; 2023 Your Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
