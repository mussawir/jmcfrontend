import React, { useRef, useMemo, useState } from "react";
import DrawerComponent from './DrawerComponent';
import HeaderComponent from './HeaderComponent';
import { Box, Typography, Toolbar, CssBaseline, Select, MenuItem, InputLabel, FormControl, TextField, Button } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Radio from '@mui/material/Radio';
import PersonIcon from '@mui/icons-material/Person';
import Tab from '@mui/material/Tab';
import GroupIcon from '@mui/icons-material/Group';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BusinessIcon from '@mui/icons-material/Business';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HouseIcon from '@mui/icons-material/House';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GavelIcon from '@mui/icons-material/Gavel';
import PaymentIcon from '@mui/icons-material/Payment';
import SummaryIcon from '@mui/icons-material/Summarize';
  // Event handler with correct typing
 
const SchLoanG: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState("a");
    const [value, setValue] = React.useState('one');



  const sectionIcons = {
    "Purchaser": <PersonIcon style={{ fontSize: 15, }} />,
    "Proprietor": <BusinessIcon style={{ fontSize: 15 }} />,
    "Master Chargee / Assignee": <AssignmentIcon style={{ fontSize: 15 }} />,
    "Master Title": <HouseIcon style={{ fontSize: 15 }} />,
    "Project": <LocationCityIcon style={{ fontSize: 15 }} />,
    "Property Details": <HouseIcon style={{ fontSize: 15 }} />,
    "HDA": <AccountBalanceIcon style={{ fontSize: 15 }} />,
    "Developer Solicitors": <GavelIcon style={{ fontSize: 15 }} />,
    "Purchaser Solicitors": <GavelIcon style={{ fontSize: 15 }} />,
    "Purchase Price": <MonetizationOnIcon style={{ fontSize: 15 }} />,
    "Adjustment Rate": <MonetizationOnIcon style={{ fontSize: 15 }} />,
    "Developer Stakeholder": <BusinessIcon style={{ fontSize: 15 }} />,
    "Summary Of Price (in RM)": <SummaryIcon style={{ fontSize: 15 }} />,
    "Schedule Of Payment(s)": <PaymentIcon style={{ fontSize: 15 }} />,
};
   
const purchaserarray = [
  // {
  //   heading: "Purchaser",
  //   fields: [
  //     "1st Purchaser name",
  //     "1st Purchaser identity card",
  //     "1st Purchaser contact number",
  //     "1st Purchaser email address",
  //     "2nd Purchaser name",
  //     "2nd Purchaser identity card",
  //     "2nd Purchaser contact number",
  //     "2nd Purchaser email address",
  //     "3rd Purchaser name",
  //     "3rd Purchaser identity card",
  //     "3rd Purchaser contact number",
  //     "3rd Purchaser email address",
  //     "4th Purchaser name",
  //     "4th Purchaser identity card",
  //     "4th Purchaser contact number",
  //     "4th Purchaser email address",
  //     "5th Purchaser name",
  //     "5th Purchaser identity card",
  //     "5th Purchaser contact number",
  //     "5th Purchaser email address",
  //     "Purchaser correspondance address",
  //   ],
  // },
  {
    heading: "Purchaser individual(s)",
    fields: [
      "1st Purchaser name",
      "1st Purchaser passport number",
      "1st Purchaser contact number",
      "1st Purchaser email address",
      "2nd Purchaser name",
      "2nd Purchaser passport number",
      "2nd Purchaser contact number",
      "2nd Purchaser email address",
      "3rd Purchaser name",
      "3rd Purchaser passport number",
      "3rd Purchaser contact number",
      "3rd Purchaser email address",
      "Purchaser correspondance address",
      "Purchaser correspondance address in Malaysia",
    ],
  },
  {
    heading: "Purchaser company",
    fields: [
      "Purchaser name",
      "Purchaser company registration number",
      "Purchaser registered office address",
      "Purchaser place of business address",
      "Purchaser contact number",
      "Purchaser email address",
      "Purchaser person in charge name",
      "Purchaser person in charge name contact number",
      "Purchaser person in charge email address",
      "Purchaser authorised 1st signatory name",
      "Purchaser authorised 1st identity card number",
      "Purchaser authorised 1st signatory designation",
      "Purchaser authorised 2nd signatory name",
      "Purchaser authorised 2nd identity card number",
      "Purchaser authorised 2nd signatory designation",
    ],
  },
];

  const sections = [
    {
      heading: "Proprietor",
      fields: [
        "Proprietor name",
        "Proprietor company registration number",
        "Proprietor registered office address",
        "Proprietor place of business address",
        "Proprietor authorised 1st signatory name",
        "Proprietor authorised 1st identity card number",
        "Proprietor authorised 2nd signatory name",
        "Proprietor authorised 2nd identity card number",
        "Proprietor PA number registered in High Court",
        "Proprietor Noting PA registered in which land registry",
      ],
    },
    {
      heading: "Master Chargee / Assignee",
      fields: [
        "Master Chargee / Assignee name",
        "Master Chargee / Assignee company registration number",
        "Master Chargee / Assignee registered office address",
        "Master Chargee / Assignee place of business address",
        "Master Chargee / Assignee file reference number",
        "Master Chargee / Assignee contact number",
        "Master Chargee / Assignee email address",
        "Master Chargee / Assignee person in charge name",
        "Master Chargee / Assignee person in charge name contact number",
        "Master Chargee / Assignee person in charge email address",
      ],
    },
    {
      heading: "Master Title",
      fields: [
        "Title type - Freehold / Leasehold",
        "Title description - H.S.(D) / H.S.(M) / PN / PM / Geran / Geran Mukim",
        "Title number",
        "Lot/PT number",
        "Mukim/Bandar/Pekan",
        "Daerah",
        "Negeri",
        "If leasehold, numbers of years and expiration date",
        "Land area",
      ],
    },
    {
      heading: "Project",
      fields: [
        "Type of building",
        "Project name",
        "Phase number",
        "Advertisement & sale permit number",
        "Approved layout plan reference number",
        "Local municipal name",
      ],
    },
    {
      heading: "Property Details",
      fields: [
        "Parcel/unit/lot number",
        "Title type - Freehold / Leasehold",
        "Title description - H.S.(D) / H.S.(M) / PN / PM / Geran / Geran Mukim",
        "Title number",
        "Lot/PT number",
        "Mukim/Bandar/Pekan",
        "Daerah",
        "Negeri",
        "If leasehold, numbers of years and expiration date",
        "Parcel/unit/lot area",
        "Parcel/unit/lot built up area",
        "Property address",
      ],
    },
    {
      heading: "HDA",
      fields: [
        "Developer HDA number",
        "Bank/financial institution name",
        "Bank/financial institution registered office address",
        "Bank/financial institution file reference number",
      ],
    },
    {
      heading: "Developer Solicitors",
      fields: [
        "Developer solicitors name",
        "Developer solicitors office address",
        "Developer solicitors file reference number",
        "Developer solicitors contact number",
        "Developer solicitors email address",
        "Developer attestation lawyer name",
        "Developer attestation lawyer identity card number",
        "Developer solicitors lawyer & clerk in charge contact number",
        "Developer solicitors lawyer and clerk in charge email address",
      ],
    },
    {
      heading: "Purchaser Solicitors",
      fields: [
        "Purchaser solicitors name",
        "Purchaser solicitors office address",
        "Purchaser solicitors file reference number",
        "Purchaser solicitors contact number",
        "Purchaser solicitors email address",
        "Purchaser attestation lawyer name",
        "Purchaser attestation lawyer identity card number",
        "Purchaser solicitors lawyer & clerk in charge contact number",
        "Purchaser solicitors lawyer and clerk in charge email address",
      ],
    },
    {
      heading: "Purchase Price",
      fields: [
        "Purchase price in words",
        "Purchase price in numerics",
      ],
    },
    {
      heading: "Adjustment Rate",
      fields: [
        "Adjustment rate in words",
        "Adjustment rate in numerics",
      ],
    },
    {
      heading: "Developer Stakeholder",
      fields: [
        "Developer stakeholder name",
        "Developer stakeholder office address",
        "Developer stakeholder file reference number",
        "Developer stakeholder contact number",
        "Developer stakeholder email address",
        "Developer stakeholder person in charge contact number",
        "Developer stakeholder person in charge email address",
      ],
    },
    {
      heading: "Summary Of Price (in RM)",
      fields: [
        "Approved purchase price in numerics",
        "Developer discount in numerics",
        "Bumiputera lot discount in numerics",
        "Government initiative in numerics",
      ],
    },
    {
      heading: "Schedule Of Payment(s)",
      fields: [
        "Purchase price (10%) in numerics",
        "Purchase price (15%) in numerics",
        "Purchase price (5%) in numerics",
        "Purchase price (2.5%) in numerics",
        "Purchase price (17.5%) in numerics",
        "Purchase price (100%) in numerics",
      ],
    },
  ];

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedValue(event.target.value);
  };
  const selectedSection =
  selectedValue === "a"
    ? purchaserarray[0] // Purchaser individual(s) (Malaysian)
    : selectedValue === "b"
    ? purchaserarray[1] // Purchaser individual(s) (Foreigner)
    : purchaserarray[2]; // Purchaser company
    
  const sectionRefs = useMemo(
    () => sections.map(() => React.createRef<HTMLDivElement>()),
    []
  );
  const sectionRefs2 = useMemo(
    () => purchaserarray.map(() => React.createRef<HTMLDivElement>()),
    []
  );
  const scrollToSection = (index: number) => {
    sectionRefs[index].current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSection2 = (index: number) => {
    sectionRefs2[index].current?.scrollIntoView({ behavior: "smooth" });
  };

  const [uploadFiles, setUploadFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploadFiles(Array.from(e.target.files));
    }
  };

  const UploadFile = async (event: React.FormEvent) => {
    if (uploadFiles.length === 0) {
      alert('Please select at least one file');
      return;
    }
    event.preventDefault();

    const formData = new FormData();
    uploadFiles.forEach((file) => formData.append('uploadFiles', file));

    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      const response = await fetch(`${apiUrl}/add-documents`, {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();

      if (response.ok) {
        console.log(result);
        alert('Files uploaded successfully');
      } else {
        alert('Failed to upload files');
        console.error(result);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during the file upload');
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <DrawerComponent />
    <HeaderComponent />

  <Box sx={{ width: '100%' }}>
            <Toolbar />
       <Tabs
      value={value}
      onChange={handleChange}
      textColor="secondary"
      indicatorColor="secondary"
      aria-label="secondary tabs example"
      sx={{ position: 'fixed'}}
    >
      <Tab value="one" label="Schedule G" />
      <Tab value="two" label="loan G" />
    </Tabs>

    <Box sx={{ padding: 3, }}>
      {value === "one" && <div 
      >
    <Box sx={{ display: 'flex' }}>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}> 
      <div
            style={{
                position: "sticky",
                top: 0,
                width: "100%",
                backgroundColor: "#fff",
                zIndex: 1000,
                borderRadius: '4px',
                padding: "15px 10px",
                fontSize: "14px",
            }}
        >
            {sections.map((section, index) => (
                <a
                    key={index}
                    onClick={() => scrollToSection(index)}
                    style={{
                        margin: "1px 5px",
                        padding: "1px 0px",
                        cursor: "pointer",
                        display: "inline-block",
                        color: "#007bff",
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                     {sectionIcons[section.heading]}
                    <span>{section.heading}</span>
                    </div>           
                </a>
            ))}
        </div>
      <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginBottom: 2,
        marginTop: 2,
      }}
    >
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        style={{ marginRight: '16px', width: '180px', position: "sticky",
        }}
      />
      <Button variant="contained" color="primary" onClick={UploadFile}>
        Fill From Doc
      </Button>
    </Box>


      <Box
        sx={{
          marginTop: '0px',
          position: 'fixed',
          overflowY: 'auto',    // Makes the section content scrollable
          maxHeight: 'calc(100vh - 100px)',  // Adjust this height to prevent it from occupying the entire page
        }}
      >
      {/* <div style={{marginTop: '10px', marginBottom: '40px'}}>
        <h3>Developer</h3>
        <select style={{ padding: "10px", fontSize: "14px", borderRadius: "4px" }}>
          <option value="">Select a Developer</option>
          <option value="Field 1">Field 1</option>
          <option value="Field 2">Field 2</option>
          <option value="Field 3">Field 3</option>
        </select>
      </div> */}

      <Box sx={{ display: "flex", width: "100%", marginBottom: 2, marginTop: 1 }}>
        <Radio
          checked={selectedValue === "a"}
          onChange={handleChange}
          value="a"
          name="radio-buttons"
          inputProps={{ "aria-label": "A" }}
        />
        <PersonIcon style={{ marginRight: "5px", marginTop: "8px" }} />
        <Typography style={{ marginTop: "10px" }}>Master Title</Typography>

        <Radio
          checked={selectedValue === "b"}
          onChange={handleChange}
          value="b"
          name="radio-buttons"
          inputProps={{ "aria-label": "B" }}
        />
        <AccountCircleIcon style={{ marginRight: "5px", marginTop: "8px" }} />
        <Typography style={{ marginTop: "10px" }}>Strata Title</Typography>

        {/* <Radio
          checked={selectedValue === "c"}
          onChange={handleChange}
          value="c"
          name="radio-buttons"
          inputProps={{ "aria-label": "C" }}
        />
        <GroupIcon style={{ marginRight: "5px", marginTop: "8px" }} />
        <Typography style={{ marginTop: "10px" }}>Purchaser company</Typography> */}
      </Box>

      {/* <div>
        <h3>{selectedSection.heading}</h3>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap', // Ensures wrapping to the next row
            gap: '20px', // Space between items
          }}
        >
          {selectedSection.fields.map((field, index) => (
            <div
              key={index}
              style={{
                flex: '1 1 calc(50% - 20px)', // Takes 50% of the width minus gap space
                padding: '10px',
                boxSizing: 'border-box',
              }}
            >
              <input
                type="text"
                placeholder={field}
                style={{
                  padding: '10px',
                  width: '100%',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                }}
              />
            </div>
          ))}
        </div>
      </div> */}

      
        {sections.map((section, index) => (
          <div
            key={index}
            ref={sectionRefs[index]}
            style={{
              paddingLeft: '20px',
              paddingright: '20px',
              marginTop: '0px',
              borderBottom: '1px solid #ddd',
            }}
          >

            <h2>{section.heading}</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {section.fields.map((field, fieldIndex) => (
                <div
                  key={fieldIndex}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '1 1 50%', // Adjusts width to 50% for 2 columns
                    padding: '10px',
                    boxSizing: 'border-box',
                  }}
                >
                  
                  <input
                    type="text"
                    placeholder={field}
                    style={{ padding: '10px', width: '100%' }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </Box>

    </Box>
    </Box>
    </div>}
            {value === "two" && <div > 
               <Box sx={{ display: 'flex' }}>
                  {/* <CssBaseline />
                  <DrawerComponent />
                  <HeaderComponent /> */}
            
                  <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    {/* <Toolbar /> */}
              
                    <div
            style={{
                position: "sticky",
                top: 0,
                width: "100%",
                backgroundColor: "#fff",
                zIndex: 1000,
                borderRadius: '4px',
                padding: "15px 10px",
                fontSize: "12px",
            }}
        >
            {sections.map((section, index) => (
                <a
                    key={index}
                    onClick={() => scrollToSection(index)}
                    style={{
                        margin: "15px 5px",
                        padding: "10px 0px",
                        cursor: "pointer",
                        color: "#007bff",
                    }}
                >
                  
                    {sectionIcons[section.heading]} {/* Render icon */}
                    {section.heading} |
                   
                </a>
            ))}
        </div>
                  <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    marginBottom: 2,
                    marginTop: 2,
                  }}
                >
                  <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    style={{ marginRight: '16px', width: '180px', position: "sticky",
                    }}
                  />
                  <Button variant="contained" color="primary" onClick={UploadFile}>
                    Fill From Doc
                  </Button>
                </Box>
                  <Box
                    sx={{
                      marginTop: '0px',
                      position: 'fixed',
                      overflowY: 'auto',    // Makes the section content scrollable
                      maxHeight: 'calc(100vh - 100px)',  // Adjust this height to prevent it from occupying the entire page
                    }}
                  >
                     <Box sx={{ display: 'flex', width: '100%', marginBottom: 1, marginTop: 0 }}>
            <Radio
                checked={selectedValue === 'a'}
                onChange={handleChange}
                value="a"
                name="radio-buttons"
                inputProps={{ 'aria-label': 'A' }}
            />
            <PersonIcon style={{ marginLeft: '0px', marginRight: '5px', marginTop: '8px' }} />
            <Typography style={{ marginTop: '10px' }}>Purchaser individual(s) (Malaysian)</Typography>

            <Radio
                checked={selectedValue === 'b'}
                onChange={handleChange}
                value="b"
                name="radio-buttons"
                inputProps={{ 'aria-label': 'B' }}
            />
            <AccountCircleIcon style={{ marginLeft: '0px', marginRight: '5px', marginTop: '8px' }} />
            <Typography style={{ marginTop: '10px' }}>Purchaser individual(s) (foreigner)</Typography>

            <Radio
                checked={selectedValue === 'c'}
                onChange={handleChange}
                value="c"
                name="radio-buttons"
                inputProps={{ 'aria-label': 'C' }}
            />
            <GroupIcon style={{ marginLeft: '0px', marginRight: '5px', }} />
            <Typography style={{ marginTop: '10px' }}>Purchaser company</Typography>
        </Box>
                    {sections.map((section, index) => (
                      <div
                        key={index}
                        ref={sectionRefs[index]}
                        style={{
                          paddingLeft: '20px',
                          paddingright: '20px',
                          marginTop: '0px',
                          borderBottom: '1px solid #ddd',
                        }}
                      >
                        <h2>{section.heading}</h2>
                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                          {section.fields.map((field, fieldIndex) => (
                            <div
                              key={fieldIndex}
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                flex: '1 1 50%', // Adjusts width to 50% for 2 columns
                                padding: '10px',
                                boxSizing: 'border-box',
                              }}
                            >
                              <input
                                type="text"
                                placeholder={field}
                                style={{ padding: '10px', width: '100%' }}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </Box>
            
                </Box>
                </Box>
                </div>}
          </Box>
    
                    {/* <Bookmark1/> */}
    
        </Box>
        </Box>
  );
};

export default SchLoanG;