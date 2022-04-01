import React, { useState, useEffect, useContext } from "react";
import {Container,Row,Col, Form,Button } from 'react-bootstrap';
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

import "../../styles/profile.css";

const MyTrips = props => {

    const { store, actions } = useContext(Context);
    const [tripsList, setTripsList] = useState("");

    //let token = sessionStorage.getItem("token");

    useEffect(() => {
        const fetchData = async () => {
        
        try {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer " + store.token);

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            const response = await fetch(`${process.env.BASE_URL}profile`, requestOptions);
    
            const json = await response.json();

            setTripsList(json)
        } catch (error) {
            console.log("error fetch location data", error);
        }
    };
    if(store.token){
        fetchData();
        }
    }, [store.token]);

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
                        {/**console.log(Object.keys(tripsList))*/}
                        {console.log(tripsList)}
                        {Object.keys(tripsList).map(key => {
                            return (
                                <>
                                <Link to={"/trips/" + tripsList[key].id} >
                                    <Row key={key.id} className="my-3 px-2 p-lg-0 card-row">
                                        <Col xs={2} lg={2} className="d-flex justify-content-center card-icon-box-poi">
                                            <i class="fa-solid fa-route card-icon"></i>
                                        </Col>
                                        <Col >
                                            <Row className="py-2">
                                                <h6>{tripsList[key].city}, {tripsList[key].country_code}</h6>                                                
                                                <h3>{tripsList[key].name}</h3>                                
                                            </Row>
                                        </Col>
                                        {/**<Col xs={2} lg={2} className="d-flex justify-content-center card-delete-box">
                                            <Button className="card-delete-button" type="submit" onClick={() => removeItem(key)}><i className="fa-solid fa-circle-minus"></i></Button>
                                        </Col>*/}
                                    </Row> 
                                </Link>
                                </>
                            )
                            
                        })}
                    </Col>
                </Row>
            </Col>
        </>
    )
};

export default MyTrips
