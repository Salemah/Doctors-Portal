import { Alert, Box, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const Availableappointment = ({ date }) => {
    const [bookingSuccess,  setBookingSuccess] = useState(false);
    const bookings = [
        {
            id: 1,
            name: 'Teeth Orthodonics',
            time: '08.00 AM - 09.00 AM',
            space: 10,
            price:500
        },
        {
            id: 2,
            name: 'Cosmetic Dentistry',
            time: '09.00 AM - 10.00 AM',
            space: 8,
            price:500
        },
        {
            id: 3,
            name: 'Teeth Cleaning',
            time: '10.00 AM - 11.00 AM',
            space: 9,
            price:500
        },
        {
            id: 4,
            name: 'Cavity Protection',
            time: '11.00 AM - 12.00 PM',
            space: 5,
            price:500
        },
        {
            id: 5,
            name: 'Pediatric Dental',
            time: '06.00 PM - 07.00 PM',
            space: 10,
            price:500
        },
        {
            id: 6,
            name: 'Oral Surgery',
            time: '07.00 PM - 08.00 PM',
            space: 10,
            price:500
        },
    ]

    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main',mt:5, mb: 3 }}>Availabe Appointment on {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">Appointment Booked successfully!</Alert>}
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                   {
                     bookings.map(book => <Booking key={book.id}
                        books={book}
                        setBookingSuccess={setBookingSuccess}
                        date={date}></Booking>)  
                   } 

                </Grid>
            </Box>
        </Container>
    );
};

export default Availableappointment;