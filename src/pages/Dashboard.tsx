import React, { useEffect, useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Toolbar, CssBaseline, Grid, Paper, Card, CardContent, TextField, Button } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';

const drawerWidth = 240;

// Define the User interface
interface User {
  name: string;
  email: string;
  role?: string;
  lastLogin?: string;
}

function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('ACCESS_TOKEN');
    if (!token) {
      navigate('/login');
    } else {
      fetchUserData(token);
    }
  }, [navigate]);

  const fetchUserData = async (token: string) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data: User = await response.json();
        setUser(data);
      } else {
        console.error('Error fetching user data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
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
          <ListItem sx={{ cursor: 'pointer' }} component={Link} to="/dashboard">
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem sx={{ cursor: 'pointer' }} component={Link} to="/users">
          <ListItemIcon><PersonIcon /></ListItemIcon>
          <ListItemText primary="Users List" />
          </ListItem>
          <ListItem sx={{ cursor: 'pointer' }} component={Link} to="/register">
            <ListItemIcon><PersonIcon /></ListItemIcon>
            <ListItemText primary="User Registration" />
          </ListItem>
          <ListItem sx={{ cursor: 'pointer' }} component={Link} to="/settings">
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem sx={{ cursor: 'pointer' }} component={Link} to="/about">
            <ListItemIcon><InfoIcon /></ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem sx={{ cursor: 'pointer' }} component={Link} to="/logout">
            <ListItemIcon><LogoutIcon /></ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content Area */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card style={{backgroundColor: 'burlywood'}}>
              <CardContent>
                <Typography variant="h6">User Information</Typography>
                {user ? (
                  <div>
                    <Typography variant="body1">Name: {user.name}</Typography>
                    <Typography variant="body1">Email: {user.email}</Typography>
                  </div>
                ) : (
                  <Typography variant="body2">Loading user information...</Typography>
                )}
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card style={{backgroundColor: 'yellow'}}>
              <CardContent>
                <Typography variant="h6">Account Info</Typography>
                {user ? (
                  <div>
                    <Typography variant="body1">Role: {user.role}</Typography>
                    <Typography variant="body1">Last Login: {user.lastLogin}</Typography>
                  </div>
                ) : (
                  <Typography variant="body2">Loading account information...</Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Dashboard;
