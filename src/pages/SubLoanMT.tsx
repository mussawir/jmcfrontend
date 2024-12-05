import React, { useEffect, useState } from 'react';
import { Box, CssBaseline, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DrawerComponent from '../components/DrawerComponent';
import HeaderComponent from '../components/HeaderComponent';
import Tabs2 from '../components/SpaHTabs';
import DeveloperTab from '../components/DeveloperTab';
import ChatLayout from '../components/ChatLayout';

// Define the Case interface
interface Case {
  title: string;
  status: string;
  dateFiled?: string;
  lastUpdate?: string;
  documents?: string[]; // New property for associated documents
}

function SpaG() {
  const tabs = [
    { label: "Developer", content: <DeveloperTab /> },
    // Add other tabs here as more sections are identified
  ];

  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleOpenChat = () => {
    setIsChatOpen(true);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  const [cases, setCases] = useState<Case[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('ACCESS_TOKEN');
    if (!token) {
      navigate('/login');
    } else {
      fetchCaseData(token);
    }
  }, [navigate]);

  const fetchCaseData = async (token: string) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/cases', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data: Case[] = await response.json();
        setCases(data);
      } else {
        console.error('Error fetching case data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching case data:', error);
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <DrawerComponent />
      <HeaderComponent />



      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        
       
        {/* <Toolbar /> */}
        <Tabs2  />


      </Box>

    
    </Box>
  );
}
const styles = {
  openButton: {
    padding: "10px 50px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  overlay: {
    position: "fixed" as "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  chatContainer: {
    position: "relative" as "relative",
    width: "400px",
    height: "600px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  closeButton: {
    position: "absolute" as "absolute",
    top: "10px",
    right: "10px",
    padding: "8px 12px",
    backgroundColor: "orange",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
  },
  Gridoffilbut :{
    marginTop: '5%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2%'
  }
};
export default SpaG;
