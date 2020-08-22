import React, {useEffect} from "react";
import { Link } from "react-router-dom";

function SideBar(props) {    


    return (
        <div className="admin-dashboard-sidebar">
            <label>CORE</label>
            <div className="section">
                <Link to="/admin/dashboard/"><button>Events</button></Link>
            </div>
            <label>ADDITIONAL</label>
            <div className="section">
                <Link to="/admin/settings/"><button>Settings</button></Link>
            </div>
            <div className="userinfo">
                <h5>Logged in as:</h5>
                <h4>{props.user ? props.user.name : "Loading..."}</h4>
            </div>
        </div>
    )
}

export default SideBar;