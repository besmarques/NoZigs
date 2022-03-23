import React, { useState, useEffect, useContext } from "react";
import {Container,Row,Col } from 'react-bootstrap';
import { Context } from "../store/appContext";

import UserProfile from "../component/userProfile.jsx";
import MyTrips from "../component/myTrips.jsx";


const Profile = () => {
    return (
        <>
            <Container>
                <Row>
                    <UserProfile />
                </Row>
            
                <Row>
                    <Col>
                       <MyTrips />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Profile