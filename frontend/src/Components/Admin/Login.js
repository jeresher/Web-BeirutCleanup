import React from "react";
import { Link } from "react-router-dom";

function Admin() {


    return (
        <div className="admin-login-main-container">
            <div className="admin-login-inner-container">

                <div className="admin-login-form">
                    <input placeholder="Email" />
                    <input placeholder="password" type="password" />
                </div>

                <div className="admin-login-buttons">
                    <Link to="./dashboard"><button className="submit"></button></Link>
                </div>
                
            </div>
        </div>
    )

}

export default Admin;