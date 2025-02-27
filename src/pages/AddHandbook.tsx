import React, { useState } from 'react';
import { Box, Typography, CssBaseline, Button, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function AddHandbook() {
	const [file, setFile] = useState(null);
	const navigate = useNavigate();

	const runbookAISearch = (event) => {
		event.preventDefault();
		navigate('/generate-image');
	};

	const handleFileChange = (event) => {
		setFile(event.target.files[0]);
	};

	const handleUpload = async () => {
		if (!file) {
			alert("Please select a file to upload!");
			return;
		}
	
		const formData = new FormData();
		formData.append("uploadFile", file);
	
		try {
			const apiUrl = process.env.REACT_APP_API_URL;
			const response = await fetch(`${apiUrl}/add-handbook`, {
				method: "POST",
				body: formData
			});
	
			const data = await response.json();
			console.log("File Name:", data.file_name);
			alert("File uploaded and processed successfully!");
		} catch (error) {
			console.error("Error:", error);
			alert("Failed to upload file!");
		}
	};

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			{/* <DrawerComponent /> */}
			{/* <HeaderComponent /> */}

			<Box 
				component="main" 
				sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '80vh' }}
			>
				{/* Form Box */}
				<Box 
					sx={{
						width: '400px',
						p: 8,
						boxShadow: 6,
						borderRadius: 4,
						textAlign: 'center',
						bgcolor: 'background.paper'
					}}
				>
					{/* Headline */}
					<Typography variant="h5" gutterBottom>
						Upload Handbook
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
						Upload
					</Button>
				</Box>

				{/* Generate Image Link (Centered Below Form) */}
				<Box sx={{ mt: 2, textAlign: 'center' }}>
					<Link href="#" onClick={runbookAISearch} sx={{ textDecoration: 'none', color: 'primary.main', fontSize: '1.25em', fontWeight: 700, textDecorationLine: 'underline' }}>
						Runbook AI Search
					</Link>
				</Box>
			</Box>
		</Box>
	);
}

export default AddHandbook;
