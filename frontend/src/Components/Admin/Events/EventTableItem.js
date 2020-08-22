import React from "react";

function EventTableItem(props) {

    return (
        <tr>
            <td className="event-name">{props.name}</td>
            <td className="event-date">{props.date}</td>
            <td className="event-description">{props.description}</td>
            <td className="event-buttons">
                <button className="edit-button">VIEW</button>
                <button className="delete-button">DELETE</button>    
            </td>
        </tr>
    )
}

export default EventTableItem;