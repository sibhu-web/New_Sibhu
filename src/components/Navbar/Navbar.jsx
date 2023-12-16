 import React,{useState,useEffect} from "react";
import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";
const Navbar = () => {
  const [isNavbarScroll, setNavbarScroll] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Adjust the value (200 in this case) based on when you want the navbar to become visible
      if (scrollPosition > 0) {
        setNavbarScroll(true);
      } else {
        setNavbarScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
<>
  <nav className="navbar" style={{
    backgroundColor: isNavbarScroll ? '#fff' : 'transparent',
    boxShadow: isNavbarScroll ? ' 0px 5px 10px 0px #aaa' : '0 8px 30px 0 rgba(0,0,0,0)',
  }}>
    <title>Navbar</title>
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
            <Link to="services/staffing">Staffing Services</Link>
            <Link to="services/permanent-staffing">Permanent Staffing</Link>
            <Link to="services/apprenticeship">Apprenticeship Services</Link>
            <Link to="services/flexi-staffing"> Flexi Staffing</Link>
            <Link to="services/manpower">Manpower Outsourcing</Link>
            <Link to="services/naps">NAPS</Link>
            <Link to="services/nats">NATS</Link>
          </div>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/register">Register Here</Link>
        </li>
      </ul>
      <h1 className="logo-navbar">Navbar</h1>
    </div>
  </nav>
    <Outlet/>
</>
  );
};

export default Navbar;
