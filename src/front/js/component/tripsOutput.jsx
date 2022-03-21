import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Context } from "../store/appContext";

const TripsOutput = () => {
    
    const { store, actions } = useContext(Context);

let bago = [];

    useEffect(() => {
        
        bago = store.resultObject;
      });

    return (
        <>
            <Row className="py-5">
                <Col xs={12}>
                <h2>
                    {
                    store.name != "" && 
                    store.country != "" && 
                    store.city != "" 
                    ? 
                        <h2>Your {store.name} trip to {store.city},{store.country}</h2>
                    :
                        ""
                    }
                </h2>
                store.locations
                    {store.locations.length >= 2 ? store.locations.map((listEntry, i) => (
                        <>
                        <Row className="d-flex justify-content-center">
                            <Col xs={12} lg={8}>
                            <Row>
                                <Col xs={4} className="primary">
                                    <i className="fa fa-plus"></i>
                                </Col>
                                <Col xs={8}>
                                    {listEntry}
                                </Col>
                            </Row>  
                                
                            </Col>
                        </Row></>)):""}

                        <p>store.object</p>
                        {store.resultObject.length >= 2 ? store.resultObject.map((listEntry, i) => (
                        <>
                        <Row key = {i} className="d-flex justify-content-center">
                            <Col xs={12} lg={8}>
                            <Row>
                                <Col xs={4} className="primary">
                                    <i className="fa fa-plus"></i>
                                </Col>
                                <Col xs={8}>
                                    {listEntry.features.place_name}
                                    
                                </Col>
                            </Row>  
                            
                                
                            </Col>
                        </Row></>)):""}
                        {bago}
                    </Col>
            </Row>
            
               
                
            
           


        
            
            
        </>
    )
}
export default TripsOutput