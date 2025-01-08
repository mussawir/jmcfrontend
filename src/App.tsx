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
// import ComLoan from './pages/ComLoan';
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
import ReportGen from './pages/ReportGen';
import PrivateRoute from './components/PrivateRoute';
import SpaLoan from './components/SpaLoan';
import DeveloperLoan from './components/DeveloperLoan';
import Transfer from './components/Transfer';
import CommercialLoan from './components/CommercialLoan';
import Discharge from './components/Discharge';
import Reassignment from './components/Reassignment';
import Tenancy from './components/Tenancy';
import CommercialAgreement from './components/CommercialAgreement';
import Properties from './components/Properties';
import Banks from './pages/Banks';
import Billing from './pages/Billing';
import ClientAccounts from './pages/ClientAccounts';
import OfficeAccounts from './pages/OfficeAccounts';
import SSTGST from './pages/SSTGST';
import Analysis from './pages/Analysis';
import Admin from './pages/Admin';
import Notifications from './pages/Notifications';
import Teams from './pages/Teams';
import Tracking from './pages/Tracking';
import BankCAC from './pages/BankCAC';
import GeneralForm from './components/GeneralForm';
import SchLoanH from './components/SchLoanH';
import SchLoanG from './components/SchLoanG';
import SchLoanI from './components/SchLoanI';
import SchLoanJ from './components/SchLoanJ';
import ViewBranch from './components/ViewBranch';
import BankBranchListing from './components/BankBranchListing';
import ViewBankCac from './components/ViewBankCac';
import BankCACListing from './components/BankCacListing';
import AddMasterCac from './components/AddMasterBank';
import ViewMasterBank from './components/ViewMasterBank';
import MatterBankListing from './components/MatterBankListing';

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
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />        
        <Route path="/users" element={<UsersList />} />
        <Route path="/userdata" element={<UserData />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/projects" element={<PrivateRoute element={<Projects />} />} />  
        <Route path="/checklist" element={<Checklist />} />
        <Route path="/team" element={<Team />} />
        <Route path="/loanH" element={<LoanH />} />
        <Route path="/spaG" element={<SpaG />} />
        <Route path="/spaH" element={<TabsPage />} />
        <Route path="/loanG" element={<LoanG />} />
        <Route path="/commercialspa" element={<ComSpa />} />
        {/* <Route path="/commercialloan" element={<ComLoan />} /> */}
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
        <Route path="/developerbuilder" element={<PrivateRoute element={<DeveloperBuilder />} />} />        
        <Route path="/adddeveloper" element={<PrivateRoute element={<AddDeveloper />} />} />        
        <Route path="/templates" element={<PrivateRoute element={<Templates />} />} />        
        <Route path="/addtemplates" element={<PrivateRoute element={<AddTemplates />} />} />        
        <Route path="/addparty" element={<PrivateRoute element={<AddParty />} />} />        
        <Route path="/partylist" element={<PrivateRoute element={<PartyList />} />} />        
        <Route path="/developer" element={<PrivateRoute element={<DeveloperForm />} />} />        
        <Route path="/sch-loan-h" element={<PrivateRoute element={<SchLoanH />} />} />        
        <Route path="/sch-loan-g" element={<PrivateRoute element={<SchLoanG />} />} />        
        <Route path="/sch-loan-i" element={<PrivateRoute element={<SchLoanI />} />} />        
        <Route path="/sch-loan-j" element={<PrivateRoute element={<SchLoanJ />} />} />        
        <Route path="/spaloan" element={<PrivateRoute element={<SpaLoan />} />} />        
        <Route path="/developerloan" element={<PrivateRoute element={<DeveloperLoan />} />} />        
        <Route path="/transfer" element={<PrivateRoute element={<Transfer />} />} />        
        <Route path="/commercialloan" element={<PrivateRoute element={<CommercialLoan />} />} />        
        <Route path="/discharge" element={<PrivateRoute element={<Discharge />} />} />        
        <Route path="/reassignment" element={<PrivateRoute element={<Reassignment />} />} />        
        <Route path="/tenancy" element={<PrivateRoute element={<Tenancy />} />} />        
        <Route path="/commercialagreement" element={<PrivateRoute element={<CommercialAgreement />} />} />        
        <Route path="/properties" element={<PrivateRoute element={<Properties />} />} />        
        <Route path="/banks" element={<PrivateRoute element={<Banks />} />} />        
        <Route path="/billing" element={<PrivateRoute element={<Billing />} />} />        
        <Route path="/clientaccounts" element={<PrivateRoute element={<ClientAccounts />} />} />        
        <Route path="/officeaccounts" element={<PrivateRoute element={<OfficeAccounts />} />} />        
        <Route path="/sstgst" element={<PrivateRoute element={<SSTGST />} />} />        
        <Route path="/analysis" element={<PrivateRoute element={<Analysis />} />} />        
        <Route path="/admin" element={<PrivateRoute element={<Admin />} />} />        
        <Route path="/notifications" element={<PrivateRoute element={<Notifications />} />} />        
        <Route path="/teams" element={<PrivateRoute element={<Teams />} />} />        
        <Route path="/tracking" element={<PrivateRoute element={<Tracking />} />} />        
        <Route path="/bank-cac" element={<PrivateRoute element={<BankCAC />} />} />        
        <Route path="/general-form" element={<PrivateRoute element={<GeneralForm />} />} />        
        <Route path="/reportgen" element={<ReportGen />} />
        <Route path="/view-bank-branch" element={<ViewBranch />} />
        <Route path="/bank-branch-listing" element={<BankBranchListing />} />
        <Route path="/view-bank-cac" element={<ViewBankCac />} />
        <Route path="/bank-cac-listing" element={<BankCACListing />} />
        <Route path="/add-master-bank" element={<AddMasterCac />} />
        <Route path="/view-master-bank" element={<ViewMasterBank />} />
        <Route path="/matter-bank-listing" element={<MatterBankListing />} />
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