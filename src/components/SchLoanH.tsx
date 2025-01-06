import React, { useRef, useMemo, useState } from "react";
import DrawerComponent from './DrawerComponent';
import HeaderComponent from './HeaderComponent';
import { Box, Typography, Toolbar, CssBaseline, Select, MenuItem, InputLabel, FormControl, TextField, Button } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
const SchLoanH: React.FC = () => {

  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

   

  const sections = [
    {
      heading: "Purchaser",
      fields: [
        "1st Purchaser name",
        "1st Purchaser identity card",
        "1st Purchaser contact number",
        "1st Purchaser email address",
        "2nd Purchaser name",
        "2nd Purchaser identity card",
        "2nd Purchaser contact number",
        "2nd Purchaser email address",
        "3rd Purchaser name",
        "3rd Purchaser identity card",
        "3rd Purchaser contact number",
        "3rd Purchaser email address",
        "4th Purchaser name",
        "4th Purchaser identity card",
        "4th Purchaser contact number",
        "4th Purchaser email address",
        "5th Purchaser name",
        "5th Purchaser identity card",
        "5th Purchaser contact number",
        "5th Purchaser email address",
        "Purchaser correspondance address",
      ],
    },
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
      heading: "Master title",
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
      heading: "Property details",
      fields: [
        "Parcel/unit/lot number",
        "Storey number",
        "Building/block number",
        "Parcel/unit/lot area",
        "Parcel/unit/lot built up area",
        "Accessory parcel(s) number",
        "Accessory parcel(s) building/block number",
        "Air-cond ledge parcel(s) number",
        "Car park lot(s) number",
        "Car park building/block number",
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
      heading: "Developer solicitors",
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
      heading: "Purchaser solicitors",
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
      heading: "Purchase price",
      fields: [
        "Purchase price in words",
        "Purchase price in numerics",
      ],
    },
    {
      heading: "Adjustment rate",
      fields: [
        "Adjustment rate in words",
        "Adjustment rate in numerics",
      ],
    },
    {
      heading: "Developer stakeholder",
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
      heading: "Summary of price (in RM)",
      fields: [
        "Approved purchase price in numerics",
        "Developer discount in numerics",
        "Bumiputera lot discount in numerics",
        "Government initiative in numerics",
      ],
    },
    {
      heading: "Schedule of payment(s)",
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

  const sectionRefs = useMemo(
    () => sections.map(() => React.createRef<HTMLDivElement>()),
    []
  );

  const scrollToSection = (index: number) => {
    sectionRefs[index].current?.scrollIntoView({ behavior: "smooth" });
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
      const response = await fetch('http://localhost:5000/add-documents', {
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

    {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Box
    sx={{
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      width: '100%',
      marginBottom: 2,
      marginTop: 25,
    }}
  >
    <input
      type="file"
      multiple
      onChange={handleFileChange}
      style={{ marginRight: '16px', width: '180px' }}
    />
    <Button variant="contained" color="primary" onClick={UploadFile}>
      Fill From Doc
    </Button>
  </Box>
    <div
      style={{
        position: "fixed",
        top: 65,
        width: "80%",
        backgroundColor: "#f8f9fa",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
        padding: "10px 20px",
      }}
    >
      {sections.map((section, index) => (
        <a
          key={index}
          onClick={() => scrollToSection(index)}
          style={{
            margin: "5px 15px",
            padding: "5px 18px",
            cursor: "pointer",
            color: "#007bff",
          }}
        >
          {section.heading}
        </a>
      ))}
    </div>

    <div style={{ marginTop: "60px" }}>
{sections.map((section, index) => (
  <div
    key={index}
    ref={sectionRefs[index]}
    style={{
      minHeight: "70vh",
      padding: "20px",
      marginTop: "100px",
      borderBottom: "1px solid #ddd",
    }}
  >
    <h2>{section.heading}</h2>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {section.fields.map((field, fieldIndex) => (
        <div
          key={fieldIndex}
          style={{
            display: "flex",
            flexDirection: "column",
            flex: "1 1 50%", // Adjusts width to 50% for 2 columns
            padding: "10px",
            boxSizing: "border-box",
          }}
        >
          <input
            type="text"
            placeholder={field}
            style={{ padding: "10px", width: "100%" }}
          />
        </div>
      ))}
    </div>
  </div>
))}
</div>

  </Box> */}
  
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
      <Tab value="one" label="Schedule H" />
      <Tab value="two" label="loan H" />
    </Tabs>

    <Box sx={{ padding: 3, }}>
      {value === "one" && <div  style={{ marginTop: "20px" }}
      >
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
          width: "97%",
          backgroundColor: "#fff",
          boxShadow: "2px 2px 5px 5px rgba(77, 77, 77, 0.1)",
          zIndex: 1000,
          borderRadius: '4px',
          padding: "15px 10px",
          fontSize: "15px",
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
            {section.heading}    |
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
        {sections.map((section, index) => (
          <div
            key={index}
            ref={sectionRefs[index]}
            style={{
              minHeight: '70vh',
              padding: '20px',
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
            {value === "two" && <div style={{ marginTop: "20px" }} >  <Box sx={{ display: 'flex' }}>
                  {/* <CssBaseline />
                  <DrawerComponent />
                  <HeaderComponent /> */}
            
                  <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    {/* <Toolbar /> */}
              
                  <div
                    style={{
                      position: "sticky",
                      top: 0,
                      width: "97%",
                      backgroundColor: "#fff",
                      boxShadow: "2px 2px 5px 5px rgba(77, 77, 77, 0.1)",
                      zIndex: 1000,
                      borderRadius: '4px',
                      padding: "15px 10px",
                      fontSize: "15px",
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
                        {section.heading}    |
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
                    {sections.map((section, index) => (
                      <div
                        key={index}
                        ref={sectionRefs[index]}
                        style={{
                          minHeight: '70vh',
                          padding: '20px',
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

export default SchLoanH;