import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const TripsOutput = () => {
    
    const { store, actions } = useContext(Context);


    return (
        <>
            
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
            
            {store.locations.length >= 2 ? store.locations.map((listEntry, i) => (<><p>{listEntry}</p></>)):""}


        
            
            
        </>
    )
}
export default TripsOutput