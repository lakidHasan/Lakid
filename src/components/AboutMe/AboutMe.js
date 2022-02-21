import React from "react";
import "./AboutMe.css";
import profilePic from "../../Images/lakid.jpg";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  slideInRight,
  bounceIn,
  slideInLeft,
  slideInUp,
  slideInDown,
} from "react-animations";
import Radium, { StyleRoot } from "radium";

const AboutMe = () => {
  const styles = {
    slideInLeft: {
      animation: "x 3s",
      animationName: Radium.keyframes(slideInLeft, "bounce"),
    },
    slideInUp: {
      animation: "x 3s",
      animationName: Radium.keyframes(slideInUp, "bounce"),
    },
    slideInRight: {
      animation: "x 3s",
      animationName: Radium.keyframes(slideInRight, "bounce"),
    },
    bounceIn: {
      animation: "x 3s",
      animationName: Radium.keyframes(bounceIn, "bounce"),
    },
    slideInDown: {
      animation: "x 3s",
      animationName: Radium.keyframes(slideInDown, "bounce"),
    },
  };
  return (
    <StyleRoot>
      <div className="first-section ">
        <div className="about-me text-center">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6 col-lg-6 col-sm-12">
              <h1 className="about-title font" style={styles.slideInDown}>
                HI ! <br /> I'M LAKID HASAN 
              </h1>
              <div className="about ">
                <div className="autoType" style={styles.bounceIn}>
                  <Typewriter
                    options={{
                      strings: [
                        "Web Developer",
                        "Programmer",
                        "React Developer",
                        "JavaScript Developer",
                      ],

                      autoStart: true,
                      loop: true,
                      delay: 100,
                    }}
                  />
                </div>
                <p className="mt-2 paragrap" style={styles.slideInRight}>
                  I am an enthusiastic JavaScript developer with knowing some
                  framework for the frontend and the backend.
                </p>
              </div>
              <div style={styles.bounceIn}>
                <button className="icon-button">
                  <a className="icon-button"
                    target="_blank"
                    href="https://www.linkedin.com/in/lakid-hasan/">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </button>
                <button className="icon-button">
                  <a
                    className="icon-button"
                    target="_blank"
                    href="https://github.com/lakidHasan"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </button>
                <button className="icon-button">
                  <a
                    className="icon-button"
                    target="_blank"
                    href="https://outlook.live.com/mail/0/"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </button>
                <button className="icon-button">
                  <a
                    className="icon-button"
                    target="_blank"
                    href="https://www.instagram.com/nirob.753/"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </button>
                <button className="icon-button">
                  <a
                    className="icon-button"
                    target="_blank"
                    href="https://www.facebook.com/lakid.hasan/"
                  >
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </a>
                </button>
              </div>
              <div className="mt-4 mb-4 w-100 m-auto row">
                <div className="col-md-6 col-sm-12">
                  <button className="btn btn-info mt-3">Hire Me</button>
                </div>
                <div className="col-md-6 col-sm-12 mb-5">
                  <button className="btn btn-info mt-3 resume-download">
                    <a className=""
                      href="https://drive.google.com/file/d/1TdzR1203l9EEIhhHbZdNNEUTD6P4JyOY/view?usp=sharing"
                      download
                    >
                      Resume
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-sm-12  col-lg-6 col-sm-12 profile-pic w-100 m-auto"
              style={styles.slideInLeft}
            >
              <img id="image" src={profilePic} alt="" />
            </div>
          </div>
        </div>
      </div>
    </StyleRoot>
  );
};

export default AboutMe;
