import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Checkout from './Checkout';

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointments, setAppointments] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => {console.log(data)
                setAppointments(data)});
    }, [appointmentId]);

    const stripePromise = loadStripe('pk_test_51HdHuDEzOCt8A2LOfis7NOnSDWuO0mN7hjpEQnYDZPU7HyfIyOPQIdGknNIZx6l8qqQr9Of5AWULc7ccdAIeA6wU00l2WNaOXb');
    return (
        <div>
            <h2>Please Pay for: {appointments.serviceName} for {appointments.patientName}</h2>
            <h4>Pay: ${appointments.price}</h4> 
          <Elements stripe={stripePromise}>
                <Checkout
                    appointments={appointments}
                />
            </Elements> 


        </div>
    );
};

export default Payment;