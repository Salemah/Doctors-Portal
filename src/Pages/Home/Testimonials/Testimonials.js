
import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button, Container } from '@mui/material';
const Testimonials = () => {
    return (
        <Container>
        <Box sx={{ flexGrow: 1,mt:7 }}>
        <Box sx={{textAlign:'left',m:5 }}>
        <Typography variant="h6" style={{color: '#0FCDE9',fontSize:19,fontWeight:600}} component="div" gutterBottom>
                           Testimonials
                        </Typography>
        <Typography variant="h6" style={{ fontSize:29,fontWeight: "600" }} component="div" gutterBottom>
                           What's Our Patient <br/> Says
                        </Typography>
        </Box>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} >
                <Paper elevation={3} />
                <Paper elevation={3} />
                <Paper elevation={3} />

                </Grid>
                
                
               
            </Grid>
        </Box>
    </Container>
    );
};

export default Testimonials;