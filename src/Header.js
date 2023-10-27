import React from "react";
import "./Header.css";

function Header({ isLoggedIn }) {
  return (
    <header>
      <div className="logo">
        <img src="logo.png" alt="Company Logo" />
        <h1>Our Clothing Brand</h1>
      </div>
      <div className="welcome">
        {isLoggedIn ? <p>Welcome, User!</p> : <p>Please sign in to explore</p>}
      </div>
    </header>
  );
}

export default Header;
