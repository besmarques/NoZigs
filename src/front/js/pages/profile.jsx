import React, { useState, useEffect, useContext } from "react";
import {Container,Row,Col } from 'react-bootstrap';
import { Context } from "../store/appContext";
import "../../styles/profile.css";

import UserProfile from "../component/profileComponents/profile.jsx";
import MyTrips from "../component/profileComponents/trips.jsx";



const Profile = () => {
    

    return (
        <>
            <Container Style="height:47.9vh">
                <Row className="py-5">
                    
                        <UserProfile />
                    
                    
                        <MyTrips />
                    
                </Row>
            </Container>
        </>
    )
}
export default Profile