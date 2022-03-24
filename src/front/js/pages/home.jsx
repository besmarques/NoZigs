import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
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
  );
};
