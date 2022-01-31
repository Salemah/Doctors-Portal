
import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button, Container } from '@mui/material';
import a from '../../../images/people-1.png';
import b from '../../../images/people-2.png';
import c from '../../../images/people-3.png';

const Testimonials = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1, my: 11 }}>
                <Box sx={{ textAlign: 'left', my: 7 }}>
                    <Typography variant="h6" style={{ color: '#0FCDE9', fontSize: 19, fontWeight: 600 }} component="div" gutterBottom>
                        Testimonials
                    </Typography>
                    <Typography variant="h6" style={{ fontSize: 29, fontWeight: "600" }} component="div" gutterBottom>
                        What's Our Patient <br /> Says
                    </Typography>
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4} >
                        <Paper elevation={2} sx={{ p: 4,textAlign:'left' }}>    <Typography variant="body" style={{ fontSize: 15, fontWeight: "400" }} component="div" gutterBottom>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi tempora et id, laudantium illum autem reprehenderit possimus placeat ipsum sint facilis
                        </Typography>
                            <Box sx={{ display: 'flex', mt: 4 ,textAlign:'left'}}>
                                <img style={{ width: 70 }} src={a} alt="" />
                                <Box   >
                                <Typography  variant="h5"  style={{ color: '#0FCDE9',fontSize: 19, fontWeight: "400",marginLeft:10 }} component="div" gutterBottom>
                                    winson harry
                                </Typography>
                                <Typography variant="body" style={{ fontSize: 15, fontWeight: "400",marginLeft:10  }} component="div" gutterBottom>
                                    Newyork
                                </Typography>
                                </Box>
                            </Box>
                        </Paper>


                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={2} sx={{ p: 4,textAlign:'left' }}>    <Typography variant="body" style={{ fontSize: 15, fontWeight: "400" }} component="div" gutterBottom>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi tempora et id, laudantium illum autem reprehenderit possimus placeat ipsum sint facilis
                        </Typography>
                            <Box sx={{ display: 'flex', mt: 4,textAlign:'left' }}>
                                <img style={{ width: 70 }} src={b} alt="" />
                                <Box >
                                <Typography variant="h5" style={{color: '#0FCDE9', fontSize: 19, fontWeight: "400",marginLeft:10  }} component="div" gutterBottom>
                                    winson harry
                                </Typography>
                                <Typography variant="body" style={{ fontSize: 15, fontWeight: "400",marginLeft:10  }} component="div" gutterBottom>
                                    newyork
                                </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={2} sx={{ p: 4,textAlign:'left' }}>    <Typography variant="body" style={{ fontSize: 15, fontWeight: "400" }} component="div" gutterBottom>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi tempora et id, laudantium illum autem reprehenderit possimus placeat ipsum sint facilis
                        </Typography>
                            <Box sx={{ display: 'flex', mt: 4,textAlign:'left' }}>
                                <img style={{ width: 70 }} src={a} alt="" />
                                <Box>
                                <Typography variant="h5" style={{color: '#0FCDE9', fontSize: 19, fontWeight: "400",marginLeft:10  }} component="div" gutterBottom>
                                    winson harry
                                </Typography>
                                <Typography variant="body" style={{ fontSize: 15, fontWeight: "400",marginLeft:10  }} component="div" gutterBottom>
                                    California
                                </Typography>
                            </Box>
                            </Box></Paper>
                    </Grid>



                </Grid>
            </Box>
        </Container>
    );
};

export default Testimonials;