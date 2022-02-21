import React, { useEffect, useState } from "react";
import ProjectsCarousel from "../Carousel/Carousel";
import "../Projects/Projects.css";

import emajohnHome from "../../Projects/othersProjects/emajohn-HOme.JPG";
import emajohnLogin from "../../Projects/othersProjects/emajohn-Login.JPG";
import emajohnOrders from "../../Projects/othersProjects/emajohn-orders.JPG";
import emajohnExtra from "../../Projects/othersProjects/emajohn-HOme.JPG";

import doctorsPOrtal from "../../Projects/doctors.JPG";
import doctorAppointment from "../../Projects/othersProjects/Doctors-Appoinments.JPG";
import doctorLogin from "../../Projects/othersProjects/doctors-Login.JPG";
// import doctorExtra from "../../Projects/othersProjects/doctors-Home";

import leageHome from "../../Projects/othersProjects/championsLeag-Home.JPG";
import leageDetails from "../../Projects/othersProjects/championsLeag-Details.JPG";
import SomeProjects from "../Projects/SomeProjects";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const AllProjects = () => {
  return (
    <div>
      <NavBar></NavBar>
      <SomeProjects></SomeProjects>
      <div className="container w-75">
        <div className="row mt-2 carousel-area">
          <div className="col-md-5 col-lg-5 col-sm-5">
            <ProjectsCarousel
              home={emajohnHome}
              about={emajohnLogin}
              manage={emajohnOrders}
              add={emajohnExtra}
            ></ProjectsCarousel>
          </div>
          <div className="col-md-7 col-lg-7 col-sm-7">
            <h3 className="project-title">Ema-jhon e-Commerce Website</h3>
            <p className="project-description">
              This is an Full-Stack e-commerce website.User can login the
              website create account.User also can Complete her/his Payment via
              Online payment system(Strip).
            </p>
            <div className="project-detailsP">
              <li>User Can Use (Google,Facebook) for Sign-in.</li>
              <li>
                User can Select the product and review order,see her/his total
                cost
              </li>
              <li>Have admin dashboard.Admin can Add ,Delete,Update product</li>
              <li>
                <strong className="technology">Front-end technology: </strong>{" "}
                React js,React Bootstrap,React Router,firebase
              </li>
              <li>
                <strong className="technology">Back-end technology: </strong>{" "}
                Node js,Express JS,MongoDB,firebase authentication
              </li>
            </div>
          </div>
          <div className="text-center w-100 m-auto">
            <button className="btn btn-info project-button">
              <a target="_blank" href="https://ema-john-simple-bf272.web.app/">
                Live Preview
              </a>
            </button>
            <button className="btn btn-info ml-5 project-button">
              <a
                target="_blank"
                href="https://github.com/gias-uddin-swe/ema-john-client"
              >
                Source Code
              </a>
            </button>
          </div>
        </div>
        <div className="row mt-2 carousel-area">
          <div className="col-md-5 col-lg-5 col-sm-5">
            <ProjectsCarousel
              home={doctorsPOrtal}
              about={doctorAppointment}
              manage={doctorsPOrtal}
              add={doctorLogin}
            ></ProjectsCarousel>
          </div>
          <div className="col-md-7 col-lg-7 col-sm-7">
            <h3 className="project-title">Doctor's Portal Website</h3>
            <p className="project-description">
              This is an Full-Stack Doctors Portal Website.Patients can Login
              via (Google,Facebook)and can Create account. patients can book
              Appointment by Date.Doctor can manage Appointment and see the
              appointment by data.
            </p>
            <div className="project-detailsP">
              <li>Have Doctors and Patients Dashboard.</li>
              <li>Doctors can add,delete,manage appointment</li>
              <li>Patients can views his/her appointment</li>
              <li> Admin can delete, add, manage services.</li>
              <li> Admin can Make Admin also</li>
              <li>
                <strong className="technology">Front-end technology:</strong> 
                 React js,React Bootstrap,React Router,firebase
              </li>
              <li>
                <strong className="technology">Back-end technology:</strong> 
                 Node js,Express JS,MongoDB,firebase authentication
              </li>
            </div>
          </div>
          <div className="text-center w-100 m-auto">
            <button className="btn btn-info project-button">
              <a target="_blank" href="https://doctors-appointmentt.web.app/">
                Live Preview
              </a>
            </button>
            <button className="btn btn-info ml-5 project-button">
              <a
                target="_blank"
                href="https://github.com/gias-uddin-swe/doctors-portal-client"
              >
                Source Code
              </a>
            </button>
          </div>
        </div>

        <div className="row mt-2 carousel-area">
          <div className="col-md-5 col-lg-5 col-sm-5">
            <ProjectsCarousel
              home={leageHome}
              about={leageDetails}
              manage={leageHome}
              add={leageDetails}
            ></ProjectsCarousel>
          </div>
          <div className="col-md-7 col-lg-7 col-sm-7">
            <h3 className="project-title">Champions League Website</h3>
            <p className="project-description">
              This is an football leage website.User can view his/her favorite
              Team.Fully responsive Website fro all Device.user Can see the
              Specific player details.
            </p>
            <div className="project-detailsP">
              <li>User can view his/her favorite Team Details.</li>
              <li>User can contact with that club via email,instagram </li>
              <li>Dynamic React Router Used in this Website</li>
              <li>user friendly website</li>
              <li>
                <strong className="technology">Front-end technology:</strong>{" "}
                React js,React Router,Bootstrap,
              </li>
            </div>
          </div>
          <div className="text-center w-100 m-auto">
            <button className="btn btn-info project-button">
              Live Preview
            </button>
            <button className="btn btn-info ml-5 project-button">
              Source Code
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllProjects;
