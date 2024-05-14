"use client"
import React, { useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: 'calc(100vh - 48px)'
};

const center = {
    lat: 17.7318671993757,
    lng: 103.73167012255163
};

function Map() {
    const [markers, setMarkers] = useState([]);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDBOuXmW899WB6Wulz_Enpz6trqYblNRJQ"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    const handleClick = (e) => {
        console.log("latitude=", e.latLng.lat())
        console.log("longitude=", e.latLng.lng())

        setMarkers((current) => [
            ...current,
            {
                lat: e.latLng.lat(),
                lng: e.latLng.lng()
            }
        ]);


    }

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
            onClick={handleClick}
        >
            { /* Child components, such as markers, info windows, etc. */}
            {markers.map((marker, index) => (
                <Marker key={index}
                    position={{
                        lat: marker.lat,
                        lng: marker.lng
                    }} />
            ))}
            <></>
        </GoogleMap>
    ) : <></>
}

export default React.memo(Map)