import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Form, Button } from "react-bootstrap";
import { Context } from "../store/appContext";

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
            console.log(data);
            
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

      
      console.log(locations[0]);
      
        return (
          <>
          <p>teste</p>
          {locations != "" ? (
            <p>{locations[0].type}</p>
            )
            :("")}
          
          </>
  )

}
export default SingleTrip