import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'; // Assuming you have a Dashboard page
import UsersList from './pages/UsersList';
import Register from './pages/Register'; // Import the Register component
import './App.css';
import UserData from './pages/UserData'; // Import the Register component
import Document from './pages/Document'; // Import the Register component
import Projects from './pages/Projects'; // Import the Register component



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/register" element={<Register />} /> {/* Add Register route */}
        <Route path="/userdata" element={<UserData />} /> {/* Add Register route */}
        <Route path="/document" element={<Document/>} />
        <Route path="/projects" element={<Projects/>} />


      </Routes>
    </div>
  );
}

export default App;
