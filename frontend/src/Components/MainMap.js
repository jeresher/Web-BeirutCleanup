import React from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from "@react-google-maps/api";
import { debounce } from 'lodash';
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

function MainMap(props) {

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
  });

  /* const mapRef = React.useRef(); */
  const [map, setMap] = React.useState(null)

  const onMapLoad = React.useCallback((map) => {
    /* const bounds = new window.google.maps.LatLngBounds(); */
    /*console.log(bounds.getNorthEast().lng()); */
    /*map.fitBounds(bounds); */
    setMap(map)
  })

  function onBoundsChanged() {
    const swlng = map.getBounds().getSouthWest().lng();
    const nelng = map.getBounds().getNorthEast().lng();
    const swlat = map.getBounds().getSouthWest().lat();
    const nelat = map.getBounds().getNorthEast().lat();
    props.setCurrentBounds(swlng, nelng, swlat, nelat);
  }

  
  // Don't put callbacks above here for some reason
  if (loadError) return "Error loading maps"
  if (!isLoaded) return "Loading maps"

  return (
    <div className="main-content">
      <GoogleMap 
        mapContainerStyle={mapContainerStyle} 
        zoom={13}
        center={center}
        options={options}
        onLoad={onMapLoad}
        /*onMapMounted={onMapMounted} */
        onBoundsChanged={debounce(onBoundsChanged, 150)}
      ></GoogleMap>
    </div>
  );
}
  
  export default MainMap;