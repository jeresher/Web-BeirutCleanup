import React from "react";
import EventMain from "./Events/Main/EventMain";
import EventCreateMain from "./Events/Create/EventCreateMain"
import EventEditMain from "./Events/Edit/EventEditMain"
import AllEventsMain from "./AllEvents/Main/AllEventsMain"
import AllEventsEditMain from "./AllEvents/Edit/AllEventsEditMain"
import AccountsMain from "./Accounts/Main/AccountsMain"
import {Router, Route, Switch} from "react-router-dom";

function MainContent({user}) {
    

    return (
        <div className="admin-dashboard-maincontent">
            <Switch>
                {/* ADMIN DASHBOARD: TEMPORARY UNTIL DASHBOARD IS CREATED */}
                <Route 
                    exact path="/" 
                    render={(props) => <EventMain {...props} user={user} />}
                />
                {/* ADMIN EVENTS */}
                <Route 
                    exact path="/events" 
                    render={(props) => <EventMain {...props} user={user} />}
                />
                <Route 
                    exact path="/events/create" 
                    render={(props) => <EventCreateMain {...props} user={user} />}
                />
                <Route 
                    exact path="/events/view/:id" 
                    render={(props) => <EventEditMain {...props} user={user} />}
                />
                {/* ADMIN ALL EVENTS */}
                <Route
                    exact path="/allevents"
                    render={(props) => <AllEventsMain {...props} user={user} />}
                />
                <Route 
                    exact path="/allevents/view/:id" 
                    render={(props) => <AllEventsEditMain {...props} user={user} />}
                />
                {/* ADMIN ACCOUNTS */}
                <Route
                    exact path="/accounts"
                    render={(props) => <AccountsMain {...props} user={user} />}
                />

            </Switch>
        </div>
    )
}

export default MainContent;