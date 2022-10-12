import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

import Hero from "../component/homeComponents/hero.jsx";
import Steps from "../component/homeComponents/steps.jsx";
import Join from "../component/homeComponents/join.jsx";

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
			<Hero />
			<Steps />
			<Join />
		</>
	);
};
