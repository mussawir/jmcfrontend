import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function WorkflowTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [formData, setFormData] = React.useState<Record<string, string | undefined>>({});

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (tabName: string) => {
    console.log(`Action for ${tabName}:`, formData);
    alert(`Action performed for ${tabName}`);
  };

  const stages = [
    'Received New File',
    'Prepare SPA | DMC',
    'Prepare NOC',
    'Notify Purchaser to Sign SPA | DMC',
    'Request Purchaser to Pay NOC',
    'Reminder: Sign SPA | DMC (2nd)',
    'Reminder: Pay NOC (2nd)',
    'Reminder: Sign SPA | DMC (3rd)',
    'Reminder: Pay NOC (3rd)',
    'SPA | DMC Signed by Purchaser',
    'Forward SPA | DMC to Developer',
    'Keep in View (KIV)',
    'Received Executed SPA | DMC from Developer',
    'Stamping SPA | DMC',
    'Received Stamped SPA | DMC',
    'Forward Stamped SPA | DMC to Developer',
    'Notify Purchaser: SPA Retention',
    'Received Financier’s Letter',
    'Forward Letter of Undertaking (LU)',
    'Monitor Balance Payments',
    'Notify Developer: Payment Released',
    'Scan Documents into Denning',
    'Close File and Record Location',
  ];

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        maxWidth: '80vw', // Set narrower width to force scrolling
        margin: '0 auto', // Center the container
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto" // Enable arrows when needed
          allowScrollButtonsMobile // Force scroll buttons on mobile
          sx={{
            justifyContent: 'center',
            textAlign: 'center',
            display: 'flex',
          }}
          aria-label="scrollable workflow tabs"
        >
          {stages.map((stage, index) => (
            <Tab
              key={index}
              label={stage}
              {...a11yProps(index)}
              sx={{ minWidth: 120, textTransform: 'none' }} // Uniform tab width and proper case
            />
          ))}
        </Tabs>
      </AppBar>

      {stages.map((stage, index) => (
        <TabPanel value={value} index={index} dir={theme.direction} key={index}>
          <Typography variant="h6">{stage}</Typography>
          <TextField
            label={`Enter Data for ${stage}`}
            name={`stage${index + 1}`}
            variant="outlined"
            fullWidth
            value={formData[`stage${index + 1}`] || ''}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" onClick={() => handleSubmit(stage)}>
            Submit for {stage}
          </Button>
        </TabPanel>
      ))}
    </Box>
  );
}
