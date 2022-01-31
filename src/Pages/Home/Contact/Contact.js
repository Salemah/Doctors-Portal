import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import bg from '../../../images/bg.png'
import { Button, Container, TextField, Typography } from '@mui/material';
import { borderRadius } from '@mui/system';
const background = {

    background: `url(${bg})`,
    marginTop: 150,
    backgroundColor: 'rgba(45,58,74,0.8)',
    backgroundBlendMode: 'darken, luminosity'

}
const Contact = () => {
    return (
        <Container>
            <Box style={background} sx={{ flexGrow: 1,my:5,p:5 }}>
                <Typography sx={{ textAlign: 'center', display: 'block' }} variant="body2" style={{ color: '#0FCDE9', fontSize: 24, fontWeight: 400 }} gutterBottom>Conatct us</Typography>
                <Typography variant="h6" style={{ fontSize: 34,color:'white', fontWeight: 400 }} component="div" gutterBottom>Always Connect With Us</Typography>
                <Grid container spacing={2} sx={{ width: '50%', m: 'auto' }} >

                    <Grid item xs={12} md={12} >
                        <form>
                            <TextField
                                sx={{ width: '90%', m: 1 ,backgroundColor:'white', borderRadius:2 }}
                                id="outlined-size-small"
                                defaultValue="Eamil Address"
                                size="small"
                            />
                            <TextField
                                sx={{ width: '90%', m: 1  ,backgroundColor:'white', borderRadius:2 }}
                                id="outlined-size-small"
                                defaultValue="Subject Your Message"
                                size="small"
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 ,backgroundColor:'white', borderRadius:2 }}
                                id="standard-multiline-static"

                                multiline
                                rows={4}
                                defaultValue="Message"
                                size="small"
                            /><br />
                            <Button type="submit" variant="contained">Submit</Button>
                        </form>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Contact;