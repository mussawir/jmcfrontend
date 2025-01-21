import React, { useState } from 'react';
import { Box, Typography, Toolbar, CssBaseline, Button, TextField, DialogActions } from '@mui/material';
import Radio from '@mui/material/Radio';
import DrawerComponent from './DrawerComponent';
import HeaderComponent from './HeaderComponent';

function Properties() {
  const [storeyNumber, setStoreyNumber] = useState('');
  const [buildingBlockNumber, setBuildingBlockNumber] = useState('');
  const [accessoryParcelNumber, setAccessoryParcelNumber] = useState('');
  const [accessoryBuildingBlockNumber, setAccessoryBuildingBlockNumber] = useState('');
  const [airCondLedgeParcelNumber, setAirCondLedgeParcelNumber] = useState('');
  const [carParkLotNumber, setCarParkLotNumber] = useState('');
  const [carParkBuildingBlockNumber, setCarParkBuildingBlockNumber] = useState('');

  const [selectedValue, setSelectedValue] = useState('a');
  const [parcelUnit, setParcelUnit] = useState('');
  const [titleTypeFreehold, setTitleTypeFreehold] = useState('');
  const [titleDescription, setTitleDescription] = useState('');
  const [titleNumber, setTitleNumber] = useState('');
  const [lotNumber, setLotNumber] = useState('');
  const [mukimBandarPekan, setMukimBandarPekan] = useState('');
  const [daerah, setDaerah] = useState('');
  const [negeri, setNegeri] = useState('');
  const [leaseholdNumbers, setLeaseholdNumbers] = useState('');
  const [parcelUnitArea, setParcelUnitArea] = useState('');
  const [parcelUnitBuiltUp, setParcelUnitBuiltUp] = useState('');
  const [propertyAddress, setPropertyAddress] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const addProperty = async () => {
    const propertyData = {
      parcelUnit,
      titleTypeFreehold,
      titleDescription,
      titleNumber,
      lotNumber,
      mukimBandarPekan,
      daerah,
      negeri,
      leaseholdNumbers,
      parcelUnitArea,
      parcelUnitBuiltUp,
      propertyAddress,
    };

    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      const response = await fetch(`${apiUrl}/add-property`, {
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
        <Box sx={{ display: 'flex', width: '100%', marginBottom: 1, marginTop: 6 }}>
          <Radio
            checked={selectedValue === 'a'}
            onChange={handleChange}
            value="a"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'A' }}
          />
          <Typography sx={{ marginTop: 1 }}>Property under master title</Typography>
          <Radio
            checked={selectedValue === 'b'}
            onChange={handleChange}
            value="b"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'B' }}
          />
          <Typography sx={{ marginTop: 1 }}>Property with individual/strata title</Typography>
        </Box>

        {/* Conditional Rendering of Forms */}
        {selectedValue === 'a' ? (
          <Box>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Master Property Details
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
                label="Storey number"
                fullWidth
                variant="outlined"
                value={storeyNumber}
                onChange={(e) => setStoreyNumber(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
            </Box>
            <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
              <TextField
                label="Building/block number"
                fullWidth
                variant="outlined"
                value={buildingBlockNumber}
                onChange={(e) => setBuildingBlockNumber(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
              <TextField
                label="Parcel/unit/lot area"
                fullWidth
                variant="outlined"
                value={parcelUnitArea}
                onChange={(e) => setParcelUnitArea(e.target.value)}
                sx={{ marginBottom: 1 }}
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
                label="Accessory parcel(s) number"
                fullWidth
                variant="outlined"
                value={accessoryParcelNumber}
                onChange={(e) => setAccessoryParcelNumber(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
            </Box>
            <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
              <TextField
                label="Accessory parcel(s) building/block number"
                fullWidth
                variant="outlined"
                value={accessoryBuildingBlockNumber}
                onChange={(e) => setAccessoryBuildingBlockNumber(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
              <TextField
                label="Air-cond ledge parcel(s) number"
                fullWidth
                variant="outlined"
                value={airCondLedgeParcelNumber}
                onChange={(e) => setAirCondLedgeParcelNumber(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
            </Box>
            <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
              <TextField
                label="Car park lot(s) number"
                fullWidth
                variant="outlined"
                value={carParkLotNumber}
                onChange={(e) => setCarParkLotNumber(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
              <TextField
                label="Car park building/block number"
                fullWidth
                variant="outlined"
                value={carParkBuildingBlockNumber}
                onChange={(e) => setCarParkBuildingBlockNumber(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
            </Box>
            <DialogActions sx={{ justifyContent: 'center' }}>
              <Button variant="contained" color="primary" onClick={addProperty}>
                Submit
              </Button>
            </DialogActions>
          </Box>
        ) : (
          <Box>
            {/* Form for "Property with individual/strata title" */}
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Property Strata Title
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
                value={titleTypeFreehold}
                onChange={(e) => setTitleTypeFreehold(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
            </Box>
            <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
              <TextField
                label="Title description"
                fullWidth
                variant="outlined"
                value={titleDescription}
                onChange={(e) => setTitleDescription(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
              <TextField
                label="Title number"
                fullWidth
                variant="outlined"
                value={titleNumber}
                onChange={(e) => setTitleNumber(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
            </Box>
            <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
              <TextField
                label="Lot number"
                fullWidth
                variant="outlined"
                value={lotNumber}
                onChange={(e) => setLotNumber(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
              <TextField
                label="Mukim/Bandar/Pekan"
                fullWidth
                variant="outlined"
                value={mukimBandarPekan}
                onChange={(e) => setMukimBandarPekan(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
            </Box>
            <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
              <TextField
                label="Daerah"
                fullWidth
                variant="outlined"
                value={daerah}
                onChange={(e) => setDaerah(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
              <TextField
                label="Negeri"
                fullWidth
                variant="outlined"
                value={negeri}
                onChange={(e) => setNegeri(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
            </Box>
            <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
              <TextField
                label="Leasehold years"
                fullWidth
                variant="outlined"
                value={leaseholdNumbers}
                onChange={(e) => setLeaseholdNumbers(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
              <TextField
                label="Parcel/unit area (square meters)"
                fullWidth
                variant="outlined"
                value={parcelUnitArea}
                onChange={(e) => setParcelUnitArea(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
            </Box>
            <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
              <TextField
                label="Parcel/unit built-up (square meters)"
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
        )}
      </Box>
    </Box>
  );
}

export default Properties;
