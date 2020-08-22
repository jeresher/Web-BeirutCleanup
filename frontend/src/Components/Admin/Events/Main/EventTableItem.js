import React from "react";
import Config from '../../../../Miscellaneous/Config'
import getAuthToken from '../../../../Miscellaneous/authtoken';

function EventTableItem(props) {

    function onDelete() {

        const authtoken = getAuthToken();

        fetch(`${Config.url.API_URL}/api/userposts/delete`, {
            method: "PATCH",
            body: JSON.stringify({"id": props.id}),
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
            <td className="event-name">{props.name}</td>
            <td className="event-date">{props.date}</td>
            <td className="event-description">{props.description}</td>
            <td className="event-buttons">
                <button className="edit-button">VIEW</button>
                <button className="delete-button" onClick={onDelete}>DELETE</button>    
            </td>
        </tr>
    )
}

export default EventTableItem;