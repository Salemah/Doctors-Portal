import React from 'react';
import Header from '../../Shared/Header';
import AppointmentHeader from '../AppoinenetHeader/AppointmentHeader';
import Availableappointment from '../Avialableappointmnet/Availableappointment';

const Appointment = () => {
    const [date, setdate] = React.useState(new Date());
    return (
        <div>
             <Header/>
             <AppointmentHeader date={date} setdate={setdate}></AppointmentHeader>
             <Availableappointment date={date}></Availableappointment>
        </div>
    );
};

export default Appointment;