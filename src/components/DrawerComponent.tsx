import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import logojmc from '../images/jmcvc-dark-logo.png'
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
        },
      }}
      variant="permanent"
      anchor="left"
    >
       <Toolbar style={{ justifyContent:'center', display: 'flex',}}>
          <div >
          <img src={logojmc} width={120} style={{marginTop: 20,}} alt="" />
          </div>
        </Toolbar>
      <List>
        <ListItem component={Link} to="/dashboard">
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem component={Link} to="/users">
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
  );
};

export default DrawerComponent;
