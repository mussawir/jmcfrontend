import React, { useEffect, useState } from 'react';
import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography, CircularProgress } from '@mui/material';
import Layout from '../components/Layout'; // Import Layout component
import HeaderComponent from '../components/HeaderComponent'; // Import Header component

interface User {
  id: number;
  name: string;
  email: string;
  role?: string;
}

const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;
        const response = await fetch(`${apiUrl}/users`);
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data: User[] = await response.json();
        setUsers(data);
      } catch (err: any) {
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <Layout>
        <HeaderComponent /> {/* Add Header here */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </Box>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <HeaderComponent /> {/* Add Header here */}
        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <Typography variant="h6" color="error">
            {error}
          </Typography>
        </Box>
      </Layout>
    );
  }

  return (
    <Layout>
      <HeaderComponent /> {/* Add Header here */}
      <Box sx={{ p: 3, marginTop: '64px' }}> {/* Added marginTop to adjust for the fixed header */}
        <Typography variant="h4" component="h1" gutterBottom>
          Users List
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role || 'N/A'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Layout>
  );
};

export default UsersList;
