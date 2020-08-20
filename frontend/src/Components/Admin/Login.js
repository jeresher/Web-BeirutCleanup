import React from "react";
import Config from '../../Miscellaneous/Config';
import { Link } from "react-router-dom";
import logo from "../../Assets/logobluewhite.png";

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
            <div className="admin-login-inner-container">
                <div className="admin-login-vertical-container" onSubmit={attemptLogin}>
                    {/* <h1 className="noselect">Beirut Cleanup</h1> */}
                    <img src={logo}></img>
                    <form className="admin-login-form">
                        <h5>Email</h5>
                        <input placeholder="example@email.com" id="admin-email" required />
                        <h5>Password</h5>
                        <input placeholder="• • • • •" type="password" id="admin-password" required />
                
                        <Link to="./dashboard">
                        <button type="submit" className="submit">Sign In</button>
                        </Link>
                        <button className="request">Request an Account</button>
                    </form>

                    <form className="admin-login-buttons">
                        {/* <Link to="./dashboard"><input className="submit"></input></Link> */}
                        {/*<button type="submit" className="submit"></button>
                        */}
                    </form>
                </div>
                
            </div>
        </div>
    )

}

export default Admin;