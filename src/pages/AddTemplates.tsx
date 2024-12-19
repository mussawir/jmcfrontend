import React, { useState } from 'react';
import { Box, Typography, TextField, Button, DialogActions } from '@mui/material';
import DrawerComponent from '../components/DrawerComponent';
import HeaderComponent from '../components/HeaderComponent';

function AddTemplates() {
  // State hooks for each form field
  const [templateName, setTemplateName] = useState('');
  const [description, setDescription] = useState('');
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const handleAddTemplatesSubmit = async () => {
    if (!uploadFile) {
        alert("Please select a file before submitting.");
        return;
    }

    const formData = new FormData();
    formData.append('templateName', templateName);
    formData.append('description', description);
    formData.append('uploadFile', uploadFile);

    try {
        const response = await fetch('http://localhost:5000/add-templates', {
            method: 'POST',
            body: formData,
        });

        const result = await response.json();

        if (response.ok) {
            alert('Template added successfully');
        } else {
            alert('Failed to add template');
            console.error(result);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred');
    }
};


  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3, maxWidth: 400, marginLeft: 70, marginTop: 10, border: 'solid 1px grey' }}>
        <DrawerComponent />
        <HeaderComponent />
      <Typography variant="h4" gutterBottom>
        Add New Templates
      </Typography>
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
      <input
          type="file"
          onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                  setUploadFile(e.target.files[0]);
              }
          }}
          style={{ marginBottom: '16px' }}
      />
      <DialogActions>
        <Button variant="contained" color="primary" onClick={handleAddTemplatesSubmit}>
          Submit
        </Button>
      </DialogActions>
    </Box>
  );
}

export default AddTemplates;
