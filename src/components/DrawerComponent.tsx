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
>
  <ListItemIcon
    sx={{
      color: selectedItem === 'Projects' ? '#1E90FF' : '#5f5f5f',
      minWidth: 'unset',
    }}
  >
    <StoreIcon />
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
        Party
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
{/* <ListItem
  component={Link}
  to="/loanH"
  onClick={() => handleItemClick('LoanH')} // Set 'Cards' as the selected item
  sx={{
    backgroundColor: selectedItem === 'LoanH' ? 'rgba(30, 144, 255, 0.2)' : 'transparent', // Background color if selected
    color: selectedItem === 'LoanH' ? '#1E90FF' : '#5f5f5f', // Icon and text color if selected
    '&:hover': {
      backgroundColor: 'rgba(173, 216, 230, 0.5)', // Hover background color
    },
  }}
>
  <ListItemIcon sx={{ color: selectedItem === 'Cards' ? '#1E90FF' : '#5f5f5f' }}>
    <CardGiftcardOutlinedIcon />
  </ListItemIcon> */}
  {/* <ListItemText
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
        Loan H
      </Typography>
    }
  /> */}
  {/* <KeyboardArrowDownIcon sx={{ marginLeft: 'auto', color: selectedItem === 'Cards' ? '#1E90FF' : '#5f5f5f' }} /> */}
{/* </ListItem> */}

{/* <ListItem
  component={Link}
  to="/spaG"
  onClick={() => handleItemClick('SPAG')}
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
        SPA G
      </Typography>
    }
  />
  <KeyboardArrowDownIcon sx={{ marginLeft: 'auto', color: selectedItem === 'SPAG' ? '#1E90FF' : '#5f5f5f' }} />
</ListItem> */}

{/* <ListItem
  component={Link}
  to="/LoanG"
  onClick={() => handleItemClick('LoanG')}
  sx={{
    backgroundColor: selectedItem === 'LoanG' ? 'rgba(30, 144, 255, 0.2)' : 'transparent',
    color: selectedItem === 'LoanG' ? '#1E90FF' : '#5f5f5f',
    '&:hover': {
      backgroundColor: 'rgba(173, 216, 230, 0.5)',
    },
  }}
>
  <ListItemIcon sx={{ color: selectedItem === 'LoanG' ? '#1E90FF' : '#5f5f5f' }}>
    <WidgetsOutlinedIcon />
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
        Loan G
      </Typography>
    }
  />
  <KeyboardArrowDownIcon sx={{ marginLeft: 'auto', color: selectedItem === 'Components' ? '#1E90FF' : '#5f5f5f' }} />
</ListItem> */}

{/* <ListItem
  component={Link}
  to="/commercialspa"
  onClick={() => handleItemClick('Commercialspa')}
  sx={{
    backgroundColor: selectedItem === 'ComSpa' ? 'rgba(30, 144, 255, 0.2)' : 'transparent',
    color: selectedItem === 'Commercialspa' ? '#1E90FF' : '#5f5f5f',
    '&:hover': {
      backgroundColor: 'rgba(173, 216, 230, 0.5)',
    },
  }}
>
  <ListItemIcon sx={{ color: selectedItem === 'Commercialspa' ? '#1E90FF' : '#5f5f5f' }}>
    <EmojiSymbolsOutlinedIcon />
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
        Commercial SPA
      </Typography>
    }
  />
  <KeyboardArrowDownIcon sx={{ marginLeft: 'auto', color: selectedItem === 'Icons' ? '#1E90FF' : '#5f5f5f' }} />
</ListItem> */}

{/* <p style={{ color: '#B0B0B0', textAlign: 'left', marginLeft: 20 }}>Forms & Tables</p> */}

{/* <ListItem
  component={Link}
  to="/commercialloan"
  onClick={() => handleItemClick('Commercialloan')}
  sx={{
    backgroundColor: selectedItem === 'Commercialloan' ? 'rgba(30, 144, 255, 0.2)' : 'transparent',
    color: selectedItem === 'Commercialloan' ? '#1E90FF' : '#5f5f5f',
    '&:hover': {
      backgroundColor: 'rgba(173, 216, 230, 0.5)',
    },
  }}
>
  <ListItemIcon sx={{ color: selectedItem === 'Commercialloan' ? '#1E90FF' : '#5f5f5f' }}>
    <ContactMailOutlinedIcon />
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
        Commercial Loan
      </Typography>
    }
  />
  <KeyboardArrowDownIcon sx={{ marginLeft: 'auto', color: selectedItem === 'Forms' ? '#1E90FF' : '#5f5f5f' }} />
</ListItem> */}

{/* <ListItem
  component={Link}
  to="/subSpaT"
  onClick={() => handleItemClick('SubSpaT')}
  sx={{
    backgroundColor: selectedItem === 'SubSpaT' ? 'rgba(30, 144, 255, 0.2)' : 'transparent',
    color: selectedItem === 'SubSpaT' ? '#1E90FF' : '#5f5f5f',
    '&:hover': {
      backgroundColor: 'rgba(173, 216, 230, 0.5)',
    },
  }}
>
  <ListItemIcon sx={{ color: selectedItem === 'SubSpaT' ? '#1E90FF' : '#5f5f5f' }}>
    <TableChartOutlinedIcon />
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
        Subcale SPA <small>(with title)</small>
      </Typography>
    }
  />
  <KeyboardArrowDownIcon sx={{ marginLeft: 'auto', color: selectedItem === 'SubSpaT' ? '#1E90FF' : '#5f5f5f' }} />
</ListItem> */}

{/* <ListItem
  component={Link}
  to="/subLoanT"
  onClick={() => handleItemClick('SubLoanT')}
  sx={{
    backgroundColor: selectedItem === 'SubLoanT' ? 'rgba(30, 144, 255, 0.2)' : 'transparent',
    color: selectedItem === 'SubLoanT' ? '#1E90FF' : '#5f5f5f',
    '&:hover': {
      backgroundColor: 'rgba(173, 216, 230, 0.5)',
    },
  }}
>
  <ListItemIcon sx={{ color: selectedItem === 'SubLoanT' ? '#1E90FF' : '#5f5f5f' }}>
    <TableChartOutlinedIcon />
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
        Subcale Loan <small>(with title)</small>
      </Typography>
    }
  />
  <KeyboardArrowDownIcon sx={{ marginLeft: 'auto', color: selectedItem === 'SubSpaT' ? '#1E90FF' : '#5f5f5f' }} />
</ListItem> */}

{/* <ListItem
  component={Link}
  to="/subSpaMT"
  onClick={() => handleItemClick('SubSpaMT')}
  sx={{
    backgroundColor: selectedItem === 'SubSpaMT' ? 'rgba(30, 144, 255, 0.2)' : 'transparent',
    color: selectedItem === 'SubSpaMT' ? '#1E90FF' : '#5f5f5f',
    '&:hover': {
      backgroundColor: 'rgba(173, 216, 230, 0.5)',
    },
  }}
>
  <ListItemIcon sx={{ color: selectedItem === 'SubSpaMT' ? '#1E90FF' : '#5f5f5f' }}>
    <TableChartOutlinedIcon />
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
        Subcale SPA <small>(master title)</small>
      </Typography>
    }
  />
  <KeyboardArrowDownIcon sx={{ marginLeft: 'auto', color: selectedItem === 'SubSpaT' ? '#1E90FF' : '#5f5f5f' }} />
</ListItem> */}

{/* <ListItem
  component={Link}
  to="/subLoanMT"
  onClick={() => handleItemClick('subLoanMT')}
  sx={{
    backgroundColor: selectedItem === 'subLoanMT' ? 'rgba(30, 144, 255, 0.2)' : 'transparent',
    color: selectedItem === 'subLoanMT' ? '#1E90FF' : '#5f5f5f',
    '&:hover': {
      backgroundColor: 'rgba(173, 216, 230, 0.5)',
    },
  }}
>
  <ListItemIcon sx={{ color: selectedItem === 'subLoanMT' ? '#1E90FF' : '#5f5f5f' }}>
    <TableChartOutlinedIcon />
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
        Subcale Loan <small>(master title)</small>
      </Typography>
    }
  />
  <KeyboardArrowDownIcon sx={{ marginLeft: 'auto', color: selectedItem === 'subLoanMT' ? '#1E90FF' : '#5f5f5f' }} />
</ListItem> */}

        {/* Add other new sections as needed */}
      </List>
    </Drawer>
  );
};

export default DrawerComponent; 