import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import markersvg from "../../Assets/icons/marker.svg"
import globesvg from "../../Assets/icons/globe.svg"


function SideBar(props) {    


    return (
        <div className="admin-dashboard-sidebar">

            <label>CORE</label>

            <Link to="/admin/dashboard/" className="routerlink">
            <div className="section">
                <img src={markersvg}></img>
                <button>Events</button>
            </div>
            </Link>

            <label>ADMIN</label>
            <Link to="/admin/allevents/" className="routerlink">
            <div className="section">
                <img src={globesvg}></img>
                <button>All Events</button>
            </div>
            </Link>

            <div className="userinfo">
                <h5>Logged in as:</h5>
                <h4>{props.user ? props.user.name : "Loading..."}</h4>
            </div>

        </div>
    )
}

export default SideBar;