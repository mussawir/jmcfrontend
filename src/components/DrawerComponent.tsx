import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Box } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work'; // For Projects
import DescriptionIcon from '@mui/icons-material/Description'; // For Documents
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'; // For Checklist
import PeopleIcon from '@mui/icons-material/People'; // For Team
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import logojmc from '../images/jmcvc-dark-logo.png';
import InfoIcon from '@mui/icons-material/Info';

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
          <img src={logojmc} width={120} style={{ marginTop: 20 }} alt="Logo" />
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

        <ListItem component={Link} to="/projects">
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItem>
        <ListItem component={Link} to="/tabspage">
          <ListItemIcon>
            <FormatListBulletedIcon />
          </ListItemIcon>
          <ListItemText primary="TabsPage" />
        </ListItem>

      

        <ListItem component={Link} to="/checklist">
          <ListItemIcon>
            <FormatListBulletedIcon />
          </ListItemIcon>
          <ListItemText primary="Checklist" />
        </ListItem>

        <ListItem component={Link} to="/team">
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Team" />
        </ListItem>

        <ListItem component={Link} to="/documents">
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary="Documents" />
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
