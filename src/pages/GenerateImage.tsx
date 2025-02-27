import React, { useState, useEffect } from "react";
import { Box, Typography, Toolbar, CssBaseline, TextField, Button } from "@mui/material";
import DrawerComponent from "../components/DrawerComponent";
import HeaderComponent from "../components/HeaderComponent";
import { useNavigate } from "react-router-dom";

function GenerateImage() {
	const [prompt, setPrompt] = useState("");
	const [fileId, setFileId] = useState('');
	const [question, setQuestion] = useState('');
	const [response, setResponse] = useState('');

	const navigate = useNavigate();

	const handleHandbook = () => {
		navigate("/add-handbook");
	};

	const handleAskQuestion = async () => {
		if (!fileId || !question) {
			alert("Please upload a file and provide a question!");
			return;
		}
	
		try {
			const response = await fetch("http://localhost:5000/ask-question", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					file_id: fileId,
					question: question,
				}),
			});
	
			const data = await response.json();
			setResponse(data.response);
		} catch (error) {
			console.error("Error:", error);
			alert("Failed to ask question!");
		}
	};

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<DrawerComponent />
			<HeaderComponent />

			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<Toolbar />

				{/* Center the Headline */}
				<Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>
					Generate Images or Videos
				</Typography>

				{/* Add New Button */}
				<Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
					<Button variant="contained" onClick={handleHandbook}>
						Add New
					</Button>
				</Box>

				{/* Textarea for adding prompt */}
				<TextField
					label="Enter prompt"
					multiline
					rows={4}
					fullWidth
					variant="outlined"
					value={prompt}
					onChange={(e) => setPrompt(e.target.value)}
					sx={{ mt: 2 }}
				/>

				{/* Submit Button for Generating Images/Videos */}
				<Button variant="contained" sx={{ mt: 2 }}>
					Generate
				</Button>

				{/* Section for Asking Questions */}
				<Box sx={{ mt: 4 }}>
					<Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>
						Ask a Question About the Uploaded PDF
					</Typography>

					{/* File ID Input */}
					<TextField
						label="File ID"
						value={fileId}
						onChange={(e) => setFileId(e.target.value)}
						fullWidth
						sx={{ mt: 2 }}
					/>

					{/* Question Input */}
					<TextField
						label="Question"
						value={question}
						onChange={(e) => setQuestion(e.target.value)}
						fullWidth
						sx={{ mt: 2 }}
					/>

					{/* Ask Question Button */}
					<Button variant="contained" sx={{ mt: 2 }} onClick={handleAskQuestion}>
						Ask Question
					</Button>

					{/* Response Display */}
					{response && (
						<Box sx={{ mt: 2 }}>
							<Typography variant="body1">
								<strong>Response:</strong> {response}
							</Typography>
						</Box>
					)}
				</Box>
			</Box>
		</Box>
	);
}

export default GenerateImage;
