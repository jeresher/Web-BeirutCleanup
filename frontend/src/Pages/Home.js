import React from 'react';
import NavBar from '../Components/NavBar';
import SideBar from '../Components/SideBar';
import MainMap from '../Components/MainMap';
import '../Style/App.css'; 

function Home() {
  return (
    <div className="main-container">
      < NavBar />
      <div className="inner-container">
        <SideBar />
        <MainMap />
      </div>
    </div>
  );
}

export default Home;
