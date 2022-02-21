import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import SomeBlogs from "../Blogs/SomeBlogs";
import ContactMe from "../ContactMe/ContactMe";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeaderMain from "../HeaderMain/HeaderMain";
import MyServices from "../MyServices/MyServices";
import NavBar from "../NavBar/NavBar";
import ParticelAnimi from "../Particles/ParticelAnimi";
import SomeProjects from "../Projects/SomeProjects";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <AboutMe></AboutMe>
      <div className="my-services">
        <MyServices></MyServices>

        <SomeProjects></SomeProjects>
        <SomeBlogs></SomeBlogs>
        <ContactMe></ContactMe>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
