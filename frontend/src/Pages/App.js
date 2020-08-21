import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Main/Main.js';
import AdminLogin from './Admin/AdminLogin'
import AdminDashboard from './Admin/AdminDashboard'
import '../Style/App.css'; 

function App() {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/admin" component={AdminLogin} />
                <Route exact path="/admin/dashboard" component={AdminDashboard} />
            </Switch>
        </Router>
    )

}

export default App;