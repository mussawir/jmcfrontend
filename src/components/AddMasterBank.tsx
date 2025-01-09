import React, { useState } from 'react';
import {
  Box,
  Typography,
  Toolbar,
  CssBaseline,
  Button,
  TextField,
  Grid,
} from '@mui/material';
import DrawerComponent from '../components/DrawerComponent';
import HeaderComponent from '../components/HeaderComponent';
import { useNavigate } from 'react-router-dom';

function AddMasterBank() {
  const [formData, setFormData] = useState({
    bankName: '',
    accountNumber: '',
    branch: '',
    address: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddNew = () => {
    console.log('Navigating...');
    navigate('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
  
    try {
      const response = await fetch('http://localhost:5000/master-bank', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('Response:', result);
        alert('Bank record added successfully');
        setFormData({
          bankName: '',
          accountNumber: '',
          branch: '',
          address: '',
        }); // Clear the form
      } else {
        const error = await response.json();
        console.error('Error:', error);
        alert(`Error: ${error.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the form');
    }
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
          Add Master Bank
        </Typography>

        {/* <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddNew}
          >
            Add New
          </Button>
        </Box> */}

        {/* Form Section */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            maxWidth: 600,
            margin: '0 auto',
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Bank Name"
                name="bankName"
                value={formData.bankName}
                onChange={handleInputChange}
                fullWidth
                // required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Account Number"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleInputChange}
                fullWidth
                // required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Branch"
                name="branch"
                value={formData.branch}
                onChange={handleInputChange}
                fullWidth
                // required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                fullWidth
                multiline
                rows={3}
                // required
              />
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default AddMasterBank;
