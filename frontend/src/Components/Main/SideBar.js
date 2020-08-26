import React from 'react';
import SideBarMoreInformation from './SideBarMoreInformation';

function SideBar(props) {

  return(
    <div className='sidebar'>
      <div className='heading noselect'>
        <h1>الأحداث القادمة</h1>
        <h6>UPCOMING EVENTS</h6>
      </div>
      <div className='body'>
        {props.selectedTableMarker ? 
        <SideBarMoreInformation 
          marker={props.selectedTableMarker}
          setSelectedTableMarker={props.setSelectedTableMarker}
        /> : props.viewportMarkersTableObject}
      </div>
    </div>
  );
}


export default SideBar;