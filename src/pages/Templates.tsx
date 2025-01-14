import React, { useState, useEffect } from 'react';
import { Box, Typography, Toolbar, CssBaseline, Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper, Button, Link, TextField, InputAdornment } from '@mui/material';
import { AccountBalance, AccountBalanceWallet, MonetizationOn, Search,  } from '@mui/icons-material';
import DrawerComponent from '../components/DrawerComponent';
import HeaderComponent from '../components/HeaderComponent';
import { useNavigate } from 'react-router-dom';

function TemplatesList() {
  const [templates, setTemplates] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState(''); // State for the search query
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await fetch('http://localhost:5000/get-templates');
        const result = await response.json();
        if (response.ok) {
          setTemplates(result);
        } else {
          console.error(result);
        }
      } catch (error) {
        console.error('Error fetching templates:', error);
      }
    };

    fetchTemplates();
  }, []);

  const handleAddTemplateClick = () => {
    navigate('/addtemplates');
  };

  // Filter templates based on the search query
  const filteredTemplates = templates.filter((template) =>
    template.templateName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    template.bank.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
          {/* Anchor Links on the left */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            <Link href="" target="_blank" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
              <AccountBalance sx={{ marginRight: 0.5 }} />
              Bank1
            </Link>
            <Link href="" target="_blank" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
              <AccountBalanceWallet sx={{ marginRight: 0.5 }} />
              Bank2
            </Link>
            <Link href="" target="_blank" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
              <MonetizationOn sx={{ marginRight: 0.5 }} />
              Bank3
            </Link>
          </Box>

          {/* Add New Button on the right */}
          <Button variant="contained" color="primary" onClick={handleAddTemplateClick}>
            Add New
          </Button>
        </Box>

        {/* Search Bar */}
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search template by name, by bank name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ marginBottom: 2 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          />

        {/* Templates Table */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Template Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Bank Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredTemplates.map((template, index) => (
                <TableRow key={index}>
                  <TableCell>{template.templateName}</TableCell>
                  <TableCell>{template.description}</TableCell>
                  <TableCell>{template.bank}</TableCell>
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
