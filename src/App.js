import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home/Home";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/About/About";
import ContactPage from "./components/ContactPage/ContactPage";
import BlogPage from "./components/BlogPage/BlogPage";
import AllProjects from "./components/AllProjects/AllProjects";
// import Particles from "react-particles-js";
import ParticlesBackground from "./components/Particles/ParticlesBackground";
import ParticelAnimi from "./components/Particles/ParticelAnimi";
import NewBlackPage from "./components/NewBlackPage/NewBlackPage";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <Router>
        <ParticelAnimi></ParticelAnimi>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blogs">
            <BlogPage />
          </Route>
          <Route path="/Projects">
            <AllProjects />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/new">
            <NewBlackPage />
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
