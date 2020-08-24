import React from "react";
import { Link } from "react-router-dom";
import Config from '../../../../Miscellaneous/Config'
import getAuthToken from '../../../../Miscellaneous/authtoken';

function AllEventsTableItem({event}) {

    function onDelete() {

        const authtoken = getAuthToken();

        fetch(`${Config.url.API_URL}/api/userposts/delete`, {
            method: "PATCH",
            body: JSON.stringify({"id": event._id}),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "auth-token": authtoken
            }
        })
        .then(res => res.json())
        .then(result => window.location.reload())
        .catch(err => console.log(err))
    }

    return (
        <tr>
            <td className="event-name">{event.eventName}</td>
            <td className="event-date">{event.eventDate}</td>
            <td className="event-description">{event.eventDescription}</td>
            <td className="event-buttons">
                <Link to={{
                    pathname: `/admin/dashboard/view/${event.eventName}`,
                    state: {event: event}
                }}>
                <button className="edit-button">VIEW</button>
                </Link>
                <button className="delete-button" onClick={onDelete}>DELETE</button>    
            </td>
        </tr>
    )
}

export default AllEventsTableItem;