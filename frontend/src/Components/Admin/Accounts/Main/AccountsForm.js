import React from 'react';
import Config from '../../../../Miscellaneous/Config'
import getAuthToken from '../../../../Miscellaneous/authtoken'

function AccountsForm() {

    function createAnAccount() {

        const name = document.getElementById('account-name').value;
        const email = document.getElementById('account-email').value;
        const password = document.getElementById('account-password').value;

        const authtoken = getAuthToken();

        fetch(`${Config.url.API_URL}/api/register`, {
            method: "POST",
            body: JSON.stringify({
                "name": name,
                "email": email,
                "password": password
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "auth-token": authtoken
            }
        })
        .then(res => res.json())
        .then(response => window.location.reload())
        .catch(err => console.log(err))
    }

    return (
        <div className="accounts-form-outer-container">
            <form className="accounts-form-inner-container" onSubmit={createAnAccount}>
                <div className="formheading">
                    <h1>Create an Account</h1>
                </div>

                <div className="forminfo">

                    <div className="name">
                        <h6>Name</h6>
                        <input 
                            id="account-name"
                            placeholder="Volunteer Beirut" 
                            minLength="6" 
                            required
                        />
                    </div>

                    <div className="email">
                        <h6>Email</h6>
                        <input 
                            id="account-email"
                            type="email" 
                            placeholder="example@email.com" 
                            required
                        />
                    </div>

                    <div className="password">
                        <h6>Password</h6>
                        <input 
                            id="account-password"
                            type="password" 
                            placeholder="• • • • • • • •" 
                            minLength="6" 
                            required
                        />
                    </div>

                </div>

                <div className="formsubmit">
                    <button type="submit">Submit</button>
                </div>

            </form>
        </div>
    )
}

export default AccountsForm;