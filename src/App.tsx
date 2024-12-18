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
import DeveloperBuilder from './pages/DeveloperBuilder';
import Checklist from './pages/Checklist';
import Team from './pages/Team';
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
import Chargor from './pages/loanh/Chargor';
import Financier from './pages/loanh/Financier';
import Ifchargor from './pages/loang/Ifchargor';
import Endfinancier from './pages/loang/Endfinancier';
import AddDeveloper from './pages/AddDeveloper';
import Templates from './pages/Templates';
import AddTemplates from './pages/AddTemplates';
import AddParty from './pages/AddParty';
import PartyList from './pages/PartyList';
import DeveloperForm from './pages/spah/Developer';

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
        <Route path="/spaH" element={<TabsPage />} />
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
        <Route path="/chargor" element={<Chargor />} />
        <Route path="/financier" element={<Financier />} />
        <Route path="/ifchargor" element={<Ifchargor />} />
        <Route path="/endfinancier" element={<Endfinancier />} />
        <Route path="/developerbuilder" element={<DeveloperBuilder />} />
        <Route path="/adddeveloper" element={<AddDeveloper />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/addtemplates" element={<AddTemplates />} />
        <Route path="/addparty" element={<AddParty />} />
        <Route path="/partylist" element={<PartyList />} />
        <Route path="/developer" element={<DeveloperForm />} />

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