import React from 'react';

function AccountsForm() {
    return (
        <div className="accounts-form-outer-container">
            <div className="accounts-form-inner-container">
                <div className="formheading">
                    <h1>Create an Account</h1>
                </div>

                <div className="forminfo">
                    <div className="name">
                        <h6>Name</h6>
                        <input placeholder="Volunteer Beirut"></input>
                    </div>
                    <div className="name">
                        <h6>Email</h6>
                        <input type="email" placeholder="example@email.com"></input>
                    </div>
                    <div className="name">
                        <h6>Password</h6>
                        <input type="password" placeholder="• • • • • • • •"></input>
                    </div>

                <div className="formsubmit">
                    <button>Submit</button>
                </div>
                </div>

            </div>
        </div>
    )
}

export default AccountsForm;