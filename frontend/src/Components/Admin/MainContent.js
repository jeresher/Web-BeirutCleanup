import React from "react";
import EventMain from "./Events/EventMain";
import EventCreateMain from "./Events/Create/EventCreateMain"
import {Router, Route, Switch} from "react-router-dom";

function MainContent() {
    

    return (
        <div className="admin-dashboard-maincontent">
            <Switch>
                <Route exact path="/admin/dashboard" component={EventMain} />
                <Route exact path="/admin/dashboard/create" component={EventCreateMain} />
            </Switch>
        </div>
    )
}

export default MainContent;