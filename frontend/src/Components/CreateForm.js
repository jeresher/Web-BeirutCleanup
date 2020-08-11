import React from 'react';
import '../Style/App.css'; 

function CreateForm(props) {

    return (       
        <div className="inner-form-box">
            <div className="header">
                <h1>Beirut Cleanup</h1>
            </div>

            <div className="body">
            <section>
                    <h6>Location</h6>
                    <input value={props.location}></input>
                </section>
                <section>
                    <h6>Event Name</h6>
                    <input></input>
                </section>
                <section>
                    <h6>Date</h6>
                    <input type="date" pattern="\d{4}-\d{2}-\d{2}"></input>
                </section>
                <section className="textarea">
                    <h6>Description</h6>
                    <textarea></textarea>
                </section>
            </div>
        </div>
    );
}



export default CreateForm;