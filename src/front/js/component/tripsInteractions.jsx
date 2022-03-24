import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Context } from "../store/appContext";


const TripsInteractions = () => {

    const { store, actions } = useContext(Context);

    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [url,setUrl] = useState("");

    const [geo, setGeo] = useState([]);

    let coordinatesData = [];
    const [waypoints, setWaypoints] = useState([]);

    function fetchLocation() {
        setUrl(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location} ${city}.json?country=${country}&limit=1&types=place%2Cpostcode%2Caddress%2Cpoi&access_token=${store.mapBoxToken}`);
        event.preventDefault();
        setLocation("");
    }

    /*function to remove one entry of the result data. used in each location */
    function removeItem(i) {
		let temp = [...data];
        temp.splice(i, 1);
        setData(temp);
	}

    /*function to remove all of the result data. used when deleting the base location */
    function removeAll(i) {
		setData([]);
	}

    useEffect(() => {
        actions.saveLocations(data)
    }, [data]);

    /** function to get location data */
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                //console.log(json);
                setData((prevState) => [...prevState,	json]);
                
                
            } catch (error) {
                console.log("error fetch location data", error);
            }
        };
        fetchData();
    }, [url]);

    /** function to get waypoints data */
    const getBestRoute = async () => {
        for(let i = 0; i < data.length; i++){
            coordinatesData.push(data[i].features[0].geometry.coordinates);
        }
        
        let coordinatesString = "";
        coordinatesString = coordinatesData.join(";");
		
        try{
            const response = await fetch("https://api.mapbox.com/optimized-trips/v1/mapbox/walking/" + coordinatesString + "?geometries=geojson&language=en&overview=simplified&steps=true&access_token=" + store.mapBoxToken);
            const json = await response.json();
         
            setWaypoints(json);
            setGeo(json);
            console.log("json",json);
            
        }
        catch(error){
            console.log("error on bet route", error)
        }
        
    }

    useEffect(()=>{
        actions.saveGeometry(geo);
    },[geo])



    let tempRoute = [];
    let tempTemp = [];

    useEffect(() => {
        
        if(waypoints != ""){
            for(let i = 0; i < waypoints.waypoints.length;i++){
                tempRoute.push(waypoints.waypoints[i].waypoint_index);
            }

            for(let i = 0;i < tempRoute.length; i++){
				tempTemp.push(data[tempRoute[i]])
			}
            setData(tempTemp);
        } 
    }, [waypoints]);

    let titleArray = [];

    return (
        <>
        <Row>
            <Col xs={12} lg={6}>
                <Row className="py-5">
                    <Col xs={12}>
                    {/** Trip name on form */}
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
                    {/** Country on form */}
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
                    {/** City on form */}
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
                    {/** Locations on form */}
                        {data.length == 0 ?  
                        /** Base Location on form */
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
                    /** Visit Locations on form */
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
                    {/** Button to fetch best route */}                      
                        <Row className="d-flex justify-content-center pt-4 pt-lg-5">
                            <Col xs={12} lg={8}>
                                <Row className="d-flex justify-content-center">
                                    <Col xs={12} lg={10} className="d-grid gap-2">
                                        {data.length >= 2 ? 
                                            <Button className="btn-submit-route" type="submit" size="lg" onClick={() => getBestRoute()}>
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
                    {/** Button to share trip */}  
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
                    {/** Button to save trip */} 
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
            <Col xs={12} lg={6}>
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
                                                <p>{listEntry.features[0].place_type != "poi" ? (listEntry.features[0].place_type) : ( titleArray = listEntry.features[0].properties.category.split(","),titleArray[0])}</p>                                                
                                                <h6>{listEntry.features[0].place_name}</h6>                                
                                            </Row>
                                        </Col>

                                        <Col xs={2} lg={2} className="d-flex justify-content-center card-delete-box">
                                            <Button className="card-delete-button" type="submit" onClick={() => removeAll(i)}><i className="fa-solid fa-trash-can"></i></Button>
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
                                                    <p>{listEntry.features[0].place_type != "poi" ? (listEntry.features[0].place_type) : ( titleArray = listEntry.features[0].properties.category.split(","),titleArray[0])}</p>                                                
                                                    <h6>{listEntry.features[0].place_name}</h6>                                
                                                </Row>
                                            </Col>
                                            <Col xs={2} lg={2} className="d-flex justify-content-center card-delete-box">
                                                <Button className="card-delete-button" type="submit" onClick={() => removeItem(i)}><i className="fa-solid fa-circle-minus"></i></Button>
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
                                                    <h6>{listEntry.features[0].place_name}</h6>                                
                                                </Row>
                                            </Col>
                                            <Col xs={2} lg={2} className="d-flex justify-content-center card-delete-box">
                                                <Button className="card-delete-button" type="submit" onClick={() => removeItem(i)}><i className="fa-solid fa-circle-minus"></i></Button>
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
            <p>{/*console.log("store",store.locations)*/}</p>
        </Row>
        </>
    )
};

export default TripsInteractions