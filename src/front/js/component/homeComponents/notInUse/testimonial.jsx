import React from "react";
import Avatar from "../../../img/avatar.jpg";

const Testimonial = () => {
  return (
    <>
      <div className="cotainer my-5 bck-light-blue">
        <div className="testimonial d-flex flex-column align-items-center">
          <p className="quote ">
            No Zig’s save me a lot of time. It gave me the perfect route for all
            the places I wanted to visit{" "}
          </p>
          <img className="testimonial-img" src={Avatar} />
          <p className="quote-name">Bruno Marques</p>
          <p className="quote-desc">Avid traveller</p>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
