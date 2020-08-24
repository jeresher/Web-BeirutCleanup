import React from "react";
import { Link } from "react-router-dom";
import Config from '../../../../Miscellaneous/Config'
import getAuthToken from '../../../../Miscellaneous/authtoken';

function AccountTableItem({event}) {

    return (
        <tr>
            <td className="account-name">{event.eventName}</td>
            <td className="account-email">{event.eventDate}</td>
            <td className="account-privileges">{event.eventDescription}</td>
            <td className="account-locked">Yas</td>
        </tr>
    )
}

export default AccountTableItem;