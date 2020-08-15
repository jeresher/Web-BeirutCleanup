import React from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from 'use-places-autocomplete';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption
} from "@reach/combobox";
import { debounce } from 'lodash';
import "@reach/combobox/styles.css";
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
  // const [map, setMap] = React.useState(null)

  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  })

  /*
  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, [])
  */

  function panTo({lat, lng}) {
    mapRef.current.panTo({ lat, lng});
    mapRef.current.setZoom(15);
  };
  // maybe use a useeffect if selected location changes, triggering panTo

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

      <Search panTo={panTo} />

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
                <span className="date">{props.selectedMapMarker[0].eventDate}</span> {props.selectedMapMarker[0].eventDescription}
              </p>

            </div>
            
          </InfoWindow>) : null}

      </GoogleMap>
    </div>
  );
}

function Search({ panTo }) {
  const { 
    ready, 
    value, 
    suggestions: {status, data }, 
    setValue, 
    clearSuggestion 
  } = usePlacesAutocomplete({
    requestOptions: {
      location: {lat: () => 33.8938, lng: () => 35.5018},
      radius: 10000 // 6 MILES.
    }
  })

  return (
    <div className="searchbar">
      <Combobox 
        onSelect={async (address) => {
          try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            panTo({ lat, lng});
          } catch(error) {
            console.log("error!");
          }
        }}
      >

        <ComboboxInput
          value={value} 
          onChange={(event) => {
            setValue(event.target.value)
          }}
          disabled={!ready}
          placeholder="Enter an address | أدخل عنوانا"
        />

        <ComboboxPopover key="asdasd">
          {status === "OK" && 
          data.map(({ place_id, description }) => (
            <ComboboxOption value={description} key={place_id} />
          ))}
        </ComboboxPopover>

      </Combobox>
    </div>
  )
}


  
export default MainMap;