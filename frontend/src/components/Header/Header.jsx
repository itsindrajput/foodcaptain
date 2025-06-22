import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-overlay"></div>
      <div className="header-contents">
        <h2>Food Captain – Where Taste Meets Speed!</h2>
        <p>
          We believe great food starts with quality ingredients. Enjoy our
          fresh, chef-crafted meals with fast delivery, easy ordering, and
          amazing taste — every single time. Your Meal, Our Mission.
        </p>
        <button
          onClick={() => {
            const element = document.getElementById("explore-menu");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          {" "}
          Explore Menu{" "}
        </button>
      </div>
    </header>
  );
};

export default Header;
