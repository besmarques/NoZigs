import React, { useState, useEffect, useContext } from "react";
import {Container,Row,Col, Image } from 'react-bootstrap';
import { Context } from "../store/appContext";

import HeroImage from "../../img/hero_img.png";

const UserProfile = () => {
    return (
        <>
        <Row>
            <Col xs={12} lg={4}>
                <Row className="py-5">
                    <Image src={HeroImage} roundedCircle/>
                </Row>
            </Col>
            <Col xs={12} lg={8}>
                <Row className="py-5">
                    <h1 className="hero-h1"> 
                        <span className="pink">Fname</span> {" "}
                        <span className="blue">Lname</span>
                    </h1>
                    <Row className="" Style="">
                        <Col xs={12} lg={4}>
                            <h5>
                            <span className="blue"><i class="fa-solid fa-user"></i></span> {" "}
                                username
                            </h5>
                        </Col>
                        <Col xs={12} lg={4}>
                            <h5>
                            <span className="pink"><i class="fa-solid fa-cake-candles"></i></span> {" "}
                                00 of month
                            </h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} lg={4}>
                            <h5>
                            <span className="pink"><i class="fa-solid fa-envelope"></i></span> {" "}
                                email@mail.com
                            </h5>
                        </Col>
                        <Col xs={12} lg={4}>
                            <h5>
                            <span className="blue"><i class="fa-solid fa-key"></i></span> {" "}
                                Password
                            </h5>
                        </Col>
                    </Row>
                </Row>
            </Col>
        </Row>

        
              
            
        </>
    )
};

export default UserProfile