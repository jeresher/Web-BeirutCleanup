import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainRoutes from './Main/MainRoutes';
import AdminRoutes from './Admin/AdminRoutes'
import '../Style/App.css'; 

function App() {

    function identifySubdomain() {
        const [subdomain] = window.location.hostname.split('.');
        
        if (subdomain === 'admin') return <AdminRoutes />;
        else return <MainRoutes />;
    }

    return (
        <Router>
            <Route
                path="/"
                render={identifySubdomain}
            />

            {/*
            <Route 
                path="/" 
                render={() => {
                    const [subdomain] = window.location.hostname.split('.');
                    if (subdomain === 'admin') return <AdminLogin />;
                    return <Main />;
                }}
            />
            */}

            {/*
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/admin" component={AdminLogin} />
                <Route path="/admin/dashboard" component={AdminDashboard} />
            </Switch>
            */}
        </Router>
    )

}

export default App;