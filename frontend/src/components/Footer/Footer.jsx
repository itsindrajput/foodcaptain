import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={assets.logof} alt="Food Captain" className="footer-logo" />
          <p>
            Food Captain connects food lovers with their favorite restaurants
            for quick and easy delivery. Explore a variety of cuisines,
            customize your orders, and enjoy a smooth ordering experience from
            start to finish.
          </p>
        </div>

        <div className="footer-links">
          <h3>Company</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Get in Touch</h3>
          <ul>
            <li>📞 +91-8382022356</li>
            <li>📧 foodcaptain@gmail.com</li>
          </ul>
          <div className="footer-social">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>
      </div>

      <hr />

      <p className="footer-bottom">© 2024 Food Captain. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
