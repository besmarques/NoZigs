import React from "react";
import HeroImage from "../../../img/hero_img.png";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

const Hero = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/trips");
	};

	return (
		<>
			<Container>
				<Row className="pt-4 pb-3 align-items-center">
					<Col xs={12} sm={12} lg={6}>
						<h1 className="hero-h1">
							<span className="pink">Discover</span> more, plan{" "}
							<span className="blue">better</span>
						</h1>
						<p className="hero-p">
							Find the{" "}
							<strong>
								<span className="black">shortest route</span>
							</strong>
							. Dont waste your time, visit more
						</p>
						<a className="btn hero-btn" onClick={handleClick}>
							Discover
						</a>
					</Col>
					<Col sm="12 py-5" lg="6 p-4">
						<Image fluid src={HeroImage} />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Hero;
