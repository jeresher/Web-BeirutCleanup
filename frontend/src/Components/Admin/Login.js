import React, {useEffect} from "react";
import Config from '../../Miscellaneous/Config';
import getAuthToken from '../../Miscellaneous/authtoken';
import { Link, useHistory } from "react-router-dom";
import logo from "../../Assets/logobluewhite.png";

function Admin() {

    const history = useHistory();

    function isUserAlreadyLoggedIn() {
        const authtoken = getAuthToken();
        if (authtoken) history.push('/');
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

            // SUCCESSFUL LOGIN.
            if (res.status === 200) {
                // STORE AUTH-TOKEN IN LOCAL STORAGE.
                localStorage.setItem('auth-token', res.headers.get('auth-token'))
                // REDIRECT TO DASHBOARD.
                history.push('/');   
            }

            // INVALID EMAIL.
            else if (res.status === 404) {
                showErrorMessage(res.status);
            }
            // INVALID PASSWORD.
            else if (res.status === 401) {
                showErrorMessage(res.status);
            
            // UNIDENTIFIED ERROR.
            } else {
                throw new Error("An error has occured.")
            }

        })
        .catch(err => console.log(err))
        
    }

    function showErrorMessage(status) {
        const emailInput = document.getElementById('user-email');
        const passInput = document.getElementById('user-password');
        const emailErrorMessage = document.getElementById('email-error-message');
        const passErrorMessage = document.getElementById('pass-error-message');
        emailInput.style.borderColor = 'white';
        passInput.style.borderColor = 'white'; 
        emailErrorMessage.style.visibility = 'hidden';
        passErrorMessage.style.visibility = 'hidden';

        if (status === 404) {
            emailErrorMessage.style.visibility = 'visible';
            emailInput.style.borderColor = '#121459';
        }

        else if (status === 401) {
            passErrorMessage.style.visibility = 'visible';
            passInput.style.borderColor = '#121459';
        }
    }

    useEffect(isUserAlreadyLoggedIn, [])

    return (
        <div className="admin-login-main-container">
            <div className="admin-login-inner-container">
                <div className="admin-login-vertical-container" onSubmit={attemptLogin}>
                    <img src={logo}></img>
                    <form className="admin-login-form">
                        <h5>Email</h5>
                        <input placeholder="example@email.com" id="user-email" type="email" required />
                        <h6 id="email-error-message" style={{visibility: 'hidden'}}>This email does not exist.</h6>
                        <h5>Password</h5>
                        <input placeholder="• • • • •" type="password" id="user-password" minlength="6" required />
                        <h6 id="pass-error-message" style={{visibility: 'hidden'}}>This password is invalid.</h6>
                        <button type="submit" className="submit">Sign In</button>
                    </form>
                    <a href="mailto:volunteerbeirut@gmail.com?subject=Beirut Cleanup: Event Organizer Account Request">
                    <button className="request">Request an Account</button>
                    </a>
                </div>
            </div>
        </div>
    )

}

export default Admin;