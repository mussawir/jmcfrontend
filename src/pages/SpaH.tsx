import React, {useEffect, useState } from 'react';
import { Box, Typography, Grid, Toolbar, CssBaseline, Select, MenuItem, InputLabel, FormControl, Paper, TextField, Button } from '@mui/material';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import DrawerComponent from '../components/DrawerComponent';
import HeaderComponent from '../components/HeaderComponent';
import ChatLayout from '../components/ChatLayout';

// Define the Case interface
interface Case {
    title: string;
    status: string;
    dateFiled?: string;
    lastUpdate?: string;
    documents?: string[]; // New property for associated documents
  }

function DeveloperForm() {
    // State to manage form data
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
        developerAuthorised1stSignatoryName: '',
        developerAuthorised1stIdentityCardNumber: '',
        developerAuthorised1stSignatoryDesignation: '',
        developerAuthorised2ndSignatoryName: '',
        developerAuthorised2ndIdentityCardNumber: '',
        developerAuthorised2ndSignatoryDesignation: '',
    });
    const location = useLocation();
    const props = location.state;
    // alert(props.project_id);
    const [searchQuery, setSearchQuery] = useState('');
    const [cases, setCases] = useState<Case[]>([]);
    const navigate = useNavigate();
    const [backendMessage, setBackendMessage] = useState<string | null>(null);

    // useEffect(() => {
    //     const token = localStorage.getItem('ACCESS_TOKEN');
    //     if (!token) {
    //       navigate('/login');
    //     } else {
    //       fetchCaseData(token);
    //     }
    //   }, [navigate]);
    
    //   const fetchCaseData = async (token: string) => {
    //     try {
    //       const response = await fetch('http://127.0.0.1:5000/extract-spah', {
    //         headers: {
    //           Authorization: `Bearer ${token}`,
    //         },
    //       });
    //       if (response.ok) {
    //     //    alert(response);
    //         // const data: Case[] = await response.json();
    //         // setBackendMessage(response.statusText); // Set the message from the backend
    //         // setCases(data);
    //         const data = await response.json();
    //         setBackendMessage(data.response);
    //       } else {
    //         console.error('Error fetching case data:', response.statusText);
    //       }
    //     } catch (error) {
    //       console.error('Error fetching case data:', error);
    //     }
    //   };

    // Handle input change for form fields
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const [isChatOpen, setIsChatOpen] = useState(false);

    const handleOpenChat = () => {
      setIsChatOpen(true);
    };
  
    const handleCloseChat = () => {
      setIsChatOpen(false);
    };
// Handle project form submission (including project details and questions)
 const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    // Add project details to the form data
    formData.append('searchQuery', searchQuery);
    
    try {
      const response = await axios.post("http://127.0.0.1:5000/search-developer", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Make sure the Content-Type is set to multipart/form-data
        },
      });
      setBackendMessage(response.data.response);
    //   setanalysis_result(response.data.extracted_data); // Extracted data is in 'extracted_data'
    } catch (error) {
      alert('Form submitting error');
      console.error("Error submitting form:", error);
    }
  };

    return (
        <Box sx={{ display: 'flex', backgroundColor: '#f7f9fc', minHeight: '100vh' }}>
        <CssBaseline />
        <DrawerComponent />
        <Box sx={{ flexGrow: 1 }}>
          <HeaderComponent />
          <Box component="main" sx={{ p: 3 }}>
          <Grid style={styles.Gridoffilbut} >
        <div>
      {/* Button to open chat */}
      <button onClick={() => setIsChatOpen(true)} style={styles.openButton}>
        Filter
      </button>

      {/* Chat Layout */}
      {isChatOpen && (
        <div style={styles.overlay}>
          <div style={styles.chatContainer}>
            <ChatLayout />
            <button
              onClick={() => setIsChatOpen(false)} // Close the chat on click
              style={styles.closeButton}
            >
              Close Chat
            </button>
          </div>
        </div>
      )}
    </div>
        </Grid>

            <Toolbar />
            <Grid container spacing={2}>
                {/* Left Column: Form */}
                <Grid item xs={12} md={8}>
                    <Paper sx={{ padding: 2 }} elevation={3}>
                        <Typography variant="h6" gutterBottom>
                            Developer Information Form
                        </Typography>
                        <Grid container spacing={2}>
                            {Object.entries(formData).map(([key, value]) => (
                                <Grid item xs={12} sm={6} key={key}>
                                    <TextField
                                        fullWidth
                                        label={key
                                            .replace(/([a-z])([A-Z])/g, '$1 $2') // Convert camelCase to spaced words
                                            .replace(/developer /i, '') // Remove "Developer " from label
                                            .trim()}
                                        name={key}
                                        value={value}
                                        onChange={handleInputChange}
                                        variant="outlined"
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Paper>
                </Grid>

                {/* Right Column: Box */}
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
                      
                        <Typography variant="h6" gutterBottom>
                            Search Result
                        </Typography>
                        <Box
                            sx={{
                                border: '0px dashed gray',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
             {backendMessage && (
        <div style={{ marginTop: -300 }}>
           <Typography variant="body1" color="textSecondary">
           <p style={{ color: 'grey' }}>{backendMessage}</p>  
                            </Typography>  
         
        </div>
      )}
                           
                            {/* <Typography variant="body1" color="textSecondary">
                                Placeholder for additional content
                            </Typography> */}
                        </Box>
                    </Paper>
                </Grid>
                           {/* Submit Button */}
                           <Grid item xs={12}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
                            <Button type="submit" variant="contained" color="primary">
                                Submit
                            </Button>
                        </Box>
                    </Grid>
            </Grid>
        </Box>
        </Box>
        </Box>
        
    );
}
const styles = {
    openButton: {
      padding: "10px 50px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
    },
    overlay: {
      position: "fixed" as "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    chatContainer: {
      position: "relative" as "relative",
      width: "400px",
      height: "500px",
      backgroundColor: "#ffffff",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    closeButton: {
      position: "absolute" as "absolute",
      top: "10px",
      right: "10px",
      padding: "8px 12px",
      backgroundColor: "orange",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "14px",
    },
    Gridoffilbut :{
      marginTop: '5%',
      display: 'flex',
      justifyContent: 'center',
    }};
export default DeveloperForm;
