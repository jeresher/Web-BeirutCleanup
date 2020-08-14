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
    props.setBounds([swlng, nelng, swlat, nelat]);
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
                <span className="date">TOMORROW | اليوم</span> {props.selectedMapMarker[0].eventDescription}
              </p>

            </div>
            
          </InfoWindow>) : null}

      </GoogleMap>
    </div>
  );
}
  
export default MainMap;