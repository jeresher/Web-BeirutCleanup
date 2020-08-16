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
        <div className="navigation">
          { props.createPage ?
          <button id="viewevent" onClick={() => props.loadCreatePage(false)}><h1>VIEW EVENTS</h1><h1>عرض الأحداث</h1></button> :
          <button id="addevent" onClick={() => props.loadCreatePage(true)}><h1>ADD EVENT</h1><h1>إضافة حدث</h1></button>
          }
          <a href="https://supportlrc.app/" target="_blank"><button id="donate"><h1>DONATE</h1><h1>تبرع</h1></button></a>
        </div>
      </div>
    );
  }
  
  export default NavBar;