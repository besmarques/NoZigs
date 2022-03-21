import React from "react";
import SecondHeroImage from "../../img/second_hero_img.jpg";

const SecondHero = () => {
  return (
    <>
      <div className="container mt-5">
        <h3 className="hero-title">Visit cities on budget and faster</h3>
        <p className="hero-par col-sm-6">
          We’ve been there and we want to make it easier for you - get the best
          route to discover the city faster.
        </p>

        <div className="row d-flex align-items-center my-5">
          <div className="col-12 col-sm-6 d-flex second-img">
            <img
              className="second-hero-img"
              src={SecondHeroImage}
              width="500"
              height="500"
            />
          </div>

          <div className="col-12 col-sm-6">
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-between text-center facts ">
                <div className="d-flex fact flex-column">
                  <p className="fact-number m-0">10,000+</p>
                  <p className="fact-what">Global customers</p>
                  <p className="fact-desc">
                    We’ve helped over 10,000 amazing global travellers.
                  </p>
                </div>

                <div className="fact">
                  <p className="fact-number m-0">600+</p>
                  <p className="fact-what">Hours saved</p>
                  <p className="fact-desc">
                    Our customers have reported an average 3h saved per day
                  </p>
                </div>
              </div>

              <div className="d-flex justify-content-between text-center facts">
                <div className="fact">
                  <p className="fact-number m-0">10k</p>
                  <p className="fact-what">Global downloads</p>
                  <p className="fact-desc">
                    Our app has been downloaded over 10k times.
                  </p>
                </div>

                <div className="fact">
                  <p className="fact-number m-0">200+</p>
                  <p className="fact-what">5-star reviews</p>
                  <p className="fact-desc">
                    We’re proud of our 5-star rating with over 200 reviews.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondHero;
