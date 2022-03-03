import React, { useEffect, useState } from "react";
import ProjectsCarousel from "../Carousel/Carousel";
import "./Projects.css";
import home from "../../Projects/helthcare/healthcare (1).png";
import about from "../../Projects/helthcare/healthcare (2).png";
import manage from "../../Projects/helthcare/healthcare (3).png";
import add from "../../Projects/helthcare/healthcare (4).png";
import bycicleHome from "../../Projects/bycicle/home.png";
import bycicleDashboard from "../../Projects/bycicle/dashboard.png";
import bycicleLogin from "../../Projects/bycicle/login.png";
import bycicleProduct from "../../Projects/bycicle/product.png";
import travel1 from "../../Projects/Tourism/Tourism (1).png";
import travel2 from "../../Projects/Tourism/Tourism (2).png";
import travel3 from "../../Projects/Tourism/Tourism (3).png";
import travel4 from "../../Projects/Tourism/Tourism4.png";
import { Link } from "react-router-dom";
import {
  slideInRight,
  bounceIn,
  slideInLeft,
  slideInUp,
} from "react-animations";
import Radium, { StyleRoot } from "radium";

const SomeProjects = () => {
  const styles = {
    bounce: {
      animation: "x 3s",
      animationName: Radium.keyframes(slideInLeft, "bounce"),
    },
    slideInLeft: {
      animation: "x 3s",
      animationName: Radium.keyframes(slideInUp, "bounce"),
    },
    slideInRight: {
      animation: "x 3s",
      animationName: Radium.keyframes(slideInRight, "bounce"),
    },
  };
  return (
    <StyleRoot>
      <div className="container w-75">
        <h1 className="text-center mt-5 mb-5"> My Recent Projects </h1>
        <div className="row mt-2 carousel-area">
          <div className="col-md-5 col-lg-5 col-sm-5" style={styles.bounce}>
            <ProjectsCarousel
              home={bycicleHome}
              about={bycicleDashboard}
              manage={bycicleLogin}
              add={bycicleProduct}
            ></ProjectsCarousel>
          </div>
          <div
            className="col-md-7 col-lg-7 col-sm-7"
            style={styles.slideInLeft}
          >
            <h3 className="project-title">Faster Bycicle</h3>
            <p className="project-description">
              This is an Full-Stack bycicle related website.User can
              Select bycicle and purchase it from online payment.
            </p>
            <div className="project-detailsP">
              <li>Have admin and user different dashboard.</li>
              <li> Admin can delete, add, manage services.</li>
              <li> Admin can Make Admin also</li>
              <li>User can Login via (Google Sign-in) </li>
              <li>
                <strong className="technology">Front-end technology:</strong>{" "}
                React js, Bootstrap,React Router, Firebase Authentication
              </li>
              <li>
                <strong className="technology">Back-end technology:</strong>{" "}
                Node js,Express js, MongoDB
              </li>
            </div>
          </div>
          <div className="text-center w-100 m-auto">
            <button className="btn btn-info project-button">
              <a target="_blank" href="https://bycicle-1356f.firebaseapp.com/home">
                Live Preview
              </a>
            </button>
            <button className="btn btn-info ml-5 project-button">
              <a
                target="_blank"
                href="https://github.com/lakidHasan/Bicycle-Website-Client-Site-"
              >
                Source Code
              </a>
            </button>
          </div>
        </div>

        {/* second project info */}
        <div className="row mt-2 carousel-area">
          <div className="col-md-5 col-lg-5 col-sm-5" style={styles.bounce}>
            <ProjectsCarousel
              home={travel1}
              about={travel2}
              manage={travel3}
              add={travel4}
            ></ProjectsCarousel>
          </div>
          <div
            className="col-md-7 col-lg-7 col-sm-7"
            style={styles.slideInLeft}
          >
            <h3 className="project-title">Getaway-Tourism</h3>
            <p className="project-description">
              This is a tourism related website.Anyone can access this website and book their offer.
            </p>
            <div className="project-detailsP">
              <li>
                User must need to Login via Google 
              </li>
              <li>User and admin are same access avaiable in this website </li>
              <li>
                Six service avaiable in home page and other is offer section 
              </li>
              <li>
              Book destination by pick up offer button then its show order section.{" "}
              </li>
              <li>
                <strong className="technology">Technology:</strong>{" "}
                React js,Redux,React-Hook, Bootstrap,React Router, Firebase
                Authentication, Node, MongoDB 
              </li>
            </div>
          </div>
          <div className="text-center w-100 m-auto">
            <button className="btn btn-info project-button">
              <a target="_blank" href="https://getaway-tourism.firebaseapp.com/">
                Live Preview
              </a>
            </button>
            <button className="btn btn-info ml-5 project-button">
              <a
                target="_blank"
                href="https://github.com/lakidHasan/getaway-tourism-website-Client-Side-"
              >
                Source Code
              </a>
            </button>
          </div>
        </div>

        {/* third project info  */}

        <div className="row mt-2 carousel-area">
          <div
            className="col-md-5 col-lg-5 col-sm-5"
            style={styles.slideInLeft}
          >
            <ProjectsCarousel
              home={home}
              about={about}
              manage={manage}
              add={add}
            ></ProjectsCarousel>
          </div>
          <div
            className="col-md-7 col-lg-7 col-sm-7"
            style={styles.slideInRight}
          >
            <h3 className="project-title">Medi-Plus Website</h3>
            <p className="project-description">
              This is an single page application.It's basically helth realated website User can Choice and pick up order.user can Login
              via Google sign.
            </p>
            <div className="project-detailsP">
              <li>
              Users can login with google and he/she’s name shows on display.
              </li>
              <li> Users can easily use this site because it's a one page website .</li>
              <li> User can select and cancel appoinment.</li>
              <li>
              All service shows on the home page. So users can easily select their service.
              </li>
              <li>
                <strong className="technology">Front-end technology:</strong>{" "}
                React js, Bootstrap,React Router, Firebase Authentication
              </li>
            </div>
          </div>
          <div className="text-center w-100 m-auto">
            <button className="btn btn-info project-button">
              <a target="_blank" href="https://medi-plus-healthcare.firebaseapp.com/">
                Live Preview
              </a>
            </button>
            <button className="btn btn-info ml-5 project-button">
              <a
                target="_blank"
                href="https://github.com/lakidHasan/medi-plus-healthcare"
              >
                Source Code
              </a>
            </button>
          </div>
        </div>

        
        <div id="moreButton" className="text-center pb-5 more-projects-btn">
          <Link to="/projects">
            <button className="btn ">More Projects</button>
          </Link>
        </div>
      </div>
    </StyleRoot>
  );
};

export default SomeProjects;
