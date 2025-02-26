import React, { useState, useEffect } from 'react';
import { Box, Typography, Toolbar, CssBaseline, TextField, Button } from '@mui/material';
import DrawerComponent from '../components/DrawerComponent';
import HeaderComponent from '../components/HeaderComponent';
import { useNavigate } from 'react-router-dom';

function GenerateImage() {
    const [prompt, setPrompt] = useState('');
    const navigate = useNavigate();

    const handleHandbook = () => {
        navigate('/add-handbook');
    };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <DrawerComponent />
      <HeaderComponent />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        {/* Center the Headline */}
        <Typography variant="h6" gutterBottom sx={{ textAlign: 'center' }}>
          Generate Images or Videos
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <Button variant="contained" onClick={handleHandbook}>Add New</Button>
        </Box>
        {/* Textarea for adding prompt */}
        <TextField
          label="Enter prompt"
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          sx={{ mt: 2 }}
        />

        {/* Submit Button */}
        <Button variant="contained" sx={{ mt: 2 }}>
          Generate
        </Button>
      </Box>
    </Box>
  );
}

export default GenerateImage;
