import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import fluride from '../../images/fluoride.png'
import doctor from '../../images/doctor.png'
import cavity from '../../images/cavity.png'
import whitening from '../../images/whitening.png'

import Service from '../Service/Service';
const Services = () => {
    const services= [{
        name:'fluroido treatment',
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem ipsa vel sapiente similique ullam mollitia aperiam quisquam sunt iusto enim?',
        img:fluride
    },{
        name:'cavity',
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem ipsa vel sapiente similique ullam mollitia aperiam quisquam sunt iusto enim?',
        img:cavity
    },{
        name:'whitening',
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem ipsa vel sapiente similique ullam mollitia aperiam quisquam sunt iusto enim?',
        img:whitening
    },{
        name:'fluroido treatment',
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem ipsa vel sapiente similique ullam mollitia aperiam quisquam sunt iusto enim?',
        img:fluride
    },{
        name:'fluroido treatment',
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem ipsa vel sapiente similique ullam mollitia aperiam quisquam sunt iusto enim?',
        img:fluride
    },{
        name:'fluroido treatment',
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem ipsa vel sapiente similique ullam mollitia aperiam quisquam sunt iusto enim?',
        img:fluride
    },]
    
    return (
        <Box sx={{ flexGrow: 1, }}>
           <Container>
           <Typography sx={{ color: 'info.main',mt:5  }} variant="h6" component="div" color="text.secondary">
                        OUR SERVICES
                    </Typography>
           <Typography sx={{ fontWeight: 'bold' }}  variant="h4" component="div" color="text.secondary">
                        Service We Provide
                    </Typography>
           <Grid container spacing={{ xs: 3, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    services.map(service =><Service
                     key={service.name}
                     service={service}
                     
                     >

                    </Service>)
                }
            </Grid>
           </Container>
        </Box>
    );
};

export default Services;