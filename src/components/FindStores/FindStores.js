import React , {useState, useEffect} from 'react'
import './FindStores.css'
import GoogleMap from '../GoogleMap'

const center = {
  lat: 38.907192,
  lng: -77.036873,
};

const FindStores = () => {
const [zipCode, setZipCode] = useState("21111")
const [places, setPlaces] = useState(null);
const [placeDetails, setPlaceDetails] = useState(null);
const apiKey = process.env.REACT_APP_GOOGLE_API;
const [location, setLocation] = useState(center); 

useEffect(() => {
    const fetchPlaces = () => {
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=produce+markets+in+20001&key=${apiKey}`;
    try {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setPlaces(data.results);
        });
    } catch (error) {
        console.log("error", error);
    }
    };
  fetchPlaces();
}, [apiKey]);

useEffect(() => {
  const fetchDetails = (placesArr) => {
    const allPlaces = [];
    placesArr &&
      placesArr.forEach((place) => {
        const placeId = place.place_id;
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,place_id,geometry,rating,formatted_address,formatted_phone_number,website&key=${apiKey}`;
        try {

          fetch(url)
            .then((response) => response.json())
            .then((data) => {
              allPlaces.push(data.result);
          setPlaceDetails([...allPlaces]);

            });
        } catch (error) {
          console.log("error", error);
        }
      });
  };
  fetchDetails(places); 
}, [places,apiKey]);

useEffect(() => {
    if (placeDetails && placeDetails.length > 0) setLocation(placeDetails[0].geometry.location);
}, [placeDetails]);


const updateCenter = (place) => {
    setLocation(place.geometry.location);
    console.log('location',location)
};

// console.log('places',places)
// console.log('placeDetails',placeDetails)
// console.log("Length", placeDetails && placeDetails.length);
    return (
      <div className="find-stores-container">
        <h2 className="find-stores-header-text">
          Find Produce Markets Near You
        </h2>
        <p style={{ margin: "0 0 10px 0" }}>Enter Zip Code</p>
        <input type="textfield" />
        <div id="google-map">
          {placeDetails && (
            <GoogleMap
              places={placeDetails}
              apiKey={apiKey}
              center={location}
            />
          )}
        </div>
        <div id="search-results">
          <h3 id="results-header-text">
            Produce Markets near <strong>{zipCode}</strong>
          </h3>
          {placeDetails &&
            placeDetails.length > 0 &&
            placeDetails.map((place, index) => (
              <div className="result" key={index}>
                <div className="address">
                    <h6 onClick={() => updateCenter(place)}>
                      {index + 1}. {place.name}
                    </h6>
                  <a
                    href={`http://maps.google.com/?q=${place.formatted_address}`}
                  >
                    <p>{place.formatted_address}</p>
                  </a>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "5px",
                    }}
                  >
                    <a href="https://www.google.com">Website </a>
                    <a href="tel:123-456-7890">
                      {place.formatted_phone_number}
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
}

export default FindStores;
