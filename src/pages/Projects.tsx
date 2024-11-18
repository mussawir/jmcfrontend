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

// Define the Case interface
interface Case {
  title: string;
  status: string;
  dateFiled?: string;
  lastUpdate?: string;
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

function Projects() {
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
            <Card sx={{ backgroundColor: '#0288d1', color: 'white' }}>
              <CardContent>
                <Typography variant="h6">Total Cases</Typography>
                <Box display="flex" alignItems="center">
                  <GavelIcon color="inherit" sx={{ mr: 1 }} />
                  <Typography variant="h4">450</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ backgroundColor: '#388e3c', color: 'white' }}>
              <CardContent>
                <Typography variant="h6">Resolved Cases</Typography>
                <Box display="flex" alignItems="center">
                  <CheckCircleIcon color="inherit" sx={{ mr: 1 }} />
                  <Typography variant="h4">320</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ backgroundColor: '#f57c00', color: 'white' }}>
              <CardContent>
                <Typography variant="h6">Pending Cases</Typography>
                <Box display="flex" alignItems="center">
                  <PendingIcon color="inherit" sx={{ mr: 1 }} />
                  <Typography variant="h4">90</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ backgroundColor: '#fbc02d', color: 'white' }}>
              <CardContent>
                <Typography variant="h6">New Cases This Month</Typography>
                <Box display="flex" alignItems="center">
                  <TrendingUpIcon color="inherit" sx={{ mr: 1 }} />
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
                    <Line type="monotone" dataKey="cases" stroke="#0288d1" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>

          {/* Case Status Breakdown Pie Chart */}
          <Grid item xs={12} md={4}>
            <Card sx={{ backgroundColor: '#ffffff' }}>
              <CardContent>
                <Typography variant="h6">Case Status Breakdown</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={caseStatusData}
                      dataKey="value"
                      nameKey="status"
                      outerRadius={80}
                      fill="#8884d8"
                      label
                    >
                      {caseStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.status === 'Resolved' ? '#388e3c' : entry.status === 'Pending' ? '#f57c00' : '#0288d1'} />
                      ))}
                    </Pie>
                    <Legend />
                  </PieChart>
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

          {/* Team Overview with Bar Chart */}
          <Grid item xs={12} md={4}>
            <Card sx={{ backgroundColor: '#ffffff' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>Team Overview</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={caseStatusData} margin={{ top: 10, right: 30, left: 20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="status" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#0288d1" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>

          {/* Notifications */}
          <Grid item xs={12} md={4}>
            <Card sx={{ backgroundColor: '#f3f4f6' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>Notifications</Typography>
                <Typography variant="body2">New case filed by John Doe</Typography>
                <Typography variant="body2">Case #12345 updated status to Resolved</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Projects;
