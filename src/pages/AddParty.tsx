
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
  const [selectedDeveloper, setSelectedDeveloper] = useState<string>('');
  const [developers, setDevelopers] = useState<Developer[]>([]);
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
  const [description, setDescription] = useState('');
  

  const navigate = useNavigate();
  const [text, setText] = useState<string>('');
  const partySubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    const formData = new FormData();

    formData.append('selectedDeveloper', selectedDeveloper);
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
    <Box sx={{ display: 'flex', flexGrow: 1, overflow: 'hidden', }}>
      <CssBaseline />
      <DrawerComponent />
      <HeaderComponent />
      <Box component="main" sx={{ flexGrow: 1, p: 2, width: "800px", }}>
        <Toolbar />
          <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', background: 'primary' }}>
            Add Party
          </Typography>
          <Box sx={{ display: 'flex', marginTop: 2 }}>
            <form onSubmit={partySubmit}>
            <Box sx={{ marginTop: 2, width: 1000, display: 'flex', justifyContent: 'flex-start'}}>
            <Box sx={{ width: '100%', textAlign: 'left' }}>
                <Typography variant="h5" gutterBottom>
                  Developer Information
                </Typography>
                  <FormControl fullWidth>
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
                  )}
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
                    sx={{ marginBottom: 2 }}
                  />
                <TextField
                    label="Select Title"
                    fullWidth
                    variant="outlined"
                    value={selectTitle}
                    onChange={(e) => setSelectTitle(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                
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
                <TextField
                    label="State"
                    fullWidth
                    variant="outlined"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                <TextField
                    label="Country"
                    fullWidth
                    variant="outlined"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                <TextField
                    label="Phone Home"
                    fullWidth
                    variant="outlined"
                    value={phoneHome}
                    onChange={(e) => setPhoneHome(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                <TextField
                    label="Phone Office"
                    fullWidth
                    variant="outlined"
                    value={phoneOffice}
                    onChange={(e) => setPhoneOffice(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                <TextField
                    label="Phone Mobile"
                    fullWidth
                    variant="outlined"
                    value={phoneOffice}
                    onChange={(e) => setPhoneMobile(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                <TextField
                    label="Fax"
                    fullWidth
                    variant="outlined"
                    value={fax}
                    onChange={(e) => setFax(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
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
                <TextField
                    label="Director 1"
                    fullWidth
                    variant="outlined"
                    value={directorOne}
                    onChange={(e) => setDirectorOne(e.target.value)}
                    sx={{ marginTop: 2 }}
                  />
                <TextField
                    label="Director 2"
                    fullWidth
                    variant="outlined"
                    value={directorTwo}
                    onChange={(e) => setDirectorTwo(e.target.value)}
                    sx={{ marginTop: 2 }}
                  />
                <TextField
                    label="Director 3"
                    fullWidth
                    variant="outlined"
                    value={directorThree}
                    onChange={(e) => setDirectorThree(e.target.value)}
                    sx={{ marginTop: 2 }}
                  />
                <TextField
                    label="Secratory"
                    fullWidth
                    variant="outlined"
                    value={secratory}
                    onChange={(e) => setSecratory(e.target.value)}
                    sx={{ marginTop: 2, marginBottom: 2, }}
                  />
                  <TextField
                    label="Contact Person"
                    fullWidth
                    variant="outlined"
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                <TextField
                    label="Optional Information"
                    fullWidth
                    variant="outlined"
                    value={optionalInformation}
                    onChange={(e) => setOptionalInformation(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                <TextField
                    label="More Information"
                    fullWidth
                    variant="outlined"
                    value={moreInformation}
                    onChange={(e) => setMoreInformation(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                <TextField
                    label="Extra Addresses"
                    fullWidth
                    variant="outlined"
                    value={extraAddress}
                    onChange={(e) => setExtraAddress(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
                <TextField
                    label="Office Use"
                    fullWidth
                    variant="outlined"
                    value={officeUse}
                    onChange={(e) => setOfficeUse(e.target.value)}
                    sx={{ marginBottom: 2 }}
                  />
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