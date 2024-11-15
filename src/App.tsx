import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'; // Assuming you have a Dashboard page
import UsersList from './pages/UsersList';
import Register from './pages/Register'; // Import the Register component
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/register" element={<Register />} /> {/* Add Register route */}
      </Routes>
    </div>
  );
}

export default App;
