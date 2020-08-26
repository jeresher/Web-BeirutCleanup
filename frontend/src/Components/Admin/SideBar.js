import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import markersvg from "../../Assets/icons/marker.svg"
import globesvg from "../../Assets/icons/globe.svg"
import userssvg from "../../Assets/icons/users.svg"


function SideBar({user}) {    

    function adjustSidebarDependingOnUserPrivileges() {

        if (!user) return;
        
        if (user.privileges >= 1) {
            const corelabel = document.getElementById('core-label');
            const eventstab = document.getElementById('events-tab');
            corelabel.style.display = 'block';
            eventstab.style.display = 'block';
        }

        if (user.privileges >= 5) {
            const adminlabel = document.getElementById('admin-label');
            adminlabel.style.display = 'block';
        }

        if (user.privileges >= 10) {
            const alleventstab = document.getElementById('all-events-tab');
            const accountstab = document.getElementById('accounts-tab');
            alleventstab.style.display = 'block'
            accountstab.style.display = 'block'
        }
    }

    useEffect(adjustSidebarDependingOnUserPrivileges, [user])

    return (
        <div className="admin-dashboard-sidebar">

            <label id="core-label" style={{display: "none"}}>CORE</label>

            <Link to="/events" id="events-tab" style={{display: "none"}} className="routerlink">
            <div className="section">
                <img src={markersvg}></img>
                <button>Events</button>
            </div>
            </Link>



            <label id="admin-label" style={{display: "none"}}>ADMIN</label>

            <Link to="/allevents" id="all-events-tab" style={{display: "none"}} className="routerlink">
            <div className="section">
                <img src={globesvg}></img>
                <button>All Events</button>
            </div>
            </Link>

            <Link to="/accounts" id="accounts-tab" style={{display: "none"}} className="routerlink">
            <div className="section">
                <img src={userssvg}></img>
                <button>Accounts</button>
            </div>
            </Link>



            <div className="userinfo noselect">
                <h5>Logged in as:</h5>
                <h4>{user ? user.name : "Loading..."}</h4>
            </div>

        </div>
    )
}

export default SideBar;