import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, Card, CardContent, Typography, CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import DrawerComponent from '../components/DrawerComponent';
import HeaderComponent from '../components/HeaderComponent';

// Define the Case interface
interface Case {
  title: string;
  status: string;
  dateFiled?: string;
  lastUpdate?: string;
}

function Document() {
  const [cases, setCases] = useState<Case[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('ACCESS_TOKEN');
    if (!token) {
      navigate('/login');
    } else {
      fetchCaseData(token);
    }
  }, [navigate]);

  const fetchCaseData = async (token: string) => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      const response = await fetch(`${apiUrl}/cases`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data: Case[] = await response.json();
        setCases(data);
      } else {
        console.error('Error fetching case data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching case data:', error);
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(18);
    doc.text('Case Document Report', 20, 20);

    // Case Data
    doc.setFontSize(12);
    let yPosition = 30;
    cases.forEach((caseItem, index) => {
      doc.text(`Case ${index + 1}:`, 20, yPosition);
      doc.text(`Title: ${caseItem.title}`, 20, yPosition + 10);
      doc.text(`Status: ${caseItem.status}`, 20, yPosition + 20);
      doc.text(`Date Filed: ${caseItem.dateFiled ?? 'N/A'}`, 20, yPosition + 30);
      doc.text(`Last Update: ${caseItem.lastUpdate ?? 'N/A'}`, 20, yPosition + 40);
      yPosition += 50;
    });

    // Case Status Chart Data (Pie Chart for Case Status)
    doc.addPage();
    doc.text('Case Status Overview', 20, 20);

    // Example: Rendering Pie Chart (you would need to generate this using a separate library or render to canvas first)
    doc.text('Insert chart here (generated with Recharts)', 20, 40);

    // Add the chart to the PDF (for example, an image of the chart if generated outside)
    // doc.addImage(chartImage, 'PNG', x, y, width, height);

    // Save PDF
    doc.save('case_document_report.pdf');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <DrawerComponent />
      <HeaderComponent />

      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 15, }}>
        <Typography>
          Generate Your Projects Document PDF
        </Typography>
        <Button variant="contained" color="primary" onClick={generatePDF}>
          Generate Document
        </Button>

        <Grid container spacing={3} sx={{ mt: 3 }}>
          {cases.map((caseItem, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{caseItem.title}</Typography>
                  <Typography>Status: {caseItem.status}</Typography>
                  <Typography>Date Filed: {caseItem.dateFiled}</Typography>
                  <Typography>Last Update: {caseItem.lastUpdate}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Document;
