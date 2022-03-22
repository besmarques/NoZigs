import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Context } from "../store/appContext";


const Tripstest = () => {
    const [data, setData] = useState([]);
    const [location, setLocation] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [url,setUrl] = useState("");

    const [canFetch,setCanFetch] = useState(false);

    function fetchLocation() {
        setUrl(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location} ${city}.json?country=${country}&limit=1&types=place%2Cpostcode%2Caddress%2Cpoi&access_token=pk.eyJ1IjoiYmVzbWFycXVlcyIsImEiOiJja3p2cGRucDQwMGliMm9rNnpuOG90MG9nIn0.5n3XuDKIqcxsIDs-1VGs7g`);
        event.preventDefault();
        setLocation("");
    }

    

    useEffect(() => {
  
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                setData((prevState) => [...prevState,	json]);
                
                
            } catch (error) {
                console.log("error", error);
            }
        };
        
        fetchData();
    }, [url]);

    console.log(data.length);

    /*if(data.length == 1){
        setCanFetch(true);
    }*/

    return (
        <>
        <Row>
            <Col xs={12} lg={6}>
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
                        {data.length == 0 ?  
                        <Row className="d-flex justify-content-center">
                            <Col xs={12} lg={8}>
                                <Form.Group className="mb-3" controlId="base">
                                    <Row>
                                        <Form.Label>Add your base address</Form.Label>
                                    </Row>
                                    <Row className="d-flex justify-content-center">
                                        <Col xs={10} lg={10}>
                                            {city != "" && country != "" ? 
                                                <Form.Control  type="text" value={location} placeholder="Enter your hotel/hostel/base address" onChange={(e) => setLocation(e.target.value)} onKeyPress={(e) => {event.key == "Enter" ? fetchLocation() :""}}/>
                                            :
                                               <Form.Control disabled type="text" value={location} placeholder="Enter your hotel/hostel/base address" onChange={(e) => setLocation(e.target.value)} onKeyPress={(e) => {event.key == "Enter" ? fetchLocation() :""}}/> 
                                            }
                                        </Col>
                                        <Col xs={2} lg={2}>
                                            {city != "" && country != "" ? <button className="btn-form-base" onClick={() => fetchLocation()}><i className="fa fa-plus"></i></button>:""}
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Col>
                        </Row>
                        :
                        <Row className="d-flex justify-content-center">
                            <Col xs={12} lg={8}>
                                <Form.Group className="mb-3" controlId="locations">
                                    <Row>
                                        <Form.Label>Add places you'd like to visit</Form.Label>
                                    </Row>
                                    <Row className="d-flex justify-content-center">
                                        <Col xs={10} lg={10}>
                                            <Form.Control type="text" value={location} placeholder="Enter addresses,zip codes or location names" onChange={(e) => setLocation(e.target.value)} onKeyPress={(e) => {event.key == "Enter" ? fetchLocation() :""}}/>
                                        </Col>
                                        <Col xs={2} lg={2}>
                                            <button className="btn-form" onClick={() => fetchLocation()}><i className="fa fa-plus"></i></button>
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Col>
                        </Row>}

                        <Row className="d-flex justify-content-center pt-4 pt-lg-5">
                        <Col xs={12} lg={8}>
                            <Row className="d-flex justify-content-center">
                                <Col xs={12} lg={10} className="d-grid gap-2">
                                    {data.length >= 2 ? 
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
            </Col>
            <Col>
                <Row className="py-5 d-flex justify-content-center">
                    <Col xs={12} lg={12}>
                        {data.length > 0 ? 
                            data.map((listEntry, i) => (
                                    i == 0 ? (
                                       <Row key = {i} className="my-3 px-2 p-lg-0 card-row">
                                        <Col xs={2} lg={2} className="d-flex justify-content-center card-icon-box-home">
                                            <i className="fa-solid fa-house card-icon"></i>
                                        </Col>
                                        
                                        <Col >
                                            <Row className="py-2">
                                                <p>{listEntry.features[0].place_type != "poi" ? listEntry.features[0].place_type : listEntry.features[0].properties.category}</p>                                                
                                                <h4>{listEntry.features[0].place_name}</h4>                                
                                            </Row>
                                        </Col>
                                    </Row>)   
                                    : (
                                    i > 0 && listEntry.features[0].place_type == "poi" ? 
                                        (<Row key = {i} className="my-3 px-2 p-lg-0 card-row">
                                            <Col xs={2} lg={2} className="d-flex justify-content-center card-icon-box-poi">
                                                <i className="fa-solid fa-landmark-flag card-icon"></i>
                                            </Col>
                                            <Col >
                                                <Row className="py-2">
                                                    <p>{listEntry.features[0].place_type != "poi" ? listEntry.features[0].place_type : listEntry.features[0].properties.category}</p>                                                
                                                    <h4>{listEntry.features[0].place_name}</h4>                                
                                                </Row>
                                            </Col>
                                        </Row> ) 
                                        :
                                        (<Row key = {i} className="my-3 px-2 p-lg-0 card-row">
                                            <Col xs={2} lg={2} className="d-flex justify-content-center card-icon-box-address">
                                                <i className="fa-solid fa-tree-city card-icon"></i>
                                            </Col>
                                            <Col >
                                                <Row className="py-2">
                                                    <p>{listEntry.features[0].place_type != "poi" ? listEntry.features[0].place_type : listEntry.features[0].properties.category}</p>                                                
                                                    <h4>{listEntry.features[0].place_name}</h4>                                
                                                </Row>
                                            </Col>
                                        </Row>)
                                    )  
                                
                            
                       

                               
                                ))
                                :
                                ""
                        }
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row>
            <p>{url}</p>
        </Row>
        </>
    )
};

export default Tripstest