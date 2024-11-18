import React, { useEffect, useState } from 'react';
import { Box, Grid, Card, CardContent, Typography, Toolbar, CssBaseline, Select, MenuItem, InputLabel, FormControl, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DrawerComponent from '../components/DrawerComponent';
import HeaderComponent from '../components/HeaderComponent';
import { SelectChangeEvent } from '@mui/material';

// Define the Case interface
interface Case {
  title: string;
  status: string;
  dateFiled?: string;
  lastUpdate?: string;
}

function Projects() {
  const [cases, setCases] = useState<Case[]>([]);
  const [selectedValue, setSelectedValue] = useState<string>('Select Schedule'); // Default value
  const [showForm, setShowForm] = useState<boolean>(false); // To control form visibility
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('ACCESS_TOKEN');
    if (!token) {
      navigate('/login');
    } else {
      fetchCaseData(token);
    }
  }, [navigate]);

  const fetchCaseData = async (token: string) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/cases', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data: Case[] = await response.json();
        setCases(data);
      } else {
        console.error('Error fetching case data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching case data:', error);
    }
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    setSelectedValue(value);

    // When Schedule H is selected, show the form
    if (value === 'Schedule H') {
      setShowForm(true);
    } else {
      setShowForm(false);
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <DrawerComponent />
      <HeaderComponent />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        
        {/* Show Projects Management headline only when form is not visible */}
        {!showForm && (
          <Typography variant="h4" gutterBottom>
            Projects Management
          </Typography>
        )}

        {/* Dropdown menu */}
        {!showForm && (
          <FormControl fullWidth>
            <InputLabel id="dropdown-label">Select Schedule</InputLabel>
            <Select
              labelId="dropdown-label"
              id="dropdown-select"
              value={selectedValue}
              label="Select Schedule"
              onChange={handleSelectChange}
            >
              <MenuItem value="Select Schedule">Select Schedule</MenuItem>
              <MenuItem value="Schedule A">Schedule A</MenuItem>
              <MenuItem value="Schedule B">Schedule B</MenuItem>
              <MenuItem value="Schedule C">Schedule C</MenuItem>
              <MenuItem value="Schedule D">Schedule D</MenuItem>
              <MenuItem value="Schedule E">Schedule E</MenuItem>
              <MenuItem value="Schedule F">Schedule F</MenuItem>
              <MenuItem value="Schedule G">Schedule G</MenuItem>
              <MenuItem value="Schedule H">Schedule H</MenuItem>
            </Select>
          </FormControl>
        )}

        {/* Show form when Schedule H is selected */}
        {showForm && (
          <center>
          <Box sx={{ marginTop: 2, width: 400, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ width: '100%', textAlign: 'center' }}>
              <Typography variant="h5" gutterBottom>
                Enter Project Details
              </Typography>

              <form>
                <TextField
                  label="Project Name"
                  fullWidth
                  variant="outlined"
                  sx={{ marginBottom: 2 }}
                />
                <TextField
                  label="Seller Name"
                  fullWidth
                  variant="outlined"
                  sx={{ marginBottom: 2 }}
                />
                <TextField
                  label="Purchaser Name"
                  fullWidth
                  variant="outlined"
                  sx={{ marginBottom: 2 }}
                />
                <TextField
                  label="Property Name"
                  fullWidth
                  variant="outlined"
                  sx={{ marginBottom: 2 }}
                />
                <Button variant="outlined" component="label" fullWidth sx={{ marginBottom: 2 }}>
                  Upload File
                  <input type="file" hidden />
                </Button>
                <Button variant="contained" color="primary" fullWidth>
                  Create Project
                </Button>
              </form>
            </Box>
          </Box>
          </center>
        )}

        {/* Display selected value */}
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          {/* Selected: {selectedValue} */}
        </Typography>
      </Box>
    </Box>
  );
}

export default Projects;