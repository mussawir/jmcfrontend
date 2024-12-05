import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, TextField, Button, CircularProgress  } from '@mui/material';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

interface PurchaserFormProps {
  shortHeading: string;
  questions: string[];
}

const PurchaserForm: React.FC<PurchaserFormProps> = ({ shortHeading, questions }) => {
  const location = useLocation();
  const props = location.state;
  const [pId] = useState(props.project_id);
  // alert(pId)
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [backendMessage, setBackendMessage] = useState<string | null>(null);
  const [searchResult, setSearchResult] = useState<string | null>(null);

  const [formData, setFormData] = useState<Record<string, string>>({});
  

  // Handle input change for form fields
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('searchQuery', searchQuery);
    formData.append('pId', pId);
    setLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:5000/search-purchaser", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // setBackendMessage(response.data.response);
      if (response.data.response) {
        setSearchResult(response.data.response);
        setBackendMessage(null);
      } else {
        setSearchResult(null);
        setBackendMessage("No data found.");
      }
    } catch (error) {
      console.error("Error submitting search:", error);
      setBackendMessage('Error occurred while searching.');
    } finally {
      setLoading(false); // End loading
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const customKeys = {
      question_0: "firstPurchaserName",
      question_1: "firstPurchaserIdentityCard",
      question_2: "firstPurchaserContactNumber",
      question_3: "firstPurchaserEmailAddress",
      question_4: "secondPurchaserName",
      question_5: "secondPurchaserIdentityCard",
      question_6: "secondPurchaserContactNumber",
      question_7: "secondPurchaserEmailAddress",
      question_8: "purchaserCorrespondenceAddress",
    };
    const mappedFormData: Record<string, string> = {};
  Object.entries(formData).forEach(([key, value]) => {
    const newKey = customKeys[key as keyof typeof customKeys];
    if (newKey) {
      mappedFormData[newKey] = value;
    }
  });
  
    try {
      const response = await axios.put('http://127.0.0.1:5000/purchaserinfo', {
        project_id: pId, // The unique project ID
        formData: mappedFormData,        // The form data object with new values
      });
      // alert(response.data.message);
      if (response.status === 200) {
        alert(JSON.stringify(response.data, null, 2));  // Pretty print JSON
    } else {
        alert(JSON.stringify(response.data, null, 2));  // Pretty print JSON
    }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while saving the form.');
    }
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Box component="main" sx={{ p: 3 }}>
          <Grid container spacing={2}>
            {/* Left Column: Form */}
            <Grid item xs={12} md={8}>
              <Paper sx={{ padding: 2 }} elevation={3}>
                <Typography variant="h6" gutterBottom>
                  {shortHeading} Information Form
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    {questions.map((question, index) => (
                      <Grid item xs={12} sm={6} key={index}>
                        <TextField
                          fullWidth
                          label={question}
                          name={`question_${index}`}
                          value={formData[`question_${index}`] || ''}
                          onChange={handleInputChange}
                          variant="outlined"
                        />
                      </Grid>
                    ))}
                  </Grid>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                    <Button type="submit" variant="contained" color="primary">
                      Submit
                    </Button>
                  </Box>
                </form>
              </Paper>
            </Grid>

            {/* Right Column: Search Box */}
            <Grid item xs={12} md={4}>
              <Paper sx={{ padding: 2, height: '100%' }} elevation={3}>
                <form onSubmit={handleSearch}>
                  <TextField
                    label="Search Key Info"
                    fullWidth
                    variant="outlined"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                  <Button variant="contained" color="primary" fullWidth type="submit" disabled={loading}>
                    {loading ? <CircularProgress size={24} color="inherit" /> : "Search"}
                  </Button>
                </form>
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  Search Result
                </Typography>
                <Box
                  sx={{
                    border: '1px dashed gray',
                    height: '60%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    maxHeight: 200, // Set a maximum height for the box
                    overflow: 'auto', // Enable scrollbar when content exceeds maxHeight
                    flexDirection: 'column',
                    padding: 1,
                  }}
                >
                  {loading ? (
                    <CircularProgress size={40} />
                  ) : searchResult ? (
                    <Typography variant="body1" color="textSecondary">
                      {searchResult}
                    </Typography>
                  ) : backendMessage ? (
                    <Typography variant="body1" color="error">
                      {backendMessage}
                    </Typography>
                  ) : (
                    <Typography variant="body1" color="textSecondary">
                      No search results yet
                    </Typography>
                  )}
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

// Example usage with purchaser data
const questions = [
  "1st Purchaser name",
  "1st Purchaser identity card",
  "1st Purchaser contact number",
  "1st Purchaser email address",
  "2nd Purchaser name",
  "2nd Purchaser identity card",
  "2nd Purchaser contact number",
  "2nd Purchaser email address",
  "Purchaser correspondence address",
];

const PurchaserFormWrapper: React.FC = () => (
  <PurchaserForm shortHeading="Purchaser" questions={questions} />
);

export default PurchaserFormWrapper;
