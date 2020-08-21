import React, {useEffect} from 'react';
import { useHistory } from "react-router-dom";
import getAuthToken from '../../Miscellaneous/authtoken';
import Header from './Header';
import Table from './Table';

function Dashboard() {

    const history = useHistory();

    useEffect(() => {
        // CHECK IF CLIENT HAS AUTH TOKEN.
        const authtoken = getAuthToken();
        if (!authtoken) history.push('/admin');
    }, []);

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