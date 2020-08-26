import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
            <Route path="/" render={identifySubdomain} />
        </Router>
    )
}

export default App;