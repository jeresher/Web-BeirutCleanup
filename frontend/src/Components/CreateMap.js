import React from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  MarkerClusterer
} from "@react-google-maps/api";
import mapStyles from "../Style/mapStyles"

const libraries = ["places"];
const mapContainerStyle = {
  width: '100%',
  height: '100%'
}
const center = {
  lat: 33.8938,
  lng: 35.5018
}
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
  clickableIcons: false
}

function CreateMap() {

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });

    const [marker, setMarker] = React.useState();

    if (loadError) return "Error loading maps"
    if (!isLoaded) return "Loading maps"
  

    return (
      <div className="inner-map-box">

        <GoogleMap 
          mapContainerStyle={mapContainerStyle} 
          zoom={13}
          center={center}
          options={options}
          onClick={(event) => setMarker({ lng: event.latLng.lng(), lat: event.latLng.lat() })}
        >
        {marker ? <Marker position={{ lat: marker.lat, lng: marker.lng }} /> : null}
        </GoogleMap>

      </div>
    );
}

export default CreateMap;