import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';




const Booking = ({ books, date,setBookingSuccess }) => {
    const{name,time,space,price} = books;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);

    return (
        <>
        
            <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={5} sx={{ py: 5 }}>
                    <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {space} SPACES AVAILABLE
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {price} SPACES AVAILABLE
                    </Typography>
                    <Button  variant="contained" onClick={handleBookingOpen} >BOOK APPOINTMENT</Button>
                </Paper>
            </Grid>
            <BookingModal
                date={date}
                booking={books}
                openBooking={openBooking}
                setBookingSuccess={setBookingSuccess}
                handleBookingClose={handleBookingClose}
            ></BookingModal> 
           
        </>
    );
};

export default Booking;