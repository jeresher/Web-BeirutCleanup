import React from 'react';
import logo from '../Assets/logo.png';

function NavBar(props) {
    return(
      <div className="navbar">
        <div className="logo">
          <img src={logo}></img>
        </div>
        <div>
          <h1></h1>
        </div>
        <div className="newevent">
          { props.createPage ?
          <button onClick={() => props.loadCreatePage(false)}>VIEW ALL EVENTS</button> :
          <button onClick={() => props.loadCreatePage(true)}>ADD EVENT</button>
          }
        </div>
      </div>
    );
  }
  
  export default NavBar;