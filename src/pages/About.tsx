import React from 'react';
import { Box, Toolbar, CssBaseline, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import DrawerComponent from '../components/DrawerComponent';
import HeaderComponent from '../components/HeaderComponent';

function About() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <DrawerComponent />
      <HeaderComponent />

      <Box component="main" sx={{ flexGrow: 1, p: 4, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
        <Toolbar />
        
        {/* About Page Content */}
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom 
          sx={{ fontWeight: 'bold', color: '#333', marginBottom: '1.5rem' }}
        >
          About Us
        </Typography>
        <Typography 
          variant="body1" 
          paragraph 
          sx={{ fontSize: '1.1rem', color: '#555', lineHeight: 1.8 }}
        >
          Welcome to <strong>Project Management System</strong>, where productivity meets simplicity! Our platform is 
          designed to help teams and organizations streamline their workflow, collaborate seamlessly, and achieve 
          their goals faster and more efficiently.
        </Typography>

        <Divider sx={{ marginY: 2 }} />

        <Typography 
          variant="h5" 
          component="h2" 
          gutterBottom 
          sx={{ fontWeight: 'bold', color: '#444', marginTop: '1.5rem' }}
        >
          Our Mission
        </Typography>
        <Typography 
          variant="body1" 
          paragraph 
          sx={{ fontSize: '1.1rem', color: '#555', lineHeight: 1.8 }}
        >
          At <strong>Project Management System</strong>, our mission is to empower teams of all sizes with intuitive 
          tools that enhance collaboration, boost productivity, and simplify project management. We believe in 
          creating a system that adapts to your needs, helping you stay organized and focused on what truly matters.
        </Typography>

        <Divider sx={{ marginY: 2 }} />

        <Typography 
          variant="h5" 
          component="h2" 
          gutterBottom 
          sx={{ fontWeight: 'bold', color: '#444' }}
        >
          Why Choose Us?
        </Typography>
        <List sx={{ paddingLeft: 2, color: '#666' }}>
          {[
            "User-Friendly Interface: Navigate with ease and get started immediately, no matter your technical expertise.",
            "Powerful Features: From task tracking to real-time collaboration, our tools cover every aspect of project management.",
            "Customization Options: Tailor the platform to suit your team’s unique workflow.",
            "Cloud Integration: Work anywhere, anytime with secure cloud-based storage and access."
          ].map((item, index) => (
            <ListItem key={index} sx={{ paddingLeft: 0 }}>
              <ListItemText primary={item} sx={{ color: '#555', fontSize: '1rem', lineHeight: 1.6 }} />
            </ListItem>
          ))}
        </List>

        <Divider sx={{ marginY: 2 }} />

        <Typography 
          variant="h5" 
          component="h2" 
          gutterBottom 
          sx={{ fontWeight: 'bold', color: '#444' }}
        >
          Key Features
        </Typography>
        <List sx={{ paddingLeft: 2, color: '#666' }}>
          {[
            "Task Management: Assign, track, and prioritize tasks effortlessly.",
            "Team Collaboration: Communicate and share updates with your team in real time.",
            "Analytics & Reporting: Gain valuable insights with detailed reports on project progress.",
            "Milestone Tracking: Stay on schedule by monitoring deadlines and key milestones.",
            "Third-Party Integrations: Connect your favorite tools like Google Drive, Slack, and more."
          ].map((item, index) => (
            <ListItem key={index} sx={{ paddingLeft: 0 }}>
              <ListItemText primary={item} sx={{ color: '#555', fontSize: '1rem', lineHeight: 1.6 }} />
            </ListItem>
          ))}
        </List>

        <Divider sx={{ marginY: 2 }} />

        <Typography 
          variant="h5" 
          component="h2" 
          gutterBottom 
          sx={{ fontWeight: 'bold', color: '#444' }}
        >
          Contact Us
        </Typography>
        <Typography 
          variant="body1" 
          paragraph 
          sx={{ fontSize: '1.1rem', color: '#555', lineHeight: 1.8 }}
        >
          We’d love to hear from you! Whether you have a question, need support, or want to provide feedback, our team 
          is here to help.
        </Typography>
        <List>
          <ListItem>
            <ListItemText 
              primary="Email: support@projectmanagement.com" 
              primaryTypographyProps={{ sx: { color: '#1e88e5', fontWeight: 'bold' } }} 
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Phone: +123-456-7890" 
              primaryTypographyProps={{ sx: { color: '#1e88e5', fontWeight: 'bold' } }} 
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Website: www.projectmanagement.com" 
              primaryTypographyProps={{ sx: { color: '#1e88e5', fontWeight: 'bold' } }} 
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default About;
