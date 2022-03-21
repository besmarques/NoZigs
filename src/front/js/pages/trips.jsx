import React, { useState, useEffect, useContext } from "react";
import {Container,Row,Col } from 'react-bootstrap';
import { Context } from "../store/appContext";

import TripsInput from "../component/tripsInput.jsx";
import TripsOutput from "../component/tripsOutput.jsx";
import TripsMap from "../component/tripsMap.jsx";

import TripsTeste from "../component/tripsTeste.jsx";

import "../../styles/trips.css";

const Trips = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} lg={6}><TripsInput /></Col>
                    <Col xs={12} lg={6}>{/*<TripsOutput />*/}<TripsTeste /></Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col><TripsMap /></Col>
                </Row>
            </Container>
        </>
    )
}
export default Trips