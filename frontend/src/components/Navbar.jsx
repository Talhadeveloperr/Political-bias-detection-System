// components/Navbar.jsx
import React from "react";
import "../styles/home.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Bias Detection App</h1>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/trends">Trends</a></li>
        <li><a href="/chathistory">Chat History</a></li>
        <li><a href="/about">About Us</a></li>
        
        
      </ul>
    </nav>
  );
}

export default Navbar;
