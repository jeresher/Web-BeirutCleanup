import React from 'react';
import CreateForm from '../Components/CreateForm'
import CreateMap from '../Components/CreateMap'
import '../Style/App.css'; 

function Create(props) {

    const [ location, setLocation ] = React.useState();

    function handleLocationChange(newLocation) {
        setLocation(newLocation)
    }

    return (

        <div className="inner-container create">
            <CreateMap handleLocationChange={handleLocationChange} />
            <CreateForm location={location} loadCreatePage={props.loadCreatePage} />
        </div>

    );
}

export default Create;