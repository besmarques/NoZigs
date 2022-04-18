import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

import Hero from "../component/homeComponents/hero.jsx";
import Steps from "../component/homeComponents/steps.jsx";
import SecondHero from "../component/homeComponents/second_hero.jsx";
import Testimonial from "../component/homeComponents/testimonial.jsx";
import JoinNow from "../component/homeComponents/joinNow.jsx";
import JoinPeople from "../component/homeComponents/joinPeople.jsx";

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
    <>
    <div className="body">
      <Hero />
      <Steps />
      <SecondHero />
      <Testimonial />
      <JoinPeople />
      <JoinNow />
    </div>
    </>
  );
};
