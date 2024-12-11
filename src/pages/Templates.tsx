import React, { useState, useEffect } from 'react';
import { Box, Typography, Toolbar, CssBaseline, Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper, Button } from '@mui/material';
import DrawerComponent from '../components/DrawerComponent';
import HeaderComponent from '../components/HeaderComponent';
import { useNavigate } from 'react-router-dom';

function TemplatesList() {
  const [templates, setTemplates] = useState<any[]>([]); // Array to hold template data
  const navigate = useNavigate(); // Hook to navigate between pages

  useEffect(() => {
    // Fetch the templates list on component mount
    const fetchTemplates = async () => {
      try {
        const response = await fetch('http://localhost:5000/get-templates');
        const result = await response.json();
        if (response.ok) {
          setTemplates(result); // Assume result is an array of templates
        } else {
          console.error(result);
        }
      } catch (error) {
        console.error('Error fetching templates:', error);
      }
    };

    fetchTemplates();
  }, []);

  // Handle navigating to the add template page
  const handleAddTemplateClick = () => {
    navigate('/addtemplates'); // Navigate to the AddTemplates page
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
          Templates List
        </Typography>

        {/* Add Template Button aligned to the right */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddTemplateClick} // Trigger navigate
          >
            Add New
          </Button>
        </Box>

        {/* Templates Table */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Template Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {templates.map((template, index) => (
                <TableRow key={index}>
                  <TableCell>{template.templateName}</TableCell>
                  <TableCell>{template.description}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary">
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default TemplatesList;
