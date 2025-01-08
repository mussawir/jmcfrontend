import React, { useState, useEffect } from 'react';
import { Box, Typography, Toolbar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Example data, replace with actual data or fetch from API
const bankBranches = [
  { id: 1, name: 'Bank A', location: 'Location A', contact: '123-456-7890' },
  { id: 2, name: 'Bank B', location: 'Location B', contact: '987-654-3210' },
  { id: 3, name: 'Bank C', location: 'Location C', contact: '555-555-5555' },
];

function BankBranchListing() {
  
  const navigate = useNavigate();

  const handleAddNew = () => {
    navigate('/add-new-bank-branch'); // Redirect to add new bank branch form
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* <CssBaseline />
      <DrawerComponent />
      <HeaderComponent /> */}

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        {/* Center the Headline */}
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
          Bank Branch Listing
        </Typography>

        {/* Add New Button */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddNew}
          >
            Add New
          </Button>
        </Box>

        {/* Table for Bank Branch Listing */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="bank branch table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Branch Name</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Contact</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bankBranches.map((branch) => (
                <TableRow key={branch.id}>
                  <TableCell>{branch.id}</TableCell>
                  <TableCell>{branch.name}</TableCell>
                  <TableCell>{branch.location}</TableCell>
                  <TableCell>{branch.contact}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default BankBranchListing;
