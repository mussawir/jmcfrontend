import React, { useState, useEffect } from 'react';
import { Box, Typography, Toolbar, CssBaseline, Button } from '@mui/material';
import DrawerComponent from '../components/DrawerComponent';
import HeaderComponent from '../components/HeaderComponent';
import { useNavigate } from 'react-router-dom';

function Discharge() {
  
  const navigate = useNavigate();

  const handleAddNew = () => {
    navigate(''); 
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <DrawerComponent />
      <HeaderComponent />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        {/* Center the Headline */}
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
          Discharge
        </Typography>

        
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddNew} 
          >
            Add New
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Discharge;
