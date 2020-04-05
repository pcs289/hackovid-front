import React from 'react';
import { usePosition } from 'use-position';
import {distance} from "../utils/GeoMaths";

const Geo = () => {
    const lat2 = 41.4138691;
    const lon2 = 2.1562317;
    const { latitude, longitude, timestamp, accuracy } = usePosition(false, { enableHighAccuracy: true, timeout: 5000, maximumAge: Infinity});
    return (
        <code>
            latitude: {latitude}<br/>
            longitude: {longitude}<br/>
            timestamp: {timestamp}<br/>
            accuracy: {accuracy && `${accuracy}m`}<br/>
            <h4>La distancia fins a la Resi <a href={"https://google.com/maps/@41.4138691,2.1562317,20z"}>(41.4138691, 2.1562317)</a> és:</h4>
            <p>{latitude && longitude && distance({lat: latitude, lon: longitude}, {lat: lat2, lon: lon2})} Km +- { accuracy }m</p>
            <p>{latitude && longitude && distance({lat: latitude, lon: longitude}, {lat: lat2, lon: lon2}) * 100} +- { accuracy } m</p>
        </code>
    );
};

export default Geo;
