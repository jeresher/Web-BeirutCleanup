import React from "react";

function SideBarMainInformation(props) {

    const marker = props.marker;
    const lat = Number(marker.eventLongLat[1].$numberDecimal);
    const lng = Number(marker.eventLongLat[0].$numberDecimal);

    return (
        <div className='moreinformation'>
            <div className="exitbutton">
                <button onClick={() => props.setSelectedTableMarker(null)}>X</button>
            </div>
            <div className="information">
                <h1>{marker.eventName}</h1>
                <div />
                <p>{marker.eventDescription}</p>
                <div />
            </div>
        </div>
    )
}

export default SideBarMainInformation;