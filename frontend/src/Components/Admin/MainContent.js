import React from "react";
import EventMain from "./Events/EventMain";
import {Route, Switch} from "react-router-dom";

function MainContent() {
    

    return (
        <div className="admin-dashboard-maincontent">
            <Switch>
                <Route path="/admin/dashboard/" component={EventMain} />
            </Switch>
        </div>
    )
}

export default MainContent;