import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Form, Button } from "react-bootstrap";
import { Context } from "../store/appContext";

const SingleTrip = props => {

    const { store, actions } = useContext(Context);
    const params = useParams();

    const [trip, setTrip] = useState([])

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

            setTrip(json)
          } catch (error) {
            console.log("error fetch location data", error);
          }
        };
        fetchData();
      }, []);

    console.log(trip);
    return (
        <>
        
        {params.theid}
        This is the single trip 
        </>
    )
}
export default SingleTrip