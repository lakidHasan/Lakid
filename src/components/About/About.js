import React from "react";
import "./About.css";
import profilePic from "../../Images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import {
  slideInRight,
  bounceIn,
  slideInLeft,
  slideInUp,
} from "react-animations";
import Radium, { StyleRoot } from "radium";

const About = () => {
  const styles = {
    bounce: {
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
  };
  return (
    <StyleRoot>
      <div className="w-100 m-auto text-center">
        <NavBar></NavBar>

        <div>
          <div className="profile-pic mt-5 mb-5">
            <img style={styles.slideInRight} src={profilePic} alt="" />
          </div>

          <div>
            <div style={styles.bounceIn}>
              <h1 className="title about-name">I'M LAKID HASAN</h1>
            </div>
            <p className="my-description " style={styles.bounce}>
              I am an enthusiastic JavaScript developer with knowing some
              framework for the frontend and the backend. I know Basic Python
              and MySQL but basically a MERN developer. I always focus on
              learning new technology. I am currently studying in the Department
              of Software Engineering at Yunnan University{" "}
              <small>kunming,Yunnan,China</small>.
            </p>

            <div className="mt-5 mb-5" style={styles.slideInUp}>
              <button className="icon-button">
                <a
                  className="icon-button"
                  target="_blank"
                  href="https://www.linkedin.com/in/gias-uddin-4167181b5/"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </button>
              <button className="icon-button">
                <a
                  className="icon-button"
                  target="_blank"
                  href="https://github.com/gias-uddin-swe"
                >
                  {" "}
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </button>
              <button className="icon-button">
                <a
                  className="icon-button"
                  target="_blank"
                  href="https://mail.google.com/mail/u/2/#inbox"
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
                  href="https://www.facebook.com/nirob.753"
                >
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </a>
              </button>
            </div>
          </div>

          <div className="row w-75 m-auto ">
            <div className="col-md-6 mt-5" style={styles.slideInRight}>
              <h1 className="text-center my-skill">My Skills</h1>
              <li className="text-left mt-5 mb-2 sklis">Expertise:</li>
              {/* <input className="skill-button" type="submit" value="React Js"/> */}
              <div className="row">
                <p className="skills-btn">React Js</p>
                <p className="skills-btn">React Router</p>
                <p className="skills-btn">React Bootstrap</p>
                <p className="skills-btn">Material UI</p>
                <p className="skills-btn">HTML5</p>
                <p className="skills-btn">CSS3</p>
                <p className="skills-btn">Bootstrap</p>
                <p className="skills-btn">JavaScript (ES6)</p>
                <p className="skills-btn">React Spring</p>
                <p className="skills-btn">Wordpress</p>
              </div>
              <li className="text-left mt-3 mb-2 sklis">Comfortable:</li>
              <div className="row">
                <p className="skills-btn">Redux</p>
                <p className="skills-btn">Node</p>
                <p className="skills-btn">MongoDB</p>
                <p className="skills-btn">Python</p>
              </div>
              <li className="text-left mt-3 mb-2 sklis">Familiar:</li>
              <div className="row">
                <p className="skills-btn">MySQL</p>
                <p className="skills-btn">Java</p>
                <p className="skills-btn">Spring Boot</p>
                <p className="skills-btn">C</p>
              </div>
              <li className="text-left mt-3 mb-2 sklis">Extra Skills:</li>
              <div className="row">
                <p className="skills-btn">Adobe Photoshop</p>
                <p className="skills-btn">Machine Learning</p>
                <p className="skills-btn">Deep Learning Algorithm</p>
                <p className="skills-btn">Networking</p>
                <p className="skills-btn">Computer Architecture</p>
              </div>
              <li className="text-left mt-3 mb-2 sklis">Tools:</li>
              <div className="row">
                <p className="skills-btn">Git</p>
                <p className="skills-btn">Axure RP 9</p>
                <p className="skills-btn">VS Code</p>
                <p className="skills-btn">Code Blocks</p>
                <p className="skills-btn">Chrome Dev Tool</p>
                <p className="skills-btn">Heroku</p>
                <p className="skills-btn">Firebase</p>
                <p className="skills-btn">NaviCat</p>
                <p className="skills-btn">Netlify</p>
                <p className="skills-btn">MS Office</p>
                <p className="skills-btn">Anaconda</p>
                <p className="skills-btn">Jupiter NoteBook</p>
              </div>
            </div>
            <div className="col-md-6 mt-5" style={styles.bounce}>
              <h1 className="mb-4 my-skill ">My Education</h1>
              <div className="education w-100 m-auto text-center">
                <h3 className="mb-4 mt-5 under ">Under Graduation</h3>
                <h4 className="">BBA in Marketing,</h4>
                <h5>
                  ULAB University <small>( Dhaka )</small>
                </h5>
              </div>
            </div>
          </div>
          <div style={styles.slideInUp}>
            <Footer></Footer>
          </div>
        </div>
      </div>
    </StyleRoot>
  );
};

export default About;
