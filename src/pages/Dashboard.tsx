import React, { useEffect, useState } from 'react';
import { Box, Grid, Card, CardContent, Typography, Toolbar, CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DrawerComponent from '../components/DrawerComponent';
import HeaderComponent from '../components/HeaderComponent';
import GavelIcon from '@mui/icons-material/Gavel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Define the Case interface
interface Case {
  title: string;
  status: string;
  dateFiled?: string;
  lastUpdate?: string;
}

// Sample data for the chart
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
        <Typography variant="h4" gutterBottom>
          Management Dashboard
        </Typography>

        <Grid container spacing={3}>
          {/* Summary Cards */}
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ backgroundColor: '#e0f7fa' }}>
              <CardContent>
                <Typography variant="h6">Total Cases</Typography>
                <Box display="flex" alignItems="center">
                  <GavelIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="h4">450</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ backgroundColor: '#e8f5e9' }}>
              <CardContent>
                <Typography variant="h6">Resolved Cases</Typography>
                <Box display="flex" alignItems="center">
                  <CheckCircleIcon color="success" sx={{ mr: 1 }} />
                  <Typography variant="h4">320</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ backgroundColor: '#fff3e0' }}>
              <CardContent>
                <Typography variant="h6">Pending Cases</Typography>
                <Box display="flex" alignItems="center">
                  <PendingIcon color="warning" sx={{ mr: 1 }} />
                  <Typography variant="h4">90</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ backgroundColor: '#e0e0e0' }}>
              <CardContent>
                <Typography variant="h6">New Cases This Month</Typography>
                <Box display="flex" alignItems="center">
                  <TrendingUpIcon color="secondary" sx={{ mr: 1 }} />
                  <Typography variant="h4">40</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Case Trends Chart */}
          <Grid item xs={12} md={8}>
            <Card sx={{ height: '100%', backgroundColor: '#ffffff' }}>
              <CardContent>
                <Typography variant="h6">Case Trends</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={caseTrendData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="cases" stroke="#8884d8" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>

          {/* Recent Cases */}
          <Grid item xs={12} md={4}>
            <Card sx={{ backgroundColor: '#f9f9f9' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>Recent Cases</Typography>
                {cases.length > 0 ? (
                  cases.slice(0, 5).map((caseItem, index) => (
                    <Card key={index} sx={{ mb: 2, backgroundColor: '#ffffff' }}>
                      <CardContent>
                        <Typography variant="subtitle1">{caseItem.title}</Typography>
                        <Typography variant="body2" color="textSecondary">
                          Status: {caseItem.status}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Last Update: {caseItem.lastUpdate}
                        </Typography>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <Typography variant="body2">No recent cases</Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Dashboard;
