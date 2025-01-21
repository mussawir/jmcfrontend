import React, { useState, useEffect } from 'react';
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

  const [formData, setFormData] = useState<Record<string, string>>({
    firstPurchaserName:'',
    firstPurchaserIdentityCard:'',
  });
  

  // Handle input change for form fields
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getData = async (prompt:string, selection:any) => {
    const formData = new FormData();
    // Add project details to the form data
    formData.append('searchQuery', prompt);
    
    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      const response = await axios.post(`${apiUrl}/search-purchaser`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Make sure the Content-Type is set to multipart/form-data
        },
      });
      alert(response.data.response);
      setBackendMessage(response.data.response);
      switch (selection) {
        case 'PName':
            setFormData(prevFormData => ({
                ...prevFormData,
                firstPurchaserName: response.data.response
              }));
              break
        case 'IdNumber':
            setFormData(prevFormData => ({
                ...prevFormData,
                firstPurchaserIdentityCard: response.data.response
              }));
              break      
        default:
          return <div>Invalid mode</div>;
      }
  
    //   setanalysis_result(response.data.extracted_data); // Extracted data is in 'extracted_data'
    } catch (error) {
      alert(error);
      console.error("Error submitting form:", error);
    }
  };

  
  function delay(ms:any) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function processSearch() {
    await getData("get 1st purchaser/company name only", "PName");
    // await getData("get 1st purchaser/company identity card number only", "IdNumber");
  }


  useEffect(() => {
    processSearch();       
    }, []);



  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('searchQuery', searchQuery);
    formData.append('pId', pId);
    setLoading(true);
    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      const response = await axios.post(`${apiUrl}/search-purchaser`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setBackendMessage(response.data.response);
            setFormData(prevFormData => ({
            ...prevFormData,
            firstPurchaserrName: response.data.response
          }));
          //setanalysis_result(response.data.extracted_data); // Extracted data is in 'extracted_data'
          // alert(response.data.result)
        } catch (error) {
            alert('Form submitting error');
            console.error("Error submitting form:", error);
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
      const apiUrl = process.env.REACT_APP_API_URL;
      const response = await axios.put(`${apiUrl}/purchaserinfo`, {
        project_id: pId, // The unique project ID
        formData: mappedFormData,
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
          <Grid spacing={2} display={'flex'}>
            {/* Left Column: Form */}
            <Grid item xs={12} md={8} width={'80%'}>
              <Paper sx={{ padding: 2 }} elevation={3}>
                <Typography variant="h6" gutterBottom>
                  {shortHeading} is/are individual Malaysian 
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
            <Grid item xs={12} md={6} >
              <Paper sx={{ padding: 2 }} elevation={3} style={{ height: '100%', }}>
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
