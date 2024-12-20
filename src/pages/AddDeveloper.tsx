import React, { useState } from 'react';
import { Box, Typography, TextField, Button, DialogActions, CircularProgress } from '@mui/material';
import DrawerComponent from '../components/DrawerComponent';
import HeaderComponent from '../components/HeaderComponent';

function AddDeveloper() {
  // State hooks for each form field
  const [developerName, setDeveloperName] = useState('');
  const [companyRegNum, setCompanyRegNum] = useState('');
  const [registeredOfficeAdd, setRegisteredOfficeAdd] = useState('');
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
  const [loading, setLoading] = useState(false);
  
  type KeyValue = { key: string; value: string };
  const convertToArray = (text:string): KeyValue[] => {
    return text
      .trim()
      .split('\n')
      .map(line => {
        const [key, ...value] = line.split(':');
        return { key: key.trim(), value: value.join(':').trim() };
      });
  };
  
  const handleAddDeveloperSubmit = async () => {
    const developerData = {
      developerName,
      companyRegNum,
      registeredOfficeAdd,
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

  const UploadFile = async (event: React.FormEvent) => {
    if (!uploadFile) {
      alert('Please select a file');
      return;
    }
    event.preventDefault();
    setLoading(true);
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
        const developerDetails = convertToArray(result.response);
        developerDetails.forEach(detail => {
        console.log(`${detail.key}: ${detail.value}`);
        const key = detail.key;
        switch (key) {
                case 'Developer Name':
                  setDeveloperName(detail.value);
                  break;
                case 'Registration Number':
                  setCompanyRegNum(detail.value);
                  break;
                case 'Office Address':
                  setRegisteredOfficeAdd(detail.value);
                  break;
                case 'Business Address':
                  setDeveloperPlaceOfBusinessAddress(detail.value);
                  break;
                case 'File Reference Number':
                  setDeveloperFileReferenceNumber(detail.value);
                  break;
                case 'License Number':
                  setDeveloperLicenceNumber(detail.value);
                  break;
                case 'NRIC No':
                  setDeveloperContactNumber(detail.value);
                  break;
                case 'Email Address':
                  setDeveloperEmailAddress(detail.value);
                  break;
                case 'Person in Charge Name':
                  setDeveloperPersonInChargeName(detail.value);
                  break;
                case 'Person in Charge Contact Number':
                  setDeveloperPersonInChargeContactNumber(detail.value);
                  break;
                case 'Person in Charge Email Address':
                  setDeveloperPersonInChargeEmailAddress(detail.value);
                  break;
                case '1st Authorised Signature Name':
                  setDeveloperAuthorised1stSignatureName(detail.value);
                  break;
                case '1st Authorised Identity Card Number':
                  setDeveloperAuthorised1stIdentityCardNumber(detail.value);
                  break;
                case '1st Authorised Signature Designation':
                  setDeveloperAuthorised1stSignatureDesignation(detail.value);
                  break;
                case '2nd Authorised Signature Name':
                  setDeveloperAuthorised2ndSignatureName(detail.value);
                  break;
                case '2nd Authorised Identity Card Number':
                  setDeveloperAuthorised2ndIdentityCardNumber(detail.value);
                  break;
                case '2nd Authorised Signature Designation':
                  setDeveloperAuthorised2ndSignatureDesignation(detail.value);
                  break;
                default:
                  break;
              }
        });
        console.log(developerDetails);
        setLoading(false);
      }
      else {
        alert('Failed to add document');
        console.error(result);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
  }
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3, maxWidth: 1000, marginLeft: 33, marginTop: 10, }}>
        <DrawerComponent />
        <HeaderComponent />
      <Typography variant="h4" gutterBottom>
        Add New Developer
      </Typography>
      <Box
        sx={{ 
          display: 'flex', 
          justifyContent: 'flex-end', 
          alignItems: 'center', 
          width: '100%', 
          marginBottom: 2 
        }}
      >
        <input
          type="file"
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              setUploadFile(e.target.files[0]);
            }
          }}
          style={{ marginRight: '16px', width: '180px' }}
        />
        <Button variant="contained" color="primary" onClick={UploadFile}>
          Fill From Doc
        </Button>
      </Box>
      {loading && (
        <Box sx={{ display: 'flex', marginTop: 2, marginBottom: 2 }}>
            <CircularProgress />
        </Box>
      )}
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
        value={companyRegNum}
        onChange={(e) => setCompanyRegNum(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      </Box>
      <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 2 }}>
      <TextField
        label="Registered Office Address"
        fullWidth
        variant="outlined"
        value={registeredOfficeAdd}
        onChange={(e) => setRegisteredOfficeAdd(e.target.value)}
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