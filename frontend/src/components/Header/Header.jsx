import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Food Captain – Where Taste Meets Speed!</h2>
        <p>
          We believe great food starts with great ingredients. That’s why our
          curated menu features chef-inspired dishes made with fresh, handpicked
          produce and bold flavors — designed to delight every palate. Your
          Meal, Our Mission.
        </p>
        <button>Explore Menu</button>
      </div>
    </div>
  );
};

export default Header;
