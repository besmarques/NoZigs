import React, { useState, useEffect, useContext } from "react";
import {Container,Row,Col } from 'react-bootstrap';
import { Context } from "../store/appContext";

import TripsInput from "../component/tripsInput.jsx";
import TripsOutput from "../component/tripsOutput.jsx";
import TripsMap from "../component/tripsMap.jsx";

import "../../styles/trips.css";

const Trips = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col><TripsInput /></Col>
                    <Col><TripsOutput /></Col>
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