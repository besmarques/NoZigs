import React from "react";
import HeroImage from "../../img/hero_img.png";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <h1>
          <span className="pink"> Discover</span> more, plan{" "}
          <span className="blue">better</span>
        </h1>
        <p>
          Find the <strong>shortest route</strong>. Dont waste your time, visit
          more
        </p>
        <img src={HeroImage} width="600" height="600" />
      </div>
    </>
  );
};

export default Hero;
