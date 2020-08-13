import React from "react";

function SideBarDetailCell(props) {

    const marker = props.marker;
    const lat = Number(marker.eventLongLat[1].$numberDecimal);
    const lng = Number(marker.eventLongLat[0].$numberDecimal);

    return (
        <div className='detailcell'>
            <button className="exitdetail" onClick={() => props.setSelectedTableMarker(null)}></button>
            <h1>{marker.eventName}</h1>
        </div>
    )
}

export default SideBarDetailCell;