import React from 'react';
import NavBar from '../Components/NavBar';
import SideBar from '../Components/SideBar';
import MainMap from '../Components/MainMap';
import '../Style/App.css'; 

function Home() {
  
  // All Markers
  var allActiveMarkers = [];
  // Markers in view
  const [ markers, setMarkers ] = React.useState();
  const [ bounds, setBounds ] = React.useState();

  function retrieveActiveMarkers() {

    fetch("http://localhost:5000/api/posts/")
        .then(res => res.json())
        .then((result) => {
          allActiveMarkers = result;
          filterActiveMarkersToScreen();
        },
        (error) => {
        })

  }

  function retrieveCurrentBounds(swlng, nelng, swlat, nelat) {
    setBounds([swlng, nelng, swlat, nelat]);
    console.log(bounds);
  }

  function filterActiveMarkersToScreen() {
    allActiveMarkers.map(element => {
      /* console.log(element) */
    })
    /*
    const couponList = []
    for (const [key, value] of Object.entries(result)) {
        if (key.toLowerCase().includes(props.searchInput.toLowerCase())) {
            couponList.push(<CouponResult name={key} amount={value.amount} update={getCoupons} />)
        } else {
            continue
        }
    }
    setResults(couponList)
    */
  }


  React.useEffect(retrieveActiveMarkers, [])


  return (
    <div className="main-container">
      < NavBar />
      <div className="inner-container">
        <SideBar />
        <MainMap setCurrentBounds={retrieveCurrentBounds} />
      </div>
    </div>
  );
}

export default Home;
