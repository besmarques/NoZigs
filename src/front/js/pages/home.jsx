import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

import Hero from "../component/hero.jsx";
import Steps from "../component/steps.jsx";
import SecondHero from "../component/second_hero.jsx";
import Testimonial from "../component/testimonial.jsx";
import JoinNow from "../component/joinNow.jsx";
import JoinPeople from "../component/joinPeople.jsx";

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
