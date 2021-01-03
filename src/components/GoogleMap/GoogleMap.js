import React, {useState} from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const Map = ({places, apiKey, center}) => {
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [map, setMap] = useState(null);

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);

    if (!places) return <div>loading...</div>;
    
    return (
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={17}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {places.length > 0 &&
            places.map((place, index) => (
              <Marker
                key={index}
                position={place.geometry.location}
                onClick={() => {
                  setSelectedPlace(place);
                }}
              />
            ))}
          {selectedPlace && (
            <InfoWindow
              position={selectedPlace.geometry.location}
              onCloseClick={() => setSelectedPlace(null)}
            >
              <div>
                <a
                  href={`http://maps.google.com/?q=${selectedPlace.formatted_address}`}
                >
                  <h6>{selectedPlace.name}</h6>
                  <p>{selectedPlace.formatted_address}</p>{" "}
                </a>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    );
}

export default React.memo(Map);