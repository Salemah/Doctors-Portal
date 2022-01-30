import React from 'react';

const Availableappointment = ({date}) => {
   
    return (
        <div>
            <h2>Availabe {date.toDateString()}</h2>
        </div>
    );
};

export default Availableappointment;