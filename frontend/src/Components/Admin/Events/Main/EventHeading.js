import React from 'react';
import {Link} from 'react-router-dom';

function EventHeading() {

    return(
        <div className="event-heading">
            <h1 className="title noselect">Your Events</h1>
            <Link to="/admin/dashboard/create">
            <button className="add-event-button">+ NEW EVENT</button>
            </Link>
        </div>
    )
}

export default EventHeading;