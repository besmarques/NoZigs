import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Context } from "../store/appContext";

const TripsTeste = () => {
    
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

    const { store, actions } = useContext(Context);

    const [posts, setPosts] = useState([])

    useEffect(()=> {
       
        setPosts(store.resultObject);
        
    }, [store.resultObject])

    console.log("posts", posts)

    return (
        <>
            <h1>Teste</h1>
           {
               /*posts != "" ? posts.map((listEntry, i) => <li key={i}>{listEntry.features.id}</li>) : ""*/
               posts.map((listEntry, i) => <li key={i}>{listEntry.features[0].place_type} asdad {listEntry.features[0].place_name}</li>)
           }
            
               
                
            
           


        
            
            
        </>
    )
}
export default TripsTeste