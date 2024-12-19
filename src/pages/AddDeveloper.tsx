import React, { useState } from 'react';
import { Box, Typography, TextField, Button, DialogActions } from '@mui/material';
import DrawerComponent from '../components/DrawerComponent';
import HeaderComponent from '../components/HeaderComponent';

function AddDeveloper() {
  // State hooks for each form field
  const [developerName, setDeveloperName] = useState('');
  const [developerCompanyRegistrationNumber, setDeveloperCompanyRegistrationNumber] = useState('');
  const [developerRegisteredOfficeAddress, setDeveloperRegisteredOfficeAddress] = useState('');
  const [developerPlaceOfBusinessAddress, setDeveloperPlaceOfBusinessAddress] = useState('');
  const [developerFileReferenceNumber, setDeveloperFileReferenceNumber] = useState('');
  const [developerLicenceNumber, setDeveloperLicenceNumber] = useState('');
  const [developerContactNumber, setDeveloperContactNumber] = useState('');
  const [developerEmailAddress, setDeveloperEmailAddress] = useState('');
  const [developerPersonInChargeName, setDeveloperPersonInChargeName] = useState('');
  const [developerPersonInChargeContactNumber, setDeveloperPersonInChargeContactNumber] = useState('');
  const [developerPersonInChargeEmailAddress, setDeveloperPersonInChargeEmailAddress] = useState('');
  const [developerAuthorised1stSignatureName, setDeveloperAuthorised1stSignatureName] = useState('');
  const [developerAuthorised1stIdentityCardNumber, setDeveloperAuthorised1stIdentityCardNumber] = useState('');
  const [developerAuthorised1stSignatureDesignation, setDeveloperAuthorised1stSignatureDesignation] = useState('');
  const [developerAuthorised2ndSignatureName, setDeveloperAuthorised2ndSignatureName] = useState('');
  const [developerAuthorised2ndIdentityCardNumber, setDeveloperAuthorised2ndIdentityCardNumber] = useState('');
  const [developerAuthorised2ndSignatureDesignation, setDeveloperAuthorised2ndSignatureDesignation] = useState('');
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const handleAddDeveloperSubmit = async () => {
    const developerData = {
      developerName,
      developerCompanyRegistrationNumber,
      developerRegisteredOfficeAddress,
      developerPlaceOfBusinessAddress,
      developerFileReferenceNumber,
      developerLicenceNumber,
      developerContactNumber,
      developerEmailAddress,
      developerPersonInChargeName,
      developerPersonInChargeContactNumber,
      developerPersonInChargeEmailAddress,
      developerAuthorised1stSignatureName,
      developerAuthorised1stIdentityCardNumber,
      developerAuthorised1stSignatureDesignation,
      developerAuthorised2ndSignatureName,
      developerAuthorised2ndIdentityCardNumber,
      developerAuthorised2ndSignatureDesignation,
    };

    try {
      const response = await fetch('http://localhost:5000/add-developer', {
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

  const [formData, setFormData] = useState({
    developerName: '',
    developerCompanyRegistrationNumber: '',
    developerRegisteredOfficeAddress: '',
    developerPlaceOfBusinessAddress: '',
    developerFileReferenceNumber: '',
    developerLicenceNumber: '',
    developerContactNumber: '',
    developerEmailAddress: '',
    developerPersonInChargeName: '',
    developerPersonInChargeContactNumber: '',
    developerPersonInChargeEmailAddress: '',
    developerAuthorised1stSignatureName: '',
    developerAuthorised1stIdentityCardNumber: '',
    developerAuthorised1stSignatureDesignation: '',
    developerAuthorised2ndSignatureName: '',
    developerAuthorised2ndIdentityCardNumber: '',
    developerAuthorised2ndSignatureDesignation: '',
  });
 
  const UploadFile = async (event: React.FormEvent) => {
    if (!uploadFile) {
      alert('Please select a file');
      return;
    }
    event.preventDefault();
    const formData = new FormData();
    formData.append('uploadFile', uploadFile);
  
    try {
      const response = await fetch('http://localhost:5000/add-document', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      console.log(result)
      if (response.ok) {
        // alert(result);
        // alert(`Result: ${result.response}`);
        setDeveloperName(result.response);
        setDeveloperCompanyRegistrationNumber(result.response);
      }
      else {
        alert('Failed to add document');
        console.error(result);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
  }
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3, maxWidth: 1000, marginLeft: 40, marginTop: 10, }}>
        <DrawerComponent />
        <HeaderComponent />
      <Typography variant="h4" gutterBottom>
        Add New Developer
      </Typography>
      <Box>
      <input
          type="file"
          onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                  setUploadFile(e.target.files[0]);
              }
          }}
          style={{ marginBottom: '16px', width: '180px', margin: '10px', }}
      />
      <Button variant="contained" color="primary" onClick={UploadFile}>
        Fill From Doc
      </Button>
      </Box>
      <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 2 }}>
      <TextField
        label="Developer Name"
        fullWidth
        variant="outlined"
        value={developerName}
        onChange={(e) => setDeveloperName(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Company Registration Number"
        fullWidth
        variant="outlined"
        value={developerCompanyRegistrationNumber}
        onChange={(e) => setDeveloperCompanyRegistrationNumber(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      </Box>
      <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 2 }}>
      <TextField
        label="Registered Office Address"
        fullWidth
        variant="outlined"
        value={developerRegisteredOfficeAddress}
        onChange={(e) => setDeveloperRegisteredOfficeAddress(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Place of Business Address"
        fullWidth
        variant="outlined"
        value={developerPlaceOfBusinessAddress}
        onChange={(e) => setDeveloperPlaceOfBusinessAddress(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
       </Box>
       <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 2 }}>
      <TextField
        label="File Reference Number"
        fullWidth
        variant="outlined"
        value={developerFileReferenceNumber}
        onChange={(e) => setDeveloperFileReferenceNumber(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Licence Number"
        fullWidth
        variant="outlined"
        value={developerLicenceNumber}
        onChange={(e) => setDeveloperLicenceNumber(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
       </Box>
       <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 2 }}>
      <TextField
        label="Contact Number"
        fullWidth
        variant="outlined"
        value={developerContactNumber}
        onChange={(e) => setDeveloperContactNumber(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Email Address"
        fullWidth
        variant="outlined"
        value={developerEmailAddress}
        onChange={(e) => setDeveloperEmailAddress(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      </Box>
      <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 2 }}>
      <TextField
        label="Person in Charge Name"
        fullWidth
        variant="outlined"
        value={developerPersonInChargeName}
        onChange={(e) => setDeveloperPersonInChargeName(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Person in Charge Contact Number"
        fullWidth
        variant="outlined"
        value={developerPersonInChargeContactNumber}
        onChange={(e) => setDeveloperPersonInChargeContactNumber(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      </Box>
      <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 2 }}>
      <TextField
        label="Person in Charge Email Address"
        fullWidth
        variant="outlined"
        value={developerPersonInChargeEmailAddress}
        onChange={(e) => setDeveloperPersonInChargeEmailAddress(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="1st Authorised Signature Name"
        fullWidth
        variant="outlined"
        value={developerAuthorised1stSignatureName}
        onChange={(e) => setDeveloperAuthorised1stSignatureName(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      </Box>
      <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 2 }}>
      <TextField
        label="1st Authorised Identity Card Number"
        fullWidth
        variant="outlined"
        value={developerAuthorised1stIdentityCardNumber}
        onChange={(e) => setDeveloperAuthorised1stIdentityCardNumber(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="1st Authorised Signature Designation"
        fullWidth
        variant="outlined"
        value={developerAuthorised1stSignatureDesignation}
        onChange={(e) => setDeveloperAuthorised1stSignatureDesignation(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      </Box>
      <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 2 }}>
      <TextField
        label="2nd Authorised Signature Name"
        fullWidth
        variant="outlined"
        value={developerAuthorised2ndSignatureName}
        onChange={(e) => setDeveloperAuthorised2ndSignatureName(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="2nd Authorised Identity Card Number"
        fullWidth
        variant="outlined"
        value={developerAuthorised2ndIdentityCardNumber}
        onChange={(e) => setDeveloperAuthorised2ndIdentityCardNumber(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      </Box>
      <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 2 }}>
      <TextField
        label="2nd Authorised Signature Designation"
        fullWidth
        variant="outlined"
        value={developerAuthorised2ndSignatureDesignation}
        onChange={(e) => setDeveloperAuthorised2ndSignatureDesignation(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      </Box>

      <DialogActions>
        <Button variant="contained" color="primary" onClick={handleAddDeveloperSubmit}>
          Submit
        </Button>
      </DialogActions>
    </Box>
  );
}

export default AddDeveloper;