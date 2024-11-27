import React, { useEffect, useState } from 'react';
import { Box, Toolbar, CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DrawerComponent from '../components/DrawerComponent';
import HeaderComponent from '../components/HeaderComponent';
import Tabs2 from '../components/Tabs2';
import DeveloperTab from '../components/DeveloperTab';

// Define the Case interface
interface Case {
  title: string;
  status: string;
  dateFiled?: string;
  lastUpdate?: string;
  documents?: string[]; // New property for associated documents
}

function Dashboard() {
  const tabs = [
    { label: "Developer", content: <DeveloperTab /> },
    // Add other tabs here as more sections are identified
  ];


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
        <Toolbar />
        <Tabs2  />




       

      </Box>
    </Box>
  );
}

export default Dashboard;
