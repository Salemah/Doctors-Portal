import { Button } from '@mui/material';
import React from 'react';
import Appointmentbanner from '../AppointmnetBanner/Appointmentbanner';
import Banner from '../Banner/Banner';

import Services from '../Services/Services';
import Header from '../Shared/Header';
import Exception from './Exception/Exception';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
             <Header/>
             <Banner/>
            <Services/>
            <Exception/>
            <Appointmentbanner/>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;