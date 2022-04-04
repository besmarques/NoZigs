import React, { useRef, useEffect, useState, useContext } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { Context } from "../store/appContext";
import "../../styles/basemap.css";
import 'mapbox-gl/dist/mapbox-gl.css';

import Map, {Source, Layer, Marker} from 'react-map-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiYmVzbWFycXVlcyIsImEiOiJja3p2cGNlZXoxcGR3Mm9vaHBxMDRsajFsIn0.FQ2hMgnDU_P14-OPUQ8sTA';

const BaseMap = () => {

    const { store, actions } = useContext(Context);

    const parkLayer = {
        id: 'landuse_park',
        type: 'fill',
        source: 'mapbox',
        'source-layer': 'landuse',
        filter: ['==', 'class', 'park'],
        paint: {
          'fill-color': '#4E3FC8'
        }
      };

    const [lineCoordinates,setLineCoordinates] = useState([])  
    let tempLC = [];
    

    useEffect(()=>{
        if(store.geometry != ""){
            //console.log("geo", store.geometry.trips[0].geometry.coordinates.length);
            for(let i = 0; i < store.geometry.trips[0].geometry.coordinates.length; i++){
                //console.log(i);
                tempLC.push(store.geometry.trips[0].geometry.coordinates[i])
                setLineCoordinates(tempLC);
                //console.log(tempLC);
            }
    
        };

        line = {
            id: 'route',
            type: 'line',
            source: {
                'type': 'geojson',
                'data': {
                    'type': 'Feature',
                    'properties': {},
                    'geometry': {
                        'type': 'LineString',
                        'coordinates': lineCoordinates,
                    }
                }
            },
            layout: {
                'line-join': 'round',
                'line-cap': 'round'
            },
            paint: {
                'line-color': '#888',
                'line-width': 8
                }
            }
    },[store.geometry])
      
    console.log(lineCoordinates);

    let line = {
        id: 'route',
        type: 'line',
        source: {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                    'type': 'LineString',
                    'coordinates': [
                        [2.31915, 48.84917]
                        ,[2.318547, 48.85037]
                        ,[2.314037, 48.849184]
                        ,[2.306659, 48.853927]
                        ,[2.306297, 48.854114]
                        ,[2.305447, 48.854272]
                        ,[2.300131, 48.857658]
                        ,[2.299055, 48.857516]
                        ,[2.296865, 48.858932]
                        ,[2.29589, 48.85828]
                        ,[2.295458, 48.858467]
                        ,[2.294673, 48.858427]
                        ,[2.294737, 48.858809]
                    ,[2.294673, 48.858427]
                    ,[2.295458, 48.858467]
                    ,[2.29589, 48.85828]
                    ,[2.296865, 48.858932]
                    ,[2.299055, 48.857516]
                    ,[2.300131, 48.857658]
                    ,[2.305447, 48.854272]
                    ,[2.306297, 48.854114]
                    ,[2.306659, 48.853927]
                    ,[2.314037, 48.849184]
                    ,[2.318547, 48.85037]
                    ,[2.31915, 48.84917]],
                
                }
            }
        },
        layout: {
            'line-join': 'round',
            'line-cap': 'round'
        },
        paint: {
            'line-color': '#000',
            'line-width': 8
            }
        }

        


      if(store.locations != ""){

        

            return <Map initialViewState={{
                        longitude: store.locations[0].features[0].geometry.coordinates[0],
                        latitude: store.locations[0].features[0].geometry.coordinates[1],
                        zoom: 12}}
                    style={{width: '100%', height: '75vh'}}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                    mapboxAccessToken="pk.eyJ1IjoiYmVzbWFycXVlcyIsImEiOiJja3p2cGNlZXoxcGR3Mm9vaHBxMDRsajFsIn0.FQ2hMgnDU_P14-OPUQ8sTA"
                    >
                        {/*<Layer {...parkLayer} />*/}

                        {store.locations.map((listEntry, i) => (
                            <>
                            <Marker key={i} longitude={listEntry.features[0].geometry.coordinates[0]} latitude={listEntry.features[0].geometry.coordinates[1]} anchor="bottom" >
                                {i == 0 ? (<i className="fa-solid fa-map-pin" Style="font-size:30px;Color:#4be89f"> {i}</i>):
                                (<i className="fa-solid fa-map-pin" Style="font-size:30px;Color:#EA1889"> {i}</i>)}
                            </Marker>
                            </>
                        ))}

                    {/*<Layer {...line} />*/}   

                    </Map>;
    }else{
        return (
            <>
            
            </>
        );
    }
    
    
}
      

export default BaseMap