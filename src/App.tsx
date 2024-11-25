import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'; // Assuming you have a Dashboard page
import UsersList from './pages/UsersList';
import Register from './pages/Register'; // Import the Register component
import './App.css';
import UserData from './pages/UserData'; // Import the Register component
import Documents from './pages/Document'; // Import the Register component
import Projects from './pages/Projects'; // Import the Register component
import Checklist from './pages/Checklist'; // Import the Register component
import Team from './pages/Team'; // Import the Register component
import Settings from './pages/Settings'; // Import the Register component
import About from './pages/About'; // Import the Register component
import Logout from './pages/Logout';
import TabsPage from './pages/TabsPage';
import FileUpload from './pages/FileUpload';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/register" element={<Register />} /> {/* Add Register route */}
        <Route path="/userdata" element={<UserData />} /> {/* Add Register route */}
        <Route path="/documents" element={<Documents/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/checklist" element={<Checklist/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/tabspage" element={<TabsPage/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/fileUpload" element={<FileUpload />} />


      </Routes>
    </div>
  );
}

export default App;
