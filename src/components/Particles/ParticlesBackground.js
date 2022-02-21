import React from "react";
import Particles from "react-particles-js";
import particlesConfig from "./config/Particle.cnfig";
// import ParticleConfig from "./config/particle-config";

const ParticlesBackground = () => {
  return (
    <div className="bganimi">
      <Particles params={particlesConfig}></Particles>
    </div>
  );
};

export default ParticlesBackground;
