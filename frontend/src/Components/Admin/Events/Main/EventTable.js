import React, {useEffect, useState} from 'react';
import Config from '../../../../Miscellaneous/Config'
import getAuthToken from '../../../../Miscellaneous/authtoken';
import EventTableItem from "./EventTableItem"

function EventTable() {

    const [userPosts, setUserPosts] = useState([]);
    const [userPostTableItems, setUserPostTableItems] = useState([]);

    function retrieveUsersPosts() {
        const authtoken = getAuthToken();

        fetch(`${Config.url.API_URL}/api/userposts`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "auth-token": authtoken
            }
        })
        .then(res => res.json())
        .then(response => {
            setUserPosts(response);
            setUserPostTableItems(response.map(event => 
                <EventTableItem key={event._id} event={event} />
            ))
        })
        .catch(err => console.log(err))
    }


    useEffect(retrieveUsersPosts, [])

    return(
        <div className="event-table">
            <table>
                <thead>
                    <tr>
                        <th className="event-name">Event Name</th>
                        <th className="event-date">Date</th>
                        <th className="event-description">Description</th>
                        <th className="event-buttons">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {userPostTableItems}
                </tbody>
            </table>
        </div>
    )
}

export default EventTable;