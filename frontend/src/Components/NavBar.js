import React from 'react';
import logo from '../Assets/logo.png';

function NavBar(props) {
    return(
      <div className="navbar">
        <div className="logo">
          <img src={logo} onClick={() => window.location.reload()}></img>
        </div>
        <div>
          <h1></h1>
        </div>
        <div className="newevent">
          { props.createPage ?
          <button onClick={() => props.loadCreatePage(false)}><h1>VIEW EVENTS</h1><h1>عرض الأحداث</h1></button> :
          <button onClick={() => props.loadCreatePage(true)}><h1>ADD EVENT</h1><h1>إضافة حدث</h1></button>
          }
        </div>
      </div>
    );
  }
  
  export default NavBar;