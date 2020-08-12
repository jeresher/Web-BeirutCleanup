import React from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from "@react-google-maps/api";
import NavBar from '../Components/NavBar';
import SideBar from '../Components/SideBar';
import MainMap from '../Components/MainMap';
import '../Style/App.css'; 

function Home() {
  
  const [ allMarkers, setAllMarkers] = React.useState([]);
  const [ viewportMarkers, setViewportMarkers ] = React.useState([]);
  const [ viewportMarkersObject, setViewportMarkersObject ] = React.useState([]);
  const [ bounds, setBounds ] = React.useState();

  function retrieveActiveMarkers() {

    fetch("http://localhost:5000/api/posts/")
        .then(res => res.json())
        .then((result) => {
          setAllMarkers(result);
        })

  }

  function retrieveCurrentBounds(swlng, nelng, swlat, nelat) {
    setBounds([swlng, nelng, swlat, nelat]);
  }

  function retrieveViewpointMarkers() {

    const markers = []
    const markersObject = []

    for (const element of allMarkers) {
      const id = element._id;
      const swlng = bounds[0]; 
      const nelng = bounds[1]; 
      const swlat = bounds[2]; 
      const nelat = bounds[3]; 
      const lat = Number(element.eventLongLat[1].$numberDecimal);
      const lng = Number(element.eventLongLat[0].$numberDecimal);

      if (lng > nelng || lng < swlng || lat > nelat || lat < swlat) { continue };

      markers.push(element);
      markersObject.push(<Marker key={id} position={{lat: lat, lng: lng}} />)
    }

    setViewportMarkers(markers);
    setViewportMarkersObject(markersObject);
  }


  React.useEffect(retrieveActiveMarkers, [])
  React.useEffect(retrieveViewpointMarkers, [bounds])
  // React.useEffect(Do something, [viewportMarkers])


  return (
    <div className="main-container">
      < NavBar />
      <div className="inner-container">
        <SideBar />
        <MainMap setCurrentBounds={retrieveCurrentBounds} viewportMarkersObject={viewportMarkersObject} />
      </div>
    </div>
  );
}

export default Home;
