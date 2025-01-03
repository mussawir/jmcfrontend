import React, { useState } from 'react';
import { Box, Typography, TextField, Button, DialogActions, } from '@mui/material';
import Radio from '@mui/material/Radio';
import DrawerComponent from '../components/DrawerComponent';
import HeaderComponent from '../components/HeaderComponent';
function SpaLoan() {
  // State hooks for each form field
  const [developerName, setDeveloperName] = useState('');
  const [companyRegNum, setCompanyRegNum] = useState('');
  const [registeredOfficeAdd, setRegisteredOfficeAdd] = useState('');
  const [placeOfBusinessAddress, setPlaceOfBusinessAddress] = useState('');
  const [fileReferenceNumber, setFileReferenceNumber] = useState('');
  const [licenceNumber, setLicenceNumber] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [personInChargeName, setPersonInChargeName] = useState('');
  const [personInChargeContactNumber, setPersonInChargeContactNumber] = useState('');
  const [personInChargeEmailAddress, setPersonInChargeEmailAddress] = useState('');
  const [authorised1stSignatoryName, setAuthorised1stSignatoryName] = useState('');
  const [authorised1stIdentityCardNumber, setAuthorised1stIdentityCardNumber] = useState('');
  const [authorised1stSignatoryDesignation, setAuthorised1stSignatoryDesignation] = useState('');
  const [authorised2ndSignatoryName, setAuthorised2ndSignatoryName] = useState('');
  const [authorised2ndIdentityCardNumber, setAuthorised2ndIdentityCardNumber] = useState('');
  const [authorised2ndSignatoryDesignation, setAuthorised2ndSignatoryDesignation] = useState('');
  const [selectedValue, setSelectedValue] = useState<string>('a');

  // Event handler with correct typing
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectedValue(event.target.value);
  };
 
  const handleAddDeveloperSubmit = async () => {
    const developerData = {
      developerName,
      companyRegNum,
      registeredOfficeAdd,
      placeOfBusinessAddress,
      fileReferenceNumber,
      licenceNumber,
      contactNumber,
      emailAddress,
      personInChargeName,
      personInChargeContactNumber,
      personInChargeEmailAddress,
      authorised1stSignatoryName,
      authorised1stIdentityCardNumber,
      authorised1stSignatoryDesignation,
      authorised2ndSignatoryName,
      authorised2ndIdentityCardNumber,
      authorised2ndSignatoryDesignation,
    };

    try {
      const response = await fetch('http://localhost:5000/spa-loan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(developerData),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Developer added successfully');
      } else {
        alert('Failed to add developer');
        console.error(result);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
  };

 
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', p: 3, maxWidth: 1000, marginLeft: 31, marginTop: 10, }}>
        <DrawerComponent />
        <HeaderComponent />
      <Typography variant="h6" gutterBottom>
        Developer Information
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
      <TextField
        label="Developre Name"
        fullWidth
        variant="outlined"
        value={developerName}
        onChange={(e) => setDeveloperName(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      <TextField
        label="Company Registration Number"
        fullWidth
        variant="outlined"
        value={companyRegNum}
        onChange={(e) => setCompanyRegNum(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      </Box>
      <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
      <TextField
        label="Registered Office"
        fullWidth
        variant="outlined"
        value={registeredOfficeAdd}
        onChange={(e) => setRegisteredOfficeAdd(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      <TextField
        label="Place Of Business Address"
        fullWidth
        variant="outlined"
        value={placeOfBusinessAddress}
        onChange={(e) => setPlaceOfBusinessAddress(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
       </Box>
       <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
      <TextField
        label="File Reference NO:"
        fullWidth
        variant="outlined"
        value={fileReferenceNumber}
        onChange={(e) => setFileReferenceNumber(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      <TextField
        label="Licence Number"
        fullWidth
        variant="outlined"
        value={licenceNumber}
        onChange={(e) => setLicenceNumber(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
       </Box>
       <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
      <TextField
        label="Contact Number"
        fullWidth
        variant="outlined"
        value={contactNumber}
        onChange={(e) => setContactNumber(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      <TextField
        label="Email Address"
        fullWidth
        variant="outlined"
        value={emailAddress}
        onChange={(e) => setEmailAddress(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      </Box>
      <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
      <TextField
        label="Person Incharge Name"
        fullWidth
        variant="outlined"
        value={personInChargeName}
        onChange={(e) => setPersonInChargeName(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      <TextField
        label="Person Incharge Contact NO"
        fullWidth
        variant="outlined"
        value={personInChargeContactNumber}
        onChange={(e) => setPersonInChargeContactNumber(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      </Box>
      <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
      <TextField
        label="Incharge Email"
        fullWidth
        variant="outlined"
        value={personInChargeEmailAddress}
        onChange={(e) => setPersonInChargeEmailAddress(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      <TextField
        label="Dev Authorised 1st Signatory Name"
        fullWidth
        variant="outlined"
        value={authorised1stSignatoryName}
        onChange={(e) => setAuthorised1stSignatoryName(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      </Box>
      <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
      <TextField
        label="Authorised 1st Identity Card NO"
        fullWidth
        variant="outlined"
        value={authorised1stIdentityCardNumber}
        onChange={(e) => setAuthorised1stIdentityCardNumber(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      <TextField
        label="Authorised 1st Sign Designation"
        fullWidth
        variant="outlined"
        value={authorised1stSignatoryDesignation}
        onChange={(e) => setAuthorised1stSignatoryDesignation(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      </Box>
      <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
      <TextField
        label="Authorised 2nd Signatory Name "
        fullWidth
        variant="outlined"
        value={authorised2ndSignatoryName}
        onChange={(e) => setAuthorised2ndSignatoryName(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      <TextField
        label="Authorised Identity Card NO"
        fullWidth
        variant="outlined"
        value={authorised2ndIdentityCardNumber}
        onChange={(e) => setAuthorised2ndIdentityCardNumber(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      </Box>
      <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
      <TextField
        label="Authorised 2nd Signatory Designation"
        fullWidth
        variant="outlined"
        value={authorised2ndSignatoryDesignation}
        onChange={(e) => setAuthorised2ndSignatoryDesignation(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      <TextField
        label="Authorised 2nd Signatory Designation"
        fullWidth
        variant="outlined"
        value={authorised2ndSignatoryDesignation}
        onChange={(e) => setAuthorised2ndSignatoryDesignation(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      </Box>
      <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
      <TextField
        label="Authorised 2nd Signatory Designation"
        fullWidth
        variant="outlined"
        value={authorised2ndSignatoryDesignation}
        onChange={(e) => setAuthorised2ndSignatoryDesignation(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      <TextField
        label="Authorised 2nd Signatory Designation"
        fullWidth
        variant="outlined"
        value={authorised2ndSignatoryDesignation}
        onChange={(e) => setAuthorised2ndSignatoryDesignation(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      </Box>
      <Box sx={{ display: 'flex', width: '100%', marginBottom: 1, marginTop: 6  }}>
        <Typography>If Purchaser is/are individual(s) (Malaysian)</Typography>
        <Radio
          checked={selectedValue === 'a'}
          onChange={handleChange}
          value="a"
          name="radio-buttons"
          inputProps={{ 'aria-label': 'A' }}
        />
        <Typography>If Purchaser is/are individual(s) (foreigner)</Typography>
        <Radio
          checked={selectedValue === 'b'}
          onChange={handleChange}
          value="b"
          name="radio-buttons"
          inputProps={{ 'aria-label': 'B' }}
        />
        <Typography>If Purchaser is a company</Typography>
        <Radio
          checked={selectedValue === 'c'}
          onChange={handleChange}
          value="c"
          name="radio-buttons"
          inputProps={{ 'aria-label': 'C' }}
        />
      </Box>

{/* Purcahser section start here */}
      <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1, marginTop: 6 }}>
        <Typography variant="h6" gutterBottom>
          Purcahser Information
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
      <TextField
        label="1st Purchaser Name"
        fullWidth
        variant="outlined"
        value={authorised2ndSignatoryDesignation}
        onChange={(e) => setAuthorised2ndSignatoryDesignation(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      <TextField
        label="1st Purchaser Identity Card"
        fullWidth
        variant="outlined"
        value={authorised2ndSignatoryDesignation}
        onChange={(e) => setAuthorised2ndSignatoryDesignation(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      </Box>
      <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
        <TextField
          label="1st Purchaser Contact Number"
          fullWidth
          variant="outlined"
          value={authorised2ndSignatoryDesignation}
          onChange={(e) => setAuthorised2ndSignatoryDesignation(e.target.value)}
          sx={{ marginBottom: 1 }}
        />
        <TextField
          label="1st Purchaser Email Address"
          fullWidth
          variant="outlined"
          value={authorised2ndSignatoryDesignation}
          onChange={(e) => setAuthorised2ndSignatoryDesignation(e.target.value)}
          sx={{ marginBottom: 1 }}
        />
      </Box>
      <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
      <TextField
        label="2nd Purchaser Name"
        fullWidth
        variant="outlined"
        value={authorised2ndSignatoryDesignation}
        onChange={(e) => setAuthorised2ndSignatoryDesignation(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      <TextField
        label="2nd Purchaser Identity Card"
        fullWidth
        variant="outlined"
        value={authorised2ndSignatoryDesignation}
        onChange={(e) => setAuthorised2ndSignatoryDesignation(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      </Box>
      <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
      <TextField
        label="2nd Purchaser Contact Number"
        fullWidth
        variant="outlined"
        value={authorised2ndSignatoryDesignation}
        onChange={(e) => setAuthorised2ndSignatoryDesignation(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      <TextField
        label="2nd Purchaser Email Address"
        fullWidth
        variant="outlined"
        value={authorised2ndSignatoryDesignation}
        onChange={(e) => setAuthorised2ndSignatoryDesignation(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      </Box>
      <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
      <TextField
        label="3rd Purchaser Name"
        fullWidth
        variant="outlined"
        value={authorised2ndSignatoryDesignation}
        onChange={(e) => setAuthorised2ndSignatoryDesignation(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      <TextField
        label="3rd Purchaser Identity Card "
        fullWidth
        variant="outlined"
        value={authorised2ndSignatoryDesignation}
        onChange={(e) => setAuthorised2ndSignatoryDesignation(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      </Box>
      <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
      <TextField
        label="3rd Purchaser Contact Number"
        fullWidth
        variant="outlined"
        value={authorised2ndSignatoryDesignation}
        onChange={(e) => setAuthorised2ndSignatoryDesignation(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      <TextField
        label="3rd Purchaser Email Address"
        fullWidth
        variant="outlined"
        value={authorised2ndSignatoryDesignation}
        onChange={(e) => setAuthorised2ndSignatoryDesignation(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      </Box>
      <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
      <TextField
        label="4th Purchaser Name"
        fullWidth
        variant="outlined"
        value={authorised2ndSignatoryDesignation}
        onChange={(e) => setAuthorised2ndSignatoryDesignation(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      <TextField
        label="4th Purchaser Identity Card "
        fullWidth
        variant="outlined"
        value={authorised2ndSignatoryDesignation}
        onChange={(e) => setAuthorised2ndSignatoryDesignation(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      </Box>
      <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
      <TextField
        label="4th Purchaser Contact Number"
        fullWidth
        variant="outlined"
        value={authorised2ndSignatoryDesignation}
        onChange={(e) => setAuthorised2ndSignatoryDesignation(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      <TextField
        label="4th Purchaser Email Address"
        fullWidth
        variant="outlined"
        value={authorised2ndSignatoryDesignation}
        onChange={(e) => setAuthorised2ndSignatoryDesignation(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      </Box>
      <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
      <TextField
        label="5th Purchaser Name"
        fullWidth
        variant="outlined"
        value={authorised2ndSignatoryDesignation}
        onChange={(e) => setAuthorised2ndSignatoryDesignation(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      <TextField
        label="5th Purchaser Identity Card"
        fullWidth
        variant="outlined"
        value={authorised2ndSignatoryDesignation}
        onChange={(e) => setAuthorised2ndSignatoryDesignation(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      </Box>
      <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
      <TextField
        label="5th Purchaser Contact Number"
        fullWidth
        variant="outlined"
        value={authorised2ndSignatoryDesignation}
        onChange={(e) => setAuthorised2ndSignatoryDesignation(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      <TextField
        label="5th Purchaser Email Address"
        fullWidth
        variant="outlined"
        value={authorised2ndSignatoryDesignation}
        onChange={(e) => setAuthorised2ndSignatoryDesignation(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      </Box>
      <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
      <TextField
        label="Purchaser Correspondance address"
        fullWidth
        variant="outlined"
        value={authorised2ndSignatoryDesignation}
        onChange={(e) => setAuthorised2ndSignatoryDesignation(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      {/* <TextField
        label="5th Purchaser Email Address"
        fullWidth
        variant="outlined"
        value={authorised2ndSignatoryDesignation}
        onChange={(e) => setAuthorised2ndSignatoryDesignation(e.target.value)}
        sx={{ marginBottom: 1 }}
      /> */}
      </Box>
      <DialogActions>
        <Button variant="contained" color="primary" onClick={handleAddDeveloperSubmit}>
          Submit
        </Button>
      </DialogActions>
    </Box>
    
  );
}

export default SpaLoan;