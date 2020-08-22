import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import Config from '../../Miscellaneous/Config'
import getAuthToken from '../../Miscellaneous/authtoken';
import Header from "../../Components/Admin/Header";
import SideBar from "../../Components/Admin/SideBar";
import MainContent from "../../Components/Admin/MainContent";


function AdminDashboard() {

    const history = useHistory();
    const [user, setUser] = useState();

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
        .then(response => {setUser(response)})
        .catch(err => console.log(err))
    }

    useEffect(validateUser, [])

    return (
        <div className="admin-dashboard-outer-container">
            <Header />
            <div className="admin-dashboard-inner-container">
                <SideBar user={user} />
                <MainContent user={user} />
            </div>
        </div>
    )
}

export default AdminDashboard;