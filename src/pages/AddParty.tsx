
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
function AddPrty() {
  // Project form states
  const [projectName, setProjectName] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [description, setDescription] = useState('');
  const [propertyName, setPropertyName] = useState('');
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [selectedValue, setSelectedValue] = useState<string>('Select Schedule');
  const [showForm, setShowForm] = useState<boolean>(false);
  const [analysis_result, setanalysis_result] = useState<any | null>(null);  // To store extracted data as an object
  const [questions, setQuestions] = useState(Array(10).fill(''));
  const [backendMessage, setBackendMessage] = useState<string | null>(null);
  const [developers, setDevelopers] = useState<Developer[]>([]);
  const [selectedDeveloper, setSelectedDeveloper] = useState<string>('');
  const [selectIdType, setSelectIdType] = useState<string>('');
  const [id, setId] = useState<string>('');
  const [oldIc, setOldIc] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [selectTitle, setSelectTitle] = useState<string>('');
  const [addressOne, setAddressOne] = useState<string>('');
  const [addressTwo, setAddressTwo] = useState<string>('');
  const [addressThree, setAddressThree] = useState<string>('');
  const [postCode, setPostCode] = useState<string>('');
  const [town, setTown] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [phoneHome, setPhoneHome] = useState<string>('');
  const [phoneOffice, setPhoneOffice] = useState<string>('');
  const [phoneMobile, setPhoneMobile] = useState<string>('');
  const [fax, setFax] = useState<string>('');
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [website, setWebsite] = useState<string>('');
  const [registeredOffice, setRegisteredOffice] = useState<string>('');
  const [directorOne, setDirectorOne] = useState<string>('');
  const [directorTwo, setDirectorTwo] = useState<string>('');
  const [directorThree, setDirectorThree] = useState<string>('');
  const [secratory, setSecratory] = useState<string>('');
  const [contactPerson, setContactPerson] = useState<string>('');
  const [optionalInformation, setOptionalInformation] = useState<string>('');
  const [moreInformation, setMoreInformation] = useState<string>('');
  const [extraAddress, setExtraAddress] = useState<string>('');
  const [officeUse, setOfficeUse] = useState<string>('');
  const [enteredBy, setEnteredBy] = useState<string>('');
  const [updatedBy, setUpdatedBy] = useState<string>('');

  const [developerMessage, setDeveloperMessage] = useState<string | null>(null); // State to store the message from backend
  const [loading, setLoading] = useState(false); // State to track loading status
  const navigate = useNavigate();
  const [text, setText] = useState<string>('');
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

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    if (event.target.name === 'developer') {
      setSelectedDeveloper(event.target.value);
    } else {
      setSelectedValue(event.target.value);
      setShowForm(event.target.value === 'Schedule H');
    }
  };
  // Handle project form submission (including project details and questions)
  const partySubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    const formData = new FormData();

    formData.append("selectIdType", selectIdType);
    formData.append("id", id);
    formData.append("oldIc", oldIc);
    formData.append("name", name);
    formData.append("selectTitle", selectTitle);
    formData.append("addressOne", addressOne);
    formData.append("addressTwo", addressTwo);
    formData.append("addressThree", addressThree);
    formData.append("postCode", postCode);
    formData.append("town", town);
    formData.append("state", state);
    formData.append("country", country);
    formData.append("phoneHome", phoneHome);
    formData.append("phoneOffice", phoneOffice);
    formData.append("phoneMobile", phoneMobile);
    formData.append("fax", fax);
    formData.append("emailAddress", emailAddress);
    formData.append("website", website);
    formData.append("registeredOffice", registeredOffice);
    formData.append("directorOne", directorOne);
    formData.append("directorTwo", directorTwo);
    formData.append("directorThree", directorThree);
    formData.append("secratory", secratory);
    formData.append("contactPerson", contactPerson);
    formData.append("optionalInformation", optionalInformation);
    formData.append("moreInformation", moreInformation);
    formData.append("extraAddress", extraAddress);
    formData.append("officeUse", officeUse);
    formData.append("enteredBy", enteredBy);
    formData.append("updatedBy", updatedBy);

    try {
      const response = await axios.post("http://127.0.0.1:5000/add-party", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Make sure the Content-Type is set to multipart/form-data
        },
      });

      console.log("File uploaded successfully:", response.data);
      alert(response.data.message);
    } catch (error) {
      alert('Form submitting error');
      console.error("Error submitting form:", error);
    }
  };

// Will use this function to bring back data from the next step
  const partySubmit2 = async (event: React.FormEvent) => {
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
      // setProjectName(analysis_result.projectName || '');
      // setCreatedAt(analysis_result.createdAt || '');
      // setDescription(analysis_result.description || '');
      // setPropertyName(analysis_result.propertyName || '');
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
          <Box sx={{ display: 'flex', marginTop: 2 }}>
            <form onSubmit={partySubmit}>
            <Box sx={{ marginTop: 2, width: 1200, display: 'flex', justifyContent: 'flex-start'}}>
              <Box sx={{ width: '100%', textAlign: 'left' }}>
                <Typography variant="h5" gutterBottom>
                  Personal Information
                </Typography>
                  <TextField
                    label="Select ID Type"
                    fullWidth
                    variant="outlined"
                    value={selectIdType}
                    onChange={(e) => setSelectIdType(e.target.value)}
                    sx={{ marginTop: 2, }}
                  />
                  <TextField
                    label="ID"
                    fullWidth
                    variant="outlined"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    sx={{ marginBottom: 2, marginTop: 2, }}
                  />
                  <TextField
                    label="Old IC"
                    fullWidth
                    variant="outlined"
                    value={oldIc}
                    onChange={(e) => setOldIc(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                  <TextField
                    label="Name"
                    fullWidth
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
                  <InputLabel id="developer-dropdown-label">Select Title</InputLabel>
                  <Select
                    labelId="developer-dropdown-label"
                    id="developer-dropdown"
                    value={selectTitle}
                    onChange={(event) => setSelectTitle(event.target.value)}
                    label="Select Title"
                  >
                    {developers.map((developer) => (
                    <MenuItem key={developer.id} value={developer.developerName}>
                      {developer.developerName}
                    </MenuItem>
                  ))}
                  </Select>
                </FormControl>
                
            <Typography variant="h5" gutterBottom>
                Contact Information
            </Typography>
                <TextField
                    label="Address (line 1)"
                    fullWidth
                    variant="outlined"
                    value={addressOne}
                    onChange={(e) => setAddressOne(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                <TextField
                    label="Address (line 2)"
                    fullWidth
                    variant="outlined"
                    value={addressTwo}
                    onChange={(e) => setAddressTwo(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                <TextField
                    label="Address (line 3)"
                    fullWidth
                    variant="outlined"
                    value={addressThree}
                    onChange={(e) => setAddressThree(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                <TextField
                    label="Post code"
                    fullWidth
                    variant="outlined"
                    value={postCode}
                    onChange={(e) => setPostCode(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                <TextField
                    label="Town"
                    fullWidth
                    variant="outlined"
                    value={town}
                    onChange={(e) => setTown(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel id="developer-dropdown-label">State</InputLabel>
                  <Select
                    labelId="developer-dropdown-label"
                    id="developer-dropdown"
                    value={state}
                    onChange={(event) => setState(event.target.value)}
                    label="Select State"
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
                    value={country}
                    onChange={(event) => setCountry(event.target.value)}
                    label="Select Country"
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
                    value={phoneHome}
                    onChange={(event) => setPhoneHome(event.target.value)}
                    label="Phone Number"
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
                    value={phoneOffice}
                    onChange={(event) => setPhoneOffice(event.target.value)}
                    label="Phone Office"
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
                    value={phoneMobile}
                    onChange={(event) => setPhoneMobile(event.target.value)}
                    label="Phone Mobile"
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
                    value={fax}
                    onChange={(event) => setFax(event.target.value)}
                    label="Fax"
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
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                <TextField
                    label="Website"
                    fullWidth
                    variant="outlined"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
              </Box>
              <Box sx={{ width: '100%', textAlign: 'left', marginLeft: '4px' }}>
                <Typography variant="h5" gutterBottom>
                  Company Information
                </Typography>
                <TextField
                    label="Registered Office"
                    fullWidth
                    variant="outlined"
                    value={registeredOffice}
                    onChange={(e) => setRegisteredOffice(e.target.value)}
                    sx={{ marginTop: 2, }}
                  />
                <FormControl fullWidth sx={{ mt: 2 }}>
                  <InputLabel id="developer-dropdown-label">Director 1</InputLabel>
                  <Select
                    labelId="developer-dropdown-label"
                    id="developer-dropdown"
                    value={directorOne}
                    onChange={(event) => setDirectorOne(event.target.value)}
                    label="Director 1"
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
                    value={directorTwo}
                    onChange={(event) => setDirectorTwo(event.target.value)}
                    label="Director 2"
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
                    value={directorThree}
                    onChange={(event) => setDirectorThree(event.target.value)}
                    label="Director 3"
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
                    value={secratory}
                    onChange={(event) => setSecratory(event.target.value)}
                    label="Secratory"
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
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel id="developer-dropdown-label">Optional Information</InputLabel>
                  <Select
                    labelId="developer-dropdown-label"
                    id="developer-dropdown"
                    value={optionalInformation}
                    onChange={(event) => setOptionalInformation(event.target.value)}
                    label="Optional Information"
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
                    value={moreInformation}
                    onChange={(event) => setMoreInformation(event.target.value)}
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
                    value={extraAddress}
                    onChange={(event) => setExtraAddress(event.target.value)}
                    label="Extra address"
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
                    value={officeUse}
                    onChange={(event) => setOfficeUse(event.target.value)}
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
                    value={enteredBy}
                    onChange={(e) => setEnteredBy(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                <TextField
                    label="Updated by"
                    fullWidth
                    variant="outlined"
                    value={updatedBy}
                    onChange={(e) => setUpdatedBy(e.target.value)}
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
                        style={{ display: 'block',border: '1px solid lightgrey', marginTop: '10px',marginBottom: '10px',padding: '8px',width: '100%',
                        }}
                    ></textarea>
                </div>
              </Box>
            </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Button variant="contained" color="primary" type="submit" onClick={partySubmit}>
                        Add Party
                    </Button>
                </Box>
            </form>
        </Box>
      </Box>
    </Box>
  );
}

export default AddPrty;