import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Context } from "../store/appContext";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Map, {Source, Layer, Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import "../../styles/singletrip.css";

const SingleTrip = props => {

	const { store, actions } = useContext(Context);
	const params = useParams();

	const [data, setData] = useState([])
	const [locations, setLocations] = useState("")
	let xlocations = "";
	let xlocations2 = "";

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

			const response = await fetch(`${process.env.BASE_URL}trips/${params.theid}`, requestOptions);
	
			const json = await response.json();

			setData(json)
			xlocations = json.locations;
			xlocations = xlocations.replaceAll("[000]", ",");
			xlocations = "[" + xlocations + "]";
			xlocations2 = JSON.parse(xlocations);
			setLocations(xlocations2)
			//console.log(data);
			
			} catch (error) {
				console.log("error fetch location data", error);
		    }
	    };
	    if(store.token){
		    fetchData();
		    }
    }, [store.token]);


	    //console.log("locati",locations.split("[000]"));
	    //let xlocations = locations.split("[000]");
	    //let xlocations = locations.replaceAll("[000]", ",");
	    //xlocations = "[" + xlocations + "]";
	    //let xlocations2 = JSON.parse(xlocations);
	    //console.log(typeof xlocations[0]);
	    //console.log(xlocations[0]);
	    //console.log("locat",JSON.parse(xlocations[0]));

	let titleArray = [];
	console.log(data);
    //console.log(locations[0]);

	let trvlName = "";
	let trvlCity = "";
	let trvlCountry = "";
	let trvlDate = "";

	if(data != ""){
		trvlName = data.name.toLowerCase();
		trvlName = trvlName.charAt(0).toUpperCase() + trvlName.slice(1).toLowerCase();

		trvlCity = data.city.toLowerCase();
		trvlCity = trvlCity.charAt(0).toUpperCase() + trvlCity.slice(1).toLowerCase();

		trvlCountry = data.country_code.toLowerCase();
		trvlCountry = trvlCountry.charAt(0).toUpperCase() + trvlCountry.slice(1).toLowerCase();

		trvlDate = data.travel_date;
		trvlDate = trvlDate.slice(0,-13);
		trvlDate = trvlDate.slice(5);
		console.log(locations);
	}





	
	    
	return (
		<>
		{locations.length > 0 ? (
		    <Container>
		    	<Row>
					<Col xs={12} lg={6}>
						<Row className="py-5">
							<Col xs={12}>
							<Map initialViewState={{
								longitude: locations[0].features[0].geometry.coordinates[0],
								latitude: locations[0].features[0].geometry.coordinates[1],
							zoom: 11}
			}
			style={{width: '100%', height: '100vh'}}
			mapStyle="mapbox://styles/mapbox/streets-v9"
			mapboxAccessToken="pk.eyJ1IjoiYmVzbWFycXVlcyIsImEiOiJja3p2cGNlZXoxcGR3Mm9vaHBxMDRsajFsIn0.FQ2hMgnDU_P14-OPUQ8sTA"
			>
					{/*<Layer {...parkLayer} />*/}

					{locations.map((listEntry, i) => (
						<>
						<Marker key={i} longitude={listEntry.features[0].geometry.coordinates[0]} latitude={listEntry.features[0].geometry.coordinates[1]} anchor="bottom" >
                                {i == 0 ? (<i className="fa-solid fa-map-pin" Style="font-size:30px;Color:#4be89f"> {i}</i>):
                                (<i className="fa-solid fa-map-pin" Style="font-size:30px;Color:#EA1889"> {i}</i>)}
                            </Marker>
						</>
					))}

				{/*<Layer {...line} />*/}   

				</Map>;
							</Col>
						</Row>
					</Col>
					<Col xs={12} lg={6}>
						<Row className="mt-5 p-3 d-flex justify-content-start card-row">
							<Row className="py-2"><h2 className="d-flex justify-content-start singletrip-title">{trvlName}</h2></Row>
							<h3><i class="fa-solid fa-location-dot"></i> {trvlCity}, {trvlCountry}</h3>
							<h6><i class="fa-solid fa-calendar-day"></i> {trvlDate}</h6>
						</Row>
						<Row className=" d-flex justify-content-center">
							<Col xs={12} lg={12}>
								{locations.length > 0
									? locations.map((listEntry, i) =>
										i == 0 ? (
											<Row key={i} className="my-3 px-2 p-lg-0 card-row">
												<Col xs={2} lg={2} className="d-flex justify-content-center card-icon-box-home">
													<i className="fa-solid fa-house card-icon"></i>
												</Col>
												<Col>
													<Row className="py-2">
														<p>
															{
																listEntry.features[0].place_type != "poi"
																? listEntry.features[0].place_type
																: listEntry.features[0].properties.category.split(",")
															}
														</p>
														<h6>{listEntry.features[0].place_name}</h6>
													</Row>
												</Col>
												<Col xs={2} lg={2} className="d-flex justify-content-center card-delete-box">
													{/**<Button className="card-delete-button" type="submit" onClick={() => removeAll(i)}>
														<i className="fa-solid fa-trash-can"></i>
														</Button>*/}
												</Col>
											</Row>
										) : i > 0 && listEntry.features[0].place_type == "poi" ? (
											<Row key={i} className="my-3 px-2 p-lg-0 card-row">
												<Col xs={2} lg={2} className="d-flex justify-content-center card-icon-box-poi">
													<i className="fa-solid fa-landmark-flag card-icon"></i>
												</Col>
												<Col>
													<Row className="py-2">
														<p>
															{listEntry.features[0].place_type != "poi"
															? listEntry.features[0].place_type
															: ((titleArray = listEntry.features[0].properties.category.split(",")),titleArray[0])}
														</p>
														<h6>{listEntry.features[0].place_name}</h6>
													</Row>
												</Col>
												<Col xs={2} lg={2} className="d-flex justify-content-center card-delete-box">
													{/*<Button className="card-delete-button" type="submit" onClick={() => removeItem(i)}>
														<i className="fa-solid fa-circle-minus"></i>
													</Button>*/}
												</Col>
											</Row>
										) : (
											<Row key={i} className="my-3 px-2 p-lg-0 card-row">
												<Col xs={2} lg={2} className="d-flex justify-content-center card-icon-box-address">
													<i className="fa-solid fa-tree-city card-icon"></i>
												</Col>
												<Col>
													<Row className="py-2">
														<p>
															{listEntry.features[0].place_type != "poi"
															? listEntry.features[0].place_type 
															: ((titleArray = listEntry.features[0].properties.category),titleArray[0])}
														</p>
														<h6>{listEntry.features[0].place_name}</h6>
													</Row>
												</Col>
												<Col xs={2} lg={2} className="d-flex justify-content-center card-delete-box">
													{/**<Button className="card-delete-button" type="submit" onClick={() => removeItem(i)}>
														<i className="fa-solid fa-circle-minus"></i>
													</Button>*/}
												</Col>
											</Row>
										)
									)
								:""}
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
			):("")}
		</>
    )
}
export default SingleTrip