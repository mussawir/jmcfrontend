import React, { useEffect, useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Toolbar, CssBaseline, Grid, Paper, Card, CardContent } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';
import { CircularProgress, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import axios from 'axios';

const drawerWidth = 240;

// Define the User interface
interface User {
  id: string;
  name: string;
  email: string;
  role?: string;
  lastLogin?: string;
}

function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>('/users');  // Ensure the endpoint is correct
        if (response.status === 200) {
          setUsers(response.data);  // The response is expected to be an array of users
        } else {
          setError(`Error fetching users: ${response.statusText}`);
        }
      } catch (err: any) {  // Explicitly cast the error to `any`
        setError(`Error fetching users: ${err.message}`);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);  // Empty dependency array to run once when component mounts

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
            Users
          </Typography>
        </Toolbar>
        <List>
          <ListItem sx={{ cursor: 'pointer' }} component={Link} to="/dashboard">
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem sx={{ cursor: 'pointer' }} component={Link} to="/users">
            <ListItemIcon><PersonIcon /></ListItemIcon>
            <ListItemText primary="Users" />
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
          <Grid item xs={12} sm={6} md={12}>
            {/* Display Loading or Error message */}
            {loading && <CircularProgress />}
            {error && <Typography color="error">{error}</Typography>}

            {/* Users Table */}
            {!loading && !error && users.length > 0 && (
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Role</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.role}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Users;
