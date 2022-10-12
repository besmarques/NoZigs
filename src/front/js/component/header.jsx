import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../img/logo.png";
import "../../styles/navbar.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";

export const Header = () => {
	const { store, actions } = useContext(Context);

	let location = useLocation();
	//console.log(location.pathname);

	const display =
		/*location.pathname === "/" ||*/
		location.pathname === "/login" || location.pathname === "/signup"
			? "display-none"
			: "";

	console.log(display);
	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
				<Container className="py-3">
					<Navbar.Brand as={Link} to="/">
						<Image src={Logo} height="40" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ms-auto align-items-center">
							{store.token ? (
								<>
									<Nav.Link as={Link} to="/trips">
										Trips
									</Nav.Link>
									<Nav.Link as={Link} to="/profile">
										Profile
									</Nav.Link>
									<Nav.Link
										as={Link}
										to="/login"
										onClick={() => actions.logout()}
										>
										<button className="btn btn-info text-white">
											Logout{" "}
											<i class="fa-solid fa-right-from-bracket"></i>
										</button>
									</Nav.Link>
								</>
							) : (
								<>
									<Nav.Link as={Link} to="/login">
										<button className="login-link">
											Login{" "}
											<i class="fa-solid fa-arrow-right-to-bracket"></i>
										</button>
									</Nav.Link>
									<Nav.Link as={Link} to="/signup">
										<button className="signupu">
											Signup{" "}
											<i class="fa-solid fa-user-plus"></i>
										</button>
									</Nav.Link>
								</>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};
