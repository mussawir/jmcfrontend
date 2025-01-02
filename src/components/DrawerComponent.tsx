import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import EmojiSymbolsOutlinedIcon from '@mui/icons-material/EmojiSymbolsOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'; // For Documents
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined'; // For Checklist
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'; // For Team
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined'; // For Cards
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'; // For Ecommerce
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined'; // For Components
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined'; // For Forms
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined'; // For Tables
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined'; // For Apps
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'; // Already outlined
import GroupIcon from '@mui/icons-material/Group';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import StoreIcon from '@mui/icons-material/Store';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PaymentIcon from '@mui/icons-material/Payment';
import PeopleIcon from '@mui/icons-material/People';
import BusinessIcon from '@mui/icons-material/Business';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link, useNavigate } from 'react-router-dom';
import logojmc from '../images/jmcvc-dark-logo.png';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const drawerWidth = 240;

const DrawerComponent = () => {
  const [selectedItem, setSelectedItem] = useState<string>('');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Handle item click
  const handleItemClick = (item: string, route: string) => {
    setSelectedItem(item);
    navigate(route); // Navigate to the desired route
    handleClose(); // Close the menu
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const [selectedBankItem, setSelectedBankItem] = useState<string>(''); // Unique state for Banks
  const [bankAnchorEl, setBankAnchorEl] = useState<null | HTMLElement>(null); // Unique anchor element for Banks
  const openBankMenu = Boolean(bankAnchorEl); // Determine if the Banks menu is open
  // const navigate = useNavigate(); // Navigation hook

  // Handle closing the Banks menu
  const handleBankClose = () => {
    setBankAnchorEl(null);
  };

  // Handle item click in the Banks menu
  const handleBankItemClick = (item: string, route: string) => {
    setSelectedBankItem(item);
    navigate(route); // Navigate to the desired route
    handleBankClose(); // Close the menu
  };

  // Handle opening the Banks menu
  const handleBankClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setBankAnchorEl(event.currentTarget);
  };
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column', // Ensures proper layout for footer
        },
      }}
      variant="permanent"
      anchor="left"
    >
      {/* Logo */}
      <Toolbar style={{ justifyContent: 'left', display: 'flex' }}>
        <div>
          <img src={logojmc} width={100} style={{ marginTop: 20, marginLeft: 10 , justifyContent: 'left', display: 'flex' }} alt="Logo" />
        </div>
      </Toolbar>

      <List sx={{ flexGrow: 1 }}>
      <ListItem
  component={Link}
  to="/dashboard"
  onClick={() => handleItemClick('Dashboard', '/dashboard')} // Set 'Dashboard' as the selected item
  sx={{
    backgroundColor: selectedItem === 'Dashboard' ? 'rgba(30, 144, 255, 0.2)' : 'transparent', // Background color if selected
    color: selectedItem === 'Dashboard' ? '#1E90FF' : '#5f5f5f', // Icon and text color if selected
    '&:hover': {
      backgroundColor: 'rgba(173, 216, 230, 0.5)', // Hover background color
    },
  }}
>
  <ListItemIcon sx={{ fontSize: '24px', color: selectedItem === 'Dashboard' ? '#1E90FF' : '#5f5f5f' }}>
    <HomeOutlinedIcon />
  </ListItemIcon>
  <ListItemText
    primary={
      <Typography
        sx={{
          fontSize: '14px', 
          fontWeight: 400,
          lineHeight: 1.5,
          letterSpacing: '0.5px',
          fontFamily: 'sans-serif',
          color: selectedItem === 'Dashboard' ? '#1E90FF' : '#5f5f5f', 
        }}
      >
        Dashboard
      </Typography>
    }
  />
  {/* <KeyboardArrowDownIcon sx={{ marginLeft: 'auto', color: selectedItem === 'Dashboard' ? '#1E90FF' : '#5f5f5f' }} /> */}
      </ListItem>

      {/* <ListItem
  component={Link}
  to="/projects"
  onClick={() => handleItemClick('Projects', '/projects')} // Set 'Projects' as the selected item
  sx={{
    backgroundColor: selectedItem === 'Projects' ? 'rgba(30, 144, 255, 0.2)' : 'transparent', // Background color if selected
    color: selectedItem === 'Projects' ? '#1E90FF' : '#5f5f5f', // Icon and text color if selected
    '&:hover': {
      backgroundColor: 'rgba(173, 216, 230, 0.5)', // Hover background color
    },
  }}
>
  <ListItemIcon sx={{ color: selectedItem === 'Projects' ? '#1E90FF' : '#5f5f5f' }}>
    <StoreIcon />
  </ListItemIcon>
  <ListItemText
    primary={
      <Typography
        sx={{
          fontSize: '14px', 
          fontWeight: 400,
          lineHeight: 1.5,
          letterSpacing: '0.5px',
          fontFamily: 'sans-serif',
          color: selectedItem === 'Dashboard' ? '#1E90FF' : '#5f5f5f', 
        }}
      >
        Metters
      </Typography>
    }
  /> */}
  {/* <KeyboardArrowDownIcon sx={{ marginLeft: 'auto', color: selectedItem === 'Projects' ? '#1E90FF' : '#5f5f5f' }} /> */}
{/* </ListItem> */}


<ListItem
  className="metters-section"
  style={{ display: 'flex', alignItems: 'center', gap: '4px', paddingLeft: '15px' }}
  sx={{
    backgroundColor: selectedItem === 'Dashboard' ? 'rgba(30, 144, 255, 0.2)' : 'transparent', // Background color if selected
    color: selectedItem === 'Dashboard' ? '#1E90FF' : '#5f5f5f', // Icon and text color if selected
    '&:hover': {
      backgroundColor: 'rgba(173, 216, 230, 0.5)', // Hover background color
    },
  }}
  // onClick={handleClick}
>
  <ListItemIcon
    sx={{
      color: selectedItem === 'Projects' ? '#1E90FF' : '#5f5f5f',
      minWidth: 'unset',
    }}
  >
    <AssignmentIcon />
  </ListItemIcon>
  <Button
    id="basic-button"
    aria-controls={open ? 'basic-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={open ? 'true' : undefined}
    onClick={handleClick}
    sx={{
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.5px',
      fontFamily: 'sans-serif',
      color: selectedItem === 'Dashboard' ? '#1E90FF' : '#5f5f5f',
      textTransform: 'none',
      marginLeft: '20px',
      minWidth: 'unset',
    }}
  >
    Metters
  </Button>
  <KeyboardArrowDownIcon sx={{ marginLeft: 'auto', color: selectedItem === 'SPAG' ? '#1E90FF' : '#5f5f5f' }} />
  <Menu
  id="basic-menu"
  anchorEl={anchorEl}
  open={open}
  onClose={handleClose}
  MenuListProps={{
    'aria-labelledby': 'basic-button',
  }}
  sx={{
    '& .MuiPaper-root': {
      borderRadius: '12px',
      backgroundColor: '#ffffff',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
      minWidth: '240px',
      overflow: 'hidden',
    },
  }}
>
{[
            { label: 'SPA Loan/ SUBSALE || SPA Related Loan', route: '/spaloan' },
            { label: 'SPA Loan/ Developer', route: '/developerloan' },
            { label: 'Transfer', route: '/transfer' },
            { label: 'Commercial Loan', route: '/commercialloan' },
            { label: 'Discharge', route: '/discharge' },
            { label: 'Receive and Reassignment', route: '/reassignment' },
            { label: 'Tenancy', route: '/tenancy' },
            { label: 'Commercial Agreement', route: '/commercialagreement' },
          ].map((item, index) => (
            <MenuItem
              key={index}
              onClick={() => handleItemClick(item.label, item.route)}
              sx={{
                fontFamily: 'sans-serif',
                fontSize: '14px',
                lineHeight: 1.5,
                color: '#5f5f5f',
                padding: '12px 20px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#f0f8ff',
                  color: '#1E90FF',
                },
              }}
            >
              {item.label}
    </MenuItem>
  ))}
</Menu>

</ListItem>

{/* <ListItem */}
  {/* // component={Link}
  // to="/spaH"
  // onClick={() => handleItemClick('SPAH')}
  // sx={{
  //   backgroundColor: selectedItem === 'SPAG' ? 'rgba(30, 144, 255, 0.2)' : 'transparent',
  //   color: selectedItem === 'SPAG' ? '#1E90FF' : '#5f5f5f',
  //   '&:hover': {
  //     backgroundColor: 'rgba(173, 216, 230, 0.5)',
  //   },
  // }}
// > */}
  {/* <ListItemIcon sx={{ color: selectedItem === 'SPAG' ? '#1E90FF' : '#5f5f5f' }}>
    <ShoppingCartOutlinedIcon />
  </ListItemIcon>
  <ListItemText
    primary={
      <Typography
        sx={{
          fontSize: '14px', 
          fontWeight: 400,
          lineHeight: 1.5,
          letterSpacing: '0.5px',
          fontFamily: 'sans-serif',
          color: selectedItem === 'Dashboard' ? '#1E90FF' : '#5f5f5f', 
        }}
      >
        SPA H
      </Typography>
    }
  /> */}
  {/* <KeyboardArrowDownIcon sx={{ marginLeft: 'auto', color: selectedItem === 'SPAG' ? '#1E90FF' : '#5f5f5f' }} /> */}
{/* </ListItem> */}
<ListItem
  component={Link}
  to="/properties"
  onClick={() => handleItemClick('Projects', '/projects')}
  sx={{
    backgroundColor: selectedItem === 'Projects' ? 'rgba(30, 144, 255, 0.2)' : 'transparent', // Background color if selected
    color: selectedItem === 'Projects' ? '#1E90FF' : '#5f5f5f', // Icon and text color if selected
    '&:hover': {
      backgroundColor: 'rgba(173, 216, 230, 0.5)', // Hover background color
    },
  }}
>
<ListItemIcon sx={{ color: selectedItem === 'Projects' ? '#1E90FF' : '#5f5f5f' }}>
  <ApartmentIcon  />
</ListItemIcon>
  <ListItemText
    primary={
      <Typography
        sx={{
          fontSize: '14px', 
          fontWeight: 400,
          lineHeight: 1.5,
          letterSpacing: '0.5px',
          fontFamily: 'sans-serif',
          color: selectedItem === 'Dashboard' ? '#1E90FF' : '#5f5f5f', 
        }}
      >
        Properties
      </Typography>
    }
  />
  {/* <KeyboardArrowDownIcon sx={{ marginLeft: 'auto', color: selectedItem === 'Projects' ? '#1E90FF' : '#5f5f5f' }} /> */}
</ListItem>

<ListItem
  component={Link}
  to="/partylist"
  onClick={() => handleItemClick('Projects', '/projects')}
  sx={{
    backgroundColor: selectedItem === 'Projects' ? 'rgba(30, 144, 255, 0.2)' : 'transparent', // Background color if selected
    color: selectedItem === 'Projects' ? '#1E90FF' : '#5f5f5f', // Icon and text color if selected
    '&:hover': {
      backgroundColor: 'rgba(173, 216, 230, 0.5)', // Hover background color
    },
  }}
>
<ListItemIcon sx={{ color: selectedItem === 'Projects' ? '#1E90FF' : '#5f5f5f' }}>
  <GroupIcon />
</ListItemIcon>
  <ListItemText
    primary={
      <Typography
        sx={{
          fontSize: '14px', 
          fontWeight: 400,
          lineHeight: 1.5,
          letterSpacing: '0.5px',
          fontFamily: 'sans-serif',
          color: selectedItem === 'Dashboard' ? '#1E90FF' : '#5f5f5f', 
        }}
      >
        Parties
      </Typography>
    }
  />
  {/* <KeyboardArrowDownIcon sx={{ marginLeft: 'auto', color: selectedItem === 'Projects' ? '#1E90FF' : '#5f5f5f' }} /> */}
</ListItem>
<ListItem
      sx={{
        backgroundColor: selectedBankItem === 'Banks' ? 'rgba(30, 144, 255, 0.2)' : 'transparent',
        color: selectedBankItem === 'Banks' ? '#1E90FF' : '#5f5f5f',
        '&:hover': {
          backgroundColor: 'rgba(173, 216, 230, 0.5)',
        },
      }}
    >
      <ListItemIcon sx={{ color: selectedBankItem === 'Banks' ? '#1E90FF' : '#5f5f5f' }}>
        <AccountBalanceIcon />
      </ListItemIcon>
      <Button
        id="banks-button"
        aria-controls={openBankMenu ? 'banks-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openBankMenu ? 'true' : undefined}
        onClick={handleBankClick}
        sx={{
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: 1.5,
          letterSpacing: '0.5px',
          fontFamily: 'sans-serif',
          color: selectedBankItem === 'Banks' ? '#1E90FF' : '#5f5f5f',
          textTransform: 'none',
          marginLeft: '0px',
          minWidth: 'unset',
        }}
      >
        Banks
      </Button>

      <KeyboardArrowDownIcon sx={{ marginLeft: 'auto', color: selectedBankItem === 'Banks' ? '#1E90FF' : '#5f5f5f' }} />

      <Menu
        id="banks-menu"
        anchorEl={bankAnchorEl}
        open={openBankMenu} // Open if bankAnchorEl is not null
        onClose={handleBankClose}
        sx={{
          '& .MuiPaper-root': {
            borderRadius: '12px',
            backgroundColor: '#ffffff',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
            minWidth: '240px', // Set a minimum width for the menu
            transition: 'width 0.3s ease', // Animation for width change
            '&:hover': {
              boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.2)', // Change shadow on hover
            },
          },
        }}
      >
        {[
          { label: 'Add Bank Branch', route: '/banks' },
          // { label: 'View Bank Branch', route: '/view-bank-branch' },
          { label: 'Bank Branch Listing', route: '/bank-branch-listing' },
          { label: 'Add Bank CAC', route: '/bank-cac' },
          // { label: 'View Bank CAC', route: '/view-bank-cac' },
          // { label: 'Bank CAC Listing', route: '/bank-cac-listing' },
          { label: 'Add Master Bank', route: '/add-master-bank' },
          // { label: 'View Master Bank', route: '/view-master-bank' },
          { label: 'Matter Bank Listing', route: '/matter-bank-listing' }, // Keep this if needed
        ].map((item, index) => (
          <MenuItem 
            key={index} 
            onClick={() => handleBankItemClick(item.label, item.route)}
            sx={{
              paddingY: '10px', // Add vertical padding for better spacing
              paddingX: '16px', // Add horizontal padding for better spacing
              fontSize: '14px', // Font size for menu items
              fontWeight: 500,
              transition: 'background-color 0.3s ease', // Animation for background color change
              '&:hover': {
                backgroundColor: '#e3f2fd', // Lighter hover background color for menu items
                color: '#1E90FF', // Change text color on hover
              },
            }}
          >
            <Typography variant="body2" sx={{ flexGrow: 1 }}>
              {item.label}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </ListItem>
<ListItem
  component={Link}
  to="/billing"
  onClick={() => handleItemClick('Projects', '/projects')}
  sx={{
    backgroundColor: selectedItem === 'Projects' ? 'rgba(30, 144, 255, 0.2)' : 'transparent', // Background color if selected
    color: selectedItem === 'Projects' ? '#1E90FF' : '#5f5f5f', // Icon and text color if selected
    '&:hover': {
      backgroundColor: 'rgba(173, 216, 230, 0.5)', // Hover background color
    },
  }}
>
<ListItemIcon sx={{ color: selectedItem === 'Projects' ? '#1E90FF' : '#5f5f5f' }}>
  <PaymentIcon  />
</ListItemIcon>
  <ListItemText
    primary={
      <Typography
        sx={{
          fontSize: '14px', 
          fontWeight: 400,
          lineHeight: 1.5,
          letterSpacing: '0.5px',
          fontFamily: 'sans-serif',
          color: selectedItem === 'Dashboard' ? '#1E90FF' : '#5f5f5f', 
        }}
      >
        Billing
      </Typography>
    }
  />
  {/* <KeyboardArrowDownIcon sx={{ marginLeft: 'auto', color: selectedItem === 'Projects' ? '#1E90FF' : '#5f5f5f' }} /> */}
</ListItem>
<ListItem
  component={Link}
  to="/clientaccounts"
  onClick={() => handleItemClick('Projects', '/projects')}
  sx={{
    backgroundColor: selectedItem === 'Projects' ? 'rgba(30, 144, 255, 0.2)' : 'transparent', // Background color if selected
    color: selectedItem === 'Projects' ? '#1E90FF' : '#5f5f5f', // Icon and text color if selected
    '&:hover': {
      backgroundColor: 'rgba(173, 216, 230, 0.5)', // Hover background color
    },
  }}
>
<ListItemIcon sx={{ color: selectedItem === 'Projects' ? '#1E90FF' : '#5f5f5f' }}>
  <PeopleIcon />
</ListItemIcon>
  <ListItemText
    primary={
      <Typography
        sx={{
          fontSize: '14px', 
          fontWeight: 400,
          lineHeight: 1.5,
          letterSpacing: '0.5px',
          fontFamily: 'sans-serif',
          color: selectedItem === 'Dashboard' ? '#1E90FF' : '#5f5f5f', 
        }}
      >
        Client Accounts
      </Typography>
    }
  />
  {/* <KeyboardArrowDownIcon sx={{ marginLeft: 'auto', color: selectedItem === 'Projects' ? '#1E90FF' : '#5f5f5f' }} /> */}
</ListItem>
<ListItem
  component={Link}
  to="/officeaccounts"
  onClick={() => handleItemClick('Projects', '/projects')}
  sx={{
    backgroundColor: selectedItem === 'Projects' ? 'rgba(30, 144, 255, 0.2)' : 'transparent', // Background color if selected
    color: selectedItem === 'Projects' ? '#1E90FF' : '#5f5f5f', // Icon and text color if selected
    '&:hover': {
      backgroundColor: 'rgba(173, 216, 230, 0.5)', // Hover background color
    },
  }}
>
<ListItemIcon sx={{ color: selectedItem === 'Projects' ? '#1E90FF' : '#5f5f5f' }}>
  <BusinessIcon />
</ListItemIcon>
  <ListItemText
    primary={
      <Typography
        sx={{
          fontSize: '14px', 
          fontWeight: 400,
          lineHeight: 1.5,
          letterSpacing: '0.5px',
          fontFamily: 'sans-serif',
          color: selectedItem === 'Dashboard' ? '#1E90FF' : '#5f5f5f', 
        }}
      >
        Office Accounts
      </Typography>
    }
  />
  {/* <KeyboardArrowDownIcon sx={{ marginLeft: 'auto', color: selectedItem === 'Projects' ? '#1E90FF' : '#5f5f5f' }} /> */}
</ListItem>
<ListItem
  component={Link}
  to="/sstgst"
  onClick={() => handleItemClick('Projects', '/projects')}
  sx={{
    backgroundColor: selectedItem === 'Projects' ? 'rgba(30, 144, 255, 0.2)' : 'transparent', // Background color if selected
    color: selectedItem === 'Projects' ? '#1E90FF' : '#5f5f5f', // Icon and text color if selected
    '&:hover': {
      backgroundColor: 'rgba(173, 216, 230, 0.5)', // Hover background color
    },
  }}
>
<ListItemIcon sx={{ color: selectedItem === 'Projects' ? '#1E90FF' : '#5f5f5f' }}>
  <AttachMoneyIcon />
</ListItemIcon>
  <ListItemText
    primary={
      <Typography
        sx={{
          fontSize: '14px', 
          fontWeight: 400,
          lineHeight: 1.5,
          letterSpacing: '0.5px',
          fontFamily: 'sans-serif',
          color: selectedItem === 'Dashboard' ? '#1E90FF' : '#5f5f5f', 
        }}
      >
        SST/GST
      </Typography>
    }
  />
  {/* <KeyboardArrowDownIcon sx={{ marginLeft: 'auto', color: selectedItem === 'Projects' ? '#1E90FF' : '#5f5f5f' }} /> */}
</ListItem>
<ListItem
  component={Link}
  to="/analysis"
  onClick={() => handleItemClick('Projects', '/projects')}
  sx={{
    backgroundColor: selectedItem === 'Projects' ? 'rgba(30, 144, 255, 0.2)' : 'transparent', // Background color if selected
    color: selectedItem === 'Projects' ? '#1E90FF' : '#5f5f5f', // Icon and text color if selected
    '&:hover': {
      backgroundColor: 'rgba(173, 216, 230, 0.5)', // Hover background color
    },
  }}
>
<ListItemIcon sx={{ color: selectedItem === 'Projects' ? '#1E90FF' : '#5f5f5f' }}>
  <AssessmentIcon />
</ListItemIcon>
  <ListItemText
    primary={
      <Typography
        sx={{
          fontSize: '14px', 
          fontWeight: 400,
          lineHeight: 1.5,
          letterSpacing: '0.5px',
          fontFamily: 'sans-serif',
          color: selectedItem === 'Dashboard' ? '#1E90FF' : '#5f5f5f', 
        }}
      >
        Analysis/Reports
      </Typography>
    }
  />
  {/* <KeyboardArrowDownIcon sx={{ marginLeft: 'auto', color: selectedItem === 'Projects' ? '#1E90FF' : '#5f5f5f' }} /> */}
</ListItem>
<ListItem
  component={Link}
  to="/admin"
  onClick={() => handleItemClick('Projects', '/projects')}
  sx={{
    backgroundColor: selectedItem === 'Projects' ? 'rgba(30, 144, 255, 0.2)' : 'transparent', // Background color if selected
    color: selectedItem === 'Projects' ? '#1E90FF' : '#5f5f5f', // Icon and text color if selected
    '&:hover': {
      backgroundColor: 'rgba(173, 216, 230, 0.5)', // Hover background color
    },
  }}
>
<ListItemIcon sx={{ color: selectedItem === 'Projects' ? '#1E90FF' : '#5f5f5f' }}>
  <AdminPanelSettingsIcon />
</ListItemIcon>
  <ListItemText
    primary={
      <Typography
        sx={{
          fontSize: '14px', 
          fontWeight: 400,
          lineHeight: 1.5,
          letterSpacing: '0.5px',
          fontFamily: 'sans-serif',
          color: selectedItem === 'Dashboard' ? '#1E90FF' : '#5f5f5f', 
        }}
      >
        Admin
      </Typography>
    }
  />
  {/* <KeyboardArrowDownIcon sx={{ marginLeft: 'auto', color: selectedItem === 'Projects' ? '#1E90FF' : '#5f5f5f' }} /> */}
</ListItem>
<ListItem
  component={Link}
  to="/notifications"
  onClick={() => handleItemClick('Projects', '/projects')}
  sx={{
    backgroundColor: selectedItem === 'Projects' ? 'rgba(30, 144, 255, 0.2)' : 'transparent', // Background color if selected
    color: selectedItem === 'Projects' ? '#1E90FF' : '#5f5f5f', // Icon and text color if selected
    '&:hover': {
      backgroundColor: 'rgba(173, 216, 230, 0.5)', // Hover background color
    },
  }}
>
<ListItemIcon sx={{ color: selectedItem === 'Projects' ? '#1E90FF' : '#5f5f5f' }}>
  <NotificationsIcon />
</ListItemIcon>
  <ListItemText
    primary={
      <Typography
        sx={{
          fontSize: '14px', 
          fontWeight: 400,
          lineHeight: 1.5,
          letterSpacing: '0.5px',
          fontFamily: 'sans-serif',
          color: selectedItem === 'Dashboard' ? '#1E90FF' : '#5f5f5f', 
        }}
      >
        Notifications
      </Typography>
    }
  />
  {/* <KeyboardArrowDownIcon sx={{ marginLeft: 'auto', color: selectedItem === 'Projects' ? '#1E90FF' : '#5f5f5f' }} /> */}
</ListItem>
<ListItem
  component={Link}
  to="/teams"
  onClick={() => handleItemClick('Projects', '/projects')}
  sx={{
    backgroundColor: selectedItem === 'Projects' ? 'rgba(30, 144, 255, 0.2)' : 'transparent', // Background color if selected
    color: selectedItem === 'Projects' ? '#1E90FF' : '#5f5f5f', // Icon and text color if selected
    '&:hover': {
      backgroundColor: 'rgba(173, 216, 230, 0.5)', // Hover background color
    },
  }}
>
<ListItemIcon sx={{ color: selectedItem === 'Projects' ? '#1E90FF' : '#5f5f5f' }}>
  <GroupIcon />
</ListItemIcon>
  <ListItemText
    primary={
      <Typography
        sx={{
          fontSize: '14px', 
          fontWeight: 400,
          lineHeight: 1.5,
          letterSpacing: '0.5px',
          fontFamily: 'sans-serif',
          color: selectedItem === 'Dashboard' ? '#1E90FF' : '#5f5f5f', 
        }}
      >
        Teams
      </Typography>
    }
  />
  {/* <KeyboardArrowDownIcon sx={{ marginLeft: 'auto', color: selectedItem === 'Projects' ? '#1E90FF' : '#5f5f5f' }} /> */}
</ListItem>
<ListItem
  component={Link}
  to="/tracking"
  onClick={() => handleItemClick('Projects', '/projects')}
  sx={{
    backgroundColor: selectedItem === 'Projects' ? 'rgba(30, 144, 255, 0.2)' : 'transparent', // Background color if selected
    color: selectedItem === 'Projects' ? '#1E90FF' : '#5f5f5f', // Icon and text color if selected
    '&:hover': {
      backgroundColor: 'rgba(173, 216, 230, 0.5)', // Hover background color
    },
  }}
>
<ListItemIcon sx={{ color: selectedItem === 'Projects' ? '#1E90FF' : '#5f5f5f' }}>
  <TrackChangesIcon />
</ListItemIcon>
  <ListItemText
    primary={
      <Typography
        sx={{
          fontSize: '14px', 
          fontWeight: 400,
          lineHeight: 1.5,
          letterSpacing: '0.5px',
          fontFamily: 'sans-serif',
          color: selectedItem === 'Dashboard' ? '#1E90FF' : '#5f5f5f', 
        }}
      >
        Tracking
      </Typography>
    }
  />
  {/* <KeyboardArrowDownIcon sx={{ marginLeft: 'auto', color: selectedItem === 'Projects' ? '#1E90FF' : '#5f5f5f' }} /> */}
</ListItem>
<ListItem
  component={Link}
  to="/commercialloan"
  onClick={() => handleItemClick('Projects', '/projects')} // Set 'Projects' as the selected item
  sx={{
    backgroundColor: selectedItem === 'Projects' ? 'rgba(30, 144, 255, 0.2)' : 'transparent', // Background color if selected
    color: selectedItem === 'Projects' ? '#1E90FF' : '#5f5f5f', // Icon and text color if selected
    '&:hover': {
      backgroundColor: 'rgba(173, 216, 230, 0.5)', // Hover background color
    },
  }}
>
<ListItemIcon sx={{ color: selectedItem === 'Projects' ? '#1E90FF' : '#5f5f5f' }}>
  <MonetizationOnIcon />
</ListItemIcon>
  <ListItemText
    primary={
      <Typography
        sx={{
          fontSize: '14px', 
          fontWeight: 400,
          lineHeight: 1.5,
          letterSpacing: '0.5px',
          fontFamily: 'sans-serif',
          color: selectedItem === 'Dashboard' ? '#1E90FF' : '#5f5f5f', 
        }}
      >
        Loans
      </Typography>
    }
  />
</ListItem>
<ListItem
  component={Link}
  to="/templates"
  // onClick={() => handleItemClick('SPAH')}
  onClick={() => handleItemClick('SPAH', '/SPAH')}
  sx={{
    backgroundColor: selectedItem === 'SPAG' ? 'rgba(30, 144, 255, 0.2)' : 'transparent',
    color: selectedItem === 'SPAG' ? '#1E90FF' : '#5f5f5f',
    '&:hover': {
      backgroundColor: 'rgba(173, 216, 230, 0.5)',
    },
  }}
>
  <ListItemIcon sx={{ color: selectedItem === 'SPAG' ? '#1E90FF' : '#5f5f5f' }}>
    <ShoppingCartOutlinedIcon />
  </ListItemIcon>
  <ListItemText
    primary={
      <Typography
        sx={{
          fontSize: '14px', 
          fontWeight: 400,
          lineHeight: 1.5,
          letterSpacing: '0.5px',
          fontFamily: 'sans-serif',
          color: selectedItem === 'Dashboard' ? '#1E90FF' : '#5f5f5f', 
        }}
      >
        Templates
      </Typography>
    }
  />
  {/* <KeyboardArrowDownIcon sx={{ marginLeft: 'auto', color: selectedItem === 'SPAG' ? '#1E90FF' : '#5f5f5f' }} /> */}
</ListItem>
<ListItem
  component={Link}
  to="/developerbuilder"
  onClick={() => handleItemClick('Projects', '/projects')} // Set 'Projects' as the selected item
  sx={{
    backgroundColor: selectedItem === 'Projects' ? 'rgba(30, 144, 255, 0.2)' : 'transparent', // Background color if selected
    color: selectedItem === 'Projects' ? '#1E90FF' : '#5f5f5f', // Icon and text color if selected
    '&:hover': {
      backgroundColor: 'rgba(173, 216, 230, 0.5)', // Hover background color
    },
  }}
>
  <ListItemIcon sx={{ color: selectedItem === 'Projects' ? '#1E90FF' : '#5f5f5f' }}>
    <LaptopMacIcon />
  </ListItemIcon>
  <ListItemText
    primary={
      <Typography
        sx={{
          fontSize: '14px', 
          fontWeight: 400,
          lineHeight: 1.5,
          letterSpacing: '0.5px',
          fontFamily: 'sans-serif',
          color: selectedItem === 'Dashboard' ? '#1E90FF' : '#5f5f5f', 
        }}
      >
        Developers
      </Typography>
    }
  />
</ListItem>
      </List>
    </Drawer>
  );
};

export default DrawerComponent; 