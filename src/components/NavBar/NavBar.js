import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import myLogo from "../../Projects/logo (2).png";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <nav className="navbar">
      <div className="nav-container ">
        <NavLink exact to="/" className="nav-logo text-left">
          <img
            className="myLogo"
            style={{ width: "55px", marginBottom: "15px" }}
            src={myLogo}
            alt=""
          />
        </NavLink>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
              className="menu-name"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/projects"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
              className="menu-name"
            >
              Portfolio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/about"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
              className="menu-name"
            >
              About Me
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/blogs"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
              className="menu-name"
            >
              Blog
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/contact"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
              className="menu-name"
            >
              Contact Us
            </NavLink>
          </li>
          <li className="nav-item">
            <button className="my-resume">
              <a
                className="resume-download" 
                href="https://drive.google.com/file/d/1TdzR1203l9EEIhhHbZdNNEUTD6P4JyOY/view?usp=sharing"
                download
              >
                Download Resume
              </a>
            </button>
          </li>
        </ul>
        <div className="nav-icon " onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
