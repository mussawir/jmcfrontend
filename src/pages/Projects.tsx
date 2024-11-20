import React, { useState, useEffect } from 'react';
import { Box, Typography, Toolbar, CssBaseline, Select, MenuItem, InputLabel, FormControl, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DrawerComponent from '../components/DrawerComponent';
import HeaderComponent from '../components/HeaderComponent';
import { SelectChangeEvent } from '@mui/material';
import axios from 'axios';

function Projects() {
  // Form states
  const [projectName, setProjectName] = useState('');
  const [builderName, setBuilderName] = useState('');
  const [purchaserName, setPurchaserName] = useState('');
  const [propertyName, setPropertyName] = useState('');
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [selectedValue, setSelectedValue] = useState<string>('Select Schedule');
  const [showForm, setShowForm] = useState<boolean>(false);
  const [projects, setProjects] = useState<any[]>([]);
  const [crewResult, setCrewResult] = useState<any>(null);
  const navigate = useNavigate();

  // Fetch projects from backend when the component mounts
  useEffect(() => {
    const fetchProjects = async () => {
      const token = localStorage.getItem('ACCESS_TOKEN');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const response = await fetch('http://127.0.0.1:5000/projects', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setProjects(data);
        } else {
          alert('Failed to fetch projects');
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, [navigate]);

  // Handle file upload change
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setPdfFile(event.target.files[0]);
    }
  };

  // Handle schedule selection
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

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  
    if (!projectName || !builderName || !purchaserName || !propertyName || !selectedValue) {
      alert('Please fill in all the fields');
      return;
    }
  
    if (!pdfFile) {
      alert('Please select a file to upload');
      return;
    }
  
    const formData = new FormData();
    formData.append('name', projectName);
    formData.append('builderName', builderName);
    formData.append('purchaserName', purchaserName);
    formData.append('propertyName', propertyName);
    formData.append('pdf', pdfFile);
  
    // Log the FormData to check the contents
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
  
    try {
      const token = localStorage.getItem('ACCESS_TOKEN');
      if (!token) {
        navigate('/login');
        return;
      }
  
      const response = await axios.post('http://127.0.0.1:5000/upload', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          // Don't manually set Content-Type when using FormData
        },
      });
  
      alert('Project Created Successfully!');
      setProjects((prevProjects) => [...prevProjects, response.data]);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error submitting form:', error.response?.data || error.message);
        alert(`Error: ${error.response?.data?.message || 'Form submission failed.'}`);
      } else {
        console.error('Unexpected error:', error);
        alert('An unexpected error occurred.');
      }
    }
  };
  

  const fetchCrewResult = async () => {
    try {
      const response = await axios.post('http://localhost:5000/upload', {
        // Add any required data or files to the request body
      });
      const crewResult = response.data.result;
      console.log(crewResult);
      setCrewResult(crewResult);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCrewResult();
  }, []);

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

                <form onSubmit={handleSubmit}>
                  <TextField
                    label="Project Name"
                    fullWidth
                    variant="outlined"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                  <TextField
                    label="Builder Name"
                    fullWidth
                    variant="outlined"
                    value={builderName}
                    onChange={(e) => setBuilderName(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                  <TextField
                    label="Purchaser Name"
                    fullWidth
                    variant="outlined"
                    value={purchaserName}
                    onChange={(e) => setPurchaserName(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                  <TextField
                    label="Property Name"
                    fullWidth
                    variant="outlined"
                    value={propertyName}
                    onChange={(e) => setPropertyName(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                  <Button variant="outlined" component="label" fullWidth sx={{ marginBottom: 2 }}>
                    Select File
                    <input type="file" hidden accept="application/pdf" onChange={handleFileChange} />
                  </Button>
                  <Button variant="contained" color="primary" fullWidth type="submit">
                    Create Project
                  </Button>
                </form>
              </Box>
            </Box>
          </center>
        )}

        {/* Display crew result below dropdown menu */}
        {!showForm && crewResult && (
          <Box sx={{ marginTop: 2 }}>
            <Typography variant="h6" gutterBottom>
              Crew Result:
            </Typography>
            <pre>{JSON.stringify(crewResult, null, 2)}</pre>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Projects;
