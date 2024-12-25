import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { DarkModeProvider, useDarkMode } from './DarkModeContext';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Logout from '../pages/Logout';
import About from '../pages/About';
import Dashboard from '../pages/Dashboard';
import UsersList from '../pages/UsersList';
// Other imports...

// Function to check if the user is logged in (you can modify this as per your authentication method)
const isAuthenticated = () => {
  // Check if there's a valid session or token
  return localStorage.getItem('token') !== null; // Example using localStorage
};

const AppWithDarkMode: React.FC = () => {
  const { darkMode } = useDarkMode(); // Access dark mode state

  // Define Material-UI themes
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light', // Switch between dark and light mode
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={isAuthenticated() ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protected Routes */}
        <Route path="/dashboard" element={isAuthenticated() ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="/users" element={isAuthenticated() ? <UsersList /> : <Navigate to="/" />} />
        {/* Add other protected routes here... */}

        {/* Public Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/logout" element={<Logout />} />
        {/* Other public routes */}
      </Routes>
    </ThemeProvider>
  );
};

const App: React.FC = () => {
  return (
    <DarkModeProvider>
      <AppWithDarkMode />
    </DarkModeProvider>
  );
};

export default App;
