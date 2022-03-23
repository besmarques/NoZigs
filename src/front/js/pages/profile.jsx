import React, { useState, useEffect, useContext } from "react";
import {Container,Row,Col } from 'react-bootstrap';
import { Context } from "../store/appContext";

import UserProfile from "../component/userProfile.jsx";
import MyTrips from "../component/myTrips.jsx";


const Profile = () => {
    return (
        <>
            <Container>
                <Row className="py-5">
                    <Col xs={12} lg={6}>
                        <UserProfile />
                    </Col>
                    <Col xs={12} lg={6}>
                        <MyTrips />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Profile