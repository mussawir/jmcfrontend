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
import LoanH from './pages/LoanH';
import SpaG from './pages/SpaG';
import SpaH from './pages/SpaH';
import LoanG from './pages/LoanG';
import ComSpa from './pages/ComSpa';
import ComLoan from './pages/ComLoan';
import SubSpaT from './pages/SubSpaT';
import SubLoanT from './pages/SubLoanT';
import SubSpaMT from './pages/SubSpaMT';
import SubLoanMT from './pages/SubLoanMT';

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
        <Route path="/loanH" element={<LoanH />} />
        <Route path="/spaG" element={<SpaG />} />
        <Route path="/spaH" element={<SpaH />} />
        <Route path="/loanG" element={<LoanG />} />
        <Route path="/commercialspa" element={<ComSpa />} />
        <Route path="/commercialloan" element={<ComLoan />} />
        <Route path="/subSpaT" element={<SubSpaT />} />
        <Route path="/subLoanT" element={<SubLoanT />} />
        <Route path="/subSpaMT" element={<SubSpaMT />} />
        <Route path="/subLoanMT" element={<SubLoanMT />} />
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