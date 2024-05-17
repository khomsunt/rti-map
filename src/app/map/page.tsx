"use client"
import React, { useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: 'calc(100vh - 52px)'
};

const center = {
    lat: 17.7318671993757,
    lng: 103.73167012255163
};

export const InputData = () => {
    return (
        <div className='absolute z-50 grid h-screen w-screen place-items-center'>
            <div className=' bg-white p-3 rounded-lg'>

                test<br />
                test<br />
                test<br />
                test<br />
                test<br />
                test<br />
                test<br />
                test<br />
                test<br />
                test<br />
            </div>
        </div>
    )
}

function Map() {
    const [marker, setMarker] = useState({});
    const [loaded, setLoaded] = useState(false);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDBOuXmW899WB6Wulz_Enpz6trqYblNRJQ"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        console.log("loaded=", loaded);
        if (!loaded) {
            setLoaded(true);
            // This is just an example of getting and using the map instance!!! don't just blindly copy!
            const bounds = new window.google.maps.LatLngBounds(center);
            // map.fitBounds(bounds);

            const customControlDiv = document.createElement('div');
            customControlDiv.style.height = '150px';
            customControlDiv.style.width = '150px';
            customControlDiv.style.backgroundColor = '#f00';
            customControlDiv.style.border = '2px solid #fff';
            customControlDiv.style.borderRadius = '50%';
            customControlDiv.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
            customControlDiv.style.cursor = 'pointer';
            customControlDiv.style.marginTop = '8px';
            customControlDiv.style.marginBottom = '20px';
            customControlDiv.style.marginRight = '10px';
            customControlDiv.style.textAlign = 'center';
            customControlDiv.title = 'Click to recenter the map';

            const controlText = document.createElement('button');
            controlText.style.color = 'rgb(255,255,255)';
            controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
            controlText.style.fontSize = '28px';
            controlText.style.lineHeight = '38px';
            controlText.style.paddingTop = '28px';
            controlText.style.paddingLeft = '5px';
            controlText.style.paddingRight = '5px';
            controlText.innerHTML = 'เรียก<br />รถพยาบาล';
            customControlDiv.appendChild(controlText);

            map.controls[window.google.maps.ControlPosition.BOTTOM_CENTER].push(customControlDiv);

            setMap(map)
            console.log("custom control");
            console.log("loaded=", loaded);
        }
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
            
            <InputData />
            {Object.keys(marker).length > 0 && (
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