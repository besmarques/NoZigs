import React from "react";
import Crosshair from "../../../img/icons/crosshair.png";
import Mappin from "../../../img/icons/map-pin.png";
import Mapo from "../../../img/icons/map.png";

const Steps = () => {
  return (
    <>
      <div className="container-fluid mt-5 bkg-blue">
        <p className="marker">3 simple steps</p>
        <div className="steps d-flex justify-content-around">
          <div className="row">
            <div className="col-12 col-sm-4">
              <div className="step d-flex flex-column align-items-center">
                <div className="icon-avatar d-flex align-items-center justify-content-center">
                  <img src={Crosshair} width="30" height="30" />
                </div>
                <h2 className="marker-title">Type your starting point</h2>
              </div>
            </div>

            <div className="col-12 col-sm-4">
              <div className="step d-flex flex-column align-items-center">
                <div className="icon-avatar d-flex align-items-center justify-content-center">
                  <img src={Mappin} width="30" height="30" />
                </div>
                <h2 className="marker-title">
                  Add the locations you’d like to visit
                </h2>
              </div>
            </div>

            <div className="col-12 col-sm-4">
              <div className="step d-flex flex-column align-items-center">
                <div className="icon-avatar d-flex align-items-center justify-content-center">
                  <img src={Mapo} width="30" height="30" />
                </div>
                <h2 className="marker-title">Get the shortest route</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps;
