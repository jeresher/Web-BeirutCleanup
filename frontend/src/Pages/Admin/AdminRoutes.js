import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';


function AdminRoutes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={AdminLogin} />
                <Route path="/dashboard" component={AdminDashboard} />
            </Switch>
        </Router>
    )
}

export default AdminRoutes;