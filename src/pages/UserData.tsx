import React, { useState } from 'react';
import { Box, TextField, Button, Typography, CircularProgress, Toolbar } from '@mui/material';
import DrawerComponent from '../components/DrawerComponent';
import HeaderComponent from '../components/HeaderComponent';

const UserData = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [caseDetails, setCaseDetails] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [pdf, setPdf] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<File | null>>) => {
    if (e.target.files && e.target.files.length > 0) {
      setter(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append('name', name);
    formData.append('age', age);
    formData.append('caseDetails', caseDetails);
    if (image) formData.append('image', image);
    if (pdf) formData.append('pdf', pdf);

    try {
      const apiUrl = process.env.API_URL;
      const response = await fetch(`${apiUrl}/upload`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('User data uploaded successfully!');
        setName('');
        setAge('');
        setCaseDetails('');
        setImage(null);
        setPdf(null);
      } else {
        alert('Error uploading data');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      <DrawerComponent />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <HeaderComponent />
        <Toolbar />

        <Box sx={{ maxWidth: 500, mx: 'auto', mt: 5, p: 3, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 2 }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center', mb: 3 }}>
            Upload User Data
          </Typography>

          <TextField
            label="Name"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Age"
            type="number"
            fullWidth
            margin="normal"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Case Details"
            fullWidth
            margin="normal"
            value={caseDetails}
            onChange={(e) => setCaseDetails(e.target.value)}
            multiline
            rows={4}
            sx={{ mb: 2 }}
          />

          <Box sx={{ mt: 2, mb: 3 }}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>Upload Image</Typography>
            <Button variant="outlined" component="label" sx={{ width: '100%', textAlign: 'center' }}>
              {image ? image.name : 'Choose Image'}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUpload(e, setImage)}
                hidden
              />
            </Button>
          </Box>

          <Box sx={{ mt: 2, mb: 3 }}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>Upload PDF</Typography>
            <Button variant="outlined" component="label" sx={{ width: '100%', textAlign: 'center' }}>
              {pdf ? pdf.name : 'Choose PDF'}
              <input
                type="file"
                accept=".pdf"
                onChange={(e) => handleFileUpload(e, setPdf)}
                hidden
              />
            </Button>
          </Box>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
            disabled={loading}
            sx={{
              mt: 2,
              py: 1,
              bgcolor: loading ? 'grey.500' : 'primary.main',
              '&:hover': {
                bgcolor: loading ? 'grey.500' : 'primary.dark'
              }
            }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Submit'}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default UserData;
