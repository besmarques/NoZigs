import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import SecondHeroImage from "../../../img/second_hero_img.jpg";

const Join = () => {
	const navigate = useNavigate();
	const { store, actions } = useContext(Context);

	const handleRegister = () => {
		navigate("/signup");
	};

	const handleDiscover = () => {
		navigate("/trips");
	};

	return (
		<>
			<Container className="py-5 my-5">
				<Row className="d-flex align-items-center justify-content-center"></Row>
				<Row className="d-flex align-items-center my-5">
					<Col lg={5}>
						<Image
							fluid
							className="second-hero-img"
							src={SecondHeroImage}
						/>
					</Col>
					<Col lg="7 px-5">
						<h3 className="hero-title text-start">
							Visit cities on budget and faster
						</h3>

						{!store.token ? (
							<>
								<Row className="d-flex justify-content-start">
									<h1 className="">
										Join now and start saving time
									</h1>
								</Row>
								<Row className="d-flex justify-content-start px-3">
									<a
										className="btn jnow-btn"
										onClick={handleRegister}>
										Register Now
									</a>
								</Row>
							</>
						) : (
							<>
								<Row className="d-flex justify-content-start">
									<h1 className="">Use Nozigs now!</h1>
								</Row>
								<Row className="d-flex justify-content-start px-3">
									<a
										className="btn jnow-btn"
										onClick={handleDiscover}>
										Search Trips
									</a>
								</Row>
							</>
						)}
					</Col>
				</Row>
			</Container>
		</>
	);
};
export default Join;
