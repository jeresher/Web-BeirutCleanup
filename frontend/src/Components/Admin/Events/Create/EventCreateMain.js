import React from "react";
import EventCreateMap from "./EventCreateMap";
import EventCreateForm from "./EventCreateForm";

function EventCreateMain() {

    const [ location, setLocation ] = React.useState();

    function handleLocationChange(newLocation) {
        setLocation(newLocation)
    }

    return (
        <div className="event-outer-container">
            <EventCreateForm location={location} />
            <EventCreateMap handleLocationChange={handleLocationChange} />
        </div>
    )
}
export default EventCreateMain;