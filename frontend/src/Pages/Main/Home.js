import React from 'react';
import Config from '../../Miscellaneous/Config';
import { Marker } from "@react-google-maps/api";
import SideBar from '../../Components/Main/SideBar';
import SideBarCell from '../../Components/Main/SideBarCell';
import MainMap from '../../Components/Main/MainMap';

function Home() {
  
  const [ allMarkers, setAllMarkers] = React.useState([]);
  const [ viewportMarkers, setViewportMarkers ] = React.useState([]);
  const [ viewportMarkersMapObject, setViewportMarkersMapObject ] = React.useState([]);
  const [ viewportMarkersTableObject, setViewportMarkersTableObject ] = React.useState([]);
  const [ bounds, setBounds ] = React.useState([35.404396920728686, 35.59700098567009, 33.802433062302086, 33.9932866008829]);

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
