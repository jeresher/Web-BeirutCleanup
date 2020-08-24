import React from "react";
import AllEventsHeading from "./AllEventsHeading";
import AllEventsTable from "./AllEventsTable";

function AllEventsMain(props) {


    return (
        <div className="event-outer-container">
            <div className="event-inner-container">
                <AllEventsHeading />
                <AllEventsTable />
            </div>
        </div>
    )
}
export default AllEventsMain;