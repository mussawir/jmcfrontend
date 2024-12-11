import React, { useState } from 'react';
import { Box, Typography, TextField, Button, DialogActions } from '@mui/material';
import DrawerComponent from '../components/DrawerComponent';
import HeaderComponent from '../components/HeaderComponent';

function AddTemplates() {
  // State hooks for each form field
  const [templateName, setTemplateName] = useState('');
  const [description, setDescription] = useState('');
  const [uploadFile, setUploadFile] = useState('');
  const [value, setValue] = useState(0);
  const handleAddTemplatesSubmit = async () => {
    const developerData = {
      templateName,
      description,
      uploadFile,
    };

    try {
      const response = await fetch('http://localhost:5000/add-templates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(developerData),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Template added successfully');
      } else {
        alert('Failed to add developer');
        console.error(result);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3, maxWidth: 400, marginLeft: 70, marginTop: 10, border: 'solid 1px' }}>
        <DrawerComponent />
        <HeaderComponent />
      <Typography variant="h4" gutterBottom>
        Add New Templates
      </Typography>
      {/* <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 2 }}> */}
      <TextField
        label="Template Name"
        fullWidth
        variant="outlined"
        value={templateName}
        onChange={(e) => setTemplateName(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Description"
        fullWidth
        variant="outlined"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      {/* </Box> */}
      {/* <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 2 }}> */}
      <TextField
        // label="Upload File"
        type="file"
        fullWidth
        variant="outlined"
        value={uploadFile}
        onChange={(e) => setUploadFile(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      {/* </Box> */}

      <DialogActions>
        <Button variant="contained" color="primary" onClick={handleAddTemplatesSubmit}>
          Submit
        </Button>
      </DialogActions>
    </Box>
  );
}

export default AddTemplates;
