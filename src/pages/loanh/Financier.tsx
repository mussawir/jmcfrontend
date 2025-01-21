import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, TextField, Button } from '@mui/material';
import axios from 'axios';

interface FinancierFormProps {
  shortHeading: string;
  questions: string[];
}

const FinancierForm: React.FC<FinancierFormProps> = ({ shortHeading, questions }) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [backendMessage, setBackendMessage] = useState<string | null>(null);

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

    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      const response = await axios.post(`${apiUrl}/search-financier`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setBackendMessage(response.data.response);
    } catch (error) {
      console.error("Error submitting search:", error);
      setBackendMessage('Error occurred while searching.');
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Submitted Data: ", formData);
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
                  <Button variant="contained" color="primary" fullWidth type="submit">
                    Search
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
                  }}
                >
                  {backendMessage ? (
                    <Typography variant="body1" color="textSecondary">
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

// Example usage with financier data
const financierQuestions = [
  "Financier name",
  "Financier identity card",
  "Financier contact number",
  "Financier email address",
  "Loan Amount",
  "Interest Rate",
  "Loan Start Date",
  "Loan End Date",
  "Payment Schedule",
];

const FinancierFormWrapper: React.FC = () => (
  <FinancierForm shortHeading="Financier" questions={financierQuestions} />
);

export default FinancierFormWrapper;
