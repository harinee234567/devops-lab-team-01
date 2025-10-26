// Navbar.jsx
import React from "react";
import "./Navbar.css";


function Navbar() {
return (
<nav className="navbar">
<div className="navbar-logo">EduPortal</div>
<ul className="navbar-links">
<li><a href="#home">Home</a></li>
<li><a href="#events">Events</a></li>
<li><a href="#news">News</a></li>
<li><a href="#contact">Contact</a></li>
</ul>
</nav>
);
}


export default Navbar;