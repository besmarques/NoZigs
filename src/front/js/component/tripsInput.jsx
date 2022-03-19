import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Context } from "../store/appContext";

const TripsInput = () => {

    const [getName, setGetName] = useState("");
    const [name, setName] = useState("");

    const [getCountry, setGetCountry] = useState("");
    const [country, setCountry] = useState("");

    const [getCity, setGetCity] = useState("");
    const [city, setCity] = useState("");

    const [getBase, setGetBase] = useState("");
    const [base, setBase] = useState("");

    const [locationsInput, setLocationsInput] = useState([]);
    let [formLocation, setFormLocation] = useState("");


    function addToList() {
        setLocationsInput((prevState) => [...prevState,	formLocation]);
        setFormLocation("");
    }
 
    //console.log("name", name);
    //console.log("country", country);
    //console.log("city", city);
    //console.log("base", base);

    return (
        <>
            <Row className="py-5">
                <Col xs={12}>
                    
                    {/** Name */}    
                    {name == "" ?
                        /* get input of the user */  
                        <Row className="d-flex justify-content-center">
                            <Col xs={12} lg={8}>
                                <Form.Group className="mb-3" controlId="Name">
                                    <Row>
                                        <Form.Label>How would you like to call your trip</Form.Label>
                                    </Row>
                                    <Row className="d-flex justify-content-center">
                                        <Col xs={10} lg={10}>
                                            <Form.Control type="text" placeholder="Enter trip name" value={getName} onChange={(e) => setGetName(e.target.value)} onKeyPress={(e) => {event.key == "Enter" ? setName(getName):""} }/>
                                        </Col>
                                        <Col xs={2} lg={2}>
                                            <button type="submit" className="btn-form" onClick={() => setName(getName)}><i class="fa fa-save"></i></button>
                                            
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Col>
                        </Row>
                    :
                        /* return save data and allow edit */ 
                        <Row className="d-flex justify-content-center">
                            <Col xs={12} lg={8}>
                                <Form.Group className="mb-3" controlId="Name">
                                    <Row>
                                        <Form.Label>Your trip is called:</Form.Label>
                                    </Row>
                                    <Row className="d-flex justify-content-center">
                                        <Col xs={10} lg={10}>
                                            <Form.Control type="text" className="form-set" placeholder={name} disabled/>
                                        </Col>
                                        <Col xs={2} lg={2}>
                                            <button className="btn-edit" onClick={() => setName("")}><i class="far fa-edit"></i></button>
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Col>
                        </Row>
                    }
                    
                    {/** Country */}    
                    {country == "" ?
                        /* get input of the user */  
                        <Row className="d-flex justify-content-center">
                            <Col xs={12} lg={8}>
                                <Form.Group className="mb-3" controlId="Country">
                                    <Row>
                                        <Form.Label>What country are you visiting?</Form.Label>
                                    </Row>
                                    <Row className="d-flex justify-content-center">
                                        <Col xs={10} lg={10}>
                                            <Form.Select aria-label="Default select" value={getCountry} onChange={(e) => setGetCountry(e.target.value)} onKeyPress={(e) => {event.key == "Enter" ? setCountry(getCountry):""} }>
                                                <option >Select your country</option>
                                                <option value="FR">France</option>
                                                <option value="PT">Portugal</option>
                                                <option value="SP">Spain</option>
                                            </Form.Select>
                                        </Col>
                                        <Col xs={2} lg={2}>
                                            <button type="submit" className="btn-form" onClick={() => setCountry(getCountry)}><i class="fa fa-save"></i></button>
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Col>
                        </Row>
                    :
                        /* return save data and allow edit */ 
                        <Row className="d-flex justify-content-center">
                            <Col xs={12} lg={8}>
                                <Form.Group className="mb-3" controlId="Country">
                                    <Row>
                                        <Form.Label>The country you are visiting is:</Form.Label>
                                    </Row>
                                    <Row className="d-flex justify-content-center">
                                        <Col xs={10} lg={10}>
                                            <Form.Control type="text" className="form-set" placeholder={country} disabled/>
                                        </Col>
                                        <Col xs={2} lg={2}>
                                            <button className="btn-edit" onClick={() => setCountry("")}><i class="far fa-edit"></i></button>
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Col>
                        </Row>
                    }
                    

                    {/** City */}    
                    {city == "" ?
                        /* get input of the user */  
                        <Row className="d-flex justify-content-center">
                            <Col xs={12} lg={8}>
                                <Form.Group className="mb-3" controlId="City">
                                    <Row>
                                        <Form.Label>What city are you visiting?</Form.Label>
                                    </Row>
                                    <Row className="d-flex justify-content-center">
                                        <Col xs={10} lg={10}>
                                            <Form.Control type="text" placeholder="Enter the city you are visiting" value={getCity} onChange={(e) => setGetCity(e.target.value)} onKeyPress={(e) => {event.key == "Enter" ? setCity(getCity):""} }/>
                                        </Col>
                                        <Col xs={2} lg={2}>
                                            <button type="submit" className="btn-form" onClick={() => setCity(getCity)}><i class="fa fa-save"></i></button>
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Col>
                        </Row>
                    :
                        /* return save data and allow edit */ 
                        <Row className="d-flex justify-content-center">
                            <Col xs={12} lg={8}>
                                <Form.Group className="mb-3" controlId="City">
                                    <Row>
                                        <Form.Label>The city you are visiting is:</Form.Label>
                                    </Row>
                                    <Row className="d-flex justify-content-center">
                                        <Col xs={10} lg={10}>
                                            <Form.Control type="text" className="form-set" placeholder={city} disabled/>
                                        </Col>
                                        <Col xs={2} lg={2}>
                                            <button className="btn-edit" onClick={() => setCity("")}><i class="far fa-edit"></i></button>
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Col>
                        </Row>
                    }


                    {/** Base address*/}    
                    {base == "" ?
                        /* get input of the user */  
                        <Row className="d-flex justify-content-center">
                            <Col xs={12} lg={8}>
                                <Form.Group className="mb-3" controlId="base">
                                    <Row>
                                        <Form.Label>Whats your base location?</Form.Label>
                                    </Row>
                                    <Row className="d-flex justify-content-center">
                                        <Col xs={10} lg={10}>
                                            <Form.Control type="text" placeholder="Enter your hotel/hostel/base address" value={getBase} onChange={(e) => setGetBase(e.target.value)} onKeyPress={(e) => {event.key == "Enter" ? setBase(getBase):""} }/>
                                        </Col>
                                        <Col xs={2} lg={2}>
                                            <button className="btn-form" onClick={() => setBase(getBase)}><i class="fa fa-save"></i></button>
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Col>
                        </Row>
                    :
                        /* return save data and allow edit */ 
                        <Row className="d-flex justify-content-center">
                            <Col xs={12} lg={8}>
                                <Form.Group className="mb-3" controlId="base">
                                    <Row>
                                        <Form.Label>Your base location</Form.Label>
                                    </Row>
                                    <Row className="d-flex justify-content-center">
                                        <Col xs={10} lg={10}>
                                            <Form.Control type="text" className="form-set" placeholder={base} disabled/>
                                        </Col>
                                        <Col xs={2} lg={2}>
                                            <button className="btn-edit" onClick={() => setBase("")}><i class="far fa-edit"></i></button>
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Col>
                        </Row>
                    }

                        <Row className="d-flex justify-content-center">
                            <Col xs={12} lg={8}>
                                <Form.Group className="mb-3" controlId="locations">
                                    <Row>
                                        <Form.Label>Add places you'd like to visit</Form.Label>
                                    </Row>
                                    <Row className="d-flex justify-content-center">
                                        <Col xs={10} lg={10}>
                                            <Form.Control type="text" value={formLocation} placeholder="Enter addresses,zip codes or location names" onChange={(e) => setFormLocation(e.target.value)} onKeyPress={(e) => {event.key == "Enter" ? addToList() :""}} />
                                        </Col>
                                        <Col xs={2} lg={2}>
                                            <button className="btn-form" onClick={() => setLocationsInput((prevState) => [...prevState,	formLocation])}><i class="fa fa-plus"></i></button>
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Col>
                           {locationsInput.map((listEntry, i) => (<><p>{listEntry}</p></>))}
                        </Row>

                        <Row className="d-flex justify-content-center pt-4 pt-lg-5">
                            <Col xs={12} lg={8}>
                                <Row className="d-flex justify-content-center">
                                    <Col xs={12} lg={10} className="d-grid gap-2">
                                        <Button className="btn-submit-route" type="submit" size="lg">
                                            Give me the best route
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