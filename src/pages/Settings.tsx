import React from 'react';
import {
  Box,
  Toolbar,
  CssBaseline,
  Typography,
  TextField,
  Button,
  Divider,
  Switch,
  FormControlLabel,
  Select,
  MenuItem,
} from '@mui/material';
import DrawerComponent from '../components/DrawerComponent';
import HeaderComponent from '../components/HeaderComponent';

const Settings: React.FC = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      padding: '2rem',
    },
    header: {
      color: '#333',
      fontWeight: 'bold',
    },
    sectionTitle: {
      color: '#555',
      fontSize: '1.2rem',
    },
    formInput: {
      marginBottom: '1.5rem',
    },
    actionButtons: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      marginTop: '1rem',
    },
    centeredButton: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '1.5rem',
    },
    styledButton: {
      padding: '0.8rem 2rem',
      fontSize: '1rem',
      borderRadius: '8px',
      textTransform: 'capitalize',
    },
    divider: {
      margin: '2rem 0',
      backgroundColor: '#ccc',
    },
  };

  // Button Handlers
  const handleInviteMembers = () => {
    console.log('Invite Members button clicked');
    // Add your invite logic here
  };

  const handleConnectGoogleDrive = () => {
    console.log('Connect Google Drive button clicked');
    // Add your integration logic here
  };

  const handleConnectSlack = () => {
    console.log('Connect Slack button clicked');
    // Add your integration logic here
  };

  const handleResetPassword = () => {
    console.log('Reset Password button clicked');
    // Add your reset password logic here
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <DrawerComponent />
      <HeaderComponent />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        <Box sx={styles.container}>
          {/* Page Header */}
          <Typography variant="h4" gutterBottom sx={styles.header}>
            Settings
          </Typography>

          {/* General Settings */}
          <Box>
            <Typography variant="h6" gutterBottom sx={styles.sectionTitle}>
              General Settings
            </Typography>
            <TextField
              label="Project Name"
              fullWidth
              variant="outlined"
              sx={styles.formInput}
            />
            <TextField
              label="Project Description"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              sx={styles.formInput}
            />
            <Typography variant="subtitle1" sx={styles.formInput}>
              Time Zone
            </Typography>
            <Select fullWidth defaultValue="GMT" sx={styles.formInput}>
              <MenuItem value="GMT">GMT</MenuItem>
              <MenuItem value="PST">PST</MenuItem>
              <MenuItem value="EST">EST</MenuItem>
            </Select>
          </Box>

          <Divider sx={styles.divider} />

          {/* Team Management */}
          <Box>
            <Typography variant="h6" gutterBottom sx={styles.sectionTitle}>
              Team Management
            </Typography>
            <Box sx={styles.centeredButton}>
              <Button
                variant="contained"
                color="primary"
                sx={styles.styledButton}
                onClick={handleInviteMembers}
              >
                Invite Members
              </Button>
            </Box>
            <Typography variant="body1" gutterBottom>
              Current Members:
            </Typography>
            <Typography variant="body2">John Doe (Admin)</Typography>
            <Typography variant="body2">Jane Smith (Editor)</Typography>
          </Box>

          <Divider sx={styles.divider} />

          {/* Notifications */}
          <Box>
            <Typography variant="h6" gutterBottom sx={styles.sectionTitle}>
              Notifications
            </Typography>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Email Notifications"
              sx={styles.formInput}
            />
            <FormControlLabel
              control={<Switch />}
              label="Push Notifications"
              sx={styles.formInput}
            />
          </Box>

          <Divider sx={styles.divider} />

          {/* Integrations */}
          <Box>
            <Typography variant="h6" gutterBottom sx={styles.sectionTitle}>
              Integrations
            </Typography>
            <Box
              sx={{
                ...styles.centeredButton,
                gap: '2rem',
                marginTop: '20px',
              }}
            >
              <Button
                variant="outlined"
                sx={{ ...styles.styledButton, color: '#1976d2' }}
                onClick={handleConnectGoogleDrive}
              >
                Connect Google Drive
              </Button>
              <Button
                variant="outlined"
                sx={{ ...styles.styledButton, color: '#1976d2' }}
                onClick={handleConnectSlack}
              >
                Connect Slack
              </Button>
            </Box>
          </Box>

          <Divider sx={styles.divider} />

          {/* Security */}
          <Box>
            <Typography variant="h6" gutterBottom sx={styles.sectionTitle}>
              Security
            </Typography>
            <Box sx={styles.centeredButton}>
              <Button
                variant="contained"
                color="secondary"
                sx={styles.styledButton}
                onClick={handleResetPassword}
              >
                Reset Password
              </Button>
            </Box>
            <FormControlLabel
              control={<Switch />}
              label="Enable Two-Factor Authentication"
              sx={{ textAlign: 'center' }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Settings;
