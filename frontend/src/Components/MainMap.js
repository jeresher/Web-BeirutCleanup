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

  const [map, setMap] = React.useState(null)

  const onMapLoad = React.useCallback((map) => {
    setMap(map)
  })

  function onBoundsChanged() {
    const swlng = map.getBounds().getSouthWest().lng();
    const nelng = map.getBounds().getNorthEast().lng();
    const swlat = map.getBounds().getSouthWest().lat();
    const nelat = map.getBounds().getNorthEast().lat();
    props.setCurrentBounds(swlng, nelng, swlat, nelat);
  }

  if (loadError) return "Error loading maps"
  if (!isLoaded) return "Loading maps"

  return (
    <div className="mainmap">
      <GoogleMap 
        mapContainerStyle={mapContainerStyle} 
        zoom={13}
        center={center}
        options={options}
        onLoad={onMapLoad}
        onBoundsChanged={debounce(onBoundsChanged, 150)}
        onClick={() => props.setSelected(null)}
      >
        {props.viewportMarkersMapObject}

        {props.selected ? (<InfoWindow 
          position={{lat: props.selected[1].latLng.lat(), lng: props.selected[1].latLng.lng()}}
          options={{pixelOffset: new window.google.maps.Size(0,-30)}}
          onLoad={() => console.log(this)}
          onCloseClick={() => {props.setSelected(null)}}
        ><div>
          <h2>this shit lit bruh?</h2>
          <h2>idk let's see</h2></div></InfoWindow>) : null}
      </GoogleMap>
    </div>
  );
}
  
export default MainMap;