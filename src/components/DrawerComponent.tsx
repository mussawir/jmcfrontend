import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Box } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work'; // For Projects
import DescriptionIcon from '@mui/icons-material/Description'; // For Documents
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'; // For Checklist
import PeopleIcon from '@mui/icons-material/People'; // For Team
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'; // For Cards
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // For Ecommerce
import WidgetsIcon from '@mui/icons-material/Widgets'; // For Components
import IconButton from '@mui/material/IconButton';
import ContactMailIcon from '@mui/icons-material/ContactMail'; // For Forms
import TableChartIcon from '@mui/icons-material/TableChart'; // For Tables
import AppsIcon from '@mui/icons-material/Apps'; // For Apps
import LockIcon from '@mui/icons-material/Lock'; // For Authentication
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // For User Profile
import TimelineIcon from '@mui/icons-material/Timeline'; // For Timeline
import PagesIcon from '@mui/icons-material/Pages'; // For Pages
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'; // For FAQ
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'; // For Pricing

// New icons for Charts, Maps, Menu Levels, Documentation, and Support
import BarChartIcon from '@mui/icons-material/BarChart'; // For Charts
import MapIcon from '@mui/icons-material/Map'; // For Maps
import MenuIcon from '@mui/icons-material/Menu'; // For Menu Levels
import BookIcon from '@mui/icons-material/Book'; // For Documentation
import SupportIcon from '@mui/icons-material/Support'; // For Support
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // Right Arrow Icon

import { Link } from 'react-router-dom';
import logojmc from '../images/jmcvc-dark-logo.png';

const drawerWidth = 240;

const DrawerComponent = () => {
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

      {/* Menu List */}
      <List sx={{ flexGrow: 1 }}>
        <ListItem component={Link} to="/dashboard">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
          <ArrowForwardIcon sx={{ marginLeft: 'auto' }} />
        </ListItem>

        <ListItem component={Link} to="/projects">
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary="Projects" />
          <ArrowForwardIcon sx={{ marginLeft: 'auto' }} />
        </ListItem>

        <ListItem component={Link} to="/tabspage">
          <ListItemIcon>
            <FormatListBulletedIcon />
          </ListItemIcon>
          <ListItemText primary="TabsPage" />
          <ArrowForwardIcon sx={{ marginLeft: 'auto' }} />
        </ListItem>

        <ListItem component={Link} to="/checklist">
          <ListItemIcon>
            <FormatListBulletedIcon />
          </ListItemIcon>
          <ListItemText primary="Checklist" />
          <ArrowForwardIcon sx={{ marginLeft: 'auto' }} />
        </ListItem>

        <ListItem component={Link} to="/team">
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Team" />
          <ArrowForwardIcon sx={{ marginLeft: 'auto' }} />
        </ListItem>

        <ListItem component={Link} to="/documents">
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary="Documents" />
          <ArrowForwardIcon sx={{ marginLeft: 'auto' }} />
        </ListItem>

        {/* New Sections */}
        <p style={{ color: '#B0B0B0', textAlign: 'left', marginLeft: 20 }}>UI ELEMENTS</p>
        <ListItem component={Link} to="/cards">
          <ListItemIcon>
            <CardGiftcardIcon />
          </ListItemIcon>
          <ListItemText primary="Cards" />
          <ArrowForwardIcon sx={{ marginLeft: 'auto' }} />
        </ListItem>

        <ListItem component={Link} to="/ecommerce">
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Ecommerce" />
          <ArrowForwardIcon sx={{ marginLeft: 'auto' }} />
        </ListItem>

        <ListItem component={Link} to="/components">
          <ListItemIcon>
            <WidgetsIcon />
          </ListItemIcon>
          <ListItemText primary="Components" />
          <ArrowForwardIcon sx={{ marginLeft: 'auto' }} />
        </ListItem>

        <ListItem component={Link} to="/icons">
          <ListItemIcon>
            <IconButton />
          </ListItemIcon>
          <ListItemText primary="Icons" />
          <ArrowForwardIcon sx={{ marginLeft: 'auto' }} />
        </ListItem>

        <p style={{ color: '#B0B0B0', textAlign: 'left', marginLeft: 20 }}>Forms & Tables</p>

        <ListItem component={Link} to="/forms">
          <ListItemIcon>
            <ContactMailIcon />
          </ListItemIcon>
          <ListItemText primary="Forms" />
          <ArrowForwardIcon sx={{ marginLeft: 'auto' }} />
        </ListItem>

        <ListItem component={Link} to="/tables">
          <ListItemIcon>
            <TableChartIcon />
          </ListItemIcon>
          <ListItemText primary="Tables" />
          <ArrowForwardIcon sx={{ marginLeft: 'auto' }} />
        </ListItem>

        <ListItem component={Link} to="/apps">
          <ListItemIcon>
            <AppsIcon />
          </ListItemIcon>
          <ListItemText primary="Apps" />
          <ArrowForwardIcon sx={{ marginLeft: 'auto' }} />
        </ListItem>

        <p style={{ color: '#B0B0B0', textAlign: 'left', marginLeft: 20 }}>Pages</p>

        <ListItem component={Link} to="/authentication">
          <ListItemIcon>
            <LockIcon />
          </ListItemIcon>
          <ListItemText primary="Authentication" />
          <ArrowForwardIcon sx={{ marginLeft: 'auto' }} />
        </ListItem>

        <ListItem component={Link} to="/userprofile">
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="User Profile" />
          <ArrowForwardIcon sx={{ marginLeft: 'auto' }} />
        </ListItem>

        <ListItem component={Link} to="/timeline">
          <ListItemIcon>
            <TimelineIcon />
          </ListItemIcon>
          <ListItemText primary="Timeline" />
          <ArrowForwardIcon sx={{ marginLeft: 'auto' }} />
        </ListItem>

        <ListItem component={Link} to="/pages">
          <ListItemIcon>
            <PagesIcon />
          </ListItemIcon>
          <ListItemText primary="Pages" />
          <ArrowForwardIcon sx={{ marginLeft: 'auto' }} />
        </ListItem>

        <ListItem component={Link} to="/faq">
          <ListItemIcon>
            <HelpOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="FAQ" />
          <ArrowForwardIcon sx={{ marginLeft: 'auto' }} />
        </ListItem>

        <ListItem component={Link} to="/pricing">
          <ListItemIcon>
            <AttachMoneyIcon />
          </ListItemIcon>
          <ListItemText primary="Pricing" />
          <ArrowForwardIcon sx={{ marginLeft: 'auto' }} />
        </ListItem>

        <p style={{ color: '#B0B0B0', textAlign: 'left', marginLeft: 20 }}>Charts & Maps</p>

        <ListItem component={Link} to="/charts">
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Charts" />
          <ArrowForwardIcon sx={{ marginLeft: 'auto' }} />
        </ListItem>

        <ListItem component={Link} to="/maps">
          <ListItemIcon>
            <MapIcon />
          </ListItemIcon>
          <ListItemText primary="Maps" />
          <ArrowForwardIcon sx={{ marginLeft: 'auto' }} />
        </ListItem>

        <p style={{ color: '#B0B0B0', textAlign: 'left', marginLeft: 20 }}>Support</p>

        <ListItem component={Link} to="/support">
          <ListItemIcon>
            <SupportIcon />
          </ListItemIcon>
          <ListItemText primary="Support" />
          <ArrowForwardIcon sx={{ marginLeft: 'auto' }} />
        </ListItem>

        <ListItem component={Link} to="/documentation">
          <ListItemIcon>
            <BookIcon />
          </ListItemIcon>
          <ListItemText primary="Documentation" />
          <ArrowForwardIcon sx={{ marginLeft: 'auto' }} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default DrawerComponent;
