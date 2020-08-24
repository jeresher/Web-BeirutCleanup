import React from "react";
import { useHistory } from "react-router-dom";
import logoutsvg from "../../Assets/icons/logout.svg"

function Header() {

    const history = useHistory();
    
    function onLogoutClicked() {
        localStorage.clear();
        history.push('/admin/')
    }

    return (
        <div className="admin-dashboard-header" onClick={() => window.location.reload()}>
            <div>
                <h1>Beirut Cleanup</h1>
            </div>

            <div className="exit" onClick={onLogoutClicked}>
                <h6>Logout </h6>
                <img src={logoutsvg} />
            </div>
        </div>
    )
}

export default Header;