import React from 'react';
import CreateForm from '../Components/CreateForm'
import CreateMap from '../Components/CreateMap'
import '../Style/App.css'; 

function Create() {
  return (
    <div className="main-create-container">
        <div className="inner-create-container">
            <CreateMap />
            {/* <CreateForm /> */}
        </div>
    </div>
  );
}

export default Create;