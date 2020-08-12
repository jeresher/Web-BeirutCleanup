import React from "react";

function SideBarCell(props) {

    return (
        <div>
            <p>{props.name}</p>
            <p>{props.date}</p>
            <p>{props.description}</p>
            <p>---------------</p>
        </div>
    )
}

export default SideBarCell;