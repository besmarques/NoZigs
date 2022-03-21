import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Hero from "../component/hero.jsx";
import Steps from "../component/steps.jsx";
import SecondHero from "../component/second_hero.jsx";
import Testimonial from "../component/testimonial.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect[
    (() => {
      if (store.token && store.token !== "" && store.token !== undefined)
        actions.getMessage();
    },
    [store.token])
  ];

  return (
    <div>
      <Hero />
      <Steps />
      <SecondHero />
      <Testimonial />
    </div>

    // {/* <div className="text-center mt-5">
    // 	<h1>Hello Rigo!!</h1>
    // 	<p>
    // 		<img src={rigoImageUrl} />
    // 	</p>
    // 	<div className="alert alert-info">
    // 		{store.message}
    // 	</div>
    // 	<p>
    // 		This boilerplate comes with lots of documentation:{" "}
    // 		<a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
    // 			Read documentation
    // 		</a>
    // 	</p>
    // </div> */}
  );
};
