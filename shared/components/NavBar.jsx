import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">EduPortal</div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
