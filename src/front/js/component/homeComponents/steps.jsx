import React from "react";
import Crosshair from "../../../img/icons/crosshair.png";
import Mappin from "../../../img/icons/map-pin.png";
import Mapo from "../../../img/icons/map.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Steps = () => {
	return (
		<>
			<Container fluid className="bkg-blue py-5">
				<p className="marker">3 simple steps</p>
				<Container>
					<Row className="d-flex justify-content-around px-5">
						<Col sm={12} lg={3} className="my-5">
							<Row className="d-flex justify-content-center py-2">
								<Col
									xs={"auto"}
									className="g-0 p-3 bg-light border border-5 border-white rounded-circle">
									<Image
										src={Crosshair}
										width="40"
										height="40"
									/>
								</Col>
							</Row>
							<Row className="d-flex justify-content-center pt-4">
								<h3 className="text-center text-white">
									Type your starting point
								</h3>
							</Row>
						</Col>
						<Col sm={12} lg={3} className="my-5">
							<Row className="d-flex justify-content-center py-2">
								<Col
									xs={"auto"}
									className="g-0 p-3 bg-light border border-5 border-white rounded-circle">
									<Image
										src={Mappin}
										width="40"
										height="40"
									/>
								</Col>
							</Row>
							<Row className="d-flex justify-content-center pt-4">
								<h3 className="text-center text-white">
									Add the locations you’d like to visit
								</h3>
							</Row>
						</Col>
						<Col sm={12} lg={3} className="my-5">
							<Row className="d-flex justify-content-center py-2">
								<Col
									xs={"auto"}
									className="g-0 p-3 bg-light border border-5 border-white rounded-circle">
									<Image src={Mapo} width="40" height="40" />
								</Col>
							</Row>
							<Row className="d-flex justify-content-center pt-4">
								<h3 className="text-center text-white">
									Get the shortest route
								</h3>
							</Row>
						</Col>
					</Row>
				</Container>
			</Container>
		</>
	);
};

export default Steps;
