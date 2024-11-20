import React, { useState } from 'react';
import { Box, TextField, Button, Typography, CssBaseline, Toolbar } from '@mui/material';
import DrawerComponent from '../components/DrawerComponent'; // Import the Drawer component
import HeaderComponent from '../components/HeaderComponent'; // Import Header component

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        alert('User registered successfully!');
      } else {
        alert('Error registering user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      {/* Sidebar Drawer */}
      <DrawerComponent /> {/* Use the Drawer component here */}

      {/* Main Content Area */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <HeaderComponent /> {/* Add HeaderComponent here */}
        <Toolbar />
        
        {/* Registration Form */}
        <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            User Registration
          </Typography>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" color="primary" fullWidth onClick={handleRegister} sx={{ mt: 2 }}>
            Register
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Register;
