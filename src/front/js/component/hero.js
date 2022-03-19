import React from "react";
import HeroImage from "../../img/hero_img.png";

const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="hero">
          <div className="row">
            <div className="col-12 col-sm-6">
              <div className="left-content">
                <div>
                  <h1 className="hero-h1">
                    <span className="pink">Discover</span> more, plan{" "}
                    <span className="blue">better</span>
                  </h1>
                  <p className="hero-p">
                    Find the{" "}
                    <strong>
                      <span className="black">shortest route</span>
                    </strong>
                    . Dont waste your time, visit more
                  </p>
                  <a className="hero-btn">Discover</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <img
                className="hero-img"
                src={HeroImage}
                width="650"
                height="650"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
