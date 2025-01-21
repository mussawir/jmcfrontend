import React, { useState, useEffect } from 'react';
import { Box, Typography, Toolbar, CssBaseline, Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper, Button } from '@mui/material';
import DrawerComponent from '../components/DrawerComponent';
import HeaderComponent from '../components/HeaderComponent';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

function Developer() {
  const [developers, setDevelopers] = useState<any[]>([]); // Array to hold developer data
  const navigate = useNavigate(); // Hook to navigate between pages

  useEffect(() => {
    // Fetch the developers list on component mount
    const fetchDevelopers = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;
        const response = await fetch(`${apiUrl}/get-developers`);
        const result = await response.json();
        if (response.ok) {
          setDevelopers(result); // Assume result is an array of developers
        } else {
          console.error(result);
        }
      } catch (error) {
        console.error('Error fetching developers:', error);
      }
    };

    fetchDevelopers();
  }, []);

  // Handle navigating to the add developer page
  const handleAddDeveloperClick = () => {
    navigate('/adddeveloper'); // Navigate to the AddDeveloper page
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
          Developers List
        </Typography>
        
        {/* Add Developer Button aligned to the right */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddDeveloperClick} // Trigger navigate
          >
            Add New
          </Button>
        </Box>

        {/* Developer Table */}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Developer Name</TableCell>
                <TableCell>Company reg num</TableCell>
                <TableCell>Reg office address</TableCell>
                <TableCell>Place of business add</TableCell>
                <TableCell>File ref num</TableCell>
                <TableCell>Licence num</TableCell>
                <TableCell>Contact num</TableCell>
                <TableCell>Email</TableCell>
                {/* <TableCell>Incharge name</TableCell> */}
                {/* <TableCell>Incharge contact</TableCell>
                <TableCell>Incharge email</TableCell>
                <TableCell>Authorised 1st sign</TableCell>
                <TableCell>Authorised 1st identity num</TableCell>
                <TableCell>Authorised 1st sign design</TableCell>
                <TableCell>Authorised 2nd sign name</TableCell>
                <TableCell>Authorised 2nd identity card num</TableCell>
                <TableCell>Authorised 2nd sign design</TableCell> */}
                {/* Add other table headers as needed */}
              </TableRow>
            </TableHead>
            <TableBody>
              {developers.map((developer, index) => (
                <TableRow key={index}>
                  <TableCell>{developer.developerName}</TableCell>
                  <TableCell>{developer.companyRegNum}</TableCell>
                  <TableCell>{developer.registeredOfficeAdd}</TableCell>
                  <TableCell>{developer.developerPlaceOfBusinessAddress}</TableCell>
                  <TableCell>{developer.developerFileReferenceNumber}</TableCell>
                  <TableCell>{developer.developerLicenceNumber}</TableCell>
                  <TableCell>{developer.developerContactNumber}</TableCell>
                  <TableCell>{developer.developerEmailAddress}</TableCell>
                  {/*<TableCell>{developer.developerPersonInChargeName}</TableCell>
                  <TableCell>{developer.developerPersonInChargeContactNumber}</TableCell>
                  <TableCell>{developer.developerPersonInChargeEmailAddress}</TableCell>
                  <TableCell>{developer.developerAuthorised1stSignatoryName}</TableCell>
                  <TableCell>{developer.developerAuthorised1stIdentityCardNumber}</TableCell>
                  <TableCell>{developer.developerAuthorised1stSignatoryDesignation}</TableCell>
                  <TableCell>{developer.developerAuthorised2ndSignatoryName}</TableCell>
                  <TableCell>{developer.developerAuthorised2ndIdentityCardNumber}</TableCell>
                  <TableCell>{developer.developerAuthorised2ndSignatoryDesignation}</TableCell> */}
                  {/* Add other table data as needed */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default Developer;
