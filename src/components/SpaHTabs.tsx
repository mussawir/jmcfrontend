import React, { useState, useRef  } from 'react';
import './Tabs2.css'; // Add styles as needed
import SpaH from "../pages/SpaH";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PurchaserFormWrapper from '../pages/spah/Purchaser';
import Developer from '../pages/spah/Developer';

const headings = [
  {
    shortHeading: "Developer",
    questions: [
      "Developer name",
      "Developer company registration number",
      "Developer registered office address",
      "Developer place of business address",
      "Developer file reference number",
      "Developer licence number",
      "Developer contact number",
      "Developer email address",
      "Developer person in charge name",
      "Developer person in charge contact number",
      "Developer person in charge email address",
      "Developer authorised 1st signatory name",
      "Developer authorised 1st identity card number",
      "Developer authorised 1st signatory designation",
      "Developer authorised 2nd signatory name",
      "Developer authorised 2nd identity card number",
      "Developer authorised 2nd signatory designation",
    ],
    loremep: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
  },
  {
    shortHeading: "Purchaser ",
    questions: [
      "1st Purchaser name",
      "1st Purchaser identity card",
      "1st Purchaser contact number",
      "1st Purchaser email address",
      "2nd Purchaser name",
      "2nd Purchaser identity card",
      "2nd Purchaser contact number",
      "2nd Purchaser email address",
      "Purchaser correspondence address",
    ],
    loremep: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
  },
  // {
  //   shortHeading: "Purchaser (Individual - Foreigner)",
  //   questions: [
  //     "1st Purchaser name",
  //     "1st Purchaser passport number",
  //     "1st Purchaser contact number",
  //     "1st Purchaser email address",
  //     "Purchaser correspondence address",
  //     "Purchaser correspondence address in Malaysia",
  //   ],
  //   loremep: [
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //   ],
  // },
  // {
  //   shortHeading: "Purchaser (Company)",
  //   questions: [
  //     "Purchaser name",
  //     "Purchaser company registration number",
  //     "Purchaser registered office address",
  //     "Purchaser place of business address",
  //     "Purchaser contact number",
  //     "Purchaser email address",
  //     "Purchaser person in charge name",
  //     "Purchaser person in charge contact number",
  //     "Purchaser person in charge email address",
  //   ],
  //   loremep: [
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //   ],
  // },
  //   
];
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  const [activeTab, setActiveTab] = useState(0);
  const [activeField, setActiveField] = useState<number | null>(null);
  const [suggestionsVisible, setSuggestionsVisible] = useState(true);  // Make suggestions visible initially
  const [selectedSuggestions, setSelectedSuggestions] = useState<{ [key: string]: string }>({});
  const [questionsWithAnswers, setQuestionsWithAnswers] = useState<string[]>([]);
  const [loremep, setLorem] = useState<string[]>([]);

  const tabsRef = useRef<HTMLDivElement>(null); // Declare tabsRef
 
  

  const scrollTabs = (direction: "left" | "right") => {
    if (tabsRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      tabsRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleFieldFocus = (questions: string[], fieldIndex: number, loremep: string[]) => {
    setActiveField(fieldIndex);
    setQuestionsWithAnswers(questions); // Set the list of answers
    setLorem(loremep);
    setSuggestionsVisible(true); // Show the suggestions when input is focused
  };

  const handleSuggestionClick = (suggestion: string, fieldKey: string) => {
    setSelectedSuggestions((prev) => ({
      ...prev,
      [fieldKey]: suggestion,
    }));
    setSuggestionsVisible(true); // Hide suggestions after selection
  };

  const handleBlur = () => {
    setSuggestionsVisible(true); // Hide suggestions if clicked outside
  };

  const activeHeading = headings[activeTab] || {}; // Default to empty object if undefined

  // return (
  //   <div className="tabs-container">
  //           <h2 style={{textAlign: 'center', marginBottom: '0px'  }}>SPA H</h2>

  //     <div className="tabs-wrapper">

  //       <button className="scroll-btn left" onClick={() => scrollTabs("left")}>
  //         &lt;
  //       </button>
  //       <div className="tabs" ref={tabsRef}>
  //         {headings.map((heading, index) => (
  //           <div
  //             key={index}
  //             className={`tab ${activeTab === index ? "active" : ""}`}
  //             onClick={() => setActiveTab(index)}
  //           >
  //             {heading.shortHeading}
  //           </div>
  //         ))}
  //       </div>
  //       <button className="scroll-btn right" onClick={() => scrollTabs("right")}>
  //         &gt;
  //       </button>
  //     </div>
  //     {/* <div className="tab-content">
  //       <h2>{activeHeading.shortHeading}</h2>
  //       <form> */}
       
  //                         <SpaH/>  

  //       {/* </form>
  //     </div> */}
  //   </div>
  // );
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', mt: 10 }}>
        <h2 style={{textAlign: 'center', marginBottom: '0px'  }}>SPA H</h2>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Developer" {...a11yProps(0)} />
          <Tab label="Purchaser" {...a11yProps(1)} />
          <Tab label="Company" {...a11yProps(2)} />
          <Tab label="Master chargee" {...a11yProps(3)} />
          <Tab label="Master title details" {...a11yProps(4)} />
          <Tab label="Project details" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Developer/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <PurchaserFormWrapper/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );

};

