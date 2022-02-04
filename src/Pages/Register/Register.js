import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import login from '../../images/login.png'
import { Button, Container, TextField, Typography } from '@mui/material';
import { NavLink, useHistory } from 'react-router-dom';
import UseAuth from '../../Hook/UseAuth';
import LinearProgress from '@mui/material/LinearProgress';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';




const Register = () => {
    const { user, RegisterUser, isLoading, authError } = UseAuth();
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const handleOnChange = e => {
        const feild = e.target.name;
        const value = e.target.value;
        const newlogindata = {...loginData};
       newlogindata[feild]  = value;
       setLoginData(newlogindata);
       console.log(newlogindata);
    
       
    }
    const handleLoginSubmit = e => {
        
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        RegisterUser(loginData.email, loginData.password,loginData.name,history);
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
                        {!isLoading && 
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="filled-number"
                                label="Email"
                                type="text"
                                name="email"
                                onBlur={handleOnChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="standard"
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="filled-number"
                                label="User name"
                                type="text"
                                name="name"
                                onBlur={handleOnChange}
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
                                onBlur={handleOnChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="standard"
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="filled-number"
                                label="Confirm Password"
                                type="password"
                                name="password2"
                                onBlur={handleOnChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="standard"
                            />
                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                            <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text">Already Registered? Please Login</Button>
                        </NavLink>
                        </form>}
                        {
                           isLoading &&<LinearProgress />
                        }
                            {/* aftr register succefull alert */}
                        {user?.email && <Stack sx={{ width: '100%' }} spacing={1}>
                        <Alert  severity="success">
                          Register Succefull
                        </Alert>
                       </Stack> 
                      
                        

                        }
                        {authError && 
                        <Alert variant="filled" severity="error">
                          Register Succefull
                        </Alert>
                      
                      
                        

                        }
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src={login} alt="" />
                    </Grid>

                </Grid>
            </Box>
        </Container>
    );
};

export default Register;