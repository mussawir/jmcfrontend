import React, { useState, useEffect } from 'react';
import { Box, Typography, Toolbar, CssBaseline, Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper, Button, Link, TextField, InputAdornment } from '@mui/material';
import { AccountBalance, AccountBalanceWallet, MonetizationOn, Search,  } from '@mui/icons-material';
import DrawerComponent from '../components/DrawerComponent';
import HeaderComponent from '../components/HeaderComponent';
import { useNavigate } from 'react-router-dom';

function Quotation() {
  const [bank, setBank] = useState('');
  const [banks, setBanks] = useState<any[]>([]); // State for storing the banks list
  const [searchQuery, setSearchQuery] = useState(''); // State for the search query
  const navigate = useNavigate();
  
  const addNew = () => {
    navigate('/add-bill');
  };

  // Fetch the master bank data
  useEffect(() => {
      const fetchBanks = async () => {
        try {
          const apiUrl = process.env.REACT_APP_API_URL;
          const response = await fetch(`${apiUrl}/bank-branch`);
          
          // Check if the response is OK (status 200)
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
      
          const data = await response.json();  // Parse JSON
      
          // Check if data is as expected
          if (data.banks) {
            setBanks(data.banks);
          } else {
            console.error('Data structure is not correct:', data);
          }
        } catch (error) {
          console.error('Error fetching banks:', error);
        }
      };
  
      fetchBanks();
    }, []);

    // Filter banks based on the search query
  const filteredBanks = banks.filter((bank) =>
    bank.bankName?.toLowerCase().includes(searchQuery.toLowerCase())
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
            Quotations
        </Typography>
        {/* Add Template Button aligned to the right */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
                  {/* Anchor Links on the left */}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                    <Link href="" target="_blank" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                      {/* <AccountBalance sx={{ marginRight: 0.5 }} /> */}
                      Quotation 1
                    </Link>
                    <Link href="" target="_blank" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                      {/* <AccountBalanceWallet sx={{ marginRight: 0.5 }} /> */}
                      Quotation 2
                    </Link>
                    <Link href="" target="_blank" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                      {/* <MonetizationOn sx={{ marginRight: 0.5 }} /> */}
                      Quotation 3
                    </Link>
                  </Box>
        
                  {/* Add New Button on the right */}
                  <Button variant="contained" color="primary" onClick={addNew}>
                    Add New
                  </Button>
                </Box>
        
                {/* Search Bar */}
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Search..."
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
                <TableCell>DN NO:</TableCell>
                <TableCell>File NO</TableCell>
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

export default Quotation;
