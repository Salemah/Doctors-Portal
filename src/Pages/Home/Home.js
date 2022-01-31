import { Button } from '@mui/material';
import React from 'react';
import Appointmentbanner from '../AppointmnetBanner/Appointmentbanner';
import Banner from '../Banner/Banner';
import Exception from '../Exception/Exception';
import Services from '../Services/Services';
import Header from '../Shared/Header';

const Home = () => {
    return (
        <div>
             <Header/>
             <Banner/>
            <Services/>
            <Exception/>
            <Appointmentbanner/>
        </div>
    );
};

export default Home;