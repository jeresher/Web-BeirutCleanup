import React from "react";
import EventHeading from "./EventHeading";
import EventTable from "./EventTable";

function EventMain() {
    return (
        <div className="event-outer-container">
            <div className="event-inner-container">
                <EventHeading />
                <EventTable />
            </div>
        </div>
    )
}
export default EventMain;