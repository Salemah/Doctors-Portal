import { Button } from '@mui/material';
import React from 'react';
import Appointmentbanner from '../AppointmnetBanner/Appointmentbanner';
import Banner from '../Banner/Banner';

import Services from '../Services/Services';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header';
import Contact from './Contact/Contact';
import Doctors from './Doctors/Doctors';
import Exception from './Exception/Exception';
import Info from './Info/Info';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
             <Header/>
             <Banner/>
             <Info></Info>
            <Services/>
            <Exception/>
            <Appointmentbanner/>
            <Testimonials></Testimonials>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;