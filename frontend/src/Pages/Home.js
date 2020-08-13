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

  const [selectedMapMarker, setSelectedMapMarker ] = React.useState(null); // Format: [marker, lat, lng]
  const [selectedTableMarker, setSelectedTableMarker ] = React.useState(null);

  function retrieveActiveMarkers() {

    fetch("http://localhost:5000/api/posts/")
        .then(res => res.json())
        .then((result) => {
          setAllMarkers(result);
        })

  }

  function retrieveViewportMarkers() {

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
        />);
    }

    setViewportMarkers(markers);
    setViewportMarkersMapObject(markersMapObject);
    setViewportMarkersTableObject(markersTableObject);
  }


  React.useEffect(retrieveActiveMarkers, [])
  React.useEffect(retrieveViewportMarkers, [bounds])
  // React.useEffect(() => {console.log(selectedMapMarker)}, [selectedMapMarker])


  return (
    <div className="main-container">
      < NavBar />
      <div className="inner-container">
        {/* clickedState ? new bar | sidebar*/}

        <SideBar 
          viewportMarkersTableObject={viewportMarkersTableObject} 
          setSelectedMapMarker={setSelectedMapMarker}
          setSelectedTableMarker={setSelectedTableMarker}
        />

        <MainMap 
          setBounds={setBounds} 
          viewportMarkersMapObject={viewportMarkersMapObject} 
          selectedMapMarker={selectedMapMarker} 
          setSelectedMapMarker={setSelectedMapMarker} 
        />

      </div>
    </div>
  );
}

export default Home;
