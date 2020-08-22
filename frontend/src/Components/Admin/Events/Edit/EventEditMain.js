import React, {useState, useEffect} from "react";
import EventEditMap from "./EventEditMap";
import EventEditForm from "./EventEditForm";

function EventEditMain(props) {

    const [ location, setLocation ] = useState();
    const { event } = props.location.state;

    return (
        <div className="event-outer-container">
            <EventEditForm event={event} location={location} setLocation={setLocation} />
            <EventEditMap location={location} setLocation={setLocation} />
        </div>
    )
}
export default EventEditMain;