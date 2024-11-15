import React from 'react';
import { AppBar, Toolbar, Box, IconButton, Avatar, Badge, TextField } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';

const HeaderComponent = () => {
  const handleLogout = () => {
    // Handle logout functionality here (e.g., clearing the localStorage or redirecting)
    alert('Logging out...');
  };

  return (
    <AppBar position="fixed" style={{ backgroundColor: 'transparent' }}>
      <Toolbar>
        {/* Menu Icon */}
        <IconButton edge="start" color="primary" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>

       

        {/* Search Bar */}
        <Box sx={{ ml: 'auto', width: '350px' }}>
          <TextField
            placeholder="Search..."
            variant="outlined"
            size="small"
            fullWidth
            InputProps={{
              startAdornment: (
                <SearchIcon style={{ marginRight: '8px', color: 'gray' }} />
              ),
            }}
          />
        </Box>
         {/* Notifications Button */}
         <IconButton color="success" sx={{ mr: 2 }}>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        {/* Profile Avatar */}
        <IconButton color="inherit" sx={{ mr: 2 }}>
          <Avatar alt="Profile" src="/path/to/profile-image.jpg" />
        </IconButton>

        {/* Logout Button */}
        <IconButton color="primary" onClick={handleLogout} >
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;
