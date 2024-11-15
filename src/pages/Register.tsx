import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, CssBaseline } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            My Dashboard
          </Typography>
        </Toolbar>
        <List>
          <ListItem component={Link} to="/dashboard">
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem sx={{ cursor: 'pointer' }} component={Link} to="/users">
          <ListItemIcon><PersonIcon /></ListItemIcon>
          <ListItemText primary="Users List" />
          </ListItem>
          <ListItem component={Link} to="/register">
            <ListItemIcon><PersonIcon /></ListItemIcon>
            <ListItemText primary="User Registration" />
          </ListItem>
          <ListItem component={Link} to="/settings">
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem component={Link} to="/about">
            <ListItemIcon><InfoIcon /></ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem component={Link} to="/logout">
            <ListItemIcon><LogoutIcon /></ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content Area */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
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
