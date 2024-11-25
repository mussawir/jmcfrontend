import React, { useEffect, useState } from 'react';
import { Box, Grid, Card, CardContent, Typography, Toolbar, CssBaseline, Button } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import DrawerComponent from '../components/DrawerComponent';
import HeaderComponent from '../components/HeaderComponent';

const caseTrendData = [
  { month: 'Jan', cases: 30 },
  { month: 'Feb', cases: 45 },
  { month: 'Mar', cases: 60 },
  { month: 'Apr', cases: 80 },
  { month: 'May', cases: 90 },
  { month: 'Jun', cases: 75 },
];

const caseStatusData = [
  { status: 'Resolved', value: 320 },
  { status: 'Pending', value: 90 },
  { status: 'New', value: 40 },
];

const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex', backgroundColor: '#f7f9fc', minHeight: '100vh' }}>
      <CssBaseline />
      <DrawerComponent />
      <Box sx={{ flexGrow: 1 }}>
        <HeaderComponent />
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          {/* Dashboard Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 500, fontFamily: 'Roboto, sans-serif', color: '#5f5f5f' }}>
              Dashboard
            </Typography>
          </Box>

          {/* Summary Section */}
          <Grid container spacing={3} sx={{ mb: 3 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  backgroundColor: 'white',
                  borderRadius: 2,
                  height: '120px',
                  alignItems: 'center',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  borderLeft: '4px solid #1976d2',
                }}
              >
                <CardContent>
                  <Typography variant="subtitle2" sx={{ color: '#777' }}>
                    Total Cases
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 700, fontFamily: 'Roboto, sans-serif', color: '#333' }}>
                    450
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  backgroundColor: 'white',
                  borderRadius: 2,
                  height: '120px',
                  alignItems: 'center',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  borderLeft: '4px solid #2e7d32',
                }}
              >
                <CardContent>
                  <Typography variant="subtitle2" sx={{ color: '#777' }}>
                    Resolved Cases
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 700, fontFamily: 'Roboto, sans-serif', color: '#333' }}>
                    320
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  backgroundColor: 'white',
                  borderRadius: 2,
                  height: '120px',
                  alignItems: 'center',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  borderLeft: '4px solid #ffa000',
                }}
              >
                <CardContent>
                  <Typography variant="subtitle2" sx={{ color: '#777' }}>
                    Pending Cases
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 700, fontFamily: 'Roboto, sans-serif', color: '#333' }}>
                    90
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  backgroundColor: 'white',
                  borderRadius: 2,
                  height: '120px',
                  alignItems: 'center',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  borderLeft: '4px solid #fbc02d',
                }}
              >
                <CardContent>
                  <Typography variant="subtitle2" sx={{ color: '#777' }}>
                    New Cases This Month
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 700, fontFamily: 'Roboto, sans-serif', color: '#333' }}>
                    40
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Charts Section */}
          <Grid container spacing={3}>
            {/* Case Trends */}
            <Grid item xs={12} md={6}>
              <Card sx={{ backgroundColor: 'white', borderRadius: 2, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 2, fontFamily: 'Roboto, sans-serif', color: '#333' }}>
                    Case Trends
                  </Typography>
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={caseTrendData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="cases" stroke="#1976d2" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </Grid>

            {/* Case Status */}
            <Grid item xs={12} md={6}>
              <Card sx={{ backgroundColor: 'white', borderRadius: 2, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 2, fontFamily: 'Roboto, sans-serif', color: '#333' }}>
                    Case Status Overview
                  </Typography>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={caseStatusData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="status" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="#4caf50" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;