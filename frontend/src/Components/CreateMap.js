import React from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker
} from "@react-google-maps/api";
import SearchBar from "./SearchBar";
import mapStyles from "../Style/mapStyles";

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

function CreateMap(props) {

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [marker, setMarker] = React.useState();

  const onMapClick = React.useCallback((event) => {
    const location = { lng: event.latLng.lng(), lat: event.latLng.lat() }
    props.handleLocationChange(location);
    setMarker(location)
  }, [])

  const mapRef = React.useRef();

  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  })

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(15);
  }, [])

  if (loadError) return "Error loading maps"
  if (!isLoaded) return "Loading maps"


  return (
    <div className="createmap">

      <SearchBar panTo={panTo} />

      <GoogleMap 
        mapContainerStyle={mapContainerStyle} 
        zoom={13}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
      {marker ? <Marker position={{ lat: marker.lat, lng: marker.lng }} /> : null}
      </GoogleMap>

    </div>
  );
}

export default CreateMap;