import React from 'react';
import Header from './Header';
import Table from './Table';

function Dashboard() {

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