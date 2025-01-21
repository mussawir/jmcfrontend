
import React, { useState, useEffect } from 'react';
import { Box, Typography, Toolbar, CssBaseline, Select, MenuItem, InputLabel, FormControl, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DrawerComponent from '../components/DrawerComponent';
import HeaderComponent from '../components/HeaderComponent';  
import { SelectChangeEvent } from '@mui/material';
import axios from 'axios';
interface Developer {
  id: string;
  developerName: string;
}
interface Party {
  id: string;
  name: string;
}
function Projects() {
  // Project form states
  const [projectName, setProjectName] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [description, setDescription] = useState('');
  const [matterCode, setMatterCode] = useState("");
  const [propertyName, setPropertyName] = useState('');
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [selectedValue, setSelectedValue] = useState<string>('Select Schedule');
  const [showForm, setShowForm] = useState<boolean>(false);
  const [analysis_result, setanalysis_result] = useState<any | null>(null);  // To store extracted data as an object
  const [questions, setQuestions] = useState(Array(10).fill(''));
  const [backendMessage, setBackendMessage] = useState<string | null>(null);
  const [developers, setDevelopers] = useState<Developer[]>([]);
  const [selectedDeveloper, setSelectedDeveloper] = useState<string>('');
  const [parties, setParties] = useState<Party[]>([]);
  const [selectParty, setSelectParty] = useState<string>('');
  const [developerName, setDeveloperName] = useState('John Doe');
  const [companyName, setCompanyName] = useState('JMC'); 
  const [license, setLicense] = useState('LIC-12345678'); 
  const [address, setAddress] = useState('123 Main St, New York, NY');
  const [developerNamePopup, setDeveloperNamePopup] = useState(false);
  const [companyNamePopup, setCompanyNamePopup] = useState(false);
  const [developerMessage, setDeveloperMessage] = useState<string | null>(null); // State to store the message from backend
  const [loading, setLoading] = useState(false); // State to track loading status
  const navigate = useNavigate();

  useEffect(() => {
    // Generate random 4-digit number on page load
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    setMatterCode(randomCode.toString());
  }, []);

  // const handleFetchDeveloperMessage = async () => {
 
  //   setLoading(true); // Set loading state to true when fetching
  //   try {
  //     const response = await axios.get('http://127.0.0.1:5000/developer-message'); // Adjust the endpoint accordingly
  //     setDeveloperMessage(response.data.message); // Store the response message
  //     // alert(response.data.message);
  //   } catch (error) {
  //     console.error('Error fetching message:', error);
  //     alert("working");
  //     setDeveloperMessage('Failed to fetch message');
  //   } finally {
  //     setLoading(false); // Reset loading state after fetch is complete
  //   }
  // };


  // const MyComponent = () => {
  //   const [message, setMessage] = useState('');
  //   const [error, setError] = useState(null);
  
  //   useEffect(() => {
  //     // Fetching message from the backend
  //     fetch(`${apiUrl}/`'http://127.0.0.1:5000/extractdn')
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error('Network response was not ok');
  //         }
  //         return response.json();
  //       })
  //       .then((data) => {
  //         console.log('API response data:', data);
  //         setMessage(data.message); // Set the message
  //       })
  //       .catch((error) => {
  //         console.error('Error fetching data:', error);
  //         setError(error.message); // Set the error message
  //       });
  //   }, []);
  
  //   const handleAlert = () => {
  //     alert(message);  // Show message in an box
  //   };
  
  //   return (
  //     <div>
  //       {/* Show message if available */}
  //       {message && (
  //         <div>
  //           <Typography variant="h6">API Response:</Typography>
  //           <Typography variant="body1">{message}</Typography>
  //           <Button variant="contained" onClick={handleAlert}>Alert Message</Button>
  //         </div>
  //       )}
  
  //       {/* Show error message if there is an error */}
  //       {error && (
  //         <div>
  //           <Typography variant="h6">Error:</Typography>
  //           <Typography variant="body1">{error}</Typography>
  //         </div>
  //       )}
  //     </div>
  //   );
  // };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    if (event.target.name === 'developer') {
      setSelectedDeveloper(event.target.value);
    } else {
      setSelectedValue(event.target.value);
      setShowForm(event.target.value === 'Schedule H');
    }
  };
  // Handle project form submission (including project details and questions)
  const handleProjectSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    const formData = new FormData();

    // formData.append('selectedDeveloper', selectedDeveloper);
    formData.append('selectParty', selectParty);
    formData.append('projectName', projectName);
    formData.append('createdAt', createdAt);
    formData.append('description', description);
    formData.append('propertyName', propertyName);
    formData.append('matterCode', matterCode);

    try {
      const response = await axios.post("http://127.0.0.1:5000/createproject", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Make sure the Content-Type is set to multipart/form-data
        },
      });

      console.log("File uploaded successfully:", response.data);
      // alert(response.data.message);
      setanalysis_result(response.data.extracted_data); // Extracted data is in 'extracted_data'
      const props = { project_id: response.data.id};
      navigate('/bookmark', { state: props });
    } catch (error) {
      alert('Form submitting error');
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    const fetchDevelopers = async () => {
      try {
        const apiUrl = process.env.API_URL;
        const response = await axios.get(`${apiUrl}/get-developers`);
        setDevelopers(response.data); 
      } catch (error) {
        console.error('Error fetching developers:', error);
      }
    };

    fetchDevelopers();
  }, []);

  useEffect(() => {
    const fetchParty = async () => {
      try {
        const apiUrl = process.env.API_URL;
        const response = await axios.get(`${apiUrl}/get-parties`); 
        setParties(response.data);
      } catch (error) {
        console.error('Error fetching developers:', error);
      }
    };

    fetchParty();
  }, []);

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
            Matters Management
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
              <MenuItem value="Schedule H">Schedule H</MenuItem>
              <MenuItem value="Schedule G">Schedule G</MenuItem>
              {/* <MenuItem value="Schedule A">Schedule A</MenuItem>
              <MenuItem value="Schedule B">Schedule B</MenuItem>
              <MenuItem value="Schedule C">Schedule C</MenuItem>
              <MenuItem value="Schedule D">Schedule D</MenuItem>
              <MenuItem value="Schedule E">Schedule E</MenuItem>
              <MenuItem value="Schedule F">Schedule F</MenuItem> */}
            </Select>
          </FormControl>
        )}

        {/* Show form when Schedule H is selected */}
        {showForm && (
          <center>
            <Box sx={{ marginTop: 2, width: 400, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box sx={{ width: '100%', textAlign: 'center' }}>
                <Typography variant="h5" gutterBottom>
                  Create New Matter
                </Typography>

                <form onSubmit={handleProjectSubmit}>
                 {/* Dropdown */}
                 {/* <FormControl fullWidth>
                  <InputLabel id="developer-dropdown-label">Select Developer</InputLabel>
                  <Select
                    labelId="developer-dropdown-label"
                    id="developer-dropdown"
                    value={selectedDeveloper}
                    onChange={(event) => setSelectedDeveloper(event.target.value)}
                    label="Select Developer"
                  >
                    {developers.map((developer) => (
                    <MenuItem key={developer.id} value={developer.developerName}>
                      {developer.developerName}
                    </MenuItem>
                  ))}
                  </Select>
                </FormControl>

                {developers.length === 0 && (
                <Typography variant="body2" color="error">
                  No developers found. Please check your API connection.
                </Typography>
              )} */}
                 <FormControl fullWidth sx={{ marginTop: 2, }} >
                  <InputLabel id="developer-dropdown-label">Party</InputLabel>
                  <Select
                    labelId="developer-dropdown-label"
                    id="developer-dropdown"
                    value={selectParty}
                    onChange={(event) => setSelectParty(event.target.value)}
                    label="Select Developer"
                  >
                    {parties.map((party) => (
                    <MenuItem key={party.id} value={party.name}>
                      {party.name}
                    </MenuItem>
                  ))}
                  </Select>
                </FormControl>

                {parties.length === 0 && (
                <Typography variant="body2" color="error">
                  No parties found. Please check your API connection.
                </Typography>
              )}
                  <TextField
                    // label="Matter Code"
                    fullWidth
                    variant="outlined"
                    value={matterCode}
                    onChange={(e) => setMatterCode(e.target.value)}
                    sx={{ marginTop: 2, }}
                  />
                  <TextField
                    label="Project Name"
                    fullWidth
                    variant="outlined"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    sx={{ marginBottom: 2, marginTop: 2, }}
                  />
                  <TextField
                    type="date"
                    fullWidth
                    variant="outlined"
                    value={createdAt}
                    onChange={(e) => setCreatedAt(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                  <TextField
                    label="Description"
                    fullWidth
                    variant="outlined"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                  {/* <Button variant="outlined" component="label" fullWidth sx={{ marginBottom: 2 }}>
                    Select File
                    <input type="file" id="fileInput" name="file" hidden accept="application/pdf" onChange={handleFileChange} />
                  </Button> */}
                  <Button variant="contained" color="primary" fullWidth type="submit">
                    Create Matter
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