import React from "react";
import Config from '../../../../Miscellaneous/Config'
import getAuthToken from '../../../../Miscellaneous/authtoken';

function AccountTableItem({user}) {

    return (
        <tr>
            <td className="account-name">{user.name}</td>
            <td className="account-email">{user.email}</td>
            <td className="account-privileges">{user.privileges}</td>
            <td className="account-locked">Yas</td>
        </tr>
    )
}

export default AccountTableItem;