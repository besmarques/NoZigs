import React, { useState, useEffect, useContext } from "react";
import {Container,Row,Col } from 'react-bootstrap';
import { Context } from "../store/appContext";
import "../../styles/profile.css";

import UserProfile from "../component/userProfile.jsx";
import MyTrips from "../component/myTrips.jsx";


const Profile = () => {
    return (
        <>
            <Container>
                <Row className="py-5">
                    
                        <UserProfile />
                    
                    
                        <MyTrips />
                    
                </Row>
            </Container>
        </>
    )
}
export default Profile