import React, { useState, useEffect } from 'react';
import { Box, Typography, Toolbar, CssBaseline, Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper, Button, Link, TextField, InputAdornment } from '@mui/material';
import { AccountBalance, AccountBalanceWallet, MonetizationOn, Search,  } from '@mui/icons-material';
import DrawerComponent from '../components/DrawerComponent';
import HeaderComponent from '../components/HeaderComponent';
import { useNavigate } from 'react-router-dom';

function ScheduleHList() {
	const [forms, setForms] = useState<any[]>([]);
	const [searchQuery, setSearchQuery] = useState('');
	const navigate = useNavigate();

	const handleAddNew = () => {
		navigate('/sch-loan-h');
	};

	useEffect(() => {
		const fetchForms = async () => {
			const apiUrl = process.env.REACT_APP_API_URL;
			const response = await fetch(`${apiUrl}/schedule-h-list`);
			if (response.ok) {
				const scheduleHForms = await response.json();
				// console.log(scheduleHForms);
				setForms(scheduleHForms);
			} else {
				console.error('Error fetching schedule H forms');
			}
		};

		fetchForms();
	}, []);

	const filteredForms = forms.filter((form) =>
		form.firstPurchaserName.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<DrawerComponent />
			<HeaderComponent />

			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<Toolbar />
				<Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
					Schedule H List
				</Typography>
				<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
					<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
							<Link href="" target="_blank" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
								<AccountBalance sx={{ marginRight: 0.5 }} />
								Bookmark1
							</Link>
							<Link href="" target="_blank" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
								<AccountBalanceWallet sx={{ marginRight: 0.5 }} />
								Bookmark2
							</Link>
							<Link href="" target="_blank" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
								<MonetizationOn sx={{ marginRight: 0.5 }} />
								Bookmark3
							</Link>
						</Box>
						<Button
								variant="contained"
								color="primary"
								onClick={handleAddNew}
								>
								Add New
						</Button>
				</Box>
				<TextField
						fullWidth
						variant="outlined"
						placeholder="Search"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						sx={{ marginBottom: 2 }}
						InputProps={{
						startAdornment: (
								<InputAdornment position="start">
								<Search />
								</InputAdornment>
						),
						}}
						/>
				<TableContainer component={Paper}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Purchasers Name</TableCell>
								<TableCell>Purchasers Identity Card</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{filteredForms.map((form, index) => (
								<TableRow key={index}>
									<TableCell>
										{form.firstPurchaserName && (
											<div>
												{form.firstPurchaserName}
											</div>
										)}
										{form.secondPurchaserName && (
											<div>
												{form.secondPurchaserName}
											</div>
										)}
									</TableCell>
									<TableCell>
										{form.firstPurchaserIdentityCard && (
											<div>
												{form.firstPurchaserIdentityCard}
											</div>
										)}
										{form.secondPurchaserIdentityCard && (
											<div>
												{form.secondPurchaserIdentityCard}
											</div>
										)}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Box>
		</Box>
	);
}

export default ScheduleHList;
