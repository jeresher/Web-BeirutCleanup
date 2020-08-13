import React from "react";

function SideBarCell(props) {

    return (
        <div className='cell'>
            <div className="texttruncationfadeeffect"></div>
            <div className="eventtext">
                <h4>TODAY | اليوم</h4>
                <h1>Red Cross Cleanup Event</h1>
                <div className="miniLine" />
                <p>Hi there. I'm organizing a cleanup activity today. I need everyone to be there because it's going to be extra lit. please be there. otherwise I'm going to be pretty damn sad. You don't want to see that. trust.Hi there. I'm organizing a cleanup activity today. I need everyone to be there because it's going to be extra lit. please be there. otherwise I'm going to be pretty damn sad. You don't want to see that. trust. </p>
            </div>
            <div className="moreinformation">
                <button>MORE INFORMATION | معلومات اكثر</button>
            </div>
            {/*
            <h4>{props.date}</h4>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            */}
        </div>
    )
}

export default SideBarCell;