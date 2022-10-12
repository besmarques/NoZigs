import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";

const JoinNow = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);

  const handleRegister = () => {
    navigate.push("/signup");
  };

  const handleDiscover = () => {
    navigate.push("/trips");
  };

  return (
    <>
      <div className="cotainer my-5 py-5 bg-light">
          <div>
            {!store.token? (
              <div className="d-flex flex-column align-items-center">
                <h4>
                  Join now and start saving time
                </h4>
                <p className="jnow-description d-flex flex-column align-items-center col-sm-6">
                  Create your account
                </p>
                <br></br>
                <a className="btn jnow-btn" onClick={handleRegister}>Register Now</a>
              </div>
            ) : (
              <div className="d-flex flex-column align-items-center">
                <h4>
                  Use Nozigs now!
                </h4>
                <p className="jnow-description d-flex flex-column align-items-center col-sm-6">
                  You can start exploring for your upcoming trips
                </p>
                <br></br>
                <a className="btn jnow-btn" onClick={handleDiscover}>Search Trips</a>
              </div>
            )}
          </div>
      </div>
    </>
  );

};

export default JoinNow;
