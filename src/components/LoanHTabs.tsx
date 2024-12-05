import React, { useState, useRef } from "react";
import "./Tabs2.css"; // Add styles here
import SpaH from "../pages/SpaH";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Chargor from "../pages/loanh/Chargor";
import Financier from "../pages/loanh/Financier";

const headings = [
  {
    shortHeading: "Financier",
    questions: [
      "Financier name",
      "Financier company registration number",
      "Financier registered office address",
      "Financier branch office address",
      "Financier CAC/SDC office address",
      "Financier branch file reference number",
      "Financier CAC/SDC file reference number",
      "Financier branch contact number",
      "Financier branch email address",
      "Financier CAC/SDC contact number",
      "Financier CAC/SDC email address",
      "Financier CAC/SDC person in charge name",
      "Financier CAC/SDC person in charge contact number",
      "Financier CAC/SDC person in charge email address",
      "Financier 1st attorney name",
      "Financier 1st attorney identity card number",
      "Financier 1st attorney designation",
      "Financier 2nd attorney name",
      "Financier 2nd attorney identity card number",
      "Financier 2nd attorney designation",
      "Financier noting PA number registered in which land registry"
    ],
  },
  {
    shortHeading: "Chargor",
    questions: [
      "1st Assignor name",
    "1st Assignor identity card",
    "1st Assignor contact number",
    "1st Assignor email address",
    "2nd Assignor name",
    "2nd Assignor identity card",
    "2nd Assignor contact number",
    "2nd Assignor email address",
    "3rd Assignor name",
    "3rd Assignor identity card",
    "3rd Assignor contact number",
    "3rd Assignor email address",
    "4th Assignor name",
    "4th Assignor identity card",
    "4th Assignor contact number",
    "4th Assignor email address",
    "5th Assignor name",
    "5th Assignor identity card",
    "5th Assignor contact number",
    "5th Assignor email address",
    "Assignor correspondence address"
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

export default function Loanh() {
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
      <h2 style={{ textAlign: "center", marginBottom: "0px" }}>LOAN H</h2>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Financier" {...a11yProps(0)} />
          <Tab label="Chargor" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Chargor />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Financier />
      </CustomTabPanel>
    </Box>
  );
}
