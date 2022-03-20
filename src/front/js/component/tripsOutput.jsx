import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const TripsOutput = () => {
    
    const { store, actions } = useContext(Context);

    return (
        <>
            <p>{store.locations.map((listEntry, i) => (<><p>{listEntry}</p></>))}</p>
            
        </>
    )
}
export default TripsOutput