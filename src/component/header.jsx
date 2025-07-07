import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import logo from '../assets/Logo.jpg';
import { Link } from 'react-router-dom';


function Header() {
  return (
   // ... existing code ...
   <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <Toolbar>
        {/* Logo or Site Name */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1,  }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>

        <img
            src={logo} // Replace with your logo path
            alt="Logo"
            style={{ height: 40, marginRight: 10 }}
          />
        <Typography color='black' variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Riddhi Siddhi Ganesh Foundation
        </Typography>
        </Link>
        </Box>
        {/* Navigation Links */}
        <Box>
        <Button style={{color: 'black'}} component={Link} to="/about">About</Button>
        <Button style={{color: 'black'}} component={Link} to="/gallery">Gallery</Button>
        <Button style={{color: 'black'}} component={Link} to="/contact">Contact Us</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
