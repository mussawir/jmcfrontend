import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'; // Assuming you have a Dashboard page
import UsersList from './pages/UsersList';
import './App.css';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/register" element={<Register />} /> 

      </Routes>
    </div>
  );
}

export default App;
