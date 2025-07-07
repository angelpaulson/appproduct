import React from 'react';
import { Typography, Paper, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Box sx={{ padding: 3 }}>
      <Paper elevation={3} sx={{ padding: 3, maxWidth: 600, margin: 'auto' }}>
        <Typography variant="h4" gutterBottom>Profile Information</Typography>
        {user ? (
          <>
            <Typography variant="h6" gutterBottom>
              <strong>Name:</strong> {user.name || 'Not available'}
            </Typography>
            <Typography variant="h6" gutterBottom>
              <strong>Email:</strong> {user.email || 'Not available'}
            </Typography>
            <Typography variant="h6" gutterBottom>
              <strong>Account Type:</strong> {user.userType === 'admin' ? 'Administrator' : 'Regular User'}
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Button 
                variant="contained" 
                onClick={() => navigate('/user')}
                sx={{ mr: 2 }}
              >
                Back to Dashboard
              </Button>
            </Box>
          </>
        ) : (
          <Typography variant="h6">
            No user data found. Please login again.
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default Profile;