import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Box } from '@mui/system';
import { AppBar, Button, Tooltip } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import UseAuth from '../../Hook/UseAuth';


const Header = () => {
  const{user,Logout} = UseAuth();


    return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Doctor Portal
          </Typography>
          {
            user?.email && <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {user.displayName}
          </Typography>
          }
          <Link style={{ textDecoration: 'none', color: 'white' }}  to="/appointment"><Button sx={{bgcolor: 'error.main'}} color="inherit">Appointment</Button></Link>
         {user?.email ?
            <Button style={{ textDecoration: 'none', color: 'white' }} sx={{bgcolor: 'error.main'}} onClick={Logout}  color="inherit">Logout</Button>:
            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login"><Button sx={{bgcolor: 'error.main'}} color="inherit">Login</Button></NavLink>
         }
         
          
        </Toolbar>
      </AppBar>
    </Box>
    );
};

export default Header;