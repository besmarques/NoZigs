import React, { useState, useEffect, useContext } from "react";
import {Container,Row,Col } from 'react-bootstrap';
import { Context } from "../store/appContext";
import "../../styles/trips.css";

import TripsInteractions from "../component/tripsComponents/tripsInteractions.jsx";
import TripsMap from "../component/tripsComponents/tripsMap.jsx";

const Trips = () => {
    return (
        <>
            <Container >
                <Row>
                    <TripsInteractions/>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col>
                        <TripsMap />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Trips