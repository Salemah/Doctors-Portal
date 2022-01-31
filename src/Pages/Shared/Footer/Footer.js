import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import bg from '../../../images/footer-bg.png'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import { Button, Container, Typography } from '@mui/material';
const background = {

    background: `url(${bg})`


}
const Footer = () => {
    return (

        <Box style={background} sx={{ flexGrow: 1, my: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <Typography sx={{ textAlign: 'center' }} variant="body2" style={{ color: '#0FCDE9', fontSize: 24, fontWeight: 400 }} gutterBottom>Conatct us</Typography>
                    <Typography sx={{ textAlign: 'center' }} variant="body2" gutterBottom>Conatct us</Typography>
                    <Typography sx={{ textAlign: 'center' }} variant="body2" gutterBottom>Conatct us</Typography>
                    <Typography sx={{ textAlign: 'center' }} variant="body2" gutterBottom>Conatct us</Typography>
                    <Typography sx={{ textAlign: 'center' }} variant="body2" gutterBottom>Conatct us</Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography sx={{ textAlign: 'center' }} variant="body2" style={{ color: '#0FCDE9', fontSize: 24, fontWeight: 400 }} gutterBottom>Conatct us</Typography>
                    <Typography sx={{ textAlign: 'center' }} variant="body2" gutterBottom>Conatct us</Typography>
                    <Typography sx={{ textAlign: 'center' }} variant="body2" gutterBottom>Conatct us</Typography>
                    <Typography sx={{ textAlign: 'center' }} variant="body2" gutterBottom>Conatct us</Typography>
                    <Typography sx={{ textAlign: 'center' }} variant="body2" gutterBottom>Conatct us</Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography sx={{ textAlign: 'center' }} variant="body2" style={{ color: '#0FCDE9', fontSize: 24, fontWeight: 400 }} gutterBottom>Conatct us</Typography>
                    <Typography sx={{ textAlign: 'center' }} variant="body2" gutterBottom>Conatct us</Typography>
                    <Typography sx={{ textAlign: 'center' }} variant="body2" gutterBottom>Conatct us</Typography>
                    <Typography sx={{ textAlign: 'center' }} variant="body2" gutterBottom>Conatct us</Typography>
                    <Typography sx={{ textAlign: 'center' }} variant="body2" gutterBottom>Conatct us</Typography>
                </Grid>
                <Grid item xs={8} md={3}>
                    <Typography sx={{ textAlign: 'center' }} variant="body2" style={{ color: '#0FCDE9', fontSize: 24, fontWeight: 400 }} gutterBottom>Conatct us</Typography>
                    <Typography sx={{ textAlign: 'center' }} variant="body2" gutterBottom>Conatct us</Typography>
                    <Typography sx={{ textAlign: 'center' }} variant="body2" gutterBottom>Call Now</Typography>
                    <Box sx={{ my: 8 }}>
                        <FacebookOutlinedIcon></FacebookOutlinedIcon>
                        <GoogleIcon></GoogleIcon>
                        <TwitterIcon></TwitterIcon></Box>
                    <Button variant="contained">4353456</Button>
                </Grid>
              
            </Grid>
            <Typography sx={{ textAlign: 'center' }} variant="body2" gutterBottom>all right reserved takvir kader</Typography>
        </Box>

    );
};

export default Footer;