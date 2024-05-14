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
    const [marker, setMarker] = useState({});

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDBOuXmW899WB6Wulz_Enpz6trqYblNRJQ"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        // map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    const handleClick = (e) => {
        console.log("latitude=", e.latLng.lat())
        console.log("longitude=", e.latLng.lng())
        setMarker(
            {
                lat: e.latLng.lat(),
                lng: e.latLng.lng()
            }
        );
    }

    const moveMarker = (e) => {
        console.log("latitude=", e.latLng.lat())
        console.log("longitude=", e.latLng.lng())
        setMarker(
            {
                lat: e.latLng.lat(),
                lng: e.latLng.lng()
            }
        );
    }

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={8}
            onLoad={onLoad}
            onUnmount={onUnmount}
            onClick={handleClick}
        >
            { /* Child components, such as marker, info windows, etc. */}
            {Object.keys(marker).length>0 && (
                <Marker
                draggable={true}  
                onDragEnd={moveMarker}  
                position={{
                        lat: marker.lat,
                        lng: marker.lng
                    }} />
                )}
            <></>
        </GoogleMap>
    ) : <></>
}

export default React.memo(Map)