// src/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = ({onHomeClick}) => {



  return (
    <nav className="navbar">
      
      <ul className="navbar-links">
        <li><a href="#" onClick={onHomeClick}>Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
