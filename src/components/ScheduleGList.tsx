import React, { useState, useEffect } from 'react';
import { Box, Typography, Toolbar, CssBaseline, Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper, Button, Link, TextField, InputAdornment } from '@mui/material';
import { Search,  } from '@mui/icons-material';
import DrawerComponent from '../components/DrawerComponent';
import HeaderComponent from '../components/HeaderComponent';
import { useNavigate } from 'react-router-dom';

function ScheduleGList() {
  const [banks, setBanks] = useState<any[]>([]); // State for storing the banks list
  const [searchQuery, setSearchQuery] = useState(''); // State for the search query
  const navigate = useNavigate();
  
  const handleAddNew = () => {
    navigate(''); 
  };

  // Fetch the master bank data
  useEffect(() => {
    const fetchBanks = async () => {
      const response = await fetch('http://localhost:5000/schedule-g-list'); // Your backend API endpoint
      if (response.ok) {
        const data = await response.json();
        setBanks(data); // Set the banks data
      } else {
        console.error('Error fetching banks');
      }
    };

    fetchBanks();
  }, []);

  const filteredBanks = banks.filter((bank) =>
    bank.bankName.toLowerCase().includes(searchQuery.toLowerCase())
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
         Schedule G List
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 2 }}>
            <Button
            variant="contained"
            color="primary"
            onClick={handleAddNew} // Trigger navigate
            >
            Add New
            </Button>
        </Box>
        <TextField
            fullWidth
            variant="outlined"
            placeholder="Search"
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
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredBanks.map((bank, index) => (
                <TableRow key={index}>
                  <TableCell>{bank.bankName}</TableCell>
                  <TableCell>{bank.address}</TableCell> {/* Assuming 'address' is part of the bank object */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default ScheduleGList;
