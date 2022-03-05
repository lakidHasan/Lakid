import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./ContactMe.css";
import {
  slideInRight,
  bounceIn,
  slideInLeft,
  slideInUp,
} from "react-animations";
import Radium, { StyleRoot } from "radium";

const ContactMe = () => {
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
    bounceIn: {
      animation: "x 3s",
      animationName: Radium.keyframes(bounceIn, "bounce"),
    },
  };

  function sendEmail (e){
    e.preventDefault();

    emailjs.sendForm('service_oth6obt', 'template_bpvpwfn', e.target,'E-FmYAhOa6OmIKPmn')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <StyleRoot>
      <div className="container mt-5 ">
        <div className="text-center w-70 m-auto">
          <h2 className="font">Contact Me</h2>
          <form  onSubmit={sendEmail}>
            <input
              className="w-75 input"
              type="text"
              name="name"
              placeholder="Your Name"
              required
              style={styles.bounce}
            />
            <br />
            <input
              type="email"
              className="w-75 input"
              name="user-email"
              type="text"
              placeholder="Your Email"
              required
              style={styles.slideInRight}
            />
            <br />
            <input
              className="w-75 input-message"
              name="message"
              type="text"
              placeholder="Type your message"
              required
              style={styles.slideInLeft}
            />
            <br />
            <button style={styles. bounceIn} type="submit" className="btn submit-btn input">
              Send
            </button>
          </form>
        </div>
      </div>
    </StyleRoot>
  );
};

export default ContactMe;
