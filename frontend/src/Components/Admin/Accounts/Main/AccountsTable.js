import React, {useState, useEffect} from 'react';
import Config from "../../../../Miscellaneous/Config";
import getAuthToken from '../../../../Miscellaneous/authtoken';
import AccountsTableItem from './AccountsTableItem';

function AccountsTable() {

    const [userAccounts, setUserAccounts] = useState([]);
    const [userAccountsTableItems, setUserAccountsTableItems] = useState([]);

    function retrieveUsersAccounts() {
        const authtoken = getAuthToken();

        fetch(`${Config.url.API_URL}/api/userposts`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "auth-token": authtoken
            }
        })
        .then(res => res.json())
        .then(response => {
            setUserAccounts(response);
            setUserAccountsTableItems(response.map(event => 
                <AccountsTableItem key={event._id} event={event} />
            ))
        })
        .catch(err => console.log(err))
    }


    useEffect(retrieveUsersAccounts, [])

    return (
        <div className="accounts-table">
            <table>
                <thead>
                    <tr>
                        <th className="account-name">Name</th>
                        <th className="account-email">Email</th>
                        <th className="account-privileges">Privileges</th>
                        <th className="account-locked">Locked</th>
                    </tr>
                </thead>
                <tbody>
                    {userAccountsTableItems}



                    <tr>
            <td className="account-name">A VERY LONG NAME TO SEE IF IT WORKS BOYO LETS SEEE THEN I MEAN SHIT</td>
            <td className="account-email">A VERY LONG NAME TO SEE IF IT WORKS BOYO LETS SEEE THEN I MEAN SHIT</td>
            <td className="account-privileges">5</td>
            <td className="account-locked">Yas</td>
        </tr>
        <tr>
            <td className="account-name">A VERY LONG NAME TO SEE IF IT WORKS BOYO LETS SEEE THEN I MEAN SHIT</td>
            <td className="account-email">A VERY LONG NAME TO SEE IF IT WORKS BOYO LETS SEEE THEN I MEAN SHIT</td>
            <td className="account-privileges">5</td>
            <td className="account-locked">Yas</td>
        </tr>
        <tr>
            <td className="account-name">A VERY LONG NAME TO SEE IF IT WORKS BOYO LETS SEEE THEN I MEAN SHIT</td>
            <td className="account-email">A VERY LONG NAME TO SEE IF IT WORKS BOYO LETS SEEE THEN I MEAN SHIT</td>
            <td className="account-privileges">5</td>
            <td className="account-locked">Yas</td>
        </tr>
        <tr>
            <td className="account-name">A VERY LONG NAME TO SEE IF IT WORKS BOYO LETS SEEE THEN I MEAN SHIT</td>
            <td className="account-email">A VERY LONG NAME TO SEE IF IT WORKS BOYO LETS SEEE THEN I MEAN SHIT</td>
            <td className="account-privileges">5</td>
            <td className="account-locked">Yas</td>
        </tr>
        <tr>
            <td className="account-name">A VERY LONG NAME TO SEE IF IT WORKS BOYO LETS SEEE THEN I MEAN SHIT</td>
            <td className="account-email">A VERY LONG NAME TO SEE IF IT WORKS BOYO LETS SEEE THEN I MEAN SHIT</td>
            <td className="account-privileges">5</td>
            <td className="account-locked">Yas</td>
        </tr>
        <tr>
            <td className="account-name">A VERY LONG NAME TO SEE IF IT WORKS BOYO LETS SEEE THEN I MEAN SHIT</td>
            <td className="account-email">A VERY LONG NAME TO SEE IF IT WORKS BOYO LETS SEEE THEN I MEAN SHIT</td>
            <td className="account-privileges">5</td>
            <td className="account-locked">Yas</td>
        </tr>
        <tr>
            <td className="account-name">A VERY LONG NAME TO SEE IF IT WORKS BOYO LETS SEEE THEN I MEAN SHIT</td>
            <td className="account-email">A VERY LONG NAME TO SEE IF IT WORKS BOYO LETS SEEE THEN I MEAN SHIT</td>
            <td className="account-privileges">5</td>
            <td className="account-locked">Yas</td>
        </tr>
        <tr>
            <td className="account-name">A VERY LONG NAME TO SEE IF IT WORKS BOYO LETS SEEE THEN I MEAN SHIT</td>
            <td className="account-email">A VERY LONG NAME TO SEE IF IT WORKS BOYO LETS SEEE THEN I MEAN SHIT</td>
            <td className="account-privileges">5</td>
            <td className="account-locked">Yas</td>
        </tr>
        <tr>
            <td className="account-name">A VERY LONG NAME TO SEE IF IT WORKS BOYO LETS SEEE THEN I MEAN SHIT</td>
            <td className="account-email">A VERY LONG NAME TO SEE IF IT WORKS BOYO LETS SEEE THEN I MEAN SHIT</td>
            <td className="account-privileges">5</td>
            <td className="account-locked">Yas</td>
        </tr>
        <tr>
            <td className="account-name">A VERY LONG NAME TO SEE IF IT WORKS BOYO LETS SEEE THEN I MEAN SHIT</td>
            <td className="account-email">A VERY LONG NAME TO SEE IF IT WORKS BOYO LETS SEEE THEN I MEAN SHIT</td>
            <td className="account-privileges">5</td>
            <td className="account-locked">Yas</td>
        </tr>
        <tr>
            <td className="account-name">A VERY LONG NAME TO SEE IF IT WORKS BOYO LETS SEEE THEN I MEAN SHIT</td>
            <td className="account-email">A VERY LONG NAME TO SEE IF IT WORKS BOYO LETS SEEE THEN I MEAN SHIT</td>
            <td className="account-privileges">5</td>
            <td className="account-locked">Yas</td>
        </tr>
        <tr>
            <td className="account-name">A VERY LONG NAME TO SEE IF IT WORKS BOYO LETS SEEE THEN I MEAN SHIT</td>
            <td className="account-email">A VERY LONG NAME TO SEE IF IT WORKS BOYO LETS SEEE THEN I MEAN SHIT</td>
            <td className="account-privileges">5</td>
            <td className="account-locked">Yas</td>
        </tr>
        <tr>
            <td className="account-name">A VERY LONG NAME TO SEE IF IT WORKS BOYO LETS SEEE THEN I MEAN SHIT</td>
            <td className="account-email">A VERY LONG NAME TO SEE IF IT WORKS BOYO LETS SEEE THEN I MEAN SHIT</td>
            <td className="account-privileges">5</td>
            <td className="account-locked">Yas</td>
        </tr>
        <tr>
            <td className="account-name">A VERY LONG NAME TO SEE IF IT WORKS BOYO LETS SEEE THEN I MEAN SHIT</td>
            <td className="account-email">A VERY LONG NAME TO SEE IF IT WORKS BOYO LETS SEEE THEN I MEAN SHIT</td>
            <td className="account-privileges">5</td>
            <td className="account-locked">Yas</td>
        </tr>
        <tr>
            <td className="account-name">A VERY LONG NAME TO SEE IF IT WORKS BOYO LETS SEEE THEN I MEAN SHIT</td>
            <td className="account-email">A VERY LONG NAME TO SEE IF IT WORKS BOYO LETS SEEE THEN I MEAN SHIT</td>
            <td className="account-privileges">5</td>
            <td className="account-locked">Yas</td>
        </tr>



                </tbody>
            </table>
        </div>
    )
}

export default AccountsTable;