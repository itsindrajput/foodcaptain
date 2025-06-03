import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logof} alt="Food Captain" />
          <p>
            Food Captain is the perfect platform for quick, reliable food
            ordering and delivery! Designed to connect food lovers with their
            favorite local restaurants. Discover various types of cuisines,
            easily customize your orders, and enjoy helpful search tools and
            tailored suggestions. Our simple interface allows you to smoothly
            explore menus, make orders, and monitor your delivery.
          </p>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-8382022356</li>
            <li>foodcaptain@gmail.com</li>
            <div className="footer-social-icons">
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Food Captain. All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
