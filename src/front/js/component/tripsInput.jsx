import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Context } from "../store/appContext";

const TripsInput = () => {
    return (
        <>
            <Row className="py-5">
                <Col className="Col-12">
                    {/*<h1>Trips Input</h1>*/}
                    <Form >
                        <Row>
                            <Col className="Col-12 d-flex justify-content-center">
                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>How would you like to call your trip</Form.Label>
                                    <Form.Control type="text" placeholder="Enter trip name" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="Col-12 d-flex justify-content-center">
                                <Form.Group className="mb-3" controlId="country">
                                    <Form.Label>What country are you visiting?</Form.Label>
                                    <Form.Select aria-label="Default select">
                                        <option >Select your country</option>
                                        <option value="FR">France</option>
                                        <option value="PT">Portugal</option>
                                        <option value="SP">Spain</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="Col-12 d-flex justify-content-center">
                                <Form.Group className="Col-12 mb-3" controlId="base">
                                    <Form.Label>Whats your base location</Form.Label>
                                    <Row>
                                        <Col className="Col-8">
                                            <Form.Control type="text" placeholder="Enter your hotel/hostel/place" />
                                        </Col>
                                        <Col className="Col-4">
                                            <Button>+</Button>
                                        </Col>
                                    </Row>   
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
            
        </>
    )
}
export default TripsInput