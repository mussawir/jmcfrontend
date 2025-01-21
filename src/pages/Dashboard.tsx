import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, InputAdornment, Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper, TextField, Grid, Card, CardContent, Divider, Typography, Toolbar, CssBaseline, Button, responsiveFontSizes, } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import DrawerComponent from '../components/DrawerComponent';
import HeaderComponent from '../components/HeaderComponent';
import { PieChart, Pie, Cell } from 'recharts';
import { Facebook, LinkedIn, Instagram, Google, ShoppingCart, AccountBalance, CreditCard, Laptop, PhoneAndroid } from '@mui/icons-material';
import { LinearProgress, List, ListItem, ListItemAvatar, ListItemText, CircularProgress } from '@mui/material';
import { AccountBalanceWallet, MonetizationOn, Search, } from '@mui/icons-material';
import Checkbox from '@mui/material/Checkbox';

// const caseTrendData = [
//   { month: 'Jan', cases: 30 },
//   { month: 'Feb', cases: 45 },
//   { month: 'Mar', cases: 60 },
//   { month: 'Apr', cases: 80 },
//   { month: 'May', cases: 90 },
//   { month: 'Jun', cases: 75 },
// ];

// const weeklySalesData = [
//   { week: "Mon", sales: 40 },
//   { week: "Tue", sales: 50 },
//   { week: "Wed", sales: 70 },
//   { week: "Thu", sales: 30 },
//   { week: "Fri", sales: 90 },
//   { week: "Sat", sales: 20 },
//   { week: "Sun", sales: 60 },
// ];

// const chartData = [
//   { value: 10 },
//   { value: 25 },
//   { value: 15 },
//   { value: 40 },
//   { value: 30 },
//   { value: 50 },
//   { value: 20 },
// ];
// const data = [
//   { name: 'Jan', Sales: 10, Views: 15 },
//   { name: 'Feb', Sales: 5, Views: 10 },
//   { name: 'Mar', Sales: 60, Views: 50 },
//   { name: 'Apr', Sales: 20, Views: 25 },
//   { name: 'May', Sales: 25, Views: 30 },
//   { name: 'Jun', Sales: 15, Views: 20 },
//   { name: 'Jul', Sales: 30, Views: 40 },
//   { name: 'Aug', Sales: 10, Views: 20 },
//   { name: 'Sep', Sales: 20, Views: 30 },
// ];

// const products = [
//   { name: 'Apple Hand Watch', sales: 258, price: 199, image: 'path_to_image' },
//   { name: 'Mobile Phone Set', sales: 169, price: 159, image: 'path_to_image' },
//   { name: 'Fancy Chair', sales: 268, price: 678, image: 'path_to_image' },
//   { name: 'Blue Shoes Pair', sales: 859, price: 279, image: 'path_to_image' },
//   { name: 'Blue Yoga Mat', sales: 328, price: 389, image: 'path_to_image' },
//   { name: 'White Water Bottle', sales: 992, price: 584, image: 'path_to_image' },
//   { name: 'Laptop Full HD', sales: 489, price: 398, image: 'path_to_image' },
// ];

// const projects = [
//   { name: 'Angular 12', type: 'Admin Template', progress: 95, color: '#f44336' },
//   { name: 'React Js', type: 'eCommerce Admin', progress: 90, color: '#00bcd4' },
//   { name: 'Vue Js', type: 'Dashboard Template', progress: 85, color: '#4caf50' },
//   { name: 'Bootstrap 5', type: 'Corporate Website', progress: 75, color: '#673ab7' },
//   { name: 'Magento', type: 'Shopping Portal', progress: 65, color: '#ff9800' },
//   { name: 'Django', type: 'Backend Admin', progress: 55, color: '#009688' },
//   { name: 'Python', type: 'User Panel', progress: 45, color: '#3f51b5' },
// ];

// const campaigns = [
//   { name: 'Facebook', percentage: 55, icon: <Facebook sx={{ color: '#3b5998' }} /> },
//   { name: 'LinkedIn', percentage: 67, icon: <LinkedIn sx={{ color: '#0077b5' }} /> },
//   { name: 'Instagram', percentage: 78, icon: <Instagram sx={{ color: '#e4405f' }} /> },
//   { name: 'Google', percentage: 38, icon: <Google sx={{ color: '#db4437' }} /> },
// ];

// const transactions = [
//   { name: 'Online Purchase', date: '03/10/2022', amount: '$97,896', icon: <ShoppingCart sx={{ color: '#f44336' }} /> },
//   { name: 'Bank Transfer', date: '03/10/2022', amount: '$86,469', icon: <AccountBalance sx={{ color: '#2196f3' }} /> },
//   { name: 'Credit Card', date: '03/10/2022', amount: '$45,259', icon: <CreditCard sx={{ color: '#4caf50' }} /> },
//   { name: 'Laptop Payment', date: '03/10/2022', amount: '$35,249', icon: <Laptop sx={{ color: '#9c27b0' }} /> },
//   { name: 'iPhone Purchase', date: '03/10/2022', amount: '$55,128', icon: <PhoneAndroid sx={{ color: '#ff9800' }} /> },
// ];

// const monthlyData = [{ name: 'Monthly', value: 65 }];
// const yearlyData = [{ name: 'Yearly', value: 984 }];


// const COLORS = ['#0088FE', '#FFBB28'];

// const caseStatusData = [
//   { status: 'Resolved', value: 320 },
//   { status: 'Pending', value: 90 },
//   { status: 'New', value: 40 },
// ];

const Dashboard = () => {
	const [masterTitleList, setMasterTitleList] = useState([]);
	const [titlesList, setTitlesList] = useState([]);
	const [individualList, setIndividualList] = useState([]);
	const [strataList, setStrataList] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [selectedValues, setSelectedValues] = React.useState([]);
	const navigate = useNavigate();

	const handleAddClick = () => {
		navigate('/purchaser-screen');
	};


	const handleCheckboxChange = (event) => {
		const value = event.target.value;
		setSelectedValues((prev) =>
			prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
		);
	};

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const apiUrl = process.env.API_URL;
				const response = await fetch(`${apiUrl}/master-title-list`);
	
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}
	
				const data = await response.json();
				// console.log('Fetched Data:', data);
				setMasterTitleList(data || []);
				
			} catch (err) {
				console.error('Error fetching master title list:', err.message);
			} finally {
				setLoading(false);
			}
		};
	
		fetchData();
	}, []);

	// const Dashboard = () => {
	return (
		<Box sx={{ display: 'flex', backgroundColor: '#f7f9fc', minHeight: '100vh' }}>
			<CssBaseline />
			<DrawerComponent />
			<Box sx={{ flexGrow: 1 }}>
				<HeaderComponent />
				<Box component="main" sx={{ p: 3 }}>
					<Toolbar />

					<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
						<Typography variant="h6" sx={{ fontWeight: 500, fontFamily: 'Roboto, sans-serif', color: '#5b6166', textAlign: 'center,', alignItme: 'center', }}>
							Conveyancing Master List
						</Typography>
						{/* <Typography variant="h6" sx={{ fontWeight: 500, fontFamily: 'Roboto, sans-serif', color: '#5b6166' }}>
			  Dashboard
			  </Typography> */}
						{/* <Button
			  variant="contained"
			  color="primary"
			  sx={{ ml: 'auto', textTransform:'initial' }} // This will push the button to the right
			  >
			  Settings
			  </Button> */}
					</Box>
					<Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
						<TextField
							size="small"
							fullWidth
							variant="outlined"
							placeholder="Search..."
							sx={{ marginRight: 2, '& .MuiOutlinedInput-root': { borderRadius: 40, }, '& .MuiOutlinedInput-input': { padding: '10px 16px', }, }}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<Search />
									</InputAdornment>
								),
							}}
						/>
						<Checkbox
							checked={selectedValues.includes('a')}
							onChange={handleCheckboxChange}
							value="a"
							inputProps={{ 'aria-label': 'A' }}
						/>
						<Typography sx={{ marginRight: 2 }}>Master</Typography>
						<Checkbox
							checked={selectedValues.includes('b')}
							onChange={handleCheckboxChange}
							value="b"
							inputProps={{ 'aria-label': 'B' }}
						/>
						<Typography sx={{ marginRight: 2 }}>Individual</Typography>
						<Checkbox
							checked={selectedValues.includes('c')}
							onChange={handleCheckboxChange}
							value="c"
							inputProps={{ 'aria-label': 'C' }}
						/>
						<Typography>Strata</Typography>
					</Box>

					{/* Second Row: Table */}
					<Box>
						{loading && <Typography>Loading...</Typography>}
						{error && <Typography color="error">{error}</Typography>}
						<TableContainer component={Paper}>
							<Table>
								{/* Master Title List */}
								<TableHead>
									<TableRow>
										<TableCell>Matter Code</TableCell>
										<TableCell>Master Title</TableCell>
										<TableCell>Title Type</TableCell>
										<TableCell>Title No</TableCell>
										<TableCell>Schedule Type</TableCell>
										<TableCell>Lot/PT No</TableCell>
										<TableCell>Action</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{masterTitleList.length > 0 ? (
										masterTitleList.map((item, index) => (
											<TableRow key={index}>
												<TableCell>{item.matterCode}</TableCell>
												<TableCell>{item.masterTitle}</TableCell>
												<TableCell>{item.titleType}</TableCell>
												<TableCell>{item.titleNumber}</TableCell>
												<TableCell>H</TableCell>
												<TableCell>{item.lotPtNumber}</TableCell>
												<TableCell>
													<Button variant="contained" color="primary" onClick={handleAddClick}>
														Add Purchaser
													</Button>
												</TableCell>
											</TableRow>
										))
									) : (
										<TableRow>
											<TableCell colSpan={7}>No data available</TableCell>
										</TableRow>
									)}
								</TableBody>
							</Table>
						</TableContainer>
					</Box>


					{/* <Grid container spacing={3} sx={{ mb: 3 }}>
			<Grid item xs={12} sm={6} md={3}>
			<Card
			sx={{
			  height: "150px",
			  display: "flex",
			  flexDirection: "column",
			  borderRadius: '16px',
			  justifyContent: "space-between",
			  padding: 2,
			}}
		  >
			<Typography variant="subtitle2" sx={{ color: "#777" }}>
			  Recent Cases
			</Typography>
			<Typography variant="h5" sx={{ fontWeight: 500 }}>
			  78
			</Typography>
			<ResponsiveContainer width="100%" height={50}>
			  <LineChart data={weeklySalesData}>
				<Line type="monotone" dataKey="sales" stroke="#ff3d57" />
			  </LineChart>
			</ResponsiveContainer>
		  </Card>
			</Grid>
			<Grid item xs={12} sm={6} md={3}>
			  <Card
				sx={{
				  backgroundColor: 'white',
				  borderRadius: '16px',
				  height: '120px',
				  alignItems: 'center',
				  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
				}}
			  >
				<CardContent>
				  <Typography variant="subtitle2" sx={{ fontWeight: 500, color: '#777'  }}>
					Resolved Cases
				  </Typography>
				  <Typography variant="h5" sx={{ fontWeight: 500, fontFamily: 'Roboto, sans-serif', color: '#333' }}>
					320
				  </Typography>
				</CardContent>
			  </Card>
			</Grid>
			<Grid item xs={12} sm={6} md={3}>
			  <Card
				sx={{
				  backgroundColor: 'white',
				  borderRadius: '16px',
				  height: '120px',
				  alignItems: 'center',
				  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
				}}
			  >
				<CardContent>
				  <Typography variant="subtitle2" sx={{ fontWeight: 500, color: '#777' }}>
					Pending Cases
				  </Typography>
				  <Typography variant="h5" sx={{ fontWeight: 500, fontFamily: 'Roboto, sans-serif', color: '#333' }}>
					90
				  </Typography>
				</CardContent>
			  </Card>
			</Grid>
			<Grid item xs={12} sm={6} md={3}>
			  <Card
				sx={{
				  backgroundColor: 'white',
				  borderRadius: '16px',
				  height: '120px',
				  alignItems: 'center',
				  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
				}}
			  >
				<CardContent>
				  <Typography variant="subtitle2" sx={{ fontWeight: 500, color: '#777' }}>
					New Cases This Month
				  </Typography>
				  <Typography variant="h5" sx={{ fontWeight: 500, fontFamily: 'Roboto, sans-serif', color: '#333' }}>
					40
				  </Typography>
				</CardContent>
			  </Card>
			</Grid>
		  </Grid> */}


					{/* <Grid container spacing={3}>
		   
			<Grid item xs={12} md={6}>
			  <Card sx={{ backgroundColor: 'white', borderRadius: '16px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
				<CardContent>
				  <Typography variant="h6" sx={{ fontWeight: 500, mb: 2, fontFamily: 'Roboto, sans-serif', color: '#333' }}>
					Case Trends
				  </Typography>
				  <ResponsiveContainer width="100%" height={250}>
					<LineChart data={caseTrendData}>
					  <CartesianGrid strokeDasharray="3 3" />
					  <XAxis dataKey="month" />
					  <YAxis />
					  <Tooltip />
					  <Line type="monotone" dataKey="cases" stroke="#1976d2" strokeWidth={3} />
					</LineChart>
				  </ResponsiveContainer>
				</CardContent>
			  </Card>
			</Grid>

		   
			<Grid item xs={12} md={6}>
			  <Card sx={{ backgroundColor: 'white',  borderRadius: '16px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
				<CardContent>
				  <Typography variant="h6" sx={{ fontWeight: 500, mb: 2, fontFamily: 'Roboto, sans-serif', color: '#333' }}>
					Case Status Overview
				  </Typography>
				  <ResponsiveContainer width="100%" height={250}>
					<BarChart data={caseStatusData}>
					  <CartesianGrid strokeDasharray="3 3" />
					  <XAxis dataKey="status" />
					  <YAxis />
					  <Tooltip />
					  <Bar dataKey="value" fill="#4caf50" />
					</BarChart>
				  </ResponsiveContainer>
				</CardContent>
			  </Card>
			</Grid>
			
			<Grid item xs={12} sm={6} md={2.5}>
  <Card
	sx={{
	  borderRadius: 4,
	  padding: 2,
	  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
	  textAlign: 'center',
	  height: '500px',
	  display: 'flex',
	  alignSelf: 'center',
	  alignItems: 'center',
	  justifyContent: 'space-between',
	}}
  >
	<CardContent>
	  
	  <Typography variant="h4" sx={{ fontWeight: 500, color: '#333' }}>
		96
	  </Typography>
	  
	  <Typography variant="subtitle2" sx={{ color: '#777', mb: 2 }}>
		Total Projects
	  </Typography>

	  
	  <Box sx={{ height: '70px', marginTop: 2 }}>
		<ResponsiveContainer width="100%" height="100%">
		  <BarChart data={chartData}>
			<Bar dataKey="value" fill="url(#gradient1)" radius={[5, 5, 0, 0]} />
			<defs>
			  <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0%" stopColor="#ff5722" />
				<stop offset="100%" stopColor="#ff9100" />
			  </linearGradient>
			</defs>
		  </BarChart>
		</ResponsiveContainer>
	  </Box>

	  
	  <Typography
		variant="body2"
		sx={{
		  color: '#4caf50',
		  fontWeight: 500,
		  display: 'inline',
		  marginTop: 1,
		}}
	  >
		12.5%{' '}
	  </Typography>
	  <Typography
		variant="body2"
		sx={{ color: '#777', display: 'inline', marginLeft: 1 }}
	  >
		from last month
	  </Typography>
	</CardContent>
  </Card>
</Grid>

<Grid item xs={12} sm={6} md={2.5}>
  <Card
	sx={{
	  borderRadius: 4,
	  padding: 2,
	  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
	  textAlign: 'center',
	  height: '500px',
	  display: 'flex',
	  alignItems: 'center',
	  alignSelf: 'center',
	  justifyContent: 'space-between',
	}}
  >
	<CardContent>
	  
	  <Typography variant="h4" sx={{ fontWeight: 500, color: '#333' }}>
		120
	  </Typography>
	  
	  <Typography variant="subtitle2" sx={{ color: '#777', mb: 2 }}>
		Active Users
	  </Typography>

	  
	  <Box sx={{ height: '70px', marginTop: 2 }}>
		<ResponsiveContainer width="100%" height="100%">
		  <BarChart data={chartData}>
			<Bar dataKey="value" fill="url(#gradient2)" radius={[5, 5, 0, 0]} />
			<defs>
			  <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0%" stopColor="#3f51b5" />
				<stop offset="100%" stopColor="#2196f3" />
			  </linearGradient>
			</defs>
		  </BarChart>
		</ResponsiveContainer>
	  </Box>

	  
	  <Typography
		variant="body2"
		sx={{
		  color: '#f44336',
		  fontWeight: 500,
		  display: 'inline',
		  marginTop: 1,
		}}
	  >
		-3.4%{' '}
	  </Typography>
	  <Typography
		variant="body2"
		sx={{ color: '#777', display: 'inline', marginLeft: 1 }}
	  >
		from last month
	  </Typography>
	</CardContent>
  </Card>
</Grid>
<Grid item xs={12} sm={6} md={7}>
<Card sx={{ padding: 3, borderRadius: '16px',boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
	
	  <Typography variant="h6" sx={{ fontWeight: 500, color: '#333', mb: 3 }}>
		Sales & Views
	  </Typography>

	  
	  <Box sx={{ height: '200px' }}>
		<ResponsiveContainer width="100%" height="100%">
		  <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
			<XAxis dataKey="name" />
			<YAxis />
			<Tooltip />
			<Bar dataKey="Sales" fill="#0088FE" />
			<Bar dataKey="Views" fill="#7A6BF0" />
		  </BarChart>
		</ResponsiveContainer>
	  </Box>

	  
	  <Grid container spacing={2} sx={{ mt: 3 }}>
		<Grid item xs={6}>
		  <Box sx={{ textAlign: 'center' }}>
			<ResponsiveContainer width="100%" height={100}>
			  <PieChart>
				<Pie
				  data={monthlyData}
				  cx="50%"
				  cy="50%"
				  outerRadius={40}
				  fill="#0088FE"
				  dataKey="value"
				  startAngle={90}
				  endAngle={450}
				>
				  {monthlyData.map((entry, index) => (
					<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
				  ))}
				</Pie>
			  </PieChart>
			</ResponsiveContainer>
			<Typography variant="h5" sx={{ fontWeight: 500 }}>
			  65,127
			</Typography>
			<Typography variant="body2" sx={{ color: '#4caf50' }}>
			  16.5% <span style={{ color: '#777' }}>55.21 USD</span>
			</Typography>
		  </Box>
		</Grid>
		<Grid item xs={6}>
		  <Box sx={{ textAlign: 'center' }}>
			<ResponsiveContainer width="100%" height={100}>
			  <PieChart>
				<Pie
				  data={yearlyData}
				  cx="50%"
				  cy="50%"
				  outerRadius={40}
				  fill="#7A6BF0"
				  dataKey="value"
				  startAngle={90}
				  endAngle={450}
				>
				  {yearlyData.map((entry, index) => (
					<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
				  ))}
				</Pie>
			  </PieChart>
			</ResponsiveContainer>
			<Typography variant="h5" sx={{ fontWeight: 500 }}>
			  984,246
			</Typography>
			<Typography variant="body2" sx={{ color: '#4caf50' }}>
			  24.9% <span style={{ color: '#777' }}>267.35 USD</span>
			</Typography>
		  </Box>
		</Grid>
	  </Grid>
	</Card>
</Grid>

		  </Grid> */}

					{/* <Grid container spacing={3}>
	  
	  <Grid item xs={12} md={4} sx={{mt: 2}}>
		<Card sx={{ padding: 2 , borderRadius: '16px',  height: '100%'}}>
		  <Typography variant="h6" sx={{ mb: 2 }}>
			Ongoing Projects
		  </Typography>
		  {projects.map((project, index) => (
			<Box key={index} sx={{ mb: 2 }}>
			  <Typography variant="body1" sx={{ fontWeight: 500 }}>
				{project.name}
			  </Typography>
			  <Typography variant="body2" sx={{ color: '#757575' }}>
				{project.type}
			  </Typography>
			  <LinearProgress
				variant="determinate"
				value={project.progress}
				sx={{
				  height: 8,
				  borderRadius: 5,
				  backgroundColor: '#f0f0f0',
				  '& .MuiLinearProgress-bar': {
					backgroundColor: project.color,
				  },
				}}
			  />
			</Box>
		  ))}
		</Card>
	  </Grid>

	  
	  <Grid item xs={12} md={4} sx={{ mt: 2 }}>
  <Card sx={{ padding: 2, height: '100%', borderRadius: '16px' }}>
	<Typography variant="h6" sx={{ mb: 2 }}>
	  Campaign
	</Typography>
	<List sx={{ flexGrow: 1 }}>
	  {campaigns.map((campaign, index) => (
		<ListItem key={index}>
		  <ListItemAvatar>{campaign.icon}</ListItemAvatar>
		  <ListItemText primary={campaign.name} />
		  <CircularProgress
			variant="determinate"
			value={campaign.percentage}
			size={30}
			sx={{
			  color: campaign.icon.props.sx.color,
			}}
		  />
		</ListItem>
	  ))}
	</List>
  </Card>
</Grid>

	  
	  <Grid item xs={12} md={4} sx={{mt: 2}}>
		<Card sx={{ padding: 2, height: '100%', borderRadius: '16px' }}>
		  <Typography variant="h6" sx={{ mb: 2 }}>
			Recent Transactions
		  </Typography>
		  <List>
			{transactions.map((transaction, index) => (
			  <ListItem key={index}>
				<ListItemAvatar>{transaction.icon}</ListItemAvatar>
				<ListItemText primary={transaction.name} secondary={transaction.date} />
				<Typography variant="body1" sx={{ fontWeight: 500 }}>
				  {transaction.amount}
				</Typography>
			  </ListItem>
			))}
		  </List>
		</Card>
	  </Grid>
	</Grid> */}
					{/* <Grid container spacing={2}>
	  <Grid item xs={12}>

		<Card sx={{ padding: 2, height: '100%', borderRadius: '16px', mt: '14px' }}>
	  <Typography variant="h6" sx={{ mb: 2 }}>
		Popular Products
	  </Typography>
	  <List>
		{products.map((product, index) => (
		  <React.Fragment key={index}>
			<ListItem sx={{ display: 'flex', justifyContent: 'space-between', paddingY: 1 }}>
			  <ListItemText primary={product.name} secondary={`Sale: ${product.sales}`} />
			  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>${product.price}</Typography>
			</ListItem>
			{index < products.length - 1 && <Divider />}
		  </React.Fragment>
		))}
	  </List>
	</Card>

	</Grid>
	</Grid> */}

				</Box>
			</Box>
		</Box>
	);
};

export default Dashboard;