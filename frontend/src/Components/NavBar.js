import React from 'react';
import logo from '../Assets/logo.png';

function NavBar() {
    return(
      <div className="navbar">
        <div className="logo">
          <img src={logo}></img>
        </div>
        <div>
          <h1></h1>
        </div>
        <div className="newevent">
          <button>NEW EVENT</button>
        </div>
      </div>
    );
  }
  
  export default NavBar;