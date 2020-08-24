import React from "react";
import AccountsHeading from "./AccountsHeading";
import AccountsBody from "./AccountsBody";
function AccountsMain(props) {


    return (
        <div className="event-outer-container">
            <div className="event-inner-container">
                <AccountsHeading />
                <AccountsBody />
            </div>
        </div>
    )
}
export default AccountsMain;