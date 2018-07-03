import React from 'react';

import ReduxThing from './reduxThing';

const  Hidden = (props) => {
    return (
    <div>
        {props.show}
        <ReduxThing />
    </div>
    )  
}

export default Hidden;