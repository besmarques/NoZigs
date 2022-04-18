import React from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../img/logo.png";


export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
	
			<>
				<Container fluid >
					<Container>
						<Row className="d-flex justify-content-between py-5">
							<Col><img src={Logo} height="80" alt="logo" /></Col>
						</Row>
						<Row className="d-flex justify-content-center pt-3">
							<h4>Keep in touch</h4>
						</Row>
						<Row >
							<Col className="d-flex justify-content-center pt-3 pb-5">
								<i className="fa-brands fa-facebook ms-2 me-2" Style="font-size:40px;color:#4267B2;"/>
								<i className="fa-brands fa-instagram ms-2 me-2" Style="font-size:40px;color:#E1306C;" />
								<i className="fa-brands fa-pinterest ms-2 me-2" Style="font-size:40px;color:#E60023" />
								<i className="fa-brands fa-linkedin ms-2 me-2" Style="font-size:40px;color:#0072b1" />
							</Col>
						</Row>
					</Container>
				</Container>
				<Container fluid Style="background-color:#1fa9ff;" className="py-3 text-light">
					<Container>
						<Row className="d-flex justify-content-lg-between">
							<Col xs={12} lg={6} className="d-lg-flex justify-content-sm-center justify-content-lg-start">
								<Link to="" className="ms-2 me-2" Style="color:white;text-decoration:none;">
									<span>Privacy Policy</span>
								</Link>
								<Link to="/trips" className="ms-2 me-2" Style="color:white;text-decoration:none;">
									<span>Terms of use</span>
								</Link>
                        	</Col>
							<Col xs={12} lg={6} className="d-lg-flex justify-content-end">
								© 2022 All rights reserved
							</Col>
						</Row>
					</Container>
				</Container>
			</>
		
	</footer>
);


