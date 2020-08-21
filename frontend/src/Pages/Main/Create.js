import React from 'react';
import CreateForm from '../../Components/Main/CreateForm'
import CreateMap from '../../Components/Main/CreateMap'

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