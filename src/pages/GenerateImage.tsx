import React, { useState } from "react";
import { Box, Toolbar, CssBaseline, TextField, Button, LinearProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

function GenerateImage() {
	const [question, setQuestion] = useState("");
	const [response, setResponse] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	const handleHandbook = () => {
		navigate("/add-handbook");
	};

	const convertImageUrlsToImgTags = (text) => {
		const imageUrlRegex = /(https?:\/\/[^\s]+\.(?:png|jpg|jpeg|gif))/gi;
		return text.replace(imageUrlRegex, (url) => {
			return `<img src="${url}" alt="Image" style="max-width: 50%; height: auto; display: block; margin: 10px 0;" /><br>`;
		});
	};

	const handleAskQuestion = async () => {
		if (!question) {
			alert("Please provide a question!");
			return;
		}

		setIsLoading(true);
		try {
			const apiUrl = process.env.REACT_APP_API_URL;
			const response = await fetch(`${apiUrl}/ask-question`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					question: question,
				}),
			});

			const data = await response.json();

			const formattedResponse = convertImageUrlsToImgTags(
				data.response.result
			);
			setResponse(formattedResponse);
		} catch (error) {
			console.error("Error:", error);
			alert("Failed to ask question!");
		} finally {
			setIsLoading(false);
		}
	};

	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			handleAskQuestion();
		}
	};

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			{/* <DrawerComponent /> */}
			{/* <HeaderComponent /> */}

			<Box component="main" sx={{ flexGrow: 1, px: 4 }}>
				<Toolbar />

				{/* Add New Button */}
				<Box
					sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}
				>
					<Button variant="contained" onClick={handleHandbook}>
						Upload Handbook
					</Button>
				</Box>

				{/* Section for Asking Questions */}
				<Box sx={{ mt: 2 }}>
					{/* <Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>
		Ask a Question About the Uploaded PDF
	  </Typography> */}

					{/* Scrollable Chat Box */}

					{/* Question Input */}
					<TextField
						label="Prompt"
						value={question}
						onChange={(e) => setQuestion(e.target.value)}
						fullWidth
						sx={{ mt: 2 }}
						onKeyUp={handleKeyPress}
					/>

					{isLoading && <LinearProgress sx={{ mt: 2 }} />}

					<Box
						sx={{
							px: 2,
							minHeight: "300px",
							overflowY: "auto",
							my: 4,
						}}
					>
						<div dangerouslySetInnerHTML={{ __html: response }} />
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default GenerateImage;
