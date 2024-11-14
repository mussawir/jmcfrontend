import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, TextField, Button, CircularProgress, Typography, Box } from '@mui/material';
import api from '../api';
import logojmc from "../images/jmcvc-logo.svg";

interface LoginResponse {
  access_token: string;  // Define the shape of the response data
}

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await api.post<LoginResponse>('/login', { email, password });

      if (response.status === 200) {
        localStorage.setItem('ACCESS_TOKEN', response.data.access_token);
        navigate('/dashboard');  // Redirect to Dashboard on successful login
      } else {
        setError('User not found');
      }
    } catch (err) {
      setError('User not found');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div style={{backgroundColor: 'black',}}>   
     <div>
        <img src={logojmc} alt="" />
    </div>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Card sx={{ p: 4, width: 400, boxShadow: 3 }}>
        <Typography variant="h3" textAlign="center" mb={2}>Login</Typography>
        {error && (
          <Typography color="error" textAlign="center" mb={2}>
            {error}
          </Typography>
        )}
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
            margin="normal"
          />
          <Box mt={3} textAlign="center">
            {loading ? (
              <CircularProgress />
            ) : (
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Login
              </Button>
            )}
          </Box>
        </form>
      </Card>
    </Box>
    </div>

    </>
    
  );
}

export default LoginForm;
