import React, { useEffect, useState } from 'react';
import { Box, Grid, Card, CardContent, Typography, Toolbar, CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DrawerComponent from '../components/DrawerComponent';
import HeaderComponent from '../components/HeaderComponent';
import GavelIcon from '@mui/icons-material/Gavel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Legend, Cell } from 'recharts';
import Tabs from '../components/Tabs';
// Define the Case interface
interface Case {
  title: string;
  status: string;
  dateFiled?: string;
  lastUpdate?: string;
  documents?: string[]; // New property for associated documents
}

// Sample data for the charts
const caseTrendData = [
  { month: 'Jan', cases: 30 },
  { month: 'Feb', cases: 45 },
  { month: 'Mar', cases: 60 },
  { month: 'Apr', cases: 80 },
  { month: 'May', cases: 90 },
  { month: 'Jun', cases: 75 },
  { month: 'Jul', cases: 100 },
  { month: 'Aug', cases: 85 },
  { month: 'Sep', cases: 95 },
  { month: 'Oct', cases: 120 },
  { month: 'Nov', cases: 110 },
  { month: 'Dec', cases: 130 },
];

const caseStatusData = [
  { status: 'Resolved', value: 320 },
  { status: 'Pending', value: 90 },
  { status: 'New', value: 40 },
];

function Dashboard() {
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
        <Tabs />





       

      </Box>
    </Box>
  );
}

export default Dashboard;
