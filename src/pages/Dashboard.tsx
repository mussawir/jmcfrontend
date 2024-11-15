import React, { useEffect, useState } from 'react';
import { Box, Grid, Paper, Card, CardContent, Typography, Toolbar, CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DrawerComponent from '../components/DrawerComponent'; // Import Drawer component
import HeaderComponent from '../components/HeaderComponent';
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
      <DrawerComponent /> {/* Use the Drawer component here */}

      {/* Header */}
      <HeaderComponent /> {/* Add HeaderComponent here */}

      {/* Main Content Area */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card style={{ backgroundColor: 'burlywood' }}>
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
            <Card style={{ backgroundColor: 'yellow' }}>
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
