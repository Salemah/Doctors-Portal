import React from 'react';
import chair from '../../images/chair.png';
import bg from '../../images/bg.png';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
const bannerBg = {
    background: `url(${bg})`,

}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}
const Banner = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
        <Grid style={bannerBg} container spacing={2} >
          <Grid item style={{ ...verticalCenter, textAlign: 'left' }}  xs={12} md={5} style={{textAlign:'left'}}>
          <Box>
          <Typography variant="h3" style={{color:'Black'}}>
                      Your new smile <br/> start here  
                    </Typography>
                    <Typography variant="h6"  style={{color:'gray',fontSize:13,fontWeight:300}}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, quibusdam? Mollitia laudantium veritatis laboriosam molestiae sequi placeat odit aperiam esse?
                    </Typography>
                    <Button variant="contained" >Get Appointment</Button>
          </Box>
          </Grid>
          <Grid item xs={12} md={7} style={verticalCenter}>
            <img src={chair} style={{width:400}} alt=""/>
          </Grid>
          
         
        </Grid>
      </Container>
    );
};

export default Banner;