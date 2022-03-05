import React, { useEffect, useState } from "react";
import ProjectsCarousel from "../Carousel/Carousel";
import "../Projects/Projects.css";


import EshopHome from "../../Projects/E-shop/home.png";
import EshopAdmin from "../../Projects/E-shop/admin.png";
import EshopProduct from "../../Projects/E-shop/product.png";
import Eshopsubscription from "../../Projects/E-shop/subscription.png";

// import doctorExtra from "../../Projects/othersProjects/doctors-Home";

import SomeProjects from "../Projects/SomeProjects";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const AllProjects = () => {
  return (
    <div>
      <NavBar></NavBar>
      <SomeProjects></SomeProjects>
      <div className="container w-75 ">
        <div className="row mt-2 carousel-area">
          <div className="col-md-5 col-lg-5 col-sm-5">
            <ProjectsCarousel
              home={EshopHome}
              about={EshopAdmin}
              manage={EshopProduct}
              add={Eshopsubscription}
            ></ProjectsCarousel>
          </div>
          <div className="col-md-7 col-lg-7 col-sm-7">
            <h3 className="project-title">E-shop e-Commerce Website</h3>
            <p className="project-description">
              This is an Full-Stack e-commerce website.User can login the
              website create account.User also can Complete her/his Payment via
              Online payment system.
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
              <a target="_blank" href="https://phero-team-projects.web.app/home">
                Live Preview
              </a>
            </button>
            <button className="btn btn-info ml-5 project-button">
              <a
                target="_blank"
                href="https://github.com/nayeem98746/e-shoper"
              >
                Source Code
              </a>
            </button>
          </div>
        </div>
        {/* more project coming soon */}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllProjects;
