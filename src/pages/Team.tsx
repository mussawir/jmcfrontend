import React, { useState } from 'react';
import { Box,  Typography, Avatar, Button, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DrawerComponent from '../components/DrawerComponent';
import HeaderComponent from '../components/HeaderComponent';

// Sample data for team members and their contributions
const teamMembers = [
  { id: 1, name: 'John Doe', role: 'Senior Developer', status: 'Working', contributions: 12, lastActive: '2024-11-18', documentsEdited: ['Doc A', 'Doc B', 'Doc C'] },
  { id: 2, name: 'Jane Smith', role: 'Junior Developer', status: 'Not Working', contributions: 5, lastActive: '2024-11-17', documentsEdited: ['Doc D', 'Doc E'] },
  { id: 3, name: 'Robert Brown', role: 'Project Manager', status: 'Working', contributions: 20, lastActive: '2024-11-18', documentsEdited: ['Doc F', 'Doc G'] },
  { id: 4, name: 'Sarah Lee', role: 'UI/UX Designer', status: 'Working', contributions: 8, lastActive: '2024-11-18', documentsEdited: ['Doc H', 'Doc I'] },
];

const TeamPage = () => {
  const [activeMembers, setActiveMembers] = useState(teamMembers);

  // Add type to memberId
  const handleEditClick = (memberId: number) => {
    // Functionality to handle editing member details
    alert(`Editing details for member ID: ${memberId}`);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Drawer Component */}
      <DrawerComponent />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: '#f4f4f4',
          height: '100vh',
          overflowY: 'auto',
        }}
      >
        {/* Header Component */}
        <HeaderComponent />

        <Typography variant="h4" gutterBottom sx={{mt:7,}} >
          Team Members and Contributions
        </Typography>

        {/* Table of team members */}
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              {activeMembers.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>
                    <Avatar alt={member.name} src="/path/to/avatar.jpg" sx={{ width: 50, height: 50 }} />
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">{member.name}</Typography>
                    <Typography variant="body2" color="textSecondary">{member.role}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{member.status}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">Last Active: {member.lastActive}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">Contributions: {member.contributions}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">
                      Documents Edited: {member.documentsEdited.join(', ')}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Tooltip title="Edit Member">
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={() => handleEditClick(member.id)}
                        startIcon={<EditIcon />}
                      >
                        Edit
                      </Button>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default TeamPage;
