import React, { useState } from 'react';
import { Box, Typography, TextField, Button, DialogActions, CircularProgress } from '@mui/material';
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
      const response = await fetch('http://localhost:5000/spaloan', {
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

  // const UploadFile = async (event: React.FormEvent) => {
  //   if (!uploadFile) {
  //     alert('Please select a file');
  //     return;
  //   }
  //   event.preventDefault();
  //   setLoading(true);
  //   const formData = new FormData();
  //   formData.append('uploadFile', uploadFile);
  //   try {
  //     const response = await fetch('http://localhost:5000/spaloana', {
  //       method: 'POST',
  //       body: formData,
  //     });
  //     const result = await response.json();
  //     console.log(result)
  //     if (response.ok) {
  //       // alert(result);
  //       // alert(`Result: ${result.response}`);
  //       const developerDetails = convertToArray(result.response);
  //       developerDetails.forEach(detail => {
  //       console.log(`${detail.key}: ${detail.value}`);
  //       const key = detail.key;
  //       switch (key) {
  //               case 'Developer Name':
  //                 setDeveloperName(detail.value);
  //                 break;
  //               case 'Registration Number':
  //                 setCompanyRegNum(detail.value);
  //                 break;
  //               case 'Office Address':
  //                 setRegisteredOfficeAdd(detail.value);
  //                 break;
  //               case 'Business Address':
  //                 setDeveloperPlaceOfBusinessAddress(detail.value);
  //                 break;
  //               case 'File Reference Number':
  //                 setDeveloperFileReferenceNumber(detail.value);
  //                 break;
  //               case 'License Number':
  //                 setDeveloperLicenceNumber(detail.value);
  //                 break;
  //               case 'NRIC No':
  //                 setDeveloperContactNumber(detail.value);
  //                 break;
  //               case 'Email Address':
  //                 setDeveloperEmailAddress(detail.value);
  //                 break;
  //               case 'Person in Charge Name':
  //                 setDeveloperPersonInChargeName(detail.value);
  //                 break;
  //               case 'Person in Charge Contact Number':
  //                 setDeveloperPersonInChargeContactNumber(detail.value);
  //                 break;
  //               case 'Person in Charge Email Address':
  //                 setDeveloperPersonInChargeEmailAddress(detail.value);
  //                 break;
  //               case '1st Authorised Signatory Name':
  //                 setDeveloperAuthorised1stSignatureName(detail.value);
  //                 break;
  //               case '1st Authorised Identity Card Number':
  //                 setDeveloperAuthorised1stIdentityCardNumber(detail.value);
  //                 break;
  //               case '1st Authorised Signatory Designation':
  //                 setDeveloperAuthorised1stSignatureDesignation(detail.value);
  //                 break;
  //               case '2nd Authorised Signatory Name':
  //                 setDeveloperAuthorised2ndSignatureName(detail.value);
  //                 break;
  //               case '2nd Authorised Identity Card Number':
  //                 setDeveloperAuthorised2ndIdentityCardNumber(detail.value);
  //                 break;
  //               case '2nd Authorised Signatory Designation':
  //                 setDeveloperAuthorised2ndSignatureDesignation(detail.value);
  //                 break;
  //               default:
  //                 break;
  //             }
  //       });
  //       console.log(developerDetails);
  //       setLoading(false);
  //     }
  //     else {
  //       alert('Failed to add document');
  //       console.error(result);
  //       setLoading(false);
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //     alert('An error occurred');
  //   }
  // }
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', p: 3, maxWidth: 1000, marginLeft: 31, marginTop: 10, }}>
        <DrawerComponent />
        <HeaderComponent />
      <Typography variant="h4" gutterBottom>
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
        label="Company Name"
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
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Licence Number"
        fullWidth
        variant="outlined"
        value={licenceNumber}
        onChange={(e) => setLicenceNumber(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
       </Box>
       <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
      <TextField
        label="Contact Number"
        fullWidth
        variant="outlined"
        value={contactNumber}
        onChange={(e) => setContactNumber(e.target.value)}
        sx={{ marginBottom: 2 }}
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
        sx={{ marginBottom: 2 }}
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
        label="Dev Authorised 1st signatory Name"
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
        label="Authorised 2nd signatory Designation"
        fullWidth
        variant="outlined"
        value={authorised2ndSignatoryDesignation}
        onChange={(e) => setAuthorised2ndSignatoryDesignation(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      <TextField
        label="Authorised 2nd signatory Designation"
        fullWidth
        variant="outlined"
        value={authorised2ndSignatoryDesignation}
        onChange={(e) => setAuthorised2ndSignatoryDesignation(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      </Box>
      <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
      <TextField
        label="Authorised 2nd signatory Designation"
        fullWidth
        variant="outlined"
        value={authorised2ndSignatoryDesignation}
        onChange={(e) => setAuthorised2ndSignatoryDesignation(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      <TextField
        label="Authorised 2nd signatory Designation"
        fullWidth
        variant="outlined"
        value={authorised2ndSignatoryDesignation}
        onChange={(e) => setAuthorised2ndSignatoryDesignation(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      </Box>

{/* Purcahser section start here */}
      <Box>
        <Typography variant="h4" gutterBottom>
          Purcahser Information
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
      <TextField
        label="1st Purchaser name"
        fullWidth
        variant="outlined"
        value={authorised2ndSignatoryDesignation}
        onChange={(e) => setAuthorised2ndSignatoryDesignation(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      <TextField
        label="1st Purchaser identity card "
        fullWidth
        variant="outlined"
        value={authorised2ndSignatoryDesignation}
        onChange={(e) => setAuthorised2ndSignatoryDesignation(e.target.value)}
        sx={{ marginBottom: 1 }}
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

export default SpaLoan;