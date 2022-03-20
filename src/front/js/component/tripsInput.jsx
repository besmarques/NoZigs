import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Context } from "../store/appContext";

const TripsInput = () => {

    const { store, actions } = useContext(Context);

    
    const [name, setName] = useState("");

    
    const [country, setCountry] = useState("");

    
    const [city, setCity] = useState("");

    
    const [base, setBase] = useState("");

    const [locations, setLocations] = useState([]);
    let [getLocation, setGetLocation] = useState("");

    useEffect(()=>{
        actions.saveName(name)
    },[name]);
    
    useEffect(()=>{
        actions.saveCountry(country)
    },[country]);
    
    useEffect(()=>{
        actions.saveCity(city)
    },[city]);

    useEffect(()=>{
        actions.saveBase(base)
    },[base]);
    
    useEffect(()=>{
        actions.saveLocations(locations)
    },[locations]);
    


    function addToList() {
        setLocations((prevState) => [...prevState,	getLocation]);
        setGetLocation("");
    }

    function finalSubmit(){
        if(getLocation != "" && locations == ""){
            addToList();
            actions.getDataFromFront(name,country,city,base,getLocation);
        }else {
            actions.getDataFromFront(name,country,city,base,locations);
        }
    }


    return (
        <>
            <Row className="py-5">
                <Col xs={12}>
                    <Row className="d-flex justify-content-center">
                        <Col xs={12} lg={8}>
                            <Form.Group className="mb-3" controlId="Name">
                                <Row>
                                    <Form.Label>How would you like to call your trip</Form.Label>
                                </Row>
                                <Row className="d-flex justify-content-center">
                                    <Col xs={10} lg={10}>
                                        <Form.Control type="text" placeholder="Enter trip name" value={name} onChange={(e) => setName(e.target.value)} onKeyPress={(e) => {event.key == "Enter" ? setName(name):""} }/>
                                    </Col>
                                    <Col xs={2} lg={2}>
                                            
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Col>
                    </Row>
                    
                    <Row className="d-flex justify-content-center">
                        <Col xs={12} lg={8}>
                            <Form.Group className="mb-3" controlId="Country">
                                <Row>
                                    <Form.Label>What country are you visiting?</Form.Label>
                                </Row>
                                <Row className="d-flex justify-content-center">
                                    <Col xs={10} lg={10}>
                                        <Form.Select aria-label="Default select" value={country} onChange={(e) => setCountry(e.target.value)} >
                                            <option >Select your country</option>
                                            <option value="FR">France</option>
                                            <option value="PT">Portugal</option>
                                            <option value="SP">Spain</option>
                                        </Form.Select>
                                    </Col>
                                    <Col xs={2} lg={2}>
                                            
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Col>
                    </Row>
                    
                    <Row className="d-flex justify-content-center">
                        <Col xs={12} lg={8}>
                            <Form.Group className="mb-3" controlId="City">
                                <Row>
                                    <Form.Label>What city are you visiting?</Form.Label>
                                </Row>
                                <Row className="d-flex justify-content-center">
                                    <Col xs={10} lg={10}>
                                        <Form.Control type="text" placeholder="Enter the city you are visiting" value={city} onChange={(e) => setCity(e.target.value)}/>
                                    </Col>
                                    <Col xs={2} lg={2}>
                                            
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Col>
                    </Row>
                    
                    <Row className="d-flex justify-content-center">
                        <Col xs={12} lg={8}>
                            <Form.Group className="mb-3" controlId="base">
                                <Row>
                                    <Form.Label>Whats your base location?</Form.Label>
                                </Row>
                                <Row className="d-flex justify-content-center">
                                    <Col xs={10} lg={10}>
                                        <Form.Control type="text" placeholder="Enter your hotel/hostel/base address" value={base} onChange={(e) => setBase(e.target.value)} />
                                    </Col>
                                    <Col xs={2} lg={2}>

                                    </Col>
                                </Row>
                            </Form.Group>
                        </Col>
                    </Row>
                    
                    <Row className="d-flex justify-content-center">
                        <Col xs={12} lg={8}>
                            <Form.Group className="mb-3" controlId="locations">
                                <Row>
                                    <Form.Label>Add places you'd like to visit</Form.Label>
                                </Row>
                                <Row className="d-flex justify-content-center">
                                    <Col xs={10} lg={10}>
                                        <Form.Control type="text" value={getLocation} placeholder="Enter addresses,zip codes or location names" onChange={(e) => setGetLocation(e.target.value)} onKeyPress={(e) => {event.key == "Enter" ? addToList() :""}}/>
                                    </Col>
                                    <Col xs={2} lg={2}>
                                        <button className="btn-form" onClick={() => addToList()}><i className="fa fa-plus"></i></button>
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Col>
                        {/**locations.map((listEntry, i) => (<><p>{listEntry}</p></>))*/}
                    </Row>

                    <Row className="d-flex justify-content-center pt-4 pt-lg-5">
                        <Col xs={12} lg={8}>
                            <Row className="d-flex justify-content-center">
                                <Col xs={12} lg={10} className="d-grid gap-2">
                                    {name != "" && country != "" && city != "" && base != "" && (getLocation != "" || locations != "")? 
                                        <Button className="btn-submit-route" type="submit" size="lg" onClick={() => finalSubmit()}>
                                            Give me the best route
                                        </Button>
                                        :
                                        <Button className="btn-disable-route" type="submit" size="lg">
                                            Give me the best route
                                        </Button>
                                    }
                                </Col>
                                <Col xs={12} lg={2}>

                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    
                    <Row className="d-flex justify-content-center pt-4 pt-lg-5">
                        <Col xs={12} lg={8}>
                            <Row className="d-flex justify-content-center">
                                <Col xs={12} lg={10} className="d-grid gap-2">
                                    <Button className="btn-submit-share" type="submit" size="lg">
                                        Share
                                    </Button>
                                </Col>
                                <Col xs={12} lg={2}></Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className="d-flex justify-content-center pt-4 pt-lg-5">
                        <Col xs={12} lg={8}>
                            <Row className="d-flex justify-content-center">
                                <Col xs={12} lg={10} className="d-grid gap-2">
                                    <Button className="btn-submit-save" type="submit" size="lg">
                                        Save Trip
                                    </Button>
                                </Col>
                                <Col xs={12} lg={2}></Col>
                            </Row>
                        </Col>    
                    </Row>
                </Col>
            </Row>
        </>
    )
}
export default TripsInput