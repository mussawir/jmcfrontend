// src/App.tsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { DarkModeProvider, useDarkMode } from './context/DarkModeContext';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UsersList from './pages/UsersList';
import Register from './pages/Register';
import UserData from './pages/UserData';
import Documents from './pages/Document';
import Projects from './pages/Projects';
import Checklist from './pages/Checklist';
import Team from './pages/Team';
import Settings from './pages/Settings';
import About from './pages/About';
import Logout from './pages/Logout';
import TabsPage from './pages/TabsPage';
import SpaRecAddUpdate from './pages/SpaRecAddUpdate';
import './App.css';

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
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/userdata" element={<UserData />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/checklist" element={<Checklist />} />
        <Route path="/team" element={<Team />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<About />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/spaform" element={<SpaRecAddUpdate />} />
        <Route path="/tabspage" element={<TabsPage />} />
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