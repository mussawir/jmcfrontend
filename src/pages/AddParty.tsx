
import React, { useState,  } from 'react';
import { Box, Typography, Toolbar, CssBaseline, TextField, Button,Select, MenuItem, InputLabel, FormControl, Checkbox,
  FormControlLabel, Link, } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DrawerComponent from '../components/DrawerComponent';
import HeaderComponent from '../components/HeaderComponent';  
import axios from 'axios';

function AddPrty() {
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
  const [gstInfo, setGstInfo] = useState("default");
  const [gstStatusVerified, setGstStatusVerified] = useState(false);
  const [lastGstVerifiedDate, setLastGstVerifiedDate] = useState("");
  const [gstRegistered, setGstRegistered] = useState(false);
  const [gstRegNo, setGstRegNo] = useState("");
  const [rmcdApprovalNo, setRmcdApprovalNo] = useState("");
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
  const [otherInformation, setOtherInformation] = useState<string>('');
  const [enteredBy, setEnteredBy] = useState<string>('');
  const [updatedBy, setUpdatedBy] = useState<string>('');
  const [addToFavourite, setAddToFavourite] = useState<boolean>(false);
  const [remarks, setRemarks] = useState<string>("");
  // const [description, setDescription] = useState('');
  const [citizenship, setCitizenship] = useState("default");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");
  const [materialStatus, setMaterialStatus] = useState("default");
  const [noOfChildren, setNoOfChildren] = useState("");
  const [occupation, setOccupation] = useState("default");
  const [taxFileNo, setTaxFileNo] = useState("");
  const [irdBranch, setIrdBranch] = useState("default");
  const [customerType, setCustomerType] = useState("default");
  const [govDepartment, setGovDepartment] = useState("default");
  const [bank, setBank] = useState(false);
  const [deceased, setDeceased] = useState(false);
  const [newsLetterSettings, setNewsLetterSettings] = useState("default");
  const [mailingList, setMailingList] = useState("default");
  const [newsLetter, setNewsLetter] = useState(false);
  

  const navigate = useNavigate();
  const [text, setText] = useState<string>('');
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
          "Content-Type": "multipart/form-data", 
        },
      });

      console.log("File uploaded successfully:", response.data);
      alert(response.data.message);
    } catch (error) {
      alert('Form submitting error');
      console.error("Error submitting form:", error);
    }
  };

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
            <Box sx={{ marginTop: 2, width: 1200, display: 'flex', justifyContent: 'flex-start',}}>
            <Box sx={{ width: '100%', textAlign: 'left' }}>
                <Typography variant="h5" gutterBottom>
                  Personal Information
                </Typography>
                <FormControl fullWidth sx={{ marginTop: 2, paddingRight: 2 }}>
                  <InputLabel id="select-id-type-label">
                    Select ID Type
                    <Typography
                      component="span"
                      color="error"
                      sx={{ marginLeft: 0.5 }}
                    >
                      *
                    </Typography>
                  </InputLabel>
                  <Select
                    labelId="select-id-type-label"
                    id="select-id-type"
                    value={selectIdType}
                    onChange={(e) => setSelectIdType(e.target.value)}
                    variant="outlined"
                    fullWidth
                  >
                    <MenuItem value="passport">Passport</MenuItem>
                    <MenuItem value="national-id">National ID</MenuItem>
                    <MenuItem value="driver-license">Driver's License</MenuItem>
                  </Select>
                </FormControl>
                <Box sx={{ marginBottom: 2, paddingRight: 2, }}>
                  <FormControl fullWidth variant="outlined">
                    <TextField
                      id="id-input"
                      variant="outlined"
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                      label="ID *"
                      fullWidth
                      sx={{ marginTop: 2 }}
                    />
                  </FormControl>
                </Box>
                  <TextField
                    label="Old IC"
                    fullWidth
                    variant="outlined"
                    value={oldIc}
                    onChange={(e) => setOldIc(e.target.value)}
                    sx={{ marginBottom: 2, paddingRight: 2, }}
                  />
                  <TextField
                    label="Name *"
                    fullWidth
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{ marginBottom: 2, paddingRight: 2, }}
                  />
                <FormControl fullWidth variant="outlined" sx={{ marginBottom: 2, paddingRight: 2 }}>
                  <InputLabel id="select-title-label">Select Title</InputLabel>
                  <Select
                    labelId="select-title-label"
                    value={selectTitle}
                    onChange={(e) => setSelectTitle(e.target.value)}
                    label="Select Title"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Mr">Mr</MenuItem>
                    <MenuItem value="Ms">Ms</MenuItem>
                    <MenuItem value="Dr">Dr</MenuItem>
                    <MenuItem value="Prof">Prof</MenuItem>
                  </Select>
                </FormControl>
                 
            <Typography variant="h5" gutterBottom marginTop={'30px'}>
                Contact Information
            </Typography>
                <TextField
                    label="Address (line 1)"
                    fullWidth
                    variant="outlined"
                    value={addressOne}
                    onChange={(e) => setAddressOne(e.target.value)}
                    sx={{ marginBottom: 2, paddingRight: 2, }}
                  />
                <TextField
                    label="Address (line 2)"
                    fullWidth
                    variant="outlined"
                    value={addressTwo}
                    onChange={(e) => setAddressTwo(e.target.value)}
                    sx={{ marginBottom: 2, paddingRight: 2, }}
                  />
                <TextField
                    label="Address (line 3)"
                    fullWidth
                    variant="outlined"
                    value={addressThree}
                    onChange={(e) => setAddressThree(e.target.value)}
                    sx={{ marginBottom: 2, paddingRight: 2, }}
                  />
                <TextField
                    label="Post code"
                    fullWidth
                    variant="outlined"
                    value={postCode}
                    onChange={(e) => setPostCode(e.target.value)}
                    sx={{ marginBottom: 2, paddingRight: 2, }}
                  />
                <TextField
                    label="Town"
                    fullWidth
                    variant="outlined"
                    value={town}
                    onChange={(e) => setTown(e.target.value)}
                    sx={{ marginBottom: 2, paddingRight: 2, }}
                  />
                <FormControl fullWidth variant="outlined" sx={{ marginBottom: 2, paddingRight: 2 }}>
                  <InputLabel id="state-label">State</InputLabel>
                  <Select
                    labelId="state-label"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    label="State"
                  >
                    <MenuItem value="default">Select State</MenuItem>
                    <MenuItem value="state1">State 1</MenuItem>
                    <MenuItem value="state2">State 2</MenuItem>
                    <MenuItem value="state3">State 3</MenuItem>
                    {/* Add more states as needed */}
                  </Select>
                </FormControl>
                <TextField
                    label="Country"
                    fullWidth
                    variant="outlined"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    sx={{ marginBottom: 2, paddingRight: 2, }}
                  />
                <TextField
                    label="Phone Home"
                    fullWidth
                    variant="outlined"
                    value={phoneHome}
                    onChange={(e) => setPhoneHome(e.target.value)}
                    sx={{ marginBottom: 2, paddingRight: 2, }}
                  />
                <TextField
                    label="Phone Office"
                    fullWidth
                    variant="outlined"
                    value={phoneOffice}
                    onChange={(e) => setPhoneOffice(e.target.value)}
                    sx={{ marginBottom: 2, paddingRight: 2, }}
                  />
                <TextField
                    label="Phone Mobile"
                    fullWidth
                    variant="outlined"
                    value={phoneOffice}
                    onChange={(e) => setPhoneMobile(e.target.value)}
                    sx={{ marginBottom: 2, paddingRight: 2, }}
                  />
                <TextField
                    label="Fax"
                    fullWidth
                    variant="outlined"
                    value={fax}
                    onChange={(e) => setFax(e.target.value)}
                    sx={{ marginBottom: 2, paddingRight: 2, }}
                  />
                <TextField
                    label="Email Address"
                    fullWidth
                    variant="outlined"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    sx={{ marginBottom: 2, paddingRight: 2, }}
                  />
                <TextField
                    label="Website"
                    fullWidth
                    variant="outlined"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    sx={{ marginBottom: 2, paddingRight: 2, }}
                  />
            </Box>
              <Box sx={{ width: '100%', textAlign: 'left', marginLeft: '4px', }}>
                <Typography variant="h5" gutterBottom>
                  Company Information
                </Typography>
                {/* <Box style={{ padding: '20px' }}>
                    <label>Registered Office</label>
                    <textarea
                        rows={4}
                        cols={50}
                        value={text}
                        onChange={(e) => setText(e.target.value)} // Update state on change
                        style={{ display: 'block',border: '1px solid lightgrey', marginTop: '10px',marginBottom: '10px',padding: '8px',width: '100%',}}
                    ></textarea>
                </Box> */}
                <Box sx={{ marginTop: 3, }}>
                <TextField
                  label="Registered Office"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  value={registeredOffice}
                  onChange={(e) => setRegisteredOffice(e.target.value)}
                />
                </Box>
                  <FormControl fullWidth sx={{ marginTop: 2, }}>
                    <InputLabel id="select-director">Director 1</InputLabel>
                    <Select
                      labelId="select-director"
                      id="select-director"
                      value={directorOne}
                      onChange={(e) => setDirectorOne(e.target.value)}
                      variant="outlined"
                      fullWidth
                    >
                      <MenuItem value="a">A</MenuItem>
                      <MenuItem value="b">B</MenuItem>
                      <MenuItem value="c">C</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth sx={{ marginTop: 2, }}>
                    <InputLabel id="select-director-two">Director 2</InputLabel>
                    <Select
                      labelId="select-director-two"
                      id="select-director-two"
                      value={directorTwo}
                      onChange={(e) => setDirectorTwo(e.target.value)}
                      variant="outlined"
                      fullWidth
                    >
                      <MenuItem value="a">A</MenuItem>
                      <MenuItem value="b">B</MenuItem>
                      <MenuItem value="c">C</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth sx={{ marginTop: 2, marginBottom: 2, }}>
                    <InputLabel id="Secratory">Secratory</InputLabel>
                    <Select
                      labelId="Secratory"
                      id="Secratory"
                      value={secratory}
                      onChange={(e) => setSecratory(e.target.value)}
                      variant="outlined"
                      fullWidth
                    >
                      <MenuItem value="a">A</MenuItem>
                      <MenuItem value="b">B</MenuItem>
                      <MenuItem value="c">C</MenuItem>
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
                <FormControl fullWidth sx={{ marginBottom: 2 }}>
                  <InputLabel id="optional-information-label">Optional Information</InputLabel>
                  <Select
                    labelId="optional-information-label"
                    value={optionalInformation}
                    onChange={(e) => setOptionalInformation(e.target.value)}
                  >
                    <MenuItem value="option1">Option 1</MenuItem>
                    <MenuItem value="option2">Option 2</MenuItem>
                    <MenuItem value="option3">Option 3</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth sx={{ marginBottom: 2 }}>
                  <InputLabel id="more-information-label">More Information</InputLabel>
                  <Select
                    labelId="more-information-label"
                    value={moreInformation}
                    onChange={(e) => setMoreInformation(e.target.value)}
                  >
                    <MenuItem value="info1">Information 1</MenuItem>
                    <MenuItem value="info2">Information 2</MenuItem>
                    <MenuItem value="info3">Information 3</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth sx={{ marginBottom: 2 }}>
                  <InputLabel id="extra-addresses-label">Extra Addresses</InputLabel>
                  <Select
                    labelId="extra-addresses-label"
                    value={extraAddress}
                    onChange={(e) => setExtraAddress(e.target.value)}
                  >
                    <MenuItem value="address1">Address 1</MenuItem>
                    <MenuItem value="address2">Address 2</MenuItem>
                    <MenuItem value="address3">Address 3</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth sx={{ marginBottom: 2 }}>
                  <Typography variant='h5' sx={{ marginBottom: 1, marginTop: 5 }}>Office Use:</Typography>
                  {/* <InputLabel id="office-use-label">Office Use</InputLabel> */}
                  <Select
                    labelId="office-use-label"
                    value={officeUse}
                    onChange={(e) => setOfficeUse(e.target.value)}
                  >
                    <MenuItem value="default">Select an option</MenuItem>
                    <MenuItem value="office-use">Office Use</MenuItem>
                  </Select>
                </FormControl>

                {/* Display input fields only when "Configure Fields" is selected */}
                {officeUse === "office-use" && (
                  <Box display="flex" flexDirection="column" gap={2}>
                    <TextField
                      label="Entered By"
                      variant="outlined"
                      fullWidth
                      value={enteredBy}
                      onChange={(e) => setEnteredBy(e.target.value)}
                    />
                    <TextField
                      label="Updated By"
                      variant="outlined"
                      fullWidth
                      value={updatedBy}
                      onChange={(e) => setUpdatedBy(e.target.value)}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={addToFavourite}
                          onChange={(e) => setAddToFavourite(e.target.checked)}
                        />
                      }
                      label="Add to Favourite"
                    />
                    <TextField
                      label="Remarks"
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={4}
                      value={remarks}
                      onChange={(e) => setRemarks(e.target.value)}
                    />
                  </Box>
                )}
                <FormControl fullWidth sx={{ marginBottom: 2, marginTop: 5, }}>
                  <Typography variant='h5'>Other Information:</Typography>
                  <InputLabel id="other-information"></InputLabel>
                  <Select
                    labelId="other-information"
                    value={otherInformation}
                    onChange={(e) => setOtherInformation(e.target.value)}
                  >
                    <MenuItem value="default">Select an option</MenuItem>
                    <MenuItem value="office-use">Other Information</MenuItem>
                  </Select>
                </FormControl>

                {/* Display input fields only when "Configure Fields" is selected */}
                {otherInformation === "office-use" && (
                  <Box display="flex" flexDirection="column" gap={2}>
                    {/* New fields */}
                    <FormControl fullWidth sx={{ marginBottom: 2 }}>
                      {/* <InputLabel id="citizenship-label">Citizenship</InputLabel> */}
                      <Select
                        labelId="citizenship-label"
                        value={citizenship}
                        onChange={(e) => setCitizenship(e.target.value)}
                      >
                        <MenuItem value="default">Select Citizenship</MenuItem>
                        <MenuItem value="citizenship1">Citizenship 1</MenuItem>
                        <MenuItem value="citizenship2">Citizenship 2</MenuItem>
                      </Select>
                    </FormControl>

                    <TextField
                      label="Date of Birth"
                      type="date"
                      variant="outlined"
                      fullWidth
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />

                    <TextField
                      label="Age"
                      variant="outlined"
                      fullWidth
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />

                    <FormControl fullWidth sx={{ marginBottom: 2 }}>
                      {/* <InputLabel id="material-status-label">Material Status</InputLabel> */}
                      <Select
                        labelId="material-status-label"
                        value={materialStatus}
                        onChange={(e) => setMaterialStatus(e.target.value)}
                      >
                        <MenuItem value="default">Select Status</MenuItem>
                        <MenuItem value="single">Single</MenuItem>
                        <MenuItem value="married">Married</MenuItem>
                        <MenuItem value="divorced">Divorced</MenuItem>
                      </Select>
                    </FormControl>

                    <TextField
                      label="Number of Children"
                      variant="outlined"
                      fullWidth
                      value={noOfChildren}
                      onChange={(e) => setNoOfChildren(e.target.value)}
                    />

                    <FormControl fullWidth sx={{ marginBottom: 2 }}>
                      {/* <InputLabel id="occupation-label">Occupation</InputLabel> */}
                      <Select
                        labelId="occupation-label"
                        value={occupation}
                        onChange={(e) => setOccupation(e.target.value)}
                      >
                        <MenuItem value="default">Select Occupation</MenuItem>
                        <MenuItem value="occupation1">Occupation 1</MenuItem>
                        <MenuItem value="occupation2">Occupation 2</MenuItem>
                      </Select>
                    </FormControl>

                    <TextField
                      label="Tax File Number"
                      variant="outlined"
                      fullWidth
                      value={taxFileNo}
                      onChange={(e) => setTaxFileNo(e.target.value)}
                    />

                    <FormControl fullWidth sx={{ marginBottom: 2 }}>
                      {/* <InputLabel id="ird-branch-label">IRD Branch</InputLabel> */}
                      <Select
                        labelId="ird-branch-label"
                        value={irdBranch}
                        onChange={(e) => setIrdBranch(e.target.value)}
                      >
                        <MenuItem value="default">Select IRD Branch</MenuItem>
                        <MenuItem value="branch1">Branch 1</MenuItem>
                        <MenuItem value="branch2">Branch 2</MenuItem>
                      </Select>
                    </FormControl>

                    <FormControl fullWidth sx={{ marginBottom: 2 }}>
                      {/* <InputLabel id="customer-type-label">Customer Type</InputLabel> */}
                      <Select
                        // labelId="customer-type-label"
                        value={customerType}
                        onChange={(e) => setCustomerType(e.target.value)}
                      >
                        <MenuItem value="default">Select Customer Type</MenuItem>
                        <MenuItem value="individual">Individual</MenuItem>
                        <MenuItem value="corporate">Corporate</MenuItem>
                      </Select>
                    </FormControl>

                    <FormControl fullWidth sx={{ marginBottom: 2 }}>
                      {/* <InputLabel id="gov-department-label">Government Department</InputLabel> */}
                      <Select
                        labelId="gov-department-label"
                        value={govDepartment}
                        onChange={(e) => setGovDepartment(e.target.value)}
                      >
                        <MenuItem value="default">Select Department</MenuItem>
                        <MenuItem value="department1">Department 1</MenuItem>
                        <MenuItem value="department2">Department 2</MenuItem>
                      </Select>
                    </FormControl>

                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={bank}
                          onChange={(e) => setBank(e.target.checked)}
                        />
                      }
                      label="Bank"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={deceased}
                          onChange={(e) => setDeceased(e.target.checked)}
                        />
                      }
                      label="Deceased"
                    />
                  </Box>
                )}
                <FormControl fullWidth sx={{ marginBottom: 2, paddingRight: 2 }}>
                <Typography variant='h5' marginTop={'8px'}>GST Information</Typography>
                {/* <InputLabel id="gst-info-label">GST Information</InputLabel> */}
                <Select
                  labelId="gst-info-label"
                  value={gstInfo}
                  onChange={(e) => setGstInfo(e.target.value)}
                >
                  <MenuItem value="default">Select an option</MenuItem>
                  <MenuItem value="gst-info">GST Information</MenuItem>
                </Select>
              </FormControl>

              {/* Display input fields only when "GST Information" is selected */}
              {gstInfo === "gst-info" && (
                <Box display="flex" flexDirection="column" gap={2}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={gstStatusVerified}
                        onChange={(e) => setGstStatusVerified(e.target.checked)}
                      />
                    }
                    label="GST Status Verified"
                  />
                  <TextField
                    // label="Last GST Status Verified Date"
                    variant="outlined"
                    fullWidth
                    type="date"
                    value={lastGstVerifiedDate}
                    onChange={(e) => setLastGstVerifiedDate(e.target.value)}
                    sx= {{ paddingRight: 2 }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={gstRegistered}
                        onChange={(e) => setGstRegistered(e.target.checked)}
                      />
                    }
                    label="GST Registered"
                  />
                  <TextField
                    label="GST Reg. No."
                    variant="outlined"
                    fullWidth
                    value={gstRegNo}
                    onChange={(e) => setGstRegNo(e.target.value)}
                    sx= {{ paddingRight: 2 }}
                  />
                  <TextField
                    label="RMCD Approval No."
                    variant="outlined"
                    fullWidth
                    value={rmcdApprovalNo}
                    onChange={(e) => setRmcdApprovalNo(e.target.value)}
                    sx= {{ paddingRight: 2 }}
                  />
                  <Link href="#" onClick={() => {/* Add verification link logic */}} underline="hover">
                    Click here to verify GST Reg No.
                  </Link>
                </Box>
              )}
              <FormControl fullWidth sx={{ marginBottom: 2, paddingRight: 2 }}>
              <Typography variant='h5' marginTop={'8px'}>Newsletter Inforamtion</Typography>
              {/* <InputLabel id="gst-info-label">GST Information</InputLabel> */}
              <Select
                labelId="news-info-label"
                value={newsLetterSettings}
                onChange={(e) => setNewsLetterSettings(e.target.value)}
              >
                <MenuItem value="default">Select an option</MenuItem>
                <MenuItem value="news-info">Newsletter Inforamtion</MenuItem>
              </Select>
              </FormControl>
              {newsLetterSettings === "news-info" && (
                <Box display="flex" flexDirection="column" gap={2}>
                  <FormControl fullWidth sx={{ paddingRight: 2 }}>
                    <Select
                      variant="outlined"
                      value={mailingList}
                      onChange={(e) => setMailingList(e.target.value)}
                    >
                      <MenuItem value="default">Select Mailing List</MenuItem>
                      <MenuItem value="list1">Mailing List 1</MenuItem>
                      <MenuItem value="list2">Mailing List 2</MenuItem>
                      <MenuItem value="list3">Mailing List 3</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={newsLetter}
                        onChange={(e) => setNewsLetter(e.target.checked)}
                      />
                    }
                    label="Newsletter"
                  />
                </Box>
              )}
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