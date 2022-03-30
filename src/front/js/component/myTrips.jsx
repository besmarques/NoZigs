import React, { useState, useEffect, useContext } from "react";
import {Container,Row,Col, Form,Button } from 'react-bootstrap';
import { Context } from "../store/appContext";

import "../../styles/profile.css";

const MyTrips = () => {

    const [data, setData] = useState([{
        "name": "The nice trip",
        "city": "Paris",
        "country": "France"
    },
    {
        "name": "The great trip",
        "city": "Vienna",
        "country": "Austria"
    }]);

    function removeItem(i) {
		let temp = [...data];
        temp.splice(i, 1);
        setData(temp);
	}
    
    return (
        <>
        <Col xs={12} lg={6} >
            <h2 className="profile-title blue"> My trips</h2>
                <Row className="d-flex justify-content-center">
                    <Col xs={12} lg={12}>
                        {data.map((listEntry, i) => (
                            <Row key = {i} className="my-3 px-2 p-lg-0 card-row">
                                <Col xs={2} lg={2} className="d-flex justify-content-center card-icon-box-poi">
                                    <i class="fa-solid fa-route card-icon"></i>
                                </Col>
                                <Col >
                                    <Row className="py-2">
                                        <h6>{listEntry.city}, {listEntry.country}</h6>                                                
                                        <h3>{listEntry.name}</h3>                                
                                    </Row>
                                </Col>
                                <Col xs={2} lg={2} className="d-flex justify-content-center card-delete-box">
                                    <Button className="card-delete-button" type="submit" onClick={() => removeItem(i)}><i className="fa-solid fa-circle-minus"></i></Button>
                                </Col>
                            </Row> 
                        ))}
                    </Col>
                </Row>
            </Col>
        </>
    )
};

export default MyTrips
