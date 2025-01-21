import React, { useState, useEffect } from 'react';
import { Box, Typography, Toolbar, CssBaseline, Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper, Button } from '@mui/material';
import DrawerComponent from '../components/DrawerComponent';
import HeaderComponent from '../components/HeaderComponent';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function Party() {
  const [parties, setParties] = useState<any[]>([]); // Array to hold developer data
  const navigate = useNavigate(); // Hook to navigate between pages

  useEffect(() => {
    // Fetch the developers list on component mount
    const fetchParties = async () => {
      try {
        const apiUrl = process.env.API_URL;
        const response = await fetch(`${apiUrl}/get-parties`);
        const result = await response.json();
        if (response.ok) {
          setParties(result); // Assume result is an array of developers
        } else {
          console.error(result);
        }
      } catch (error) {
        console.error('Error fetching party:', error);
      }
    };

    fetchParties();
  }, []);

  // Handle navigating to the add developer page
  const handleAddPartyClick = () => {
    navigate('/addparty'); // Navigate to the AddDeveloper page
  };

  const handleGeneratePdf = async (party) => {
    const pdfContent = `
      Party Details:
      Name: ${party.name}
      Title: ${party.selectTitle}
      Old IC: ${party.oldIc}
      Address One: ${party.addressOne}
      Address Two: ${party.addressTwo}
      Address Three: ${party.addressThree}
    `;

    const doc = new jsPDF();
    doc.text(pdfContent, 10, 10);
    doc.save(`${party.name}_Details.pdf`);
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
          Parties List
        </Typography>

        {/* Add Developer Button aligned to the right */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddPartyClick} // Trigger navigate
          >
            Add New
          </Button>
        </Box>

        {/* Developer Table */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {/* <TableCell>ID Type</TableCell> */}
                {/* <TableCell>ID Party</TableCell> */}
                <TableCell>Old IC</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Address One</TableCell>
                <TableCell>Address Two</TableCell>
                <TableCell>Address Three</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {parties.map((party, index) => (
                <TableRow key={index}>
                  {/* <TableCell>{party.idType}</TableCell> */}
                  {/* <TableCell>{party.id}</TableCell> */}
                  <TableCell>{party.oldIc}</TableCell>
                  <TableCell>{party.name}</TableCell>
                  <TableCell>{party.selectTitle}</TableCell>
                  <TableCell>{party.addressOne}</TableCell>
                  <TableCell>{party.addressTwo}</TableCell>
                  <TableCell>{party.addressThree}</TableCell>
                  <TableCell>Edit</TableCell>
                  <TableCell>
                    {/* Generate PDF Button */}
                    {/* <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleGeneratePdf(party)}
                    >
                      Gen Report
                    </Button> */}
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

export default Party;
