import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<div>
			<>
				<Navbar bg="light" variant="light">
					<Container>
					<Navbar.Brand>Made with <i className="fa fa-heart text-danger" /> by NoZigs</Navbar.Brand>
					<Nav className="me-auto footer-links">
					<Nav.Link href="https://github.com/NoZigs/NoZigs">Git</Nav.Link>
					<Nav.Link href="https://4geeksacademy.com/">About Us</Nav.Link>
					<Nav.Link href="#pricing">Paid Version</Nav.Link>
					</Nav>
					<p className="footer-text">Copyright 2022</p>
					</Container>
				</Navbar>
			</>
		</div>
	</footer>
);
