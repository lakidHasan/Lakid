import React, { useEffect, useState } from "react";
import ProjectsCarousel from "../Carousel/Carousel";
import "./Projects.css";
import home from "../../Projects/spicy-magic-Home.JPG";
import about from "../../Projects/Spicy-magic-About.JPG";
import manage from "../../Projects/spicy-magic-manage-Food.JPG";
import add from "../../Projects/Spicy-magic-Add-Food.JPG";
import DreamEduHome from "../../Projects/DreamEdu-Home.JPG";
import DreamEduDashboard from "../../Projects/DreamEdu-Dashboard.JPG";
import DreamEduLogin from "../../Projects/DreamEdu-Login.JPG";
import DreamEduImages from "../../Projects/Dreamedu-Look-image.JPG";
import travelGuruHome from "../../Projects/Travel-guru-Home.JPG";
import travelGuruLogin from "../../Projects/Travel-guru-Login.JPG";
import travelGuruMap from "../../Projects/travel-guru-map.png";
import travelGuruSearch from "../../Projects/Travel-Search.png";
import onlineHomePage from "../../Projects/Online-university/Home-page.JPG";
import footerOnlinePage from "../../Projects/Online-university/footer.JPG";
import onlineGroupStudy from "../../Projects/Online-university/group-chat-page.JPG";
import onlinLoginPage from "../../Projects/Online-university/login-page.JPG";
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
              home={DreamEduHome}
              about={DreamEduDashboard}
              manage={DreamEduLogin}
              add={DreamEduImages}
            ></ProjectsCarousel>
          </div>
          <div
            className="col-md-7 col-lg-7 col-sm-7"
            style={styles.slideInLeft}
          >
            <h3 className="project-title">Dream Edu Scholarship Center</h3>
            <p className="project-description">
              This is an Full-Stack Scholarship consultancy website.User can
              Select University and Apply for scholarship also can Complete
              payment via Online payment.
            </p>
            <div className="project-detailsP">
              <li>Have admin and user different dashboard.</li>
              <li> Admin can delete, add, manage services.</li>
              <li> Admin can Make Admin also</li>
              <li>User can Login via (Google Sign-in,FaceBook Sign-in) </li>
              <li>
                <strong className="technology">Front-end technology:</strong>{" "}
                React js, Bootstrap,React Router, Firebase Authentication,React
                Spring
              </li>
              <li>
                <strong className="technology">Back-end technology:</strong>{" "}
                Node js,Express js, MongoDB
              </li>
            </div>
          </div>
          <div className="text-center w-100 m-auto">
            <button className="btn btn-info project-button">
              <a target="_blank" href="https://dreamedu-cn.web.app/">
                Live Preview
              </a>
            </button>
            <button className="btn btn-info ml-5 project-button">
              <a
                target="_blank"
                href="https://github.com/gias-uddin-swe/DreamEdu-client"
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
              home={onlineHomePage}
              about={footerOnlinePage}
              manage={onlineGroupStudy}
              add={onlinLoginPage}
            ></ProjectsCarousel>
          </div>
          <div
            className="col-md-7 col-lg-7 col-sm-7"
            style={styles.slideInLeft}
          >
            <h3 className="project-title">Online University</h3>
            <p className="project-description">
              This is an single page website.This is university is platform
              anyone can choose his/her course and start learning and explore
              his/her idea in the real field.Concept was invented in the
              COVID-19 time.
            </p>
            <div className="project-detailsP">
              <li>
                User must need to Login via Google or create an free account
              </li>
              <li>User need to enroll the course and join Study Campus.</li>
              <li>
                User can can Create or Join Study Group based on his/her Course.
              </li>
              <li>
                User will allow to chat with in his/her group member after
                enroll courses.(still working,Based on Real-time chatting){" "}
              </li>
              <li>
                <strong className="technology">Front-end technology:</strong>{" "}
                React js,Redux,React-redux, Bootstrap,React Router, Firebase
                Authentication,React Spring,
              </li>
              <li>
                <strong className="technology">Back-end technology:</strong>{" "}
                Coming soon
              </li>
            </div>
          </div>
          <div className="text-center w-100 m-auto">
            <button className="btn btn-info project-button">
              <a target="_blank" href="https://dreamedu-cn.web.app/">
                Live Preview
              </a>
            </button>
            <button className="btn btn-info ml-5 project-button">
              <a
                target="_blank"
                href="https://github.com/gias-uddin-swe/DreamEdu-client"
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
            <h3 className="project-title">Spicy Magic restaurant Website</h3>
            <p className="project-description">
              This is an Full-Stack Food Delivery and restaurant Website.User
              can Choice the Food For Breakfast,Lunch and Dinner.user can Login
              via Google sign.
            </p>
            <div className="project-detailsP">
              <li>
                Users can order food and give a review for each food and
                restaurant.
              </li>
              <li> Have admin dashboard and user dashboard.</li>
              <li> Admin can delete, add, manage Foods.</li>
              <li>
                User Can Create an Account and Login Via firebase authentication
              </li>
              <li>
                <strong className="technology">Front-end technology:</strong>{" "}
                React js, Bootstrap,React Router, Firebase Authentication,React
                Spring
              </li>
              <li>
                <strong className="technology">Back-end technology:</strong>{" "}
                Node js,Express js, MongoDB,Session Storage
              </li>
            </div>
          </div>
          <div className="text-center w-100 m-auto">
            <button className="btn btn-info project-button">
              <a target="_blank" href="https://spicy-magic.web.app/">
                Live Preview
              </a>
            </button>
            <button className="btn btn-info ml-5 project-button">
              <a
                target="_blank"
                href="https://github.com/gias-uddin-swe/magic-spicy-client"
              >
                Source Code
              </a>
            </button>
          </div>
        </div>

        <div className="row mt-2 carousel-area">
          <div
            className="col-md-5 col-lg-5 col-sm-5"
            style={styles.slideInLeft}
          >
            <ProjectsCarousel
              home={travelGuruHome}
              about={travelGuruLogin}
              manage={travelGuruMap}
              add={travelGuruSearch}
            ></ProjectsCarousel>
          </div>
          <div
            className="col-md-7 col-lg-7 col-sm-7"
            style={styles.slideInLeft}
          >
            <h3 className="project-title">Travel guru Website</h3>
            <p className="project-description">
              This is Travel service Agency website.user can login via Facebook
              sign-in,Google Sign-in and also Can Create an New Account for use
              the services.user can Choice the service as he/she want.
            </p>
            <div className="project-detailsP">
              <li>User can Choice the perfect vehicle as he/she Want</li>
              <li>
                user also can see his/her Current location to Destination in
                Google Map
              </li>
              <li>Firebase Authentication Used in this Website</li>
              <li>
                Uer Can Login via (Google,Facebook,Github)also can Create
                Account
              </li>
              <li>
                <strong className="technology">Front-end Technology:</strong>{" "}
                React js, Bootstrap,React Router,Firebase Authentication,Wow js
              </li>
            </div>
          </div>
          <div className="text-center w-100 m-auto">
            <button className="btn btn-info project-button">
              <a target="_blank" href="https://react-authh.web.app/">
                Live Preview
              </a>
            </button>
            <button className="btn btn-info ml-5 project-button">
              <a
                target="_blank"
                href="https://github.com/gias-uddin-swe/travel-guru"
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
