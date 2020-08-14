import React from "react";

function SideBarCell(props) {

    const marker = props.marker;
    const lat = Number(marker.eventLongLat[1].$numberDecimal);
    const lng = Number(marker.eventLongLat[0].$numberDecimal);

    return (
        <div 
            className='cell' 
            onMouseOver={(event) => props.setSelectedMapMarker([marker, lat, lng])}
            onMouseOut={(event) => props.setSelectedMapMarker(null)}
        >
            <div className="texttruncationfadeeffect"></div>
            <div className="eventtext">
                <h4>TODAY | اليوم</h4>
                <h1>{marker.eventName}</h1>
                <div className="miniLine" />
                <p>{marker.eventDescription}</p>
            </div>
            <div className="moreinformationbutton">
                <button onClick={() => props.setSelectedTableMarker(marker)}>MORE INFORMATION | معلومات اكثر</button>
            </div>

        </div>
    )
}

export default SideBarCell;