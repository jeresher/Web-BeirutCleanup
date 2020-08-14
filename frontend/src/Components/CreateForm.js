import React from 'react';
import '../Style/App.css'; 

function CreateForm(props) {

    const [ type, setType ] = React.useState("text");

    function didItPass(bool, element) {
        if (bool === false) {
            element.style.borderColor = "red";
            element.style.borderWidth = "2px";
        } else {
            element.style.borderColor = "rgb(210, 210, 210)";
            element.style.borderWidth = "1px";
        }
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

        fetch("http://localhost:5000/api/posts/", {
            method: "POST",
            body: JSON.stringify({
                "eventName": name,
                "eventDate": date,
                "eventDescription": description,
                "eventLongLat": [location.lng, location.lat],
                "eventComments": []
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => res.json())
        .then(response => {
            console.log(response);
            props.loadCreatePage(false);
        })
        .catch(err => console.log(err))
        
    }

    return (      
        <form className="form" onSubmit={(event) => clientSideFormValidation(event)}>
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
                    type={type} 
                    onFocus={() => setType("date")} 
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
            <div className="submit">
                <button 
                type="submit"
            >CREATE NEW EVENT | أنشئ حدثًا جديدًا </button>
            </div>
        </form>
    );
}



export default CreateForm;