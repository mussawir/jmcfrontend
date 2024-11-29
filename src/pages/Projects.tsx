import React, { useState, useEffect } from 'react';
import { Box, Typography, Toolbar, CssBaseline, Select, MenuItem, InputLabel, FormControl, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DrawerComponent from '../components/DrawerComponent';
import HeaderComponent from '../components/HeaderComponent';  
import { SelectChangeEvent } from '@mui/material';
import axios from 'axios';

function Projects() {
  // Project form states
  const [projectName, setProjectName] = useState('My Project');
  const [builderName, setBuilderName] = useState('ABC Builder');
  const [purchaserName, setPurchaserName] = useState('Goh Wang');
  const [propertyName, setPropertyName] = useState('2400 sqr feet flat');
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [selectedValue, setSelectedValue] = useState<string>('Select Schedule');
  const [showForm, setShowForm] = useState<boolean>(false);
  // const [projects, setProjects] = useState<any[]>([]);
  const [analysis_result, setanalysis_result] = useState<any | null>(null);  // To store extracted data as an object
  const [questions, setQuestions] = useState(Array(10).fill(''));
  const [backendMessage, setBackendMessage] = useState<string | null>(null);

  // const navigate = useNavigate();

  // Developer form states
  const [developerName, setDeveloperName] = useState('John Doe');
  const [companyName, setCompanyName] = useState('JMC'); 
  const [license, setLicense] = useState('LIC-12345678'); 
  const [address, setAddress] = useState('123 Main St, New York, NY');

  const [developerNamePopup, setDeveloperNamePopup] = useState(false);
  const [companyNamePopup, setCompanyNamePopup] = useState(false);

  const [developerMessage, setDeveloperMessage] = useState<string | null>(null); // State to store the message from backend
  const [loading, setLoading] = useState(false); // State to track loading status

  // Handle the "Bring data" button click


  const handleFetchDeveloperMessage = async () => {
 
    setLoading(true); // Set loading state to true when fetching
    try {
      const response = await axios.get('http://127.0.0.1:5000/developer-message'); // Adjust the endpoint accordingly
      setDeveloperMessage(response.data.message); // Store the response message
      alert(response.data.message);
    } catch (error) {
      console.error('Error fetching message:', error);
      alert("working");
      setDeveloperMessage('Failed to fetch message');
    } finally {
      setLoading(false); // Reset loading state after fetch is complete
    }
  };


  
  const handleBringCompanyName = () => {
    setCompanyNamePopup(true);
    setTimeout(() => {
      setCompanyNamePopup(false);
    }, 5000); // Hide after 5 seconds
  };

  const MyComponent = () => {
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);
  
    useEffect(() => {
      // Fetching message from the backend
      fetch('http://127.0.0.1:5000/extractdn')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          console.log('API response data:', data);
          setMessage(data.message); // Set the message
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setError(error.message); // Set the error message
        });
    }, []);
  
    const handleAlert = () => {
      alert(message);  // Show message in an alert box
    };
  
    return (
      <div>
        {/* Show message if available */}
        {message && (
          <div>
            <Typography variant="h6">API Response:</Typography>
            <Typography variant="body1">{message}</Typography>
            <Button variant="contained" onClick={handleAlert}>Alert Message</Button>
          </div>
        )}
  
        {/* Show error message if there is an error */}
        {error && (
          <div>
            <Typography variant="h6">Error:</Typography>
            <Typography variant="body1">{error}</Typography>
          </div>
        )}
      </div>
    );
  };
  

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setPdfFile(event.target.files[0]);
    } else {
      setPdfFile(null);
    }
  };

  // Handle schedule selection
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    setSelectedValue(value);

    // When Schedule H is selected, show the form
    if (value === 'Schedule H') {
      setShowForm(true);
    } else {
      setShowForm(false);
    }
  };

  // Handle project form submission (including project details and questions)
  // const handleProjectSubmit = async (event: React.FormEvent) => {
  //   event.preventDefault();

  //   const formData = new FormData();

  //   const fileInput = document.getElementById("fileInput") as HTMLInputElement;
  //   if (fileInput?.files?.length) {
  //     formData.append("file", fileInput.files[0]); // Append the file to the FormData object
  //   } else {
  //     alert("Please select a file.");
  //     return;
  //   }

  //   // Add project details to the form data
  //   formData.append('projectName', projectName);
  //   formData.append('builderName', builderName);
  //   formData.append('purchaserName', purchaserName);
  //   formData.append('propertyName', propertyName);

  //   try {
  //     const response = await axios.post("http://127.0.0.1:5000/createproject", formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data", // Make sure the Content-Type is set to multipart/form-data
  //       },
  //     });

  //     console.log("File uploaded successfully:", response.data);
  //     alert(response.data.id);
  //     setanalysis_result(response.data.extracted_data); // Extracted data is in 'extracted_data'
  //   } catch (error) {
  //     alert('Form submitting error');
  //     console.error("Error submitting form:", error);
  //   }
  // };


  const handleProjectSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

   
    try {
      const response = await axios.get("http://127.0.0.1:5000/test", {
        headers: {
          "Content-Type": "multipart/form-data", // Make sure the Content-Type is set to multipart/form-data
        },
      });
     console.log("response:", response.data.message);
     alert(response.data.message);  
     setBackendMessage(response.data.message); // Set the message from the backend

    } catch (error) {
      alert('Form submitting error');
      console.error("Error submitting form:", error);
      setBackendMessage('Failed to fetch message');
    }
  };
  // Update form fields if extracted data exists
  useEffect(() => {
    if (analysis_result) {
      setProjectName(analysis_result.projectName || '');
      setBuilderName(analysis_result.builderName || '');
      setPurchaserName(analysis_result.purchaserName || '');
      setPropertyName(analysis_result.propertyName || '');
      setQuestions(analysis_result.questions || Array(2).fill('')); // Update the questions if extracted data is present
    }
  }, [analysis_result]);

  // Handle question input change
  const handleQuestionChange = (index: number, value: string) => {
    const newQuestions = [...questions];
    newQuestions[index] = value;
    setQuestions(newQuestions);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <DrawerComponent />
      <HeaderComponent />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        {/* Show Projects Management headline only when form is not visible */}
        {!showForm && (
          <Typography variant="h4" gutterBottom>
            Projects Management
          </Typography>
        )}

        {/* Dropdown menu */}
        {!showForm && (
          <FormControl fullWidth>
            <InputLabel id="dropdown-label">Select Schedule</InputLabel>
            <Select
              labelId="dropdown-label"
              id="dropdown-select"
              value={selectedValue}
              label="Select Schedule"
              onChange={handleSelectChange}
            >
              <MenuItem value="Select Schedule">Select Schedule</MenuItem>
              <MenuItem value="Schedule A">Schedule A</MenuItem>
              <MenuItem value="Schedule B">Schedule B</MenuItem>
              <MenuItem value="Schedule C">Schedule C</MenuItem>
              <MenuItem value="Schedule D">Schedule D</MenuItem>
              <MenuItem value="Schedule E">Schedule E</MenuItem>
              <MenuItem value="Schedule F">Schedule F</MenuItem>
              <MenuItem value="Schedule G">Schedule G</MenuItem>
              <MenuItem value="Schedule H">Schedule H</MenuItem>
            </Select>
          </FormControl>
        )}

        {/* Show form when Schedule H is selected */}
        {showForm && (
          <center>
            <Box sx={{ marginTop: 2, width: 400, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box sx={{ width: '100%', textAlign: 'center' }}>
                <Typography variant="h5" gutterBottom>
                  Enter Project Details
                </Typography>

                <form onSubmit={handleProjectSubmit}>
                  <TextField
                    label="Project Name"
                    fullWidth
                    variant="outlined"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                  <Box id="result">  
                  {backendMessage ? (
          <Typography variant="body1">{backendMessage}</Typography>
        ) : (
          <Typography variant="body1">No message yet.</Typography>
        )}</Box>
                  <TextField
                    label="Builder Name"
                    fullWidth
                    variant="outlined"
                    value={builderName}
                    onChange={(e) => setBuilderName(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                  <TextField
                    label="Purchaser Name"
                    fullWidth
                    variant="outlined"
                    value={purchaserName}
                    onChange={(e) => setPurchaserName(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                  <TextField
                    label="Property Name"
                    fullWidth
                    variant="outlined"
                    value={propertyName}
                    onChange={(e) => setPropertyName(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />

                  <Button variant="outlined" component="label" fullWidth sx={{ marginBottom: 2 }}>
                    Select File
                    <input type="file" id="fileInput" name="file" hidden accept="application/pdf" onChange={handleFileChange} />
                  </Button>
                  <Button variant="contained" color="primary" fullWidth type="submit">
                    Create Project
                  </Button>
                </form>
              </Box>
            </Box>
          </center>
        )}

        {/* Display extracted data below the form */}
        {analysis_result && (
          <Box sx={{ marginTop: 2 }}>
            <Typography variant="h6" gutterBottom>
              Extracted Data:
            </Typography>
            <pre>{JSON.stringify(analysis_result, null, 2)}</pre>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Projects;
