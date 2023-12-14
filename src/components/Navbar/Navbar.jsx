 
import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {

  return (
    <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Navbar</title>
  <nav className="navbar">
    <div className="navbar-container containerNav">
      <input type="checkbox" name="" id="" />
      <div className="hamburger-lines">
        <span className="line line1" />
        <span className="line line2" />
        <span className="line line3" />
      </div>
      <ul className="menu-items">
        <li>
          <a href="###">Home</a>
        </li>
        <li>
          <a href="##">About</a>
        </li>
        <li>
          <a href="##">Category</a>
        </li>
        <li>
          <a href="##">Menu</a>
        </li>
        <li>
          <a href="#$">Testimonial</a>
        </li>
        <li>
          <a href="##">Contact</a>
        </li>
      </ul>
      <h1 className="logo">Navbar</h1>
    </div>
  </nav>
</>

  );
};

export default Navbar;
