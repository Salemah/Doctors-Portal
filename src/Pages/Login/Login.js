import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import login from '../../images/login.png'
import { Alert, Button, CircularProgress, Container, TextField, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import UseAuth from '../../Hook/UseAuth';
import { useHistory, useLocation } from 'react-router-dom';
const Login = () => {
    const { user, LoginUser, isLoading, signInWithGoogle, authError } = UseAuth();
    const [loginData, setLoginData] = useState({});
    const location = useLocation();
    const history = useHistory();




    const handleOnChange = e => {
        const feild = e.target.name;
        const value = e.target.value;
        const newlogindata = { ...loginData };
        newlogindata[feild] = value;
        setLoginData(newlogindata);


    };
    const handleLoginSubmit = e => {
        LoginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    };
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    {user?.email && <Alert severity="success">Login successfully!</Alert>}
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
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/register">
                                <Button variant="text">New User? Please Register</Button>
                            </NavLink>
                            
                           
                            {authError && <Alert severity="error">{authError}</Alert>}
                            {isLoading && <CircularProgress />}
                        </form>
                        <p>------------------------</p>
                        <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
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