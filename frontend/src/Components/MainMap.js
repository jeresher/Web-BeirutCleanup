import React from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from "@react-google-maps/api";
import { debounce } from 'lodash';
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

function MainMap(props) {

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
  });

  const mapRef = React.useRef();

  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  })

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(15);
  }, [])
  
  function onBoundsChanged() {
    const swlng = mapRef.current.getBounds().getSouthWest().lng();
    const nelng = mapRef.current.getBounds().getNorthEast().lng();
    const swlat = mapRef.current.getBounds().getSouthWest().lat();
    const nelat = mapRef.current.getBounds().getNorthEast().lat();
    props.setBounds([swlng, nelng, swlat, nelat]);
  }

  if (loadError) return "Error loading maps"
  if (!isLoaded) return "Loading maps"

  return (
    <div className="mainmap">

      <SearchBar panTo={panTo} />

      <GoogleMap 
        mapContainerStyle={mapContainerStyle} 
        zoom={13}
        center={center}
        options={options}
        onLoad={onMapLoad}
        onIdle={onBoundsChanged}
        onClick={() => props.setSelectedMapMarker(null)}
      >
        {props.viewportMarkersMapObject}

        {props.selectedMapMarker ? 
          (<InfoWindow 
            position={{lat: props.selectedMapMarker[1], lng: props.selectedMapMarker[2]}}
            options={{pixelOffset: new window.google.maps.Size(0,-30), maxWidth: 300, maxHeight: 400}}
            onCloseClick={() => {props.setSelectedMapMarker(null)}}>

            <div className="infowindow">

              <h2 className="title">{props.selectedMapMarker[0].eventName}</h2>

              <div className="divider" />

              <p className="description"
                onClick={() => props.setSelectedTableMarker(props.selectedMapMarker[0])}>
                <span className="date">{props.selectedMapMarker[0].eventDate}</span> {props.selectedMapMarker[0].eventDescription}
              </p>

            </div>
            
          </InfoWindow>) : null}

      </GoogleMap>
    </div>
  );
}

 
export default MainMap;