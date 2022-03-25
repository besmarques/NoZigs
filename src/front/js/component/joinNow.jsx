import React from "react";
import { useHistory } from "react-router-dom";

const JoinNow = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/signup");
  };


  return (
    <>
      <div className="cotainer my-5 py-5 bg-light">
          <div className="d-flex flex-column align-items-center">
          <h4>
            Join now and start save time
          </h4>
          <p className="jnow-description d-flex flex-column align-items-center col-sm-6">
            You can use your social profile or create your account
          </p>
          <br></br>
          <a className="btn jnow-btn" onClick={handleClick}>Register Now</a>
          </div>
      </div>
    </>
  );
};

export default JoinNow;
