import React from 'react';

function SideBar(props) {

  return(
    <div className='sidebar'>
      <div className='heading'>
        <h1>Upcoming Events</h1>
      </div>
      <div className='body'>
        {props.viewportMarkersTableObject}
      </div>
    </div>
  );
}

/*الأحداث القادمة*/

export default SideBar;