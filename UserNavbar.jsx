import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const UserNavbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">User Dashboard</Typography>
        <Button color="inherit">Home</Button>
        <Link to="/profile">
        <Button color="inherit">Profile</Button>
        </Link>
        <Button color="inherit" onClick={() => {
          localStorage.clear();
          window.location.href = "/login";
        }}>Logout</Button>
      </Toolbar>
    </AppBar>
  );
};

export default UserNavbar;
