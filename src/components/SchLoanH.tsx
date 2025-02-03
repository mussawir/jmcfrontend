import React, { useMemo, useState, useEffect } from "react";
import DrawerComponent from './DrawerComponent';
import HeaderComponent from './HeaderComponent';
import { Box, TextField, Typography, Toolbar, CssBaseline, Button, MenuItem, Select, InputLabel, FormControl, Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper, Tabs, Tab, DialogActions, LinearProgress, Radio } from '@mui/material';
import Grid from '@mui/material/Grid2';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BusinessIcon from '@mui/icons-material/Business';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HouseIcon from '@mui/icons-material/House';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GavelIcon from '@mui/icons-material/Gavel';
import PaymentIcon from '@mui/icons-material/Payment';
import SummaryIcon from '@mui/icons-material/Summarize';

const SchLoanH: React.FC = () => {
	const [value, setValue] = React.useState('schedule-h');
	const [templates, setTemplates] = useState([]);

	// For Showing / Hiding the Toggle Box
	const [toggleBoxVisible, setToggleBoxVisible] = useState(false);

	const [selectedBank, setSelectedBank] = useState('');
	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};
	const [selectedValue, setSelectedValues] = useState("a");

	const [loading, setLoading] = useState(false);

	// Properitor Details
	const [proprietorName, setProprietorName] = useState('');
	const [proprietorCompanyRegistrationNo, setProprietorCompanyRegistrationNo] = useState('');
	const [proprietorRegisteredOfficeAddress, setProprietorRegisteredOfficeAddress] = useState('');
	const [proprietorPlaceBusinessAddress, setProprietorPlaceBusinessAddress] = useState('');

	// Master Title Details
	const [titleType, setTitleType] = useState('');
	const [titleDescription, setTitleDescription] = useState('');
	const [titleNumber, setTitleNumber] = useState('');
	const [lotPTNumber, setLotPTNumber] = useState('');
	const [mukim, setMukim] = useState('');
	const [district, setDistrict] = useState('');
	const [state, setState] = useState('');
	const [numberOfYears, setNumberOfYears] = useState('');
	const [expirationDate, setExpirationDate] = useState('');
	const [landArea, setLandArea] = useState('');

	// Project Details
	const [typeOfBuilding, setTypeOfBuilding] = useState('');
	const [projectName, setProjectName] = useState('');
	const [phaseNumber, setPhaseNumber] = useState('');
	const [adSalePermitNumber, setAdSalePermitNumber] = useState('');
	const [layoutPlanReferenceNo, setLayoutPlanReferenceNo] = useState('');
	const [localMunicipalName, setLocalMunicipalName] = useState('');

	type KeyValue = { key: string; value: string };
	const convertToArray = (text: string): KeyValue[] => {
		return text
			.trim()
			.split('\n')
			.map(line => {
				const [key, ...value] = line.split(':');
				return { key: key.trim(), value: value.join(':').trim() };
			});
	};

	const capitalizeFirstLetter = (str: string) => {
		return str
			.toLowerCase()
			.replace(/\b\w/g, (char) => char.toUpperCase());
	};

	const [developers, setDevelopers] = useState<{ id: string; name: string }[]>([]);
	const [selectedDeveloper, setSelectedDeveloper] = useState<string>('');

	useEffect(() => {
		const fetchDevelopers = async () => {
			try {
				const apiUrl = process.env.REACT_APP_API_URL;
				const response = await fetch(`${apiUrl}/get-developers-for-schedule-h`);
				const result = await response.json();
	
				if (response.ok) {
					setDevelopers(result);
				} else {
					console.error('Error fetching developers:', result);
				}
			} catch (error) {
				console.error('Error fetching developers:', error);
			}
		};
	
		fetchDevelopers();
	}, []);

	const handleAddScheduleSubmit = async () => {
		const randomCode = Math.floor(100 + Math.random() * 900);
		const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
		const generatedMatterCode = randomCode.toString() + randomLetter;

		const masterTitleData = {
			matterCode: generatedMatterCode,
			proprietorName,
			proprietorCompanyRegistrationNo,
			proprietorRegisteredOfficeAddress,
			proprietorPlaceBusinessAddress,
			titleType,
			titleDescription,
			titleNumber,
			lotPTNumber,
			projectName,
			phaseNumber,
			mukim,
			district,
			state,
			numberOfYears,
			expirationDate,
			landArea,
			typeOfBuilding,
			adSalePermitNumber,
			layoutPlanReferenceNo,
			localMunicipalName,
		};

		try {
			const apiUrl = process.env.REACT_APP_API_URL;
			const response = await fetch(`${apiUrl}/add-schedule-h-master-title`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(masterTitleData),
			});

			const result = await response.json();

			if (response.ok) {
				alert('Master title for Schedule H added successfully');

				// This can be done at once using masterTitleData
				setProprietorName('');
				setProprietorCompanyRegistrationNo('');
				setProprietorRegisteredOfficeAddress('');
				setProprietorPlaceBusinessAddress('');
				setTitleType('');
				setTitleDescription('');
				setTitleNumber('');
				setLotPTNumber('');
				setProjectName('');
				setPhaseNumber('');
				setMukim('');
				setDistrict('');
				setState('');
				setNumberOfYears('');
				setExpirationDate('');
				setLandArea('');
				setTypeOfBuilding('');
				setAdSalePermitNumber('');
				setLayoutPlanReferenceNo('');
				setLocalMunicipalName('');
			} else {
				alert('Failed to add master title for Schedule H');
				console.error(result);
			}
		} catch (error) {
			console.error('Error:', error);
			alert('An error occurred');
		}
	};

	const sectionIcons = {
		"Purchaser": <PersonIcon style={{ fontSize: 15, }} />,
		"Proprietor": <BusinessIcon style={{ fontSize: 15 }} />,
		"Master Chargee / Assignee": <AssignmentIcon style={{ fontSize: 15 }} />,
		"Master Title": <HouseIcon style={{ fontSize: 15 }} />,
		"Project": <LocationCityIcon style={{ fontSize: 15 }} />,
		"Property Details": <HouseIcon style={{ fontSize: 15 }} />,
		"HDA": <AccountBalanceIcon style={{ fontSize: 15 }} />,
		"Developer Solicitors": <GavelIcon style={{ fontSize: 15 }} />,
		"Purchaser Solicitors": <GavelIcon style={{ fontSize: 15 }} />,
		"Purchase Price": <MonetizationOnIcon style={{ fontSize: 15 }} />,
		"Adjustment Rate": <MonetizationOnIcon style={{ fontSize: 15 }} />,
		"Developer Stakeholder": <BusinessIcon style={{ fontSize: 15 }} />,
		"Summary Of Price (in RM)": <SummaryIcon style={{ fontSize: 15 }} />,
		"Schedule Of Payment(s)": <PaymentIcon style={{ fontSize: 15 }} />,
	};

	// Redundant?
	const sections = [
		{
			heading: "Proprietor",
			fields: [
				"Proprietor name",
				"Proprietor company registration number",
				"Proprietor registered office address",
				"Proprietor place of business address",
				"Proprietor authorised 1st signatory name",
				"Proprietor authorised 1st identity card number",
				"Proprietor authorised 2nd signatory name",
				"Proprietor authorised 2nd identity card number",
				"Proprietor PA number registered in High Court",
				"Proprietor Noting PA registered in which land registry",
			],
		},
		{
			heading: "Master Chargee / Assignee",
			fields: [
				"Master Chargee / Assignee name",
				"Master Chargee / Assignee company registration number",
				"Master Chargee / Assignee registered office address",
				"Master Chargee / Assignee place of business address",
				"Master Chargee / Assignee file reference number",
				"Master Chargee / Assignee contact number",
				"Master Chargee / Assignee email address",
				"Master Chargee / Assignee person in charge name",
				"Master Chargee / Assignee person in charge name contact number",
				"Master Chargee / Assignee person in charge email address",
			],
		},
		{
			heading: "Master Title",
			fields: [
				"Title type - Freehold / Leasehold",
				"Title description - H.S.(D) / H.S.(M) / PN / PM / Geran / Geran Mukim",
				"Title number",
				"Lot/PT number",
				"Mukim/Bandar/Pekan",
				"Daerah",
				"Negeri",
				"If leasehold, numbers of years and expiration date",
				"Land area",
			],
		},
		{
			heading: "Project",
			fields: [
				"Type of building",
				"Project name",
				"Phase number",
				"Advertisement & sale permit number",
				"Approved layout plan reference number",
				"Local municipal name",
			],
		},
		{
			heading: "Property Details",
			fields: [
				"Parcel/unit/lot number",
				"Title type - Freehold / Leasehold",
				"Title description - H.S.(D) / H.S.(M) / PN / PM / Geran / Geran Mukim",
				"Title number",
				"Lot/PT number",
				"Mukim/Bandar/Pekan",
				"Daerah",
				"Negeri",
				"If leasehold, numbers of years and expiration date",
				"Parcel/unit/lot area",
				"Parcel/unit/lot built up area",
				"Property address",
			],
		},
		{
			heading: "HDA",
			fields: [
				"Developer HDA number",
				"Bank/financial institution name",
				"Bank/financial institution registered office address",
				"Bank/financial institution file reference number",
			],
		},
		{
			heading: "Developer Solicitors",
			fields: [
				"Developer solicitors name",
				"Developer solicitors office address",
				"Developer solicitors file reference number",
				"Developer solicitors contact number",
				"Developer solicitors email address",
				"Developer attestation lawyer name",
				"Developer attestation lawyer identity card number",
				"Developer solicitors lawyer & clerk in charge contact number",
				"Developer solicitors lawyer and clerk in charge email address",
			],
		},
		{
			heading: "Purchaser Solicitors",
			fields: [
				"Purchaser solicitors name",
				"Purchaser solicitors office address",
				"Purchaser solicitors file reference number",
				"Purchaser solicitors contact number",
				"Purchaser solicitors email address",
				"Purchaser attestation lawyer name",
				"Purchaser attestation lawyer identity card number",
				"Purchaser solicitors lawyer & clerk in charge contact number",
				"Purchaser solicitors lawyer and clerk in charge email address",
			],
		},
		{
			heading: "Purchase Price",
			fields: [
				"Purchase price in words",
				"Purchase price in numerics",
			],
		},
		{
			heading: "Adjustment Rate",
			fields: [
				"Adjustment rate in words",
				"Adjustment rate in numerics",
			],
		},
		{
			heading: "Developer Stakeholder",
			fields: [
				"Developer stakeholder name",
				"Developer stakeholder office address",
				"Developer stakeholder file reference number",
				"Developer stakeholder contact number",
				"Developer stakeholder email address",
				"Developer stakeholder person in charge contact number",
				"Developer stakeholder person in charge email address",
			],
		},
		{
			heading: "Summary Of Price (in RM)",
			fields: [
				"Approved purchase price in numerics",
				"Developer discount in numerics",
				"Bumiputera lot discount in numerics",
				"Government initiative in numerics",
			],
		},
		{
			heading: "Schedule Of Payment(s)",
			fields: [
				"Purchase price (10%) in numerics",
				"Purchase price (15%) in numerics",
				"Purchase price (5%) in numerics",
				"Purchase price (2.5%) in numerics",
				"Purchase price (17.5%) in numerics",
				"Purchase price (100%) in numerics",
			],
		},
	];

	const handleChanges = (event: React.SyntheticEvent, newValue: string) => {
		setSelectedValues(event.target.values);
	};

	const sectionRefs = useMemo(
		() => sections.map(() => React.createRef<HTMLDivElement>()),
		[]
	);

	const scrollToSection = (index: number) => {
		sectionRefs[index].current?.scrollIntoView({ behavior: "smooth" });
	};

	const [uploadFiles, setUploadFiles] = useState<File[]>([]);
	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			setUploadFiles(Array.from(e.target.files));
		}
	};

	const UploadFile = async (event: React.FormEvent) => {
		if (uploadFiles.length === 0) {
			alert('Please select at least one file');
			return;
		}
		event.preventDefault();
		setLoading(true);

		const formData = new FormData();
		uploadFiles.forEach((file) => formData.append('uploadFiles', file));

		try {
			const apiUrl = process.env.REACT_APP_API_URL;
			const response = await fetch(`${apiUrl}/add-master-title`, {
				method: 'POST',
				body: formData,
			});
			const result = await response.json();

			if (response.ok) {
				console.log(result.response);
				const receivedData = convertToArray(result.response);
				receivedData.forEach(data => {
					// console.log(`${data.key}: ${data.value}`);
					const key = data.key;
					const value = capitalizeFirstLetter(data.value);

					switch (key) {
						case 'Proprietor name':
							setProprietorName(value);
							break;
						case 'Proprietor company registration number':
							setProprietorCompanyRegistrationNo(value);
							break;
						case 'Proprietor registered office address':
							setProprietorRegisteredOfficeAddress(value);
							break;
						case 'Proprietor place of business address':
							setProprietorPlaceBusinessAddress(value);
							break;
						case 'Title type':
							setTitleType(value);
							break;
						case 'Description of title':
							setTitleDescription(value);
							break;
						case 'No. of Title':
							setTitleNumber(value);
							break;
						case 'Lot No./L.O. No.':
							setLotPTNumber(value);
							break;
						case 'Town/Village/Mukim':
							setMukim(value);
							break;
						case 'District':
							setDistrict(value);
							break;
						case 'State':
							setState(value);
							break;
						case 'Leasehold land years':
							setNumberOfYears(value);
							break;
						case 'Leasehold expiring on date':
							setExpirationDate(value);
							break;
						case 'Land area':
							setLandArea(value);
							break;
						case 'Property type':
							setTypeOfBuilding(value);
							break;
						case 'Project name':
							setProjectName(value);
							break;
						case 'Phase number':
							setPhaseNumber(value);
							break;
						case 'Advertisement and Sale Permit No.':
							setAdSalePermitNumber(value);
							break;
						case 'Approved Layout Plan Reference No.':
							setLayoutPlanReferenceNo(value);
							break;
						case 'Local municipal name':
							setLocalMunicipalName(value);
							break;
					}
				});
				alert('Files uploaded successfully');
				setLoading(false);
			} else {
				alert('Failed to upload files');
				console.error(result);
				setLoading(false);
			}
		} catch (error) {
			console.error('Error:', error);
			alert(error);
		}
	};

	useEffect(() => {
		// Fetch templates from API
		const fetchTemplates = async () => {
			try {
				const apiUrl = process.env.REACT_APP_API_URL;
				const response = await fetch(`${apiUrl}/get-templates`);
				const result = await response.json();
				if (response.ok) {
					setTemplates(result);
				} else {
					console.error(result);
				}
			} catch (error) {
				console.error('Error fetching templates:', error);
			}
		};

		fetchTemplates();
	}, []);

	// Toggle the visibility of the box
	const handleToggleBox = () => {
		setToggleBoxVisible(!toggleBoxVisible);
	};

	// Handle the dropdown selection
	const handleDropdownChange = (event) => {
		setSelectedBank(event.target.value);
	};

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<DrawerComponent />
			<HeaderComponent />

			<Box sx={{ width: '100%' }}>
				<Toolbar />
				<Tabs
					value={value}
					onChange={handleChange}
					textColor="secondary"
					indicatorColor="secondary"
					aria-label="secondary tabs example"
					sx={{ position: 'fixed' }}
				>
					<Tab value="schedule-h" label="Schedule H" />
					<Tab value="loan-h" label="Loan H" />
				</Tabs>

				<Box sx={{ padding: 3, }}>
					{value === "schedule-h" && <div style={{ marginTop: "20px" }}>
						<Box sx={{ display: 'flex' }}>
							<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
								<div
									style={{
										position: "sticky",
										top: 0,
										width: "100%",
										backgroundColor: "#fff",
										zIndex: 1000,
										borderRadius: '4px',
										padding: "15px 10px",
										fontSize: "14px",
									}}
								>
									{sections.map((section, index) => (
										<a
											key={index}
											onClick={() => scrollToSection(index)}
											style={{
												margin: "1px 5px",
												padding: "1px 0px",
												cursor: "pointer",
												display: "inline-block",
												color: "#007bff",
											}}
										>
											<div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
												{sectionIcons[section.heading]}
												<span>{section.heading}</span>
											</div>
										</a>
									))}
								</div>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										width: '100%',
										my: 2,
									}}
								>
									<input
										type="file"
										multiple
										onChange={handleFileChange}
										style={{
											marginRight: '16px', width: '180px', position: "sticky",
										}}
									/>
									<Button variant="contained" color="primary" onClick={UploadFile}>
										Fill From Doc
									</Button>

									<DialogActions>
										<Button variant="contained" color="primary" onClick={handleAddScheduleSubmit}>
											Submit
										</Button>
									</DialogActions>
								</Box>

								{loading && (
									<Box sx={{ width: '100%' }}>
										<LinearProgress />
									</Box>
								)}

								{/* {loading && (
									<Box sx={{ display: 'flex' }}>
										<CircularProgress size="30px" />
									</Box>
								)} */}

								<Box
									sx={{
										mt: 0,
										position: 'fixed',
										overflowY: 'auto',
										maxHeight: 'calc(70vh - 100px)',
									}}
								>
									<div
										style={{
											minHeight: '70vh',
											padding: '20px',
											marginTop: '0px',
											borderBottom: '1px solid #ddd',
										}}
									>
										<Box
											component="section"
											sx={{ mb: 2 }}
										>
											<Typography variant="h4" component="h4" sx={{ mb: 1 }}>
												Developer
											</Typography>
											<FormControl
												sx={{ m: 1, minWidth: 300 }}
											>
												<InputLabel id="developer-select">
													Developer
												</InputLabel>
												<Select
													labelId="developer-select"
													id="developer-select"
													value={selectedDeveloper}
													onChange={(event) => setSelectedDeveloper(event.target.value)}
													label="Developer"
												>
													{developers.map((dev) => (
														<MenuItem key={dev.id} value={dev.id}>
															{dev.name}
														</MenuItem>
													))}
												</Select>
											</FormControl>
										</Box>
										<Box sx={{ display: "flex", width: "100%", mb: 2, mt: 1 }}>
											<Radio
												checked={selectedValue === "a"}
												onChange={handleChanges}
												value="a"
												name="radio-buttons"
												inputProps={{ "aria-label": "A" }}
											/>
											<PersonIcon style={{ marginRight: "5px", marginTop: "8px" }} />
											<Typography
												style={{ marginTop: "10px" }}
											>
												Master Title
											</Typography>

											<Radio
												checked={selectedValue === "b"}
												onChange={handleChanges}
												value="b"
												name="radio-buttons"
												inputProps={{ "aria-label": "B" }}
											/>
											<AccountCircleIcon style={{ marginRight: "5px", marginTop: "8px" }} />
											<Typography
												style={{ marginTop: "10px" }}
											>
												Strata Title
											</Typography>
										</Box>

										<h2>Master Title Details</h2>
										<Grid
											container
											rowSpacing={1}
											columnSpacing={{ xs: 1, sm: 2, md: 3 }}
											sx={{ my: 3 }}
										>
											<Grid size={6}>
												<TextField
													label="Title Type"
													fullWidth
													variant="outlined"
													value={titleType}
													onChange={(e) => setTitleType(e.target.value)}
													sx={{ mb: 2 }}
												/>
											</Grid>
											<Grid size={6}>
												<TextField
													label="Title Description"
													fullWidth
													variant="outlined"
													value={titleDescription}
													onChange={(e) => setTitleDescription(e.target.value)}
													sx={{ mb: 2 }}
												/>
											</Grid>
											<Grid size={6}>
												<TextField
													label="Title Number"
													fullWidth
													variant="outlined"
													value={titleNumber}
													onChange={(e) => setTitleNumber(e.target.value)}
													sx={{ mb: 2 }}
												/>
											</Grid>
											<Grid size={6}>
												<TextField
													label="Lot/PT Number"
													fullWidth
													variant="outlined"
													value={lotPTNumber}
													onChange={(e) => setLotPTNumber(e.target.value)}
													sx={{ mb: 2 }}
												/>
											</Grid>
											<Grid size={6}>
												<TextField
													label="District"
													fullWidth
													variant="outlined"
													value={district}
													onChange={(e) => setDistrict(e.target.value)}
													sx={{ mb: 2 }}
												/>
											</Grid>
											<Grid size={6}>
												<TextField
													label="State"
													fullWidth
													variant="outlined"
													value={state}
													onChange={(e) => setState(e.target.value)}
													sx={{ mb: 2 }}
												/>
											</Grid>
											<Grid size={6}>
												<TextField
													label="Leasehold No. of Years"
													fullWidth
													variant="outlined"
													value={numberOfYears}
													onChange={(e) => setNumberOfYears(e.target.value)}
													sx={{ mb: 2 }}
												/>
											</Grid>
											<Grid size={6}>
												<TextField
													label="Leasehold Expiration Date"
													fullWidth
													variant="outlined"
													value={expirationDate}
													onChange={(e) => setExpirationDate(e.target.value)}
													sx={{ mb: 2 }}
												/>
											</Grid>
											<Grid size={6}>
												<TextField
													label="Land Area"
													fullWidth
													variant="outlined"
													value={landArea}
													onChange={(e) => setLandArea(e.target.value)}
													sx={{ mb: 2 }}
												/>
											</Grid>
										</Grid>
										<h2>Proprietor</h2>
										<Grid
											container
											rowSpacing={1}
											columnSpacing={{ xs: 1, sm: 2, md: 3 }}
										>
											<Grid size={6}>
												<TextField
													label="Proprietor Name"
													fullWidth
													variant="outlined"
													value={proprietorName}
													onChange={(e) => setProprietorName(e.target.value)}
													sx={{ mb: 2 }}
												/>
											</Grid>
											<Grid size={6}>
												<TextField
													label="Proprietor Company Registration Number"
													fullWidth
													variant="outlined"
													value={proprietorCompanyRegistrationNo}
													onChange={(e) => setProprietorCompanyRegistrationNo(e.target.value)}
													sx={{ mb: 2 }}
												/>
											</Grid>
											<Grid size={6}>
												<TextField
													label="Proprietor Registered Office Address"
													fullWidth
													variant="outlined"
													value={proprietorRegisteredOfficeAddress}
													onChange={(e) => setProprietorRegisteredOfficeAddress(e.target.value)}
													sx={{ mb: 2 }}
												/>
											</Grid>
											<Grid size={6}>
												<TextField
													label="Proprietor Place of Business Address"
													fullWidth
													variant="outlined"
													value={proprietorPlaceBusinessAddress}
													onChange={(e) => setProprietorPlaceBusinessAddress(e.target.value)}
													sx={{ mb: 2 }}
												/>
											</Grid>
										</Grid>
										<h2>Project Details</h2>
										<Grid
											container
											rowSpacing={1}
											columnSpacing={{ xs: 1, sm: 2, md: 3 }}
										>
											<Grid size={6}>
												<TextField
													label="Type of Building"
													fullWidth
													variant="outlined"
													value={typeOfBuilding}
													onChange={(e) => setTypeOfBuilding(e.target.value)}
													sx={{ mb: 2 }}
												/>
											</Grid>
											<Grid size={6}>
												<TextField
													label="Project Name"
													fullWidth
													variant="outlined"
													value={projectName}
													onChange={(e) => setProjectName(e.target.value)}
													sx={{ mb: 2 }}
												/>
											</Grid>
											<Grid size={6}>
												<TextField
													label="Phase Number"
													fullWidth
													variant="outlined"
													value={phaseNumber}
													onChange={(e) => setPhaseNumber(e.target.value)}
													sx={{ mb: 2 }}
												/>
											</Grid>
											<Grid size={6}>
												<TextField
													label="Advertisement & Sale Permit Number"
													fullWidth
													variant="outlined"
													value={adSalePermitNumber}
													onChange={(e) => setAdSalePermitNumber(e.target.value)}
													sx={{ mb: 2 }}
												/>
											</Grid>
											<Grid size={6}>
												<TextField
													label="Approved Layout Plan Reference Number"
													fullWidth
													variant="outlined"
													value={layoutPlanReferenceNo}
													onChange={(e) => setLayoutPlanReferenceNo(e.target.value)}
													sx={{ mb: 2 }}
												/>
											</Grid>
											<Grid size={6}>
												<TextField
													label="Local Municipal Name"
													fullWidth
													variant="outlined"
													value={localMunicipalName}
													onChange={(e) => setLocalMunicipalName(e.target.value)}
													sx={{ mb: 2 }}
												/>
											</Grid>
										</Grid>
									</div>
								</Box>
							</Box>
						</Box>
					</div>}
					{value === "loan-h" && <div style={{ marginTop: "20px" }} >  <Box sx={{ display: 'flex' }}>
						<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
							<div
								style={{
									position: "sticky",
									top: 0,
									width: "97%",
									backgroundColor: "#fff",
									boxShadow: "2px 2px 5px 5px rgba(77, 77, 77, 0.1)",
									zIndex: 1000,
									borderRadius: '4px',
									padding: "15px 10px",
									fontSize: "15px",
								}}
							>
								{sections.map((section, index) => (
									<a
										key={index}
										onClick={() => scrollToSection(index)}
										style={{
											margin: "15px 5px",
											padding: "10px 0px",
											cursor: "pointer",
											color: "#007bff",
										}}
									>
										{section.heading}
										{index !== sections.length - 1 && " |"}
									</a>
								))}
							</div>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									width: '100%',
									my: 2,
								}}
							>
								<input
									type="file"
									multiple
									onChange={handleFileChange}
									style={{
										marginRight: '16px', width: '180px', position: "sticky",
									}}
								/>
								<Button variant="contained" color="primary" onClick={UploadFile}>
									Fill From Doc
								</Button>
							</Box>
							<Box sx={{ width: 400 }}>
								<Button variant="contained" color="primary" onClick={handleToggleBox} sx={{ marginLeft: 5, }}>
									Add Doc Templates
								</Button>
								{/* Toggle Box */}
								{toggleBoxVisible && (
									<Box sx={{ border: '1px solid #ccc', borderRadius: '8px', padding: 3, mb: 2 }}>
										{/* Dropdown */}
										<FormControl fullWidth sx={{ mb: 2 }}>
											<InputLabel>Select Bank</InputLabel>
											<Select value={selectedBank} onChange={handleDropdownChange} label="Select Bank">
												<MenuItem value="Bank1">
													Bank Name 1
												</MenuItem>
												<MenuItem value="Bank2">
													Bank Name 2
												</MenuItem>
												<MenuItem value="Bank3">
													Bank Name 3
												</MenuItem>
											</Select>
										</FormControl>

										<Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
											<TextField
												fullWidth
												placeholder="Find Template"
												variant="outlined"
												size="small"
											/>
										</Box>

										{/* Templates List */}
										<TableContainer component={Paper}>
											<Table>
												<TableHead>
													<TableRow>
														<TableCell>
															Template Name
														</TableCell>
														<TableCell align="right">
															Action
														</TableCell>
													</TableRow>
												</TableHead>
												<TableBody>
													{templates.map((template, index) => (
														<TableRow key={index}>
															<TableCell>
																{template.templateName}
															</TableCell>
															<TableCell align="right">
																<Button variant="contained" color="primary">
																	Add
																</Button>
															</TableCell>
														</TableRow>
													))}
												</TableBody>
											</Table>
										</TableContainer>
									</Box>
								)}
							</Box>
							<Box
								sx={{
									mt: 0,
									position: 'fixed',
									overflowY: 'auto',
									maxHeight: 'calc(70vh - 100px)',
								}}
							>
								<h2>Proprietor</h2>
								<Grid
									container
									rowSpacing={1}
									columnSpacing={{ xs: 1, sm: 2, md: 3 }}
									sx={{ my: 3 }}
								>
									<Grid size={6}>
										<TextField
											label="Proprietor Name"
											fullWidth
											variant="outlined"
											value={proprietorName}
											onChange={(e) => setProprietorName(e.target.value)}
											InputProps={{ readOnly: true }}
											sx={{ mb: 2 }}
										/>
									</Grid>
									<Grid size={6}>
										<TextField
											label="Proprietor Company Registration Number"
											fullWidth
											variant="outlined"
											value={proprietorCompanyRegistrationNo}
											onChange={(e) => setProprietorCompanyRegistrationNo(e.target.value)}
											InputProps={{ readOnly: true }}
											sx={{ mb: 2 }}
										/>
									</Grid>
									<Grid size={6}>
										<TextField
											label="Proprietor Registered Office Address"
											fullWidth
											variant="outlined"
											value={proprietorRegisteredOfficeAddress}
											onChange={(e) => setProprietorRegisteredOfficeAddress(e.target.value)}
											InputProps={{ readOnly: true }}
											sx={{ mb: 2 }}
										/>
									</Grid>
									<Grid size={6}>
										<TextField
											label="Proprietor Place Business Address"
											fullWidth
											variant="outlined"
											value={proprietorPlaceBusinessAddress}
											onChange={(e) => setProprietorPlaceBusinessAddress(e.target.value)}
											InputProps={{ readOnly: true }}
											sx={{ mb: 2 }}
										/>
									</Grid>
									<Grid size={6}>
										<TextField
											label="Proprietor Authorised 1st Signatory Name"
											fullWidth
											variant="outlined"
											sx={{ mb: 2 }}
										/>
									</Grid>
									<Grid size={6}>
										<TextField
											label="Proprietor Authorised 1st Identity Card Number"
											fullWidth
											variant="outlined"
											sx={{ mb: 2 }}
										/>
									</Grid>
									<Grid size={6}>
										<TextField
											label="Proprietor Authorised 2nd Signatory Name"
											fullWidth
											variant="outlined"
											sx={{ mb: 2 }}
										/>
									</Grid>
									<Grid size={6}>
										<TextField
											label="Proprietor Authorised 2nd Identity Card Number"
											fullWidth
											variant="outlined"
											sx={{ mb: 2 }}
										/>
									</Grid>
									<Grid size={6}>
										<TextField
											label="Proprietor PA Number Registered in High Court"
											fullWidth
											variant="outlined"
											sx={{ mb: 2 }}
										/>
									</Grid>
									<Grid size={6}>
										<TextField
											label="Proprietor Noting PA Registered in which Land Registry"
											fullWidth
											variant="outlined"
											sx={{ mb: 2 }}
										/>
									</Grid>
								</Grid>
								<h2>Master Title Details</h2>
								<Grid
									container
									rowSpacing={1}
									columnSpacing={{ xs: 1, sm: 2, md: 3 }}
									sx={{ my: 3 }}
								>
									<Grid size={6}>
										<TextField
											label="Title Type"
											fullWidth
											variant="outlined"
											value={titleType}
											onChange={(e) => setTitleType(e.target.value)}
											InputProps={{ readOnly: true }}
											sx={{ mb: 2 }}
										/>
									</Grid>
									<Grid size={6}>
										<TextField
											label="Title Description"
											fullWidth
											variant="outlined"
											value={titleDescription}
											onChange={(e) => setTitleDescription(e.target.value)}
											InputProps={{ readOnly: true }}
											sx={{ mb: 2 }}
										/>
									</Grid>
									<Grid size={6}>
										<TextField
											label="Title Number"
											fullWidth
											variant="outlined"
											value={titleNumber}
											onChange={(e) => setTitleNumber(e.target.value)}
											InputProps={{ readOnly: true }}
											sx={{ mb: 2 }}
										/>
									</Grid>
									<Grid size={6}>
										<TextField
											label="Lot/PT Number"
											fullWidth
											variant="outlined"
											value={lotPTNumber}
											onChange={(e) => setLotPTNumber(e.target.value)}
											InputProps={{ readOnly: true }}
											sx={{ mb: 2 }}
										/>
									</Grid>
									<Grid size={6}>
										<TextField
											label="Mukim"
											fullWidth
											variant="outlined"
											value={mukim}
											onChange={(e) => setMukim(e.target.value)}
											InputProps={{ readOnly: true }}
											sx={{ mb: 2 }}
										/>
									</Grid>
									<Grid size={6}>
										<TextField
											label="District"
											fullWidth
											variant="outlined"
											value={district}
											onChange={(e) => setDistrict(e.target.value)}
											InputProps={{ readOnly: true }}
											sx={{ mb: 2 }}
										/>
									</Grid>
									<Grid size={6}>
										<TextField
											label="State"
											fullWidth
											variant="outlined"
											value={state}
											onChange={(e) => setState(e.target.value)}
											InputProps={{ readOnly: true }}
											sx={{ mb: 2 }}
										/>
									</Grid>
									<Grid size={6}>
										<TextField
											label="Number of Years"
											fullWidth
											variant="outlined"
											value={numberOfYears}
											onChange={(e) => setNumberOfYears(e.target.value)}
											InputProps={{ readOnly: true }}
											sx={{ mb: 2 }}
										/>
									</Grid>
									<Grid size={6}>
										<TextField
											label="Expiration Date"
											fullWidth
											variant="outlined"
											value={expirationDate}
											onChange={(e) => setExpirationDate(e.target.value)}
											InputProps={{ readOnly: true }}
											sx={{ mb: 2 }}
										/>
									</Grid>
									<Grid size={6}>
										<TextField
											label="Land Area"
											fullWidth
											variant="outlined"
											value={landArea}
											onChange={(e) => setLandArea(e.target.value)}
											InputProps={{ readOnly: true }}
											sx={{ mb: 2 }}
										/>
									</Grid>
								</Grid>
								<h2>Project Details</h2>
								<Grid
									container
									rowSpacing={1}
									columnSpacing={{ xs: 1, sm: 2, md: 3 }}
									sx={{ my: 3 }}
								>
									<Grid size={6}>
										<TextField
											label="Type of Building"
											fullWidth
											variant="outlined"
											value={typeOfBuilding}
											onChange={(e) => setTypeOfBuilding(e.target.value)}
											InputProps={{ readOnly: true }}
											sx={{ mb: 2 }}
										/>
									</Grid>
									<Grid size={6}>
										<TextField
											label="Project Name"
											fullWidth
											variant="outlined"
											value={projectName}
											onChange={(e) => setProjectName(e.target.value)}
											InputProps={{ readOnly: true }}
											sx={{ mb: 2 }}
										/>
									</Grid>
									<Grid size={6}>
										<TextField
											label="Phase Number"
											fullWidth
											variant="outlined"
											value={phaseNumber}
											onChange={(e) => setPhaseNumber(e.target.value)}
											InputProps={{ readOnly: true }}
											sx={{ mb: 2 }}
										/>
									</Grid>
									<Grid size={6}>
										<TextField
											label="AdSale Permit Number"
											fullWidth
											variant="outlined"
											value={adSalePermitNumber}
											onChange={(e) => setAdSalePermitNumber(e.target.value)}
											InputProps={{ readOnly: true }}
											sx={{ mb: 2 }}
										/>
									</Grid>
									<Grid size={6}>
										<TextField
											label="Approved Layout Plan Reference Number"
											fullWidth
											variant="outlined"
											value={layoutPlanReferenceNo}
											onChange={(e) => setLayoutPlanReferenceNo(e.target.value)}
											InputProps={{ readOnly: true }}
											sx={{ mb: 2 }}
										/>
									</Grid>
									<Grid size={6}>
										<TextField
											label="Local Municipal Name"
											fullWidth
											variant="outlined"
											value={localMunicipalName}
											onChange={(e) => setLocalMunicipalName(e.target.value)}
											InputProps={{ readOnly: true }}
											sx={{ mb: 2 }}
										/>
									</Grid>
								</Grid>
								<h2>Property Details</h2>
								<Grid
									container
									rowSpacing={1}
									columnSpacing={{ xs: 1, sm: 2, md: 3 }}
									sx={{ my: 3 }}
								>
									<Grid size={6}>
										<TextField
											label="Parcel/Unit/Lot Number"
											fullWidth
											variant="outlined"
											sx={{ mb: 2 }}
										/>
									</Grid>
									<Grid size={6}>
										<TextField
											label="Storey Number"
											fullWidth
											variant="outlined"
											sx={{ mb: 2 }}
										/>
									</Grid>
									<Grid size={6}>
										<TextField
											label="Building/Block Number"
											fullWidth
											variant="outlined"
											sx={{ mb: 2 }}
										/>
									</Grid>
									<Grid size={6}>
										<TextField
											label="Parcel/Unit/Lot Area"
											fullWidth
											variant="outlined"
											sx={{ mb: 2 }}
										/>
									</Grid>
									<Grid size={6}>
										<TextField
											label="Parcel/Unit/Lot Built up Area"
											fullWidth
											variant="outlined"
											sx={{ mb: 2 }}
										/>
									</Grid>
									<Grid size={6}>
										<TextField
											label="Accessory Parcel(s) Number"
											fullWidth
											variant="outlined"
											sx={{ mb: 2 }}
										/>
									</Grid>
									<Grid size={6}>
										<TextField
											label="Accessory Parcel(s) Building/Block Number"
											fullWidth
											variant="outlined"
											sx={{ mb: 2 }}
										/>
									</Grid>
									<Grid size={6}>
										<TextField
											label="Air-cond Ledge Parcel(s) Number"
											fullWidth
											variant="outlined"
											sx={{ mb: 2 }}
										/>
									</Grid>
									<Grid size={6}>
										<TextField
											label="Car Park Lot(s) Number"
											fullWidth
											variant="outlined"
											sx={{ mb: 2 }}
										/>
									</Grid>
									<Grid size={6}>
										<TextField
											label="Car Park Building/Block Number"
											fullWidth
											variant="outlined"
											sx={{ mb: 2 }}
										/>
									</Grid>
								</Grid>
								{sections.map((section) => (
									<React.Fragment key={section.heading}>
										<Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
											{section.heading}
										</Typography>
										<Grid
											container
											rowSpacing={1}
											columnSpacing={{ xs: 1, sm: 2, md: 3 }}
										>
											{section.fields.map((field) => (
												<Grid
													size={6}
													// key={field}
												>
													<TextField
														label={field}
														fullWidth
														variant="outlined"
														sx={{ mb: 2 }}
													/>
												</Grid>
											))}
										</Grid>
									</React.Fragment>
								))}
							</Box>
						</Box>
					</Box>
					</div>}
				</Box>
			</Box>
		</Box>
	);
};

export default SchLoanH;