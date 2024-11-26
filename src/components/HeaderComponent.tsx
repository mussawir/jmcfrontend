// src/components/HeaderComponent.tsx

import React from 'react';
import { AppBar, Toolbar, Box, IconButton, Avatar, Badge, TextField, Typography, Menu, MenuItem, Tooltip, Switch } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import { useDarkMode } from '../context/DarkModeContext'; // Import the context

const HeaderComponent: React.FC = () => {
  const { darkMode, toggleDarkMode } = useDarkMode(); // Access dark mode context
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [language, setLanguage] = React.useState('en');

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    sessionStorage.clear();
    window.location.href = '/';
    alert('You have been logged out.');
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
    alert(`Language changed to ${language === 'en' ? 'Spanish' : 'English'}`);
  };

  return (
    <AppBar position="fixed" style={{ backgroundColor: darkMode ? '#333' : 'white' }}>
      <Toolbar>
        <IconButton edge="start" color="primary" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>

        <Box sx={{ ml: 'auto', width: '850px' }}>
          <TextField
            placeholder="Search..."
            variant="outlined"
            size="small"
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '26px',
              },
            }}
            InputProps={{
              startAdornment: <SearchIcon style={{ marginRight: '8px', color: 'gray' }} />,
            }}
          />
        </Box>

        {/* <Tooltip title="Toggle Dark Mode">
          <Switch checked={darkMode} onChange={toggleDarkMode} color="primary" />
        </Tooltip> */}

        <Tooltip title="Change Language">
          <IconButton color="primary" sx={{ mr: 2 }} onClick={handleLanguageChange}>
            <LanguageIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Settings">
          <IconButton color="primary" sx={{ mr: 2 }} onClick={handleMenuOpen}>
            <SettingsIcon />
          </IconButton>
        </Tooltip>

        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>Account</MenuItem>
          <MenuItem onClick={handleMenuClose}>Help</MenuItem>
        </Menu>

        <IconButton color="success" sx={{ mr: 2 }}>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        <IconButton color="inherit" sx={{ mr: 2 }}>
          <Avatar alt="Profile" src="/path/to/profile-image.jpg" />
        </IconButton>

        <IconButton color="primary" onClick={handleLogout}>
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;