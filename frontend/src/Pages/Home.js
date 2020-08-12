import React from 'react';
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
    const markersMapObject = []
    const markersTableObject = []

    for (const element of allMarkers) {
      const id = element._id;
      const eventName = element.eventName;
      const eventDate = element.eventDate;
      const eventDescription = element.eventDescription;
      const eventComments = element.eventComments;
      const swlng = bounds[0]; 
      const nelng = bounds[1]; 
      const swlat = bounds[2]; 
      const nelat = bounds[3]; 
      const lat = Number(element.eventLongLat[1].$numberDecimal);
      const lng = Number(element.eventLongLat[0].$numberDecimal);

      if (lng > nelng || lng < swlng || lat > nelat || lat < swlat) { continue };

      markers.push(element);
      markersMapObject.push(<Marker key={id} position={{lat: lat, lng: lng}} />);
      markersTableObject.push(<SideBarCell key={id} name={eventName} date={eventDate} description={eventDescription} comments={eventComments} />);
    }

    setViewportMarkers(markers);
    setViewportMarkersMapObject(markersMapObject);
    setViewportMarkersTableObject(markersTableObject);
  }


  React.useEffect(retrieveActiveMarkers, [])
  React.useEffect(retrieveViewpointMarkers, [bounds])
  // React.useEffect(Do something, [viewportMarkers])


  return (
    <div className="main-container">
      < NavBar />
      <div className="inner-container">
        {/* clickedState ? new bar | sidebar*/}
        <SideBar viewportMarkersTableObject={viewportMarkersTableObject} />
        <MainMap setCurrentBounds={retrieveCurrentBounds} viewportMarkersMapObject={viewportMarkersMapObject} />
      </div>
    </div>
  );
}

export default Home;
