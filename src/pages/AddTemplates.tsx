import React, { useState } from 'react';
import { Box, Typography, TextField, Button, DialogActions,Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import DrawerComponent from '../components/DrawerComponent';
import HeaderComponent from '../components/HeaderComponent';

function AddTemplates() {
  // State hooks for each form field
  const [bank, setBank] = useState('');
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
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3, maxWidth: 400, marginLeft: 70, marginTop: 13, border: 'solid 1px grey' }}>
        <DrawerComponent />
        <HeaderComponent />
      <Typography variant="h6" gutterBottom>
        Add New Templates
      </Typography>
      <FormControl fullWidth variant="outlined" sx={{ marginBottom: 2, }}>
        <InputLabel id="select-bank-label">Select Bank</InputLabel>
        <Select
          labelId="select-bank-label"
          value={bank}
          onChange={(e) => setBank(e.target.value)}
          label="Select Bank"
        >
          <MenuItem value="default">Select Bank</MenuItem>
          <MenuItem value="bank1">Bank 1</MenuItem>
          <MenuItem value="bank2">Bank 2</MenuItem>
          <MenuItem value="bank3">Bank 3</MenuItem>
          {/* Add more states as needed */}
        </Select>
      </FormControl>
      <TextField
        label="Template Name"
        fullWidth
        variant="outlined"
        value={templateName}
        onChange={(e) => setTemplateName(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      {/* <Box sx={{ marginTop: 1, }}> */}
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      {/* </Box> */}
      <input
          type="file"
          onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                  setUploadFile(e.target.files[0]);
              }
          }}
          style={{ marginBottom: '16px', marginTop: '16px', width: '385px', }}
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
