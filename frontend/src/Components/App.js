import React from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';
import MainContent from './MainContent';
import '../Style/App.css'; 

function App() {
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

export default App;
