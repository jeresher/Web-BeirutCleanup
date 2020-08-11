import React from 'react';
import CreateForm from '../Components/CreateForm'
import CreateMap from '../Components/CreateMap'
import '../Style/App.css'; 

function Create() {

    const [ location, setLocation ] = React.useState('')

    function handleLocationChange(newLocation) {
        setLocation(newLocation)
    }

    return (
        <div className="main-create-container">
            <div className="inner-create-container">
                <CreateMap handleLocationChange={handleLocationChange} />
                <CreateForm location={location} />
            </div>
        </div>
    );
}

export default Create;