import React from 'react';

function SideBar(props) {

  return(
    <div className='sidebar'>
      <h1>Volunteer Opportunities</h1>
      {props.viewportMarkersTableObject}
    </div>
  );
}

export default SideBar;