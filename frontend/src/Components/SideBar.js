import React from 'react';
import SideBarDetailCell from './SideBarDetailCell';

function SideBar(props) {

  return(
    <div className='sidebar'>
      <div className='heading'>
        <h1>الأحداث القادمة</h1>
        <h6>UPCOMING EVENTS</h6>
      </div>
      <div className='body'>
        {props.selectedTableMarker ? 
        <SideBarDetailCell 
          marker={props.selectedTableMarker}
          setSelectedTableMarker={props.setSelectedTableMarker}
        /> : props.viewportMarkersTableObject}
      </div>
    </div>
  );
}


export default SideBar;