import React from 'react';
import EventTableItem from "./EventTableItem"

function EventTable() {

    

    return(
        <div className="event-table">
            <table>
                <thead>
                    <tr>
                        <th className="event-name">Event Name</th>
                        <th className="event-date">Date</th>
                        <th className="event-description">Description</th>
                        <th className="event-buttons">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <EventTableItem/>
                </tbody>
            </table>
        </div>
    )
}

export default EventTable;