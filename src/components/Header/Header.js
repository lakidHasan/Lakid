import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="text-center mt-2">
      <div className="row text-center">
        <div className="col-md-3 col-sm-12 col-lg-3 text-center ">
          <h3 className="mt-2 name">LAKID HASAN</h3>
        </div>
        <div className="col-md-9 col-sm-12 col-lg-9  row">
          <div className="ml-auto d-flex justify-content-center align-items-center text-center">
            <li className="mr-5 items">HOME</li>
            <li className="mr-5 items">PORTFOLIO</li>
            <li className="mr-5 items">BLOG</li>
            <Link to="/about">
              <li className="mr-5 items">About Me</li>
            </Link>
            <li className="mr-5 items items">CONTACT ME</li>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
