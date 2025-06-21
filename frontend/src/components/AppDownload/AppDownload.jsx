import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <section className="app-download" id="app-download">
      <div className="app-download-content">
        <div className="app-download-text">
          <h2>Get The App Today!</h2>
          <p>
            Discover variety of tasty dishes made to satisfy your cravings and
            make every meal special. Download the app now and enjoy exclusive
            deals, faster ordering, and seamless experiences!
          </p>
          <div className="app-download-buttons">
            <img src={assets.play_store} alt="Get it on Google Play" />
            <img src={assets.app_store} alt="Download on the App Store" />
          </div>
        </div>
        <div className="app-download-image">
          <img src={assets.mobile_app} alt="App Preview" />
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
