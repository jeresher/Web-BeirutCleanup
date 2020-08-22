import React from "react";
import EventMain from "./Events/Main/EventMain";
import EventCreateMain from "./Events/Create/EventCreateMain"
import {Router, Route, Switch} from "react-router-dom";

function MainContent({user}) {
    

    return (
        <div className="admin-dashboard-maincontent">
            <Switch>
                <Route 
                    exact path="/admin/dashboard" 
                    render={(props) => <EventMain {...props} user={user} />}
                />
                <Route 
                    exact path="/admin/dashboard/create" 
                    render={(props) => <EventCreateMain {...props} user={user} />}
                />
            </Switch>
        </div>
    )
}

export default MainContent;