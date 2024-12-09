import React, { useState, useRef } from "react";
import "./Tabs2.css"; // Add styles here
import SpaH from "../pages/SpaH";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Ifchargor from "../pages/loang/Ifchargor";
import Endfinancier from "../pages/loang/Endfinancier";

const headings = [
  {
    shortHeading: "Endfinancier",
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
  },
  {
    shortHeading: "Ifchargor",
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
  },
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Loang() {
  const [value, setValue] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const scrollTabs = (direction: "left" | "right") => {
    if (tabsRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      tabsRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box sx={{ width: "100%", mt: 10 }}>
      <h2 style={{ textAlign: "center", marginBottom: "0px" }}>LOAN G</h2>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Endfinancier" {...a11yProps(0)} />
          <Tab label="Ifchagor" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Ifchargor />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Endfinancier />
      </CustomTabPanel>
    </Box>
  );
}
