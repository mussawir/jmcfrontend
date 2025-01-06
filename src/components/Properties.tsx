import React, { useState, useEffect } from 'react';
import { Box, Typography, Toolbar, CssBaseline, Button, TextField, DialogActions } from '@mui/material';
import DrawerComponent from './DrawerComponent';
import HeaderComponent from './HeaderComponent';
import { useNavigate } from 'react-router-dom';

function Properties() {
  const [parcelUnit, setParcelUnit] = useState('');
  const [storeyNumber, setStoreyNumber] = useState('');
  const [buildingNumber, setBuildingNumber] = useState('');
  const [parcelUnitBuiltUp, setParcelUnitBuiltUp] = useState('');
  const [accessoryNumber, setAccessoryNumber] = useState('');
  const [accessoryBuildingNu, setAccessoryBuildingNu] = useState('');
  const [airCondLedgeNu, setAirCondLedgeNu] = useState('');
  const [carParkLotNum, setCarParkLotNum] = useState('');
  const [carParkBuildingNu, setCarParkBuildingNu] = useState('');  
  const [parcelUnitArea, setParcelUnitArea] = useState('');
  const [propertyAddress, setPropertyAddress] = useState('');  
  const navigate = useNavigate();
  const addProperty = async () => {
    const propertyData = {
      parcelUnit,
      storeyNumber,
      buildingNumber,
      parcelUnitBuiltUp,
      accessoryNumber,
      accessoryBuildingNu,
      airCondLedgeNu,
      carParkLotNum,
      carParkBuildingNu,
      parcelUnitArea,
      propertyAddress,
    };

    try {
      const response = await fetch('http://localhost:5000/property', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(propertyData),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Property added successfully');
      } else {
        alert('Failed to add property');
        console.error(result);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <DrawerComponent />
      <HeaderComponent />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
          Add Property
        </Typography>
         <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
              <TextField
                label="Parcel/unit/lot number"
                fullWidth
                variant="outlined"
                value={parcelUnit}
                onChange={(e) => setParcelUnit(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
              <TextField
                label="Title type - Freehold / Leasehold"
                fullWidth
                variant="outlined"
                value={storeyNumber}
                onChange={(e) => setStoreyNumber(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
              </Box>
              <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
              <TextField
                label="Title description"
                fullWidth
                variant="outlined"
                value={buildingNumber}
                onChange={(e) => setBuildingNumber(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
              <TextField
                label="Title number"
                fullWidth
                variant="outlined"
                value={parcelUnitArea}
                onChange={(e) => setParcelUnitArea(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
               </Box>
               <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
              <TextField
                label="Lot/PT number"
                fullWidth
                variant="outlined"
                value={parcelUnitBuiltUp}
                onChange={(e) => setParcelUnitBuiltUp(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
              <TextField
                label="Mukim/Bandar/Pekan"
                fullWidth
                variant="outlined"
                value={accessoryNumber}
                onChange={(e) => setAccessoryNumber(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
               </Box>
               <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
              <TextField
                label="Daerah"
                fullWidth
                variant="outlined"
                value={accessoryBuildingNu}
                onChange={(e) => setAccessoryBuildingNu(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
              <TextField
                label="Negeri"
                fullWidth
                variant="outlined"
                value={airCondLedgeNu}
                onChange={(e) => setAirCondLedgeNu(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
              </Box>
              <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
              <TextField
                label="Numbers of years and expiration date"
                fullWidth
                variant="outlined"
                value={carParkLotNum}
                onChange={(e) => setCarParkLotNum(e.target.value)}
                sx={{ marginBottom: 2 }}
              />
              <TextField
                label="Parcel/unit/lot area"
                fullWidth
                variant="outlined"
                value={parcelUnitArea}
                onChange={(e) => setParcelUnitArea(e.target.value)}
                sx={{ marginBottom: 2 }}
              />
              </Box>
              <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
              <TextField
                label="Parcel/unit/lot built up area"
                fullWidth
                variant="outlined"
                value={parcelUnitBuiltUp}
                onChange={(e) => setParcelUnitBuiltUp(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
              <TextField
                label="Property address"
                fullWidth
                variant="outlined"
                value={propertyAddress}
                onChange={(e) => setPropertyAddress(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
              </Box>
              <DialogActions sx={{ justifyContent: 'center' }}>
                <Button variant="contained" color="primary" onClick={addProperty}>
                  Submit
                </Button>
              </DialogActions>
      </Box>
    </Box>
  );
}

export default Properties;
