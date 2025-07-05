import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import DashBoard from './DashBoard';
export default function LabTabs({openDrawer}) {
  const [value, setValue] = React.useState('Bonded Labour');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const orange = '#DE6C33';
  const darkOrange = '#8A3200';

  return (
    <Box sx={{ width: '100%', typography: 'body1',px:1 }}>
      <TabContext value={value}>
        <Box sx={{ width: "100%", borderBottom: `1px solid ${orange}`, borderTop: `1px solid ${orange}`, borderRadius: '0 0 10px 10px'  ,backgroundColor: "#fff",position: 'sticky',top: 0,zIndex: 10 }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" sx={{display: 'flex',justifyContent: 'space-between','& .MuiTabs-indicator': { display: 'none' },}}>
            {['Bonded Labour', 'Child Labour', 'Women Labour', 'All'].map((label) => (
              <Tab key={label} label={label} value={label} disableRipple sx={{flex: 1,fontWeight: 500,textTransform: 'none',borderRadius: '0 0 6px 6px',backgroundColor: value === label ? orange : 'transparent',color: value === label ? "#ffffff" : darkOrange,'&.Mui-selected': { color: '#fff' },fontSize: { xs: "0.55rem", sm: "0.9rem" },px: 1}}/>
            ))}
          </TabList>
        </Box>

        <Box sx={{overflowY: 'auto', maxHeight: 'calc(100vh - 60px)',scrollbarWidth:"none", '&::-webkit-scorllbar':{display:"none"} }}>
          <TabPanel value="Bonded Labour"><DashBoard open={openDrawer} /></TabPanel>
          <TabPanel value="Child Labour"><DashBoard open={openDrawer} /></TabPanel>
          <TabPanel value="Women Labour"><DashBoard open={openDrawer} /></TabPanel>
          <TabPanel value="All"><DashBoard /></TabPanel>
        </Box>

      </TabContext>
    </Box>

  );
}
