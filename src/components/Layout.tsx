import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import DrawerComponent from './DrawerComponent';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* Include the Drawer Component */}
      <DrawerComponent />
      
      {/* Main content area */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
}

export default Layout;