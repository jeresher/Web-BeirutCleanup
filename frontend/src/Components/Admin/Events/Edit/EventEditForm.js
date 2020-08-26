import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import getAuthToken from '../../../../Miscellaneous/authtoken';
import Config from '../../../../Miscellaneous/Config';

function EventEditForm(props) {

    const history = useHistory();

    function setInitialValues() {
        const eventLong = Number(props.event.eventLongLat[0].$numberDecimal)
        const eventLat = Number(props.event.eventLongLat[1].$numberDecimal)
        const eventName = props.event.eventName
        const eventDate = formatPropDate(props.event.eventDate)
        const eventDescription = props.event.eventDescription

        // SET INITIAL LOCATION.
        props.setLocation({lng: eventLong, lat: eventLat})

        // SET INITIAL NAME.
        var name = document.getElementById("name");
        name.value = eventName;

        // SET INITIAL DATE.
        var date = document.getElementById("date");
        date.value = eventDate;

        // SET INTIAL DESCRIPTION.
        var description = document.getElementById("description");
        description.value = eventDescription;
    }

    function setLocationValue() {
        const input = document.getElementById("location");
        var lng = props.location.lng;
        var lat = props.location.lat;
        didItPass(true, input);

        if (lat >= 0) lat = Math.abs(lat).toFixed(5) + " N";
        else lat = Math.abs(lat).toFixed(5) + " S";

        if (lng >= 0) lng = Math.abs(lng).toFixed(5) + " E";
        else lng = Math.abs(lng).toFixed(5) + " W";

        input.value = lat + ", " + lng;
        return null;
    }

    function clientSideFormValidation(event) {
        event.preventDefault();

        // Name Validation.
        var name = document.getElementById("name");
        if (name.value.trim()==="" || typeof name.value !== "string") {
            didItPass(false, name);
            return;
        }
        else {
            didItPass(true, name);
            name = name.value.trim();
        }

        // Date Validation.
        var date = document.getElementById("date");
        if (date.value.split("-").length !== 3) {
            didItPass(false, date);
            return;
        }
        else {
            didItPass(true, date);
            date = date.value;
        }

        // Description Validation.
        var description = document.getElementById("description");
        if (description.value.trim()==="" || typeof description.value !== "string") {
            didItPass(false, description);
            return;
        }
        else {
            didItPass(true, description);
            description = description.value.trim();
        }

        // Location Validation.
        const location = document.getElementById("location");
        if (!props.location) {
            didItPass(false, location);
            return;
        }
        else {
            didItPass(true, location);
        }

        // Move on...
        submitPostRequest(name, date, description, props.location);
    }

    function submitPostRequest(name, date, description, location) {

        const authtoken = getAuthToken();

        fetch(`${Config.url.API_URL}/api/userposts/edit`, {
            method: "PATCH",
            body: JSON.stringify({
                "id": props.event._id,
                "eventName": name,
                "eventDate": date,
                "eventDescription": description,
                "eventLongLat": [location.lng, location.lat]
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "auth-token": authtoken
            }
        })
        .then(res => res.json())
        .then(response => history.push('/dashboard/events'))
        .catch(err => console.log(err))
        
    }

    function didItPass(bool, element) {
        if (bool === false) {
            element.style.borderColor = "red";
            element.style.borderWidth = "2px";
        } else {
            element.style.borderColor = "rgb(210, 210, 210)";
            element.style.borderWidth = "1px";
        }
    }

    function formatPropDate(date) { // TEMP SOLUTION. d/m/yyyy -> yyyy-mm-dd

        var strippedDate = date.split('/');
        var yyyy = strippedDate[2]
        var dd = strippedDate[0];
        if (dd.length === 1) dd = `0${dd}`
        var mm = strippedDate[1];
        if (mm.length === 1) mm = `0${mm}`
        const formattedDate = `${yyyy}-${mm}-${dd}`

        return formattedDate;
    }

    function backButtonClicked(event) {
        event.stopPropagation();
        history.push('/dashboard/events');
    }

    function setMinDate() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;
        var yyyy = today.getFullYear();
        if (dd < 10) dd = `0${dd}`
        if (mm < 10) mm = `0${mm}`
        const date = document.getElementById('date');
        date.setAttribute('min', `${yyyy}-${mm}-${dd}`)
    }

    useEffect(setInitialValues, [props.event])

    return (      
        <form className="eventform" onSubmit={(event) => clientSideFormValidation(event)}>
            <div className="info">
                <h1>Edit an Event</h1>
            </div>
            <br />
            <div className="info">
                <input 
                    id="name"
                    placeholder="Event Name اسم الحدث" 
                    maxLength="75"
                    required
                />
            </div>
            <div className="info">
                <input 
                    id="date" 
                    type="date"
                    pattern="\d{4}-\d{2}-\d{2}"
                    onFocus={setMinDate}
                    required
                />
            </div>
            <div className="info description">
                <textarea 
                    id="description"
                    placeholder="Description وصف" 
                    required
                />
            </div>
            <div className="info">
                <input 
                    id="location" 
                    placeholder={props.location ? setLocationValue() : "Click on the map to select a location. انقر على الخريطة لتحديد موقع."}
                    disabled
                    required 
                />
            </div>
            <br />
            <div className="buttons">
                <button
                    id="back"
                    onClick={backButtonClicked}
                >BACK</button>
                <button 
                    id="submit"
                    type="submit"
                >SAVE <div>تغيير</div></button>
            </div>
        </form>
    );
}



export default EventEditForm;