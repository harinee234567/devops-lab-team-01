import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">EduPortal</div>
      <ul className="navbar-links">
        <li><a href="home.html">Home</a></li>
        <li><a href="/">Events</a></li>
        <li><a href="news.html">News</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
