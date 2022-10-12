import React from "react";
import {
	BrowserRouter,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.jsx";

import { Home } from "./pages/home.jsx";
import { Single } from "./pages/single.jsx";
import injectContext from "./store/appContext";

import { Header } from "./component/header.jsx";
import { Footer } from "./component/footer.jsx";
import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";

import Trips from "./pages/trips.jsx";
import Profile from "./pages/profile.jsx";

import ProtectedRoute from "./component/ProtectedRoute.jsx";
import SingleTrip from "./views/singleTripView.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	let loggedIn = "";

	if (sessionStorage.getItem("token")) {
		loggedIn = true;
	} else {
		loggedIn = false;
	}

	return (
		<>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Header />
					<Routes>
						<Route element={<Home />} exact path="/" />
						<Route element={<Signup />} exact path="/signup" />
						<Route element={<Login />} exact path="/login" />
						<Route
							element={
								loggedIn ? <Single /> : <Navigate to="/login" />
							}
							exact
							path="/single/:theid"
						/>
						<Route
							element={
								loggedIn ? <Trips /> : <Navigate to="/login" />
							}
							exact
							path="/trips"
						/>
						<Route
							element={
								loggedIn ? (
									<SingleTrip />
								) : (
									<Navigate to="/login" />
								)
							}
							exact
							path="/trips/:theid"
						/>
						<Route
							element={
								loggedIn ? (
									<Profile />
								) : (
									<Navigate to="/login" />
								)
							}
							exact
							path="/profile"
						/>
						<Route element={"Not found!"} exact path="*" />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</>
	);
};

export default injectContext(Layout);
