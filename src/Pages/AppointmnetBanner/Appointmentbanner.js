import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import doctor from '../../images/doctor.png'
import bg from '../../images/appointment-bg.png'
import { Button, Container, Typography } from '@mui/material';

const appointmntBg = {
    background: `url(${bg})`,
    marginTop:150,
    backgroundColor:'rgba(45,58,74,0.8)',
    backgroundBlendMode: 'darken, luminosity'
}

const Appointmentbanner = () => {

    return (
        <Container>
            <Box style={appointmntBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img src={doctor} 
                    style={{ width: "400px",marginTop:'-110px'  }} 
                    alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex',
                justifyContent: 'flex-start',
                textAlign:'left',
                alignItems: 'center' }}>
                    <Box >
                    <Typography sx={{mb:1}} variant="h6"style={{color: '#0FCDE9',fontSize:19,fontWeight:400}}   >
                        Appointment
                    </Typography>
                    <Typography sx={{mb:2}} variant="h4" style={{color: 'white',fontSize:29,fontWeight:600}}  >
                       Make An Appointment Today
                    </Typography>
                    <Typography sx={{mb:2}} variant="body2" style={{color: 'white',fontSize:14,fontWeight:400}} >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, a!
                    </Typography>
                    <Button variant="contained">Contained</Button>
                    </Box>

                </Grid>


            </Grid>
        </Box>
        </Container>
    );
};

export default Appointmentbanner;