import React from 'react';
import { Box, Toolbar, CssBaseline } from '@mui/material';
import DrawerComponent from '../components/DrawerComponent';
import HeaderComponent from '../components/HeaderComponent';

function Team() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <DrawerComponent />
      <HeaderComponent />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {/* Main content can be added here later */}
      </Box>
    </Box>
  );
}

export default Team;
