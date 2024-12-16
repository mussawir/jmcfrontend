
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
function Projects() {
  // Project form states
  const [projectName, setProjectName] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [description, setDescription] = useState('');
  const [propertyName, setPropertyName] = useState('');
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [selectedValue, setSelectedValue] = useState<string>('Select Schedule');
  const [showForm, setShowForm] = useState<boolean>(false);
  // const [projects, setProjects] = useState<any[]>([]);
  const [analysis_result, setanalysis_result] = useState<any | null>(null);  // To store extracted data as an object
  const [questions, setQuestions] = useState(Array(10).fill(''));
  const [backendMessage, setBackendMessage] = useState<string | null>(null);
  const [developers, setDevelopers] = useState<Developer[]>([]);
  const [selectedDeveloper, setSelectedDeveloper] = useState<string>('');

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
  const navigate = useNavigate();
  const [text, setText] = useState<string>('');
  // Handle the "Bring data" button click


  const handleFetchDeveloperMessage = async () => {
 
    setLoading(true); // Set loading state to true when fetching
    try {
      const response = await axios.get('http://127.0.0.1:5000/developer-message'); // Adjust the endpoint accordingly
      setDeveloperMessage(response.data.message); // Store the response message
      // alert(response.data.message);
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
      alert(message);  // Show message in an box
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
  // const handleSelectChange = (event: SelectChangeEvent<string>) => {
  //   const value = event.target.value;
  //   setSelectedValue(value);

  //   // When Schedule H is selected, show the form
  //   if (value === 'Schedule H') {
  //     setShowForm(true);
  //   } else {
  //     setShowForm(false);
  //   }
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

    const fileInput = document.getElementById("fileInput") as HTMLInputElement;
    if (fileInput?.files?.length) {
      formData.append("file", fileInput.files[0]); // Append the file to the FormData object
    } else {
      alert("Please select a file.");
      return;
    }

    // Add project details to the form data
    formData.append('projectName', projectName);
    formData.append('createdAt', createdAt);
    formData.append('description', description);
    formData.append('propertyName', propertyName);

    try {
      const response = await axios.post("http://127.0.0.1:5000/createproject", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Make sure the Content-Type is set to multipart/form-data
        },
      });

      console.log("File uploaded successfully:", response.data);
      alert(response.data.message);
      setanalysis_result(response.data.extracted_data); // Extracted data is in 'extracted_data'
      const props = { project_id: response.data.id};
      navigate('/spaH', { state: props });
    } catch (error) {
      alert('Form submitting error');
      console.error("Error submitting form:", error);
    }
  };

// Will use this function to bring back data from the next step
  const handleProjectSubmit2 = async (event: React.FormEvent) => {
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
      setCreatedAt(analysis_result.createdAt || '');
      setDescription(analysis_result.description || '');
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

  useEffect(() => {
    const fetchDevelopers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/get-developers'); // Replace with your API endpoint
        setDevelopers(response.data); // Assuming the response is an array of developers
      } catch (error) {
        console.error('Error fetching developers:', error);
      }
    };

    fetchDevelopers();
  }, []);



  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <DrawerComponent />
      <HeaderComponent />

      <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
        <Toolbar />
          <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', background: 'primary' }}>
            Add Party
          </Typography>
          {/* <center> */}
          <Box sx={{ display: 'flex', marginTop: 2 }}>
            <Box sx={{ marginTop: 2, width: 400, display: 'flex', justifyContent: 'flex-start'}}>
              <Box sx={{ width: '100%', textAlign: 'left' }}>
                <Typography variant="h5" gutterBottom>
                  Personal Information
                </Typography>

                <form onSubmit={handleProjectSubmit}>
                 {/* Dropdown */}
                 <FormControl fullWidth sx={{ mt: 2 }}>
                  <InputLabel id="developer-dropdown-label">Select ID Type</InputLabel>
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
                )}
                  <TextField
                    label="ID"
                    fullWidth
                    variant="outlined"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    sx={{ marginBottom: 2, marginTop: 2, }}
                  />
                  <TextField
                    label="Old IC"
                    fullWidth
                    variant="outlined"
                    value={createdAt}
                    onChange={(e) => setCreatedAt(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                  <TextField
                    label="Name"
                    fullWidth
                    variant="outlined"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    // sx={{ marginBottom: 2 }}
                  />
                  <FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
                  <InputLabel id="developer-dropdown-label">Select Title</InputLabel>
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
                  No title found. Please check your API connection.
                </Typography>
              )}
                </form>
            <Typography variant="h5" gutterBottom>
                Contact Information
            </Typography>
                <TextField
                    label="Address (line 1)"
                    fullWidth
                    variant="outlined"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                <TextField
                    label="Address (line 2)"
                    fullWidth
                    variant="outlined"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                <TextField
                    label="Address (line 3)"
                    fullWidth
                    variant="outlined"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                <TextField
                    label="Post code"
                    fullWidth
                    variant="outlined"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                <TextField
                    label="Town"
                    fullWidth
                    variant="outlined"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel id="developer-dropdown-label">State</InputLabel>
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
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel id="developer-dropdown-label">Country</InputLabel>
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
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel id="developer-dropdown-label">Phone Home</InputLabel>
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
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel id="developer-dropdown-label">Phone Office</InputLabel>
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
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel id="developer-dropdown-label">Phone Mobile</InputLabel>
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
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel id="developer-dropdown-label">Fax</InputLabel>
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
                <TextField
                    label="Email Address"
                    fullWidth
                    variant="outlined"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                <TextField
                    label="Website"
                    fullWidth
                    variant="outlined"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
              </Box>
            </Box>
            <Box sx={{ marginTop: 2, width: 400, display: 'flex', justifyContent: 'flex-start'}}>
              <Box sx={{ width: '100%', textAlign: 'left' }}>
                <Typography variant="h5" gutterBottom>
                  Other Information
                </Typography>

                <form onSubmit={handleProjectSubmit}>
                 {/* Dropdown */}
                 <FormControl fullWidth sx={{ mt: 2 }}>
                  <InputLabel id="developer-dropdown-label">Select Citizenship</InputLabel>
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

                {/* {developers.length === 0 && (
                <Typography variant="body2" color="error">
                  No developers found. Please check your API connection.
                </Typography>
              )} */}
                  <TextField
                    label="Date Of Birth"
                    // type="date"
                    fullWidth
                    variant="outlined"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    sx={{ marginBottom: 2, marginTop: 2, }}
                  />
                  <TextField
                    label="Age"
                    fullWidth
                    variant="outlined"
                    value={createdAt}
                    onChange={(e) => setCreatedAt(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                  <TextField
                    label="Material Status"
                    fullWidth
                    variant="outlined"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    // sx={{ marginBottom: 2 }}
                  />
                  <FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
                  <InputLabel id="developer-dropdown-label">NO of childrens</InputLabel>
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
                  <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel id="developer-dropdown-label">Occupation</InputLabel>
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

                {/* {developers.length === 0 && (
                <Typography variant="body2" color="error">
                  No title found. Please check your API connection.
                </Typography>
              )} */}
                <TextField
                    label="Text File No"
                    fullWidth
                    variant="outlined"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel id="developer-dropdown-label">IRD Branch</InputLabel>
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
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel id="developer-dropdown-label">Custom type</InputLabel>
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
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel id="developer-dropdown-label">Government Department</InputLabel>
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
                <TextField
                    type="checkbox"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    sx={{ marginBottom: 2, marginLeft: 2, marginRight: 2 }}
                    /> 
                <label style={{ marginLeft: "8px", marginRight: "8px" }}> Deceased</label><br/>
                <TextField
                    type="checkbox"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    sx={{ marginBottom: 2, marginLeft: 2, marginRight: 2 }}
                    /> 
                <label style={{ marginLeft: "8px", marginRight: "8px" }}> Bankrupt</label>
                </form>
                <Typography variant="h5" gutterBottom sx={{ mt: 2, mb: 2 }}>
                  GST Information
                </Typography>
                <TextField
                    type="checkbox"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    sx={{ marginBottom: 2, marginLeft: 2, marginRight: 2  }}
                    /> 
                <label>  GST Status Verified</label>
                <TextField
                    label="Last GST Status Verified Date"
                    fullWidth
                    variant="outlined"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                  <TextField
                    type="checkbox"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    sx={{ marginBottom: 2, marginLeft: 2, marginRight: 2  }}
                  /> 
                  <label>  GST Registered</label>
                  <TextField
                    label="GST Reg. No."
                    fullWidth
                    variant="outlined"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                  <TextField
                    label="RMCD Approvel No."
                    fullWidth
                    variant="outlined"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                  
                <Typography variant="h5" gutterBottom sx={{ mt: 2, mb: 2 }}>
                  News Letter Setting
                </Typography>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel id="developer-dropdown-label">Mixing List</InputLabel>
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
                <TextField
                    type="checkbox"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    sx={{ marginBottom: 2, marginLeft: 2, marginRight: 2 }}
                    /> 
                <label style={{ marginLeft: "8px", marginRight: "8px" }}> Newsletter</label><br/>
              </Box>
            </Box>
            <Box sx={{ marginTop: 2, width: 400, display: 'flex', justifyContent: 'flex-start'}}>
              <Box sx={{ width: '100%', textAlign: 'left' }}>
                <Typography variant="h5" gutterBottom>
                  Company Information
                </Typography>

                <form onSubmit={handleProjectSubmit}>
                 {/* Dropdown */}
                 <FormControl fullWidth sx={{ mt: 2 }}>
                  <InputLabel id="developer-dropdown-label">Registered Office</InputLabel>
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
              )}
                <FormControl fullWidth sx={{ mt: 2 }}>
                  <InputLabel id="developer-dropdown-label">Director 1</InputLabel>
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
                <FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
                  <InputLabel id="developer-dropdown-label">Director 2</InputLabel>
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
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel id="developer-dropdown-label">Director 3</InputLabel>
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
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel id="developer-dropdown-label">Secratory</InputLabel>
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
                  <TextField
                    label="Contact Person"
                    fullWidth
                    variant="outlined"
                    value={createdAt}
                    onChange={(e) => setCreatedAt(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel id="developer-dropdown-label">Optional Information</InputLabel>
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
                  <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel id="developer-dropdown-label">More Information</InputLabel>
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
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel id="developer-dropdown-label">Extra Addresses</InputLabel>
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
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel id="developer-dropdown-label">Office Use</InputLabel>
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
                <TextField
                    label="Entered by"
                    fullWidth
                    variant="outlined"
                    value={createdAt}
                    onChange={(e) => setCreatedAt(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                <TextField
                    label="Updated by"
                    fullWidth
                    variant="outlined"
                    value={createdAt}
                    onChange={(e) => setCreatedAt(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                  <TextField
                    type="checkbox"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    sx={{ marginBottom: 2, marginLeft: 2, marginRight: 2 }}
                    /> 
                <label style={{ marginLeft: "8px", marginRight: "8px" }}> Add Favourites</label><br/>
                <div style={{ padding: '20px' }}>
                    <label>Remarks</label>
                    <textarea
                        rows={4}
                        cols={50}
                        value={text}
                        onChange={(e) => setText(e.target.value)} // Update state on change
                        style={{
                        display: 'block',
                        border: '1px solid lightgrey',
                        marginTop: '10px',
                        marginBottom: '10px',
                        padding: '8px',
                        width: '100%',
                        }}
                    ></textarea>
                </div>

                </form>
              </Box>
            </Box>
          {/* </center> */}
        {/* )} */}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button variant="contained" color="primary" type="submit">
                Add Party
            </Button>
        </Box>
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