import React from "react";
import { Card } from "react-bootstrap";
import "./Blogs.css";
import {
  slideInRight,
  bounceIn,
  slideInLeft,
  slideInUp,
} from "react-animations";
import blog1 from "../../Images/blogs-image/javascrip.png";
import blog2 from "../../Images/blogs-image/react.png";
import blog3 from "../../Images/blogs-image/development.png";

import Radium, { StyleRoot } from "radium";
import { Link } from "react-router-dom";
const SomeBlogs = () => {
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
  const blogsData = [
    {
      title: "Top 10 Things Developer Must Know About javaScript",
      blogImage: blog1,
      blogInfo:
        " In this blogs i will discuss Top 10 Things Every Web-Developer Must Knwo about About JS.",
      link: "https://nirobh753.medium.com/top-10-things-web-developer-must-know-about-javascript-2df562014e31",
    },
    {
      title: "Advance React.js (part-1)",
      blogImage: blog2,
      blogInfo:
        "if you want to be a Professional React developer you must know Advance react.js Features.",
      link: "https://nirobh753.medium.com/advance-react-part-1-953edb8a029c",
    },
    {
      title: "Top 10 Es6 Features every web-developer must Know",
      blogImage: blog3,
      blogInfo:
        "New Es6 Features will help you to write your code more efficiently.Ecma Script(6) is .....",
      link: "https://nirobh753.medium.com/es6-every-developer-must-know-1bbe8d787769",
    },
  ];
  return (
    <StyleRoot>
      <div>
        <div className="text-center mt-4 mb-5">
          <h2 style={styles.bounce} className="blogs-section">
            My Latest Blogs
          </h2>
        </div>
        <div className="w-75 row d-flex justify-content-center m-auto text-center">
          {blogsData.map((pd) => (
            <div className="col-md-6 col-lg-4 col-sm-12 w-100 m-auto text-center">
              <div className="card-main">
                <div className="blog-image">
                  <img style={styles.slideInRight} src={pd.blogImage} alt="" />
                </div>
                <div className="blog-details mt-3">
                  <h5 className="blog-title">{pd.title}</h5>
                  <p style={styles.slideInLeft} className="mt-3">
                    <small>{pd.blogInfo}</small>
                  </p>

                  <div className="text-center">
                    <button className="btn btn-secondary mt-1 mb-3 ">
                      <a target="_blank" href={pd.link}>
                        Read more
                      </a>
                    </button>
                  </div>
                </div>
                
              </div>
            </div>
          ))}
        </div>
        <div className="text-center more-blogs ">
          <Link to="/blogs">
            <button className="btn btn-danger">More Blog's</button>
          </Link>
        </div>
      </div>
    </StyleRoot>
  );
};

export default SomeBlogs;
