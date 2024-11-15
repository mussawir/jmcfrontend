import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, Box } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import logojmc from '../images/jmcvc-dark-logo.png';

const drawerWidth = 240;

const DrawerComponent = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column', // Ensures proper layout for footer
        },
      }}
      variant="permanent"
      anchor="left"
    >
      {/* Logo */}
      <Toolbar style={{ justifyContent: 'center', display: 'flex' }}>
        <div>
          <img src={logojmc} width={120} style={{ marginTop: 20 }} alt="" />
        </div>
      </Toolbar>

      {/* Menu List */}
      <List sx={{ flexGrow: 1 }}> {/* FlexGrow allows the main list to take available space */}
        <ListItem component={Link} to="/dashboard">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem component={Link} to="/users">
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Users List" />
        </ListItem>
        <ListItem component={Link} to="/register">
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="User Registration" />
        </ListItem>
        <ListItem component={Link} to="/userdata">
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="Users Data" />
        </ListItem>
        <ListItem component={Link} to="/settings">
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem component={Link} to="/about">
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem component={Link} to="/logout">
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>

      {/* Footer Tab Bar */}
      <Box
        sx={{
          position: 'relative',
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e0e0e0',
          display: 'flex',
          justifyContent: 'space-evenly',
          padding: '10px 0',
          backgroundColor: '#f7f7f7',
        }}
      >
        <ListItem component={Link} to="/home" sx={{ justifyContent: 'center' }}>
          <ListItemIcon sx={{ minWidth: 'auto' }}>
            <HomeIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem component={Link} to="/dashboard" sx={{ justifyContent: 'center' }}>
          <ListItemIcon sx={{ minWidth: 'auto' }}>
            <DashboardIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem component={Link} to="/settings" sx={{ justifyContent: 'center' }}>
          <ListItemIcon sx={{ minWidth: 'auto' }}>
            <SettingsIcon />
          </ListItemIcon>
        </ListItem>
      </Box>
    </Drawer>
  );
};

export default DrawerComponent;
