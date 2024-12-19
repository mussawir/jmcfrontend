import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, CssBaseline, Paper, TextField, Button, CircularProgress  } from '@mui/material';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import DrawerComponent from '../../components/DrawerComponent';
import HeaderComponent from '../../components/HeaderComponent';
import ChatLayout from '../../components/ChatLayout';

// Define the Case interface
interface Case {
    title: string;
    status: string;
    dateFiled?: string;
    lastUpdate?: string;
    documents?: string[]; // New property for associated documents
  }

function DeveloperForm() {
    const location = useLocation();
    const props = location.state;  
    const [pId] = useState(props.project_id);
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
        // projId: pId,
    });
 
   
    // alert("id here " + pId);
    const [searchQuery, setSearchQuery] = useState('');
    const [cases, setCases] = useState<Case[]>([]);
    const navigate = useNavigate();
    const [backendMessage, setBackendMessage] = useState<string | null>(null);
    const [Message, setMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [loadingButtons, setLoadingButtons] = useState<{ [key: string]: boolean }>({});


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

    // const handleOpenChat = () => {
    //   setIsChatOpen(true);
    // };
  
    const handleCloseChat = () => {
      setIsChatOpen(false);
    };
    
    const handleDeveloperFormSubmit = async (event: React.FormEvent) => {
      event.preventDefault();
      
      try {
        const response = await axios.put("http://127.0.0.1:5000/updateinfo", formData, {
          headers: { "Content-Type": "application/json" },
        });
        // alert(response.data.Message)
        // console.log("Response:", response.data);
        alert(`${response.data.message}`);
      } catch (error) {
          alert('Form submitting error');
          console.error("Error submitting form:", error);
      }
    };
// Handle project form submission (including project details and questions)
    const handleSearch = async (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData();
        // Add project details to the form data
        formData.append('searchQuery', searchQuery);
        formData.append('pId', pId);
        
        try {
          const response = await axios.post("http://127.0.0.1:5000/search-developer", formData, {
            headers: {
              "Content-Type": "multipart/form-data", // Make sure the Content-Type is set to multipart/form-data
            },
          });
          // alert("Submited")
            setBackendMessage(response.data.response);
            setFormData(prevFormData => ({
            ...prevFormData,
            developerName: response.data.response
          }));
          //setanalysis_result(response.data.extracted_data); // Extracted data is in 'extracted_data'
        } catch (error) {
            alert('Form submitting error');
            console.error("Error submitting form:", error);
        }
    };
    const getData = async (prompt:string, selection:any) => {
      const formData = new FormData();
      // Add project details to the form data
      formData.append('searchQuery', prompt);
      
      try {
        const response = await axios.post("http://127.0.0.1:5000/search-developer", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setBackendMessage(response.data.response);
        switch (selection) {
          case 'DName':
              setFormData(prevFormData => ({
                  ...prevFormData,
                  developerName: response.data.response
                }));
                break
          case 'RNumber':
              setFormData(prevFormData => ({
                  ...prevFormData,
                  developerCompanyRegistrationNumber: response.data.response
                }));
                break
          case 'CompAddress':
              setFormData(prevFormData => ({
                    ...prevFormData,
                    developerRegisteredOfficeAddress: response.data.response
                    }));
                    break      
          case 'BusinAddress':
              setFormData(prevFormData => ({
                    ...prevFormData,
                    developerPlaceOfBusinessAddress: response.data.response
                    }));
                    break      
          case 'FileRefNum':
              setFormData(prevFormData => ({
                    ...prevFormData,
                    developerFileReferenceNumber: response.data.response
                    }));
                    break      
          case 'LiceNum':
              setFormData(prevFormData => ({
                    ...prevFormData,
                    developerLicenceNumber: response.data.response
                    }));
                    break      
          case 'ContNum':
              setFormData(prevFormData => ({
                    ...prevFormData,
                    developerContactNumber: response.data.response
                    }));
                    break      
          case 'EmailAdd':
              setFormData(prevFormData => ({
                    ...prevFormData,
                    developerEmailAddress: response.data.response
                    }));
                    break      
          case 'InchaName':
              setFormData(prevFormData => ({
                    ...prevFormData,
                    developerPersonInChargeName: response.data.response
                    }));
                    break      
          case 'InchaCont':
              setFormData(prevFormData => ({
                    ...prevFormData,
                    developerPersonInChargeContactNumber: response.data.response
                    }));
                    break      
          case 'InchaEmail':
              setFormData(prevFormData => ({
                    ...prevFormData,
                    developerPersonInChargeEmailAddress: response.data.response
                    }));
                    break      
          case 'SignName':
              setFormData(prevFormData => ({
                    ...prevFormData,
                    developerAuthorised1stSignatoryName: response.data.response
                    }));
                    break      
          case 'AuthIdNumber':
              setFormData(prevFormData => ({
                    ...prevFormData,
                    developerAuthorised1stIdentityCardNumber: response.data.response
                    }));
                    break      
          case 'AuthSignDesi':
              setFormData(prevFormData => ({
                    ...prevFormData,
                    developerAuthorised1stSignatoryDesignation: response.data.response
                    }));
                    break      
          case 'Auth2ndSign':
              setFormData(prevFormData => ({
                    ...prevFormData,
                    developerAuthorised2ndSignatoryName: response.data.response
                    }));
                    break      
          case 'Auth2ndIdNum':
              setFormData(prevFormData => ({
                    ...prevFormData,
                    developerAuthorised2ndIdentityCardNumber: response.data.response
                    }));
                    break      
          case 'Auth2ndSignDes':
              setFormData(prevFormData => ({
                    ...prevFormData,
                    developerAuthorised2ndSignatoryDesignation: response.data.response
                    }));
                    break      
          default:
            return <div>Invalid mode</div>;
        }
    
      //   setanalysis_result(response.data.extracted_data); // Extracted data is in 'extracted_data'
      } catch (error) {
        alert('Form submitting error');
        console.error("Error submitting form:", error);
      }
    };

  //   useEffect(() => {
  //   processSearch();       
  //   }, []);

  function delay(ms:any) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function processSearch() {
    await getData("get developer/company name only", "DName");
    await getData("get developer/company registration number only", "RNumber");
    await getData("get developer/company registration office Address only", "CompAddress");
    await getData("get developer/company place of business Address only", "BusinAddress");
    await getData("get developer/company file refrence number only", "FileRefNum");
    await getData("get developer/company licence number only", "LiceNum");
    await getData("get developer/company contact number only", "ContNum");
    await getData("get developer/company email address only", "EmailAdd");
    await getData("get developer/company personal Incharge name only", "InchaName");
    await getData("get developer/company personal Incharge contact number only", "InchaCont");
    await getData("get developer/company personal Incharge email address only", "InchaEmail");
    await getData("get developer/company authorised 1st signature name only", "SignName");
    await getData("get developer/company authorised 1st identity number only", "AuthIdNumber");
    await getData("get developer/company authorised 1st signature design only", "AuthSignDesi");
    await getData("get developer/company authorised 2nd signature name only", "Auth2ndSign");
    await getData("get developer/company authorised 2nd identity number only", "Auth2ndIdNum");
    await getData("get developer/company authorised 2nd signature design only", "Auth2ndSignDes");
  }
    const handleRefreshField = async (fieldKey: string) => {
      setLoadingButtons((prev) => ({ ...prev, [fieldKey]: true }));
      try {
          let prompt = "";
          switch (fieldKey) {
              case 'developerName':
                  prompt = "get developer/company name only";
                  break;
              case 'developerCompanyRegistrationNumber':
                  prompt = "get developer/company registration number only";
                  break;
              case 'developerRegisteredOfficeAddress':
                  prompt = "get developer/company registration office Address only";
                  break;
              case 'developerPlaceOfBusinessAddress':
                  prompt = "get developer/company place of business address only";
                  break;
              case 'developerFileReferenceNumber':
                  prompt = "get developer/company file refrence number only";
                  break;
              case 'developerLicenceNumber':
                  prompt = "get developer/company licence number only";
                  break;
              case 'developerContactNumber':
                  prompt = "get developer/company contact number only";
                  break;
              case 'developerEmailAddress':
                  prompt = "get developer/company email address only";
                  break;
              case 'developerPersonInChargeName':
                  prompt = "get developer/company personal incharge name only";
                  break;
              case 'developerPersonInChargeContactNumber':
                  prompt = "get developer/company personal incharge contact number only";
                  break;
              case 'developerPersonInChargeEmailAddress':
                  prompt = "get developer/company personal incharge email address only";
                  break;
              case 'developerAuthorised1stSignatoryName':
                  prompt = "get developer/company authorised 1st signature name only";
                  break;
              case 'developerAuthorised1stIdentityCardNumber':
                  prompt = "get developer/company authorised 1st identity card number only";
                  break;
              case 'developerAuthorised1stSignatoryDesignation':
                  prompt = "get developer/company authorised 1st signature disignation only";
                  break;
              case 'developerAuthorised2ndSignatoryName':
                  prompt = "get developer/company authorised 2nd signature name only";
                  break;
              case 'developerAuthorised2ndIdentityCardNumber':
                  prompt = "get developer/company authorised 2nd identity card number only";
                  break;
              case 'developerAuthorised2ndSignatoryDesignation':
                  prompt = "get developer/company authorised 2nd signature designation only";
                  break;
              // Add more cases as needed
              default:
                  console.warn(`No specific prompt for field: ${fieldKey}`);
                  return;
          }
          await getData(prompt, fieldKey); // Call getData with the prompt and fieldKey
      } catch (error) {
          console.error(`Error refreshing field ${fieldKey}:`, error);
      } finally {
        setLoadingButtons((prev) => ({ ...prev, [fieldKey]: false })); // Stop spinner after process
      }
    };

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <CssBaseline />
        {/* <DrawerComponent /> */}
        <Box sx={{ flexGrow: 1 }}>
          <HeaderComponent />
          <Box component="main" sx={{ p: 3 }}>
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
                                    {/* <Button
                                      variant="contained"
                                      color="primary"
                                      sx={{
                                        marginLeft: 1,
                                        padding: "4px 8px",
                                        fontSize: "0.8rem",
                                        minWidth: "auto",
                                        backgroundColor: "#007bff",
                                        color: "#fff",
                                        "&:hover": {
                                          backgroundColor: "#0056b3",
                                        },
                                      }}
                                      onClick={() => handleRefreshField(key)} // Only fetch data and update the state
                                      disabled={loadingButtons[key]}
                                    >
                                      {loadingButtons[key] ? <CircularProgress size={10} color="inherit" /> : "..."}
                                    </Button> */}

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
                 
                 <input
                  type="hidden"
                  // value={pId}
                />
                 
                  {/* <input
                   type="hidden"
                   name="projectId"
                   value="674e1f6a8b4214484d70895b" // replace with your project id value
                     /> */}
                   <Button variant="contained" color="primary" fullWidth type="submit">
                      Search
                  </Button>
                  </form>
                  <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
                      Search Result
                  </Typography>
                  <Box
                      sx={{
                        // border: '1px solid gray',
                        borderRadius: 1,
                        height: 420, // Fixed height
                        overflowY: 'auto', // Enable vertical scrolling
                        padding: 1,
                      }}
                  >
                     {loading ? (
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <CircularProgress />
                  </Box>
                ) : (
                  backendMessage && (
                    <Typography variant="body1" color="textSecondary" sx={{ whiteSpace: 'pre-wrap' }}>
                      {backendMessage}
                    </Typography>
                  )
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
                      <Button type="submit" variant="contained" color="primary" onClick={handleDeveloperFormSubmit}>
                          Update info
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