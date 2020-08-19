import React from "react";
import Config from '../../Miscellaneous/Config'
import { Link } from "react-router-dom";

function Admin() {

    
    function attemptLogin(event) {
        event.preventDefault();

        var adminEmail = document.getElementById("admin-email");
        var adminPassword = document.getElementById("admin-password");

        fetch(`${Config.url.API_URL}/api/login/`, {
            method: "POST",
            body: JSON.stringify({
                "email": adminEmail.value,
                "password": adminPassword.value
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => res.json())
        .then(response => {
            console.log(response);
        })
        .catch(err => console.log(err))
        
    }


    return (
        <div className="admin-login-main-container">
            <form className="admin-login-inner-container" onSubmit={attemptLogin}>

                <div className="admin-login-form">
                    <input placeholder="email" id="admin-email" required />
                    <input placeholder="password" type="password" id="admin-password" required />
                </div>

                <div className="admin-login-buttons">
                    {/* <Link to="./dashboard"><input className="submit"></input></Link> */}
                    <button type="submit" className="submit"></button>
                </div>
                
            </form>
        </div>
    )

}

export default Admin;