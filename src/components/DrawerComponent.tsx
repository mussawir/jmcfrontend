import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import EmojiSymbolsOutlinedIcon from '@mui/icons-material/EmojiSymbolsOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'; // For Documents
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined'; // For Checklist
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'; // For Team
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined'; // For Cards
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'; // For Ecommerce
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined'; // For Components
import IconButton from '@mui/material/IconButton';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined'; // For Forms
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined'; // For Tables
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined'; // For Apps
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'; // Already outlined
import { Link } from 'react-router-dom';
import logojmc from '../images/jmcvc-dark-logo.png';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
const drawerWidth = 240;

const DrawerComponent = () => {
  const [selectedItem, setSelectedItem] = useState<string>('');

  // Handle item click
  const handleItemClick = (item: string) => {
    setSelectedItem(item);
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
      <Toolbar style={{ justifyContent: 'center', display: 'flex' }}>
        <div>
          <img src={logojmc} width={120} style={{ marginTop: 20 }} alt="Logo" />
        </div>
      </Toolbar>

      <List sx={{ flexGrow: 1 }}>
      <ListItem
  component={Link}
  to="/dashboard"
  onClick={() => handleItemClick('Dashboard')} // Set 'Dashboard' as the selected item
  sx={{
    backgroundColor: selectedItem === 'Dashboard' ? 'rgba(30, 144, 255, 0.2)' : 'transparent', // Background color if selected
    color: selectedItem === 'Dashboard' ? '#1E90FF' : '#212529', // Icon and text color if selected
    '&:hover': {
      backgroundColor: 'rgba(173, 216, 230, 0.5)', // Hover background color
    },
  }}
>
  <ListItemIcon sx={{ color: selectedItem === 'Dashboard' ? '#1E90FF' : '#212529' }}>
    <HomeOutlinedIcon />
  </ListItemIcon>
  <ListItemText
    primary={
      <Typography
        sx={{
          fontSize: '16px',
          fontWeight: 500,
          fontFamily: '"Noto Sans", sans-serif',
          color: selectedItem === 'Dashboard' ? '#1E90FF' : '#212529', // Text color when selected
        }}
      >
        Dashboard
      </Typography>
    }
  />
  <KeyboardArrowDownIcon sx={{ marginLeft: 'auto', color: selectedItem === 'Dashboard' ? '#1E90FF' : '#212529' }} />
      </ListItem>

      <ListItem
  component={Link}
  to="/projects"
  onClick={() => handleItemClick('Projects')} // Set 'Projects' as the selected item
  sx={{
    backgroundColor: selectedItem === 'Projects' ? 'rgba(30, 144, 255, 0.2)' : 'transparent', // Background color if selected
    color: selectedItem === 'Projects' ? '#1E90FF' : '#212529', // Icon and text color if selected
    '&:hover': {
      backgroundColor: 'rgba(173, 216, 230, 0.5)', // Hover background color
    },
  }}
>
  <ListItemIcon sx={{ color: selectedItem === 'Projects' ? '#1E90FF' : '#212529' }}>
    <FolderCopyOutlinedIcon />
  </ListItemIcon>
  <ListItemText
    primary={
      <Typography
        sx={{
          fontSize: '16px',
          fontWeight: 500,
          fontFamily: '"Noto Sans", sans-serif',
          color: selectedItem === 'Projects' ? '#1E90FF' : '#212529', // Text color when selected
        }}
      >
        Projects
      </Typography>
    }
  />
  <KeyboardArrowDownIcon sx={{ marginLeft: 'auto', color: selectedItem === 'Projects' ? '#1E90FF' : '#212529' }} />
</ListItem>


<ListItem
  component={Link}
  to="/tabspage"
  onClick={() => handleItemClick('TabsPage')} // Set 'TabsPage' as the selected item
  sx={{
    backgroundColor: selectedItem === 'TabsPage' ? 'rgba(30, 144, 255, 0.2)' : 'transparent', // Background color if selected
    color: selectedItem === 'TabsPage' ? '#1E90FF' : '#212529', // Icon and text color if selected
    '&:hover': {
      backgroundColor: 'rgba(173, 216, 230, 0.5)', // Hover background color
    },
  }}
>
  <ListItemIcon sx={{ color: selectedItem === 'TabsPage' ? '#1E90FF' : '#212529' }}>
    <FormatListBulletedOutlinedIcon />
  </ListItemIcon>
  <ListItemText
    primary={
      <Typography
        sx={{
          fontSize: '16px',
          fontWeight: 500,
          fontFamily: '"Noto Sans", sans-serif',
          color: selectedItem === 'TabsPage' ? '#1E90FF' : '#212529', // Text color when selected
        }}
      >
        TabsPage
      </Typography>
    }
  />
  <KeyboardArrowDownIcon sx={{ marginLeft: 'auto', color: selectedItem === 'TabsPage' ? '#1E90FF' : '#212529' }} />
</ListItem>


<ListItem
  component={Link}
  to="/checklist"
  onClick={() => handleItemClick('Checklist')} // Set 'Checklist' as the selected item
  sx={{
    backgroundColor: selectedItem === 'Checklist' ? 'rgba(30, 144, 255, 0.2)' : 'transparent', // Background color if selected
    color: selectedItem === 'Checklist' ? '#1E90FF' : '#212529', // Icon and text color if selected
    '&:hover': {
      backgroundColor: 'rgba(173, 216, 230, 0.5)', // Hover background color
    },
  }}
>
  <ListItemIcon sx={{ color: selectedItem === 'Checklist' ? '#1E90FF' : '#212529' }}>
    <FormatListBulletedOutlinedIcon />
  </ListItemIcon>
  <ListItemText
    primary={
      <Typography
        sx={{
          fontSize: '16px',
          fontWeight: 500,
          fontFamily: '"Noto Sans", sans-serif',
          color: selectedItem === 'Checklist' ? '#1E90FF' : '#212529', // Text color when selected
        }}
      >
        Checklist
      </Typography>
    }
  />
  <KeyboardArrowDownIcon sx={{ marginLeft: 'auto', color: selectedItem === 'Checklist' ? '#1E90FF' : '#212529' }} />
</ListItem>


<ListItem
  component={Link}
  to="/team"
  onClick={() => handleItemClick('Team')} // Set 'Team' as the selected item
  sx={{
    backgroundColor: selectedItem === 'Team' ? 'rgba(30, 144, 255, 0.2)' : 'transparent', // Background color if selected
    color: selectedItem === 'Team' ? '#1E90FF' : '#212529', // Icon and text color if selected
    '&:hover': {
      backgroundColor: 'rgba(173, 216, 230, 0.5)', // Hover background color
    },
  }}
>
  <ListItemIcon sx={{ color: selectedItem === 'Team' ? '#1E90FF' : '#212529' }}>
    <PeopleOutlinedIcon />
  </ListItemIcon>
  <ListItemText
    primary={
      <Typography
        sx={{
          fontSize: '16px',
          fontWeight: 500,
          fontFamily: '"Noto Sans", sans-serif',
          color: selectedItem === 'Team' ? '#1E90FF' : '#212529', // Text color when selected
        }}
      >
        Team
      </Typography>
    }
  />
  <KeyboardArrowDownIcon sx={{ marginLeft: 'auto', color: selectedItem === 'Team' ? '#1E90FF' : '#212529' }} />
</ListItem>


<ListItem
  component={Link}
  to="/documents"
  onClick={() => handleItemClick('Documents')} // Set 'Documents' as the selected item
  sx={{
    backgroundColor: selectedItem === 'Documents' ? 'rgba(30, 144, 255, 0.2)' : 'transparent', // Background color if selected
    color: selectedItem === 'Documents' ? '#1E90FF' : '#212529', // Icon and text color if selected
    '&:hover': {
      backgroundColor: 'rgba(173, 216, 230, 0.5)', // Hover background color
    },
  }}
>
  <ListItemIcon sx={{ color: selectedItem === 'Documents' ? '#1E90FF' : '#212529' }}>
    <DescriptionOutlinedIcon />
  </ListItemIcon>
  <ListItemText
    primary={
      <Typography
        sx={{
          fontSize: '16px',
          fontWeight: 500,
          fontFamily: '"Noto Sans", sans-serif',
          color: selectedItem === 'Documents' ? '#1E90FF' : '#212529', // Text color when selected
        }}
      >
        Documents
      </Typography>
    }
  />
  <KeyboardArrowDownIcon sx={{ marginLeft: 'auto', color: selectedItem === 'Documents' ? '#1E90FF' : '#212529' }} />
</ListItem>

     {/* New Sections */}
<p style={{ color: '#B0B0B0', textAlign: 'left', marginLeft: 20 }}>UI ELEMENTS</p>

<ListItem
  component={Link}
  to="/cards"
  onClick={() => handleItemClick('Cards')} // Set 'Cards' as the selected item
  sx={{
    backgroundColor: selectedItem === 'Cards' ? 'rgba(30, 144, 255, 0.2)' : 'transparent', // Background color if selected
    color: selectedItem === 'Cards' ? '#1E90FF' : '#212529', // Icon and text color if selected
    '&:hover': {
      backgroundColor: 'rgba(173, 216, 230, 0.5)', // Hover background color
    },
  }}
>
  <ListItemIcon sx={{ color: selectedItem === 'Cards' ? '#1E90FF' : '#212529' }}>
    <CardGiftcardOutlinedIcon />
  </ListItemIcon>
  <ListItemText
    primary={
      <Typography
        sx={{
          fontSize: '16px',
          fontWeight: 500,
          fontFamily: '"Noto Sans", sans-serif',
          color: selectedItem === 'Cards' ? '#1E90FF' : '#212529', // Text color when selected
        }}
      >
        Cards
      </Typography>
    }
  />
  <KeyboardArrowDownIcon sx={{ marginLeft: 'auto', color: selectedItem === 'Cards' ? '#1E90FF' : '#212529' }} />
</ListItem>

<ListItem
  component={Link}
  to="/ecommerce"
  onClick={() => handleItemClick('Ecommerce')}
  sx={{
    backgroundColor: selectedItem === 'Ecommerce' ? 'rgba(30, 144, 255, 0.2)' : 'transparent',
    color: selectedItem === 'Ecommerce' ? '#1E90FF' : '#212529',
    '&:hover': {
      backgroundColor: 'rgba(173, 216, 230, 0.5)',
    },
  }}
>
  <ListItemIcon sx={{ color: selectedItem === 'Ecommerce' ? '#1E90FF' : '#212529' }}>
    <ShoppingCartOutlinedIcon />
  </ListItemIcon>
  <ListItemText
    primary={
      <Typography
        sx={{
          fontSize: '16px',
          fontWeight: 500,
          fontFamily: '"Noto Sans", sans-serif',
          color: selectedItem === 'Ecommerce' ? '#1E90FF' : '#212529',
        }}
      >
        Ecommerce
      </Typography>
    }
  />
  <KeyboardArrowDownIcon sx={{ marginLeft: 'auto', color: selectedItem === 'Ecommerce' ? '#1E90FF' : '#212529' }} />
</ListItem>

<ListItem
  component={Link}
  to="/components"
  onClick={() => handleItemClick('Components')}
  sx={{
    backgroundColor: selectedItem === 'Components' ? 'rgba(30, 144, 255, 0.2)' : 'transparent',
    color: selectedItem === 'Components' ? '#1E90FF' : '#212529',
    '&:hover': {
      backgroundColor: 'rgba(173, 216, 230, 0.5)',
    },
  }}
>
  <ListItemIcon sx={{ color: selectedItem === 'Components' ? '#1E90FF' : '#212529' }}>
    <WidgetsOutlinedIcon />
  </ListItemIcon>
  <ListItemText
    primary={
      <Typography
        sx={{
          fontSize: '16px',
          fontWeight: 500,
          fontFamily: '"Noto Sans", sans-serif',
          color: selectedItem === 'Components' ? '#1E90FF' : '#212529',
        }}
      >
        Components
      </Typography>
    }
  />
  <KeyboardArrowDownIcon sx={{ marginLeft: 'auto', color: selectedItem === 'Components' ? '#1E90FF' : '#212529' }} />
</ListItem>

<ListItem
  component={Link}
  to="/icons"
  onClick={() => handleItemClick('Icons')}
  sx={{
    backgroundColor: selectedItem === 'Icons' ? 'rgba(30, 144, 255, 0.2)' : 'transparent',
    color: selectedItem === 'Icons' ? '#1E90FF' : '#212529',
    '&:hover': {
      backgroundColor: 'rgba(173, 216, 230, 0.5)',
    },
  }}
>
  <ListItemIcon sx={{ color: selectedItem === 'Icons' ? '#1E90FF' : '#212529' }}>
    <EmojiSymbolsOutlinedIcon />
  </ListItemIcon>
  <ListItemText
    primary={
      <Typography
        sx={{
          fontSize: '16px',
          fontWeight: 500,
          fontFamily: '"Noto Sans", sans-serif',
          color: selectedItem === 'Icons' ? '#1E90FF' : '#212529',
        }}
      >
        Icons
      </Typography>
    }
  />
  <KeyboardArrowDownIcon sx={{ marginLeft: 'auto', color: selectedItem === 'Icons' ? '#1E90FF' : '#212529' }} />
</ListItem>

<p style={{ color: '#B0B0B0', textAlign: 'left', marginLeft: 20 }}>Forms & Tables</p>

<ListItem
  component={Link}
  to="/forms"
  onClick={() => handleItemClick('Forms')}
  sx={{
    backgroundColor: selectedItem === 'Forms' ? 'rgba(30, 144, 255, 0.2)' : 'transparent',
    color: selectedItem === 'Forms' ? '#1E90FF' : '#212529',
    '&:hover': {
      backgroundColor: 'rgba(173, 216, 230, 0.5)',
    },
  }}
>
  <ListItemIcon sx={{ color: selectedItem === 'Forms' ? '#1E90FF' : '#212529' }}>
    <ContactMailOutlinedIcon />
  </ListItemIcon>
  <ListItemText
    primary={
      <Typography
        sx={{
          fontSize: '16px',
          fontWeight: 500,
          fontFamily: '"Noto Sans", sans-serif',
          color: selectedItem === 'Forms' ? '#1E90FF' : '#212529',
        }}
      >
        Forms
      </Typography>
    }
  />
  <KeyboardArrowDownIcon sx={{ marginLeft: 'auto', color: selectedItem === 'Forms' ? '#1E90FF' : '#212529' }} />
</ListItem>

<ListItem
  component={Link}
  to="/tables"
  onClick={() => handleItemClick('Tables')}
  sx={{
    backgroundColor: selectedItem === 'Tables' ? 'rgba(30, 144, 255, 0.2)' : 'transparent',
    color: selectedItem === 'Tables' ? '#1E90FF' : '#212529',
    '&:hover': {
      backgroundColor: 'rgba(173, 216, 230, 0.5)',
    },
  }}
>
  <ListItemIcon sx={{ color: selectedItem === 'Tables' ? '#1E90FF' : '#212529' }}>
    <TableChartOutlinedIcon />
  </ListItemIcon>
  <ListItemText
    primary={
      <Typography
        sx={{
          fontSize: '16px',
          fontWeight: 500,
          fontFamily: '"Noto Sans", sans-serif',
          color: selectedItem === 'Tables' ? '#1E90FF' : '#212529',
        }}
      >
        Tables
      </Typography>
    }
  />
  <KeyboardArrowDownIcon sx={{ marginLeft: 'auto', color: selectedItem === 'Tables' ? '#1E90FF' : '#212529' }} />
</ListItem>

<ListItem
  component={Link}
  to="/apps"
  onClick={() => handleItemClick('Apps')}
  sx={{
    backgroundColor: selectedItem === 'Apps' ? 'rgba(30, 144, 255, 0.2)' : 'transparent',
    color: selectedItem === 'Apps' ? '#1E90FF' : '#212529',
    '&:hover': {
      backgroundColor: 'rgba(173, 216, 230, 0.5)',
    },
  }}
>
  <ListItemIcon sx={{ color: selectedItem === 'Apps' ? '#1E90FF' : '#212529' }}>
    <AppsOutlinedIcon />
  </ListItemIcon>
  <ListItemText
    primary={
      <Typography
        sx={{
          fontSize: '16px',
          fontWeight: 500,
          fontFamily: '"Noto Sans", sans-serif',
          color: selectedItem === 'Apps' ? '#1E90FF' : '#212529',
        }}
      >
        Apps
      </Typography>
    }
  />
  <KeyboardArrowDownIcon sx={{ marginLeft: 'auto', color: selectedItem === 'Apps' ? '#1E90FF' : '#212529' }} />
</ListItem>

        {/* Add other new sections as needed */}
      </List>
    </Drawer>
  );
};

export default DrawerComponent;
