import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

const Info = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1,mt:-20 }}>
                <Grid container spacing={2}>
                    <Grid item xs={4} md={4} >
                        <Box style={{backgroundColor:'#38ADCE  '}} sx={{display:'flex',p:3,borderRadius:2}}>
                            <AccessTimeIcon/>
                            <Box>
                            <Typography  variant="h6"  style={{ color: '#00E2FF ', fontSize: 19, fontWeight: 400 }}   >
                            Appointment
                        </Typography> 
                        <Typography   variant="body" style={{ color: '#35606C ', fontSize: 13, fontWeight: 400 }}   >
                           Lorem ipsum dolor sit 
                        </Typography>
                        </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={4} md={4} >
                        <Box style={{backgroundColor:'#00427B  '}} sx={{display:'flex',p:3,borderRadius:2}}>
                            <LocationOnIcon/>
                            <Box>
                            <Typography  variant="h6"  style={{ color: '#00E2FF ', fontSize: 19, fontWeight: 400 }}   >
                            Appointment
                        </Typography> 
                        <Typography   variant="body" style={{ color: '#35606C ', fontSize: 13, fontWeight: 400 }}   >
                           Lorem ipsum dolor sit 
                        </Typography>
                        </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={4} md={4}  >
                       <Box style={{backgroundColor:'#38ADCE  '}} sx={{display:'flex',p:3 ,borderRadius:2}}>
                           <AddIcCallIcon/>
                           <Box>
                       <Typography  variant="h6"  style={{ color: '#00E2FF ', fontSize: 19, fontWeight: 400 }}   >
                            Appointment
                        </Typography> 
                        <Typography   variant="body" style={{ color: '#35606C ', fontSize: 13, fontWeight: 400 }}   >
                           Lorem ipsum dolor sit 
                        </Typography>
                        </Box>
                       </Box>
                    </Grid>

                </Grid>
            </Box>
        </Container>
    );
};

export default Info;