import React from 'react';
import NavBar from '../Components/NavBar';
import SideBar from '../Components/SideBar';
import MainContent from '../Components/MainContent';
import '../Style/App.css'; 

function Home() {
  return (
    <div className="main-container">
      < NavBar />
      <div className="inner-container">
        <SideBar />
        <MainContent />
      </div>
    </div>
  );
}

export default Home;
