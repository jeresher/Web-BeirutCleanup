import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import getAuthToken from '../../../../Miscellaneous/authtoken';
import Config from '../../../../Miscellaneous/Config';

function EventCreateForm(props) {

    const history = useHistory();

    const [ type, setType ] = React.useState("text");

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

        fetch(`${Config.url.API_URL}/api/userposts/create`, {
            method: "POST",
            body: JSON.stringify({
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

    return (      
        <form className="eventform" onSubmit={(event) => clientSideFormValidation(event)}>
            <div className="info">
                <h1>Create an Event</h1>
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
                    placeholder="Date تاريخ الحدث" 
                    type="date"
                    type={type}
                    onFocus={() => {
                        setType("date")
                        setMinDate()
                    }} 
                    pattern="\d{4}-\d{2}-\d{2}"
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
                >CREATE NEW EVENT <div> أنشئ حدثًا جديدًا </div></button>
            </div>
        </form>
    );
}



export default EventCreateForm;