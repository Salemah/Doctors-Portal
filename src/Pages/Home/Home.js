import { Button } from '@mui/material';
import React from 'react';
import Appointmentbanner from '../AppointmnetBanner/Appointmentbanner';
import Banner from '../Banner/Banner';

import Services from '../Services/Services';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header';
import Contact from './Contact/Contact';
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
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;