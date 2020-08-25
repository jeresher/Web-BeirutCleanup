import React, {useState, useEffect} from 'react';
import Config from "../../../../Miscellaneous/Config";
import getAuthToken from '../../../../Miscellaneous/authtoken';
import AccountsTableItem from './AccountsTableItem';

function AccountsTable() {

    const [userAccounts, setUserAccounts] = useState([]);
    const [userAccountsTableItems, setUserAccountsTableItems] = useState([]);

    function retrieveUsersAccounts() {
        const authtoken = getAuthToken();

        fetch(`${Config.url.API_URL}/api/alluseraccounts`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "auth-token": authtoken
            }
        })
        .then(res => res.json())
        .then(response => {
            setUserAccounts(response);
            setUserAccountsTableItems(response.map(user => 
                <AccountsTableItem key={user._id} user={user} />
            ))
            /*
            setUserAccounts(response);
            setUserAccountsTableItems(response.map(event => 
                <AccountsTableItem key={event._id} event={event} />
            )) 
            */
        })
        .catch(err => console.log(err))
    }


    useEffect(retrieveUsersAccounts, [])

    return (
        <div className="accounts-table">
            <table>
                <thead>
                    <tr>
                        <th className="account-name">User</th>
                        <th className="account-email">Email</th>
                        <th className="account-privileges">Privileges</th>
                        <th className="account-locked">Locked</th>
                    </tr>
                </thead>
                <tbody>
                    {userAccountsTableItems}
                </tbody>
            </table>
        </div>
    )
}

export default AccountsTable;