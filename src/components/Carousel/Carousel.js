import React from "react";
import { Carousel } from "react-bootstrap";
// import home from "../../Projects/spicy-magic-Home.JPG";
// import about from "../../Projects/Spicy-magic-About.JPG";
// import manage from "../../Projects/spicy-magic-manage-Food.JPG";

const ProjectsCarousel = ({ home, about, manage, add }) => {
  return (
    <div className="carousel">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={home} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src={about} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={manage} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={add} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ProjectsCarousel;
