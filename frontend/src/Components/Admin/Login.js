import React, {useEffect} from "react";
import Config from '../../Miscellaneous/Config';
import getAuthToken from '../../Miscellaneous/authtoken';
import { Link, useHistory } from "react-router-dom";
import logo from "../../Assets/logobluewhite.png";

function Admin() {

    const history = useHistory();

    function isUserAlreadyLoggedIn() {
        const authtoken = getAuthToken();
        if (authtoken) history.push('admin/dashboard');
    }

    function attemptLogin(event) {
        event.preventDefault();

        var userEmail = document.getElementById("user-email");
        var userPassword = document.getElementById("user-password");

        fetch(`${Config.url.API_URL}/api/login/`, {
            method: "POST",
            body: JSON.stringify({
                "email": userEmail.value,
                "password": userPassword.value
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => {
            localStorage.setItem('auth-token', res.headers.get('auth-token'))
            history.push('admin/dashboard');
        })
        .catch(err => console.log(err))
        
    }

    useEffect(isUserAlreadyLoggedIn, [])


    return (
        <div className="admin-login-main-container">
            <div className="admin-login-inner-container">
                <div className="admin-login-vertical-container" onSubmit={attemptLogin}>
                    <img src={logo}></img>
                    <form className="admin-login-form">
                        <h5>Email</h5>
                        <input placeholder="example@email.com" id="user-email" required />
                        <h5>Password</h5>
                        <input placeholder="• • • • •" type="password" id="user-password" required />

                        <button type="submit" className="submit">Sign In</button>
                    </form>
                    <button className="request">Request an Account</button>
                </div>
            </div>
        </div>
    )

}

export default Admin;