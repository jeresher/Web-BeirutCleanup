import React from 'react';
import CreateForm from '../../Components/Main/CreateForm'
import CreateMap from '../../Components/Main/CreateMap'

function Create(props) {

    const [ location, setLocation ] = React.useState();

    return (
        <div className="inner-container create">
            <CreateMap setLocation={setLocation} />
            <CreateForm location={location} loadCreatePage={props.loadCreatePage} />
        </div>

    );
}

export default Create;