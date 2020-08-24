import React, {useState, useEffect} from "react";
import AllEventsEditMap from "./AllEventsEditMap";
import AllEventsEditForm from "./AllEventsEditForm";

function AllEventsEditMain(props) {

    const [ location, setLocation ] = useState();
    const { event } = props.location.state;

    return (
        <div className="event-outer-container">
            <AllEventsEditForm event={event} location={location} setLocation={setLocation} />
            <AllEventsEditMap location={location} setLocation={setLocation} />
        </div>
    )
}
export default AllEventsEditMain;