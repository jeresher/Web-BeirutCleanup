import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';


function AdminRoutes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={AdminLogin} />
                <Route path="/" component={AdminDashboard} />
            </Switch>
        </Router>
    )
}

export default AdminRoutes;