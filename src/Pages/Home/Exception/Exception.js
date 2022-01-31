import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button, Container } from '@mui/material';
import trt from '../../../images/treatment.png'
const Exception = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1,mt:7 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} >
                        <img src={trt} style={{width:'90%',height:450}} alt=""/>

                    </Grid>
                    
                    <Grid item xs={12} md={6} sx={{display: 'flex',justifyContent: 'flex-start',textAlign:'left',alignItems:'center' }}>
                    <Box >
                            <Typography variant="h4" style={{ fontWeight: "600" }} component="div" gutterBottom>
                                Exceptional Dental <br /> Care, On Your Terms
                            </Typography>
                            <Typography variant="body" sx={{my:5}} style={{ fontWeight: "400", color: 'gray' }} component="div" gutterBottom>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam accusantium fugit, hic omnis recusandae in sunt explicabo sequi! Impedit aut molestiae quasi quidem perspiciatis temporibus delectus ex obcaecati cupiditate inventore iste, fugiat totam commodi quas magnam quod repudiandae repellat corrupti ad sapiente rerum. Harum aliquid dolores obcaecati eum quam quod!
                            </Typography>
                            <Button variant="contained">Learn More</Button>
                            </Box>
                    </Grid>
                   
                </Grid>
            </Box>
        </Container>
    );
};

export default Exception;