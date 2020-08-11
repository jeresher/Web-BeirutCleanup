import React from 'react';
import MainContent from "./MainContent"
import '../Style/App.css'; 

function CreateForm() {
    return (
        <div className="inner-create-container">
            <MainContent />
            <div className="inner-create-box">
                <h1>Form</h1>
            </div>
        </div>
    );
}



export default CreateForm;