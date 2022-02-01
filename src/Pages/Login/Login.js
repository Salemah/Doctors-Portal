import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import login from '../../images/login.png'
import { Button, Container, TextField, Typography } from '@mui/material';
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const handleOnChange = e => {
        const feild = e.target.name;
        const value = e.target.value;
        const newlogindata = {...loginData};
       newlogindata[feild]  = value;
       setLoginData(newlogindata);
       console.log(loginData);
       
    }
    const handleLoginSubmit = e => {
        window.confirm('egegeg');
        alert("hello");
        e.preventDefault();
    }
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                        <Typography variant="body1" component="div" gutterBottom>
                            Login
                        </Typography>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="filled-number"
                                label="Email"
                                type="text"
                                name="email"
                                onChange={handleOnChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="standard"
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="filled-number"
                                label="Password"
                                type="password"
                                name="password"
                                onChange={handleOnChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="standard"
                            />
                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>

                        </form>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src={login} alt="" />
                    </Grid>

                </Grid>
            </Box>
        </Container>
    );
};

export default Login;