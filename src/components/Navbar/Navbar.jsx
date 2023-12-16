 import React from "react";
import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";
const Navbar = () => {

  return (
    <>

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
          <Link to="/" >Home</Link>
          {/* <a href="#">Home</a> */}
        </li>
        <li>
          <Link to="/about">About us</Link>
          {/* <a href="#">About</a> */}
        </li>
        <li className="dropdown">
          <a href="#" >Services</a>
        <div className="dropdown-content">
            <Link to="/staffing">Staffing Services</Link>
            <Link to="/permanent-staffing">Permanent Staffing</Link>
            <Link to="/apprenticeship">Apprenticeship Services</Link>
            <Link to="/flexi-staffing"> Flexi Staffing</Link>
            <Link to="/manpower">Manpower Outsourcing</Link>
            <Link to="/naps">NAPS</Link>
            <Link to="/nats">NATS</Link>
          </div>
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
      <h1 className="logo-navbar">Navbar</h1>
    </div>
    <Outlet/>
  </nav>
</>

  );
};

export default Navbar;
