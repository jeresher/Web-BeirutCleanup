import React from 'react';
import Config from '../Miscellaneous/Config';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from "@react-google-maps/api";
import NavBar from '../Components/NavBar';
import SideBar from '../Components/SideBar';
import SideBarCell from '../Components/SideBarCell';
import MainMap from '../Components/MainMap';
import '../Style/App.css'; 

function Home() {
  
  const [ allMarkers, setAllMarkers] = React.useState([]);
  const [ viewportMarkers, setViewportMarkers ] = React.useState([]);
  const [ viewportMarkersMapObject, setViewportMarkersMapObject ] = React.useState([]);
  const [ viewportMarkersTableObject, setViewportMarkersTableObject ] = React.useState([]);
  const [ bounds, setBounds ] = React.useState();

  const [selectedMapMarker, setSelectedMapMarker ] = React.useState(null); // Format: [marker, lat, lng]
  const [selectedTableMarker, setSelectedTableMarker ] = React.useState(null); //Format: marker

  
  function retrieveActiveMarkers() {

    fetch(`${Config.url.API_URL}/api/posts/`)
        .then(res => res.json())
        .then((result) => {
          setAllMarkers(result);
        })
        .catch((err) => console.log(err));
  }
  

  function retrieveViewportMarkers() {

    console.log('retrieveViewportMarkers execution');

    /*
    const response = await fetch(`${Config.url.API_URL}/api/posts/`)
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);     
    }
    */

    const markers = []
    const markersMapObject = []
    const markersTableObject = []

    for (const marker of allMarkers) {
      const swlng = bounds[0]; 
      const nelng = bounds[1]; 
      const swlat = bounds[2]; 
      const nelat = bounds[3]; 
      const lat = Number(marker.eventLongLat[1].$numberDecimal);
      const lng = Number(marker.eventLongLat[0].$numberDecimal);

      if (lng > nelng || lng < swlng || lat > nelat || lat < swlat) { continue };

      markers.push(marker);
      markersMapObject.push(<Marker 
          key={marker._id} 
          position={{lat: lat, lng: lng}} 
          onClick={() => setSelectedMapMarker([marker, lat, lng])}
        />);
      markersTableObject.push(<SideBarCell 
          key={marker._id} 
          marker={marker}
          setSelectedMapMarker={setSelectedMapMarker}
          setSelectedTableMarker={setSelectedTableMarker}
        />);
    }

    console.log('finished retrieveViewportMarkers execution', markers);
    
    setViewportMarkers(markers);
    setViewportMarkersMapObject(markersMapObject);
    setViewportMarkersTableObject(markersTableObject);
  }

  React.useEffect(retrieveActiveMarkers, [])
  React.useEffect(retrieveViewportMarkers, [bounds, allMarkers])

  return (

    <div className="inner-container">

      <SideBar 
        viewportMarkersTableObject={viewportMarkersTableObject} 
        selectedTableMarker={selectedTableMarker}
        setSelectedMapMarker={setSelectedMapMarker}
        setSelectedTableMarker={setSelectedTableMarker}
      />

      <MainMap 
        setBounds={setBounds} 
        viewportMarkersMapObject={viewportMarkersMapObject} 
        selectedMapMarker={selectedMapMarker} 
        setSelectedMapMarker={setSelectedMapMarker} 
        setSelectedTableMarker={setSelectedTableMarker}
      />

    </div>
    
  );
}

export default Home;
