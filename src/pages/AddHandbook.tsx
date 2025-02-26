import React, { useState } from 'react';
import { Box, Typography, CssBaseline, Button, Link } from '@mui/material';
import DrawerComponent from '../components/DrawerComponent';
import HeaderComponent from '../components/HeaderComponent';
import { useNavigate } from 'react-router-dom';

function AddHandbook() {
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    const generateImage = (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        navigate('/generate-image');
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]); // Get the first selected file
    };

    const handleUpload = async () => {
        if (!file) {
            alert("Please select a file to upload!");
            return;
        }
    
        const formData = new FormData();
        formData.append("file", file);
    
        try {
            const response = await fetch("http://localhost:5000/image-generate", {
                method: "POST",
                body: formData
            });
    
            const data = await response.json();
            console.log("Extracted Data:", data);
            alert("File uploaded and processed successfully!");
    
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to upload file!");
        }
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <DrawerComponent />
            <HeaderComponent />

            <Box 
                component="main" 
                sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '80vh' }}
            >
                {/* Form Box */}
                <Box 
                    sx={{ 
                        width: '400px', 
                        p: 4, 
                        boxShadow: 3, 
                        borderRadius: 2, 
                        textAlign: 'center', 
                        bgcolor: 'background.paper' 
                    }}
                >
                    {/* Headline */}
                    <Typography variant="h6" gutterBottom>
                        Add Handbook
                    </Typography>

                    {/* File Upload Input */}
                    <input
                        type="file"
                        multiple
                        onChange={handleFileChange}
                        style={{ marginTop: '10px', display: 'block', margin: '10px auto' }}
                    />

                    {/* Upload Button */}
                    <Button variant="contained" sx={{ mt: 2, width: '100%' }} onClick={handleUpload}>
                        Add
                    </Button>
                </Box>

                {/* Generate Image Link (Centered Below Form) */}
                <Box sx={{ mt: 2, textAlign: 'center' }}>
                    <Link href="#" onClick={generateImage} sx={{ textDecoration: 'none', color: 'primary.main', fontSize: '16px' }}>
                        Generate Image
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}

export default AddHandbook;
