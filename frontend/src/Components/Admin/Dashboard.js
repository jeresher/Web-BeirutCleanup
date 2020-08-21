import React, {useEffect} from 'react';
import { useHistory } from "react-router-dom";
import Config from '../../Miscellaneous/Config'
import getAuthToken from '../../Miscellaneous/authtoken';
import Header from './Header';
import Table from './Table';

function Dashboard() {

    const history = useHistory();

    function validateUser() {
        const authtoken = getAuthToken();
        if (!authtoken) history.push('/admin');
        else retrieveUser();
    }

    function retrieveUser() {
        const authtoken = getAuthToken();

        fetch(`${Config.url.API_URL}/api/me`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "auth-token": authtoken
            }
        })
        .then(res => res.json())
        .then(response => console.log(response))
        .catch(err => console.log(err))

    }

    useEffect(validateUser, [])

    return (
        <div className="admin-dashboard-main-container">
            <div className="admin-dashboard-inner-container">
                <Header />
                <Table />
            </div>
        </div>
    )
}

export default Dashboard;