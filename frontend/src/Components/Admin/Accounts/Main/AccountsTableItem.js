import React from "react";
import Config from '../../../../Miscellaneous/Config'
import getAuthToken from '../../../../Miscellaneous/authtoken';

function AccountTableItem({user}) {

    function checkboxClicked() {

        const lock = !user.locked;

        const checkbox = document.getElementById('checkbox');
        checkbox.disabled = true;

        const authtoken = getAuthToken();

        fetch(`${Config.url.API_URL}/api/useraccount/lock`, {
            method: "PATCH",
            body: JSON.stringify({
                "id": user._id,
                "lock": lock
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
        <tr>
            <td className="account-name">{user.name}</td>
            <td className="account-email">{user.email}</td>
            <td className="account-privileges">{user.privileges}</td>
            <td className="account-locked">
                <input type="checkbox" 
                    id="checkbox"
                    checked={user.locked}
                    onChange={checkboxClicked}
                />
            </td>
        </tr>
    )
}

export default AccountTableItem;