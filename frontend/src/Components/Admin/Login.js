import React from "react";
import { Link } from "react-router-dom";

function Admin() {


    return (
        <div className="admin-login-main-container">
            <div className="admin-login-inner-container">

                <div className="admin-login-form">
                    <h1>Hey</h1>     
                </div>

                <div className="admin-login-buttons">
                    <Link to="./dashboard"><button className="submit"></button></Link>
                </div>
                
            </div>
        </div>
    )

}

export default Admin;