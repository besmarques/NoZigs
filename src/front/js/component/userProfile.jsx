import React, { useState, useEffect, useContext } from "react";
import {Container, Row, Col, Image, Form } from 'react-bootstrap';
import { Context } from "../store/appContext";

import HeroImage from "../../img/hero_img.png";

const UserProfile = () => {

    const [getBirthday, setGetBirthday] = useState("");
    const [birthday, setBirthday] = useState("00 from Month");
    return (
        <>
        <Row className="py-5 border rounded-3">
            <Col xs={12} lg={5}>
                <Row >
                    <Image src={HeroImage} roundedCircle/>
                </Row>
            </Col>
            <Col xs={12} lg={7} >
                <Row className="py-5 align-items-center" >
                    <Col xs={12} lg={12}>
                        <h2 className="hero-h1"> 
                            <span className="pink">Fname</span> {" "}
                            <span className="blue">Lname</span>
                        </h2>
                    </Col>
                    <Col xs={12} lg={12}>
                        <h5>
                            <span className="blue"><i class="fa-solid fa-user"></i></span> {" "}
                                username
                            </h5>
                    </Col>
                    <Col xs={12} lg={12}>
                    {birthday == "" ?
                        (/* get input of the user */  
                        <Row className="d-flex justify-content-center">
                            <Form.Group className="mb-3" controlId="Name">
                                <Row className="d-flex justify-content-center">
                                    <Col xs={10} lg={10}>
                                        <Form.Control type="text" placeholder="Enter trip name" value={getBirthday} onChange={(e) => setGetName(e.target.value)} onKeyPress={(e) => {event.key == "Enter" ? setName(getBirthday):""} }/>
                                    </Col>
                                    <Col xs={2} lg={2}>
                                        <button type="submit" className="btn-form" onClick={() => setBirthday(getBirthday)}><i class="fa fa-save"></i></button>
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Row>)
                        :
                        (/* return save data and allow edit */ 
                        <Row className="d-flex justify-content-center">
                            <Form.Group className="mb-3" controlId="Name">
                               <Row className="d-flex justify-content-center">
                                    <Col xs={10} lg={10} className="d-flex align-items-center">
                                        <h5>
                                            <span className="pink"><i class="fa-solid fa-cake-candles"></i></span> {" "}
                                            00 of month
                                        </h5>
                                    </Col>
                                    <Col xs={2} lg={2}>
                                        <button className="btn-edit" onClick={() => setBirthday("")}><i class="far fa-edit"></i></button>
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Row>)}
                    </Col>
                    <Col xs={12} lg={12}>
                        <h5>
                            <span className="pink"><i class="fa-solid fa-envelope"></i></span> {" "}
                                email@mail.com
                        </h5>
                    </Col>
                    <Col xs={12} lg={12}>
                        <h5>
                            <span className="blue"><i class="fa-solid fa-key"></i></span> {" "}
                                Password
                        </h5>
                    </Col>
                </Row>
            </Col>
        </Row>

        
              
            
        </>
    )
};

export default UserProfile