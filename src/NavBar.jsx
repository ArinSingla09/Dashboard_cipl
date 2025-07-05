import {Box,Grid,IconButton,Typography,FormControl,Select,MenuItem,Menu,Divider,Badge,InputLabel,Drawer,List,ListItem,ListItemText,Toolbar,ListItemButton,ListItemIcon,Collapse,useMediaQuery,useTheme      } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LabTabs from "./LabTabs";
import { useState } from "react";
import AccountBoxSharpIcon from "@mui/icons-material/AccountBoxSharp";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import {ExpandLess,ExpandMore,Description,Assignment,PersonOutline,HelpOutline,} from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsIcon from "@mui/icons-material/Settings";
import Embelem from "./assets/embelem.png"


const drawerWidth = 240;

const NavBar = () => {
  const [language, setLanguage] = useState("English");
  const [system, setSystem] = useState("");
  const [role, setRole] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const theme=useTheme(null);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const check=useMediaQuery(theme.breakpoints.up("md"));

  const [openDrawer, setOpenDrawer] = useState(true);
        
  const [openComplaints, setOpenComplaints] = useState(false);
  const [openBLForm, setOpenBLForm] = useState(false);
  const [openBondedLabour, setOpenBondedLabour] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [openHelp,setOpenHelp]= useState(false);

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget); 
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer variant={isSmallScreen?"temporary":"persistent"} open={openDrawer} onClose={handleDrawerToggle} anchor="left" sx={{width: openDrawer ? drawerWidth : 0,flexShrink: 0,"& .MuiDrawer-paper": {width: openDrawer ? drawerWidth : 0,boxSizing: "border-box",transition: "width 0.3s",overflowX: "hidden",display: "flex",flexDirection: "column",},}}>
        <Toolbar sx={{p: 0,borderBottom: "2px solid",borderImage: "linear-gradient(to left, #F37232,#57246C,#149FDF) 1",position: "fixed",width: drawerWidth,}}>
          <Box component="img" src={Embelem} alt="" sx={{ height:72, m: 1 }} />
          <Box sx={{ p: 1 }}>
            <Typography sx={{ fontSize: "0.65rem", color: "#E48B00" }}>
              MINISTRY OF LABOUR & EMPLOYEMENT
            </Typography>
            <Typography sx={{ fontSize: "0.6rem", color: "#E48B00" }}>
              Government of India
            </Typography>
          </Box>
        </Toolbar>

        <Box sx={{position:"relative",mt: 12, overflowY: "auto", flexGrow: 1,scrollbarWidth:"none", '&::-webkit-scrollbar':{display:"none"} }}>
          <List>
            <ListItemButton onClick={handleDrawerToggle}>
              <ListItemIcon>
                <HomeOutlinedIcon sx={{color:"#2484C9"}}/>
              </ListItemIcon>
              <ListItemText primary="Dashboard" slotProps={{primary:{sx:{fontSize:'0.85rem'}}}} />
            </ListItemButton>

            <ListItemButton onClick={() => setOpenComplaints(!openComplaints)}>
              <ListItemIcon>
                <Description sx={{color:"#2484C9"}}/>
              </ListItemIcon>
              <ListItemText primary="Complaints" slotProps={{primary:{sx:{fontSize:'0.85rem'}}}} />
              {openComplaints ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openComplaints} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} onClick={handleDrawerToggle}>
                  <ListItemIcon>
                    <Assignment sx={{color:"#2484C9"}}/>
                  </ListItemIcon>
                  <ListItemText primary="List of Complaints" slotProps={{primary:{sx:{fontSize:'0.69rem'}}}} />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton onClick={() => setOpenBLForm(!openBLForm)}>
              <ListItemIcon>
                <Description sx={{color:"#2484C9"}}/>
              </ListItemIcon>
              <ListItemText primary="BL Form Assistance" slotProps={{primary:{sx:{fontSize:'0.85rem'}}}} />
              {openBLForm ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openBLForm} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {["Release Certificate", "Rehabilitation Assistance", "Consolidated Details of RA"].map((text) => (
                  <ListItemButton sx={{ pl: 4 }} key={text} onClick={handleDrawerToggle}> 
                    <ListItemIcon>
                      <Assignment sx={{color:"#2484C9"}}/>
                    </ListItemIcon>
                    <ListItemText primary={text} slotProps={{primary:{sx:{fontSize:'0.69rem'}}}} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>

            <ListItemButton onClick={() => setOpenBondedLabour(!openBondedLabour)}>
              <ListItemIcon>
                <Description sx={{color:"#2484C9"}}/>
              </ListItemIcon>
              <ListItemText primary="Bonded Labour Tracking System" slotProps={{primary:{sx:{fontSize:'0.85rem'}}}} />
              {openBondedLabour ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openBondedLabour} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {["Registered Cases", "Release Certificate", "Rehabilitation Assistance", "Consolidated Details of RA"].map((text) => (
                  <ListItemButton sx={{ pl: 4 }} key={text} onClick={handleDrawerToggle}>
                    <ListItemIcon>
                      <Assignment sx={{color:"#2484C9"}}/>
                    </ListItemIcon>
                    <ListItemText primary={text} slotProps={{primary:{sx:{fontSize:'0.69rem'}}}} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>

            <ListItemButton onClick={() => { setOpenProfile(!openProfile); handleDrawerToggle(); }}>
              <ListItemIcon>
                <PersonOutline sx={{color:"#2484C9"}}/>
              </ListItemIcon>
              <ListItemText primary="My Profile" slotProps={{primary:{sx:{fontSize:'0.85rem'}}}} />
              {openProfile ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <ListItemButton onClick={() => { setOpenHelp(!openHelp); handleDrawerToggle(); }}>
              <ListItemIcon>
                <HelpOutline sx={{color:"#2484C9"}}/>
              </ListItemIcon>
              <ListItemText primary="Help" slotProps={{primary:{sx:{fontSize:'0.85rem'}}}} />
              {openHelp ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </List>
        </Box>
      </Drawer>

      <Box component="main" sx={{flexGrow: 1,transition: "padding-left 0.3s",}}>
        <Grid container spacing={2}>
          <Grid container height={90} sx={{ borderBottom: "2px solid", borderImage: "linear-gradient(to right, #F37232,#57246C,#149FDF) 1",width:"100%",pl:3}}>
            <Grid container size={{xs:9,md:!isSmallScreen && openDrawer ?4:5,sm:8}} direction="row" alignItems="center" spacing={0} wrap="nowrap">
              <IconButton onClick={handleDrawerToggle}>
                <MenuIcon sx={{fontSize: { md: "1.5rem", sm: "1.2rem", xs: "0.9rem" },}}/>
              </IconButton>
              <Box>
                <Typography sx={{ color: "#149FDF", fontWeight: "bold" }} fontSize={{ lg: 27, sm: 20, xs: 17 }}>
                  PRATI<span style={{ color: "#F2820A" }}>BIMB</span>
                </Typography>
                <Typography sx={{wordWrap: "break-word",textTransform: "uppercase",fontSize: { sm: !isSmallScreen && openDrawer ?"0.42rem":"0.65rem", xs: "0.42rem" },color: "#878787",fontWeight: "bold",}} >
                  Pratirodh Raksha Aur Teen Issues Bandhua Insaff Mahila Bachpan
                </Typography>
              </Box>
            </Grid>

            <Grid container size={{md:!isSmallScreen && openDrawer ?8:7,sm:4,xs:3}} alignItems="center" justifyContent={"flex-end"}>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-around", width: "100%",}}>
                <FormControl sx={{height: { xs: 20, sm: 30, md: 40 },display: { xs: "none", md: "inline-flex" },width: !isSmallScreen && openDrawer ?"6.5rem":"7rem", }}>
                  <Select value={language} onChange={(e) => setLanguage(e.target.value)} inputProps={{ "aria-label": "Without label" }} sx={{ height: "100%", border: "2px solid #E68D3E80", fontSize: { xs: "0.5rem", sm: "0.8rem", md: "0.9rem",},}}>
                    <MenuItem value="English">English</MenuItem>
                    <MenuItem value="Hindi">Hindi</MenuItem>
                    <MenuItem value="Bengali">Bengali</MenuItem>
                    <MenuItem value="Punjabi">Punjabi</MenuItem>
                    <MenuItem value="Tamil">Tamil</MenuItem>
                  </Select>
                </FormControl>

                <FormControl sx={{backgroundColor: "#FFE7DD80",borderRadius: 2,display: { xs: "none", md: "inline-flex" },width: !isSmallScreen && openDrawer ?"6rem":"7rem",height: "100%",justifyContent: "center", }} size="small">
                  <InputLabel id="system-select-label" sx={{ color: "#1976D2", fontWeight: "bold", fontSize: "1rem" }} >
                    System
                  </InputLabel>
                  <Select labelId="system-select-label" value={system} label="System" onChange={(e) => setSystem(e.target.value)} sx={{color: "#1976D2",fontWeight: "bold","& .MuiSelect-icon": { color: "black" }, }}>
                    <MenuItem value="2022-23">2022-23</MenuItem>
                    <MenuItem value="2023-24">2023-24</MenuItem>
                    <MenuItem value="2024-25">2024-25</MenuItem>
                  </Select>
                </FormControl>

                <FormControl sx={{backgroundColor: "#FFE7DD80",borderRadius: 2,display: { xs: "none", md: "inline-flex" },width:!isSmallScreen && openDrawer ?"6rem":"7rem",height: "100%",}}size="small">
                  <InputLabel id="role-select-label" sx={{ color: "#1976D2", fontWeight: "bold" }} >
                    Role
                  </InputLabel>
                  <Select labelId="role-select-label" value={role} label="Role" onChange={(e) => setRole(e.target.value)}sx={{color: "#1976D2",fontWeight: "bold","& .MuiSelect-icon": { color: "black" }}}>
                    <MenuItem value="2022-23">2022-23</MenuItem>
                    <MenuItem value="2023-24">2023-24</MenuItem>
                    <MenuItem value="2024-25">2024-25</MenuItem>
                  </Select>
                </FormControl>

                <Badge variant="dot" color="error">
                  <NotificationsIcon sx={{fontSize: { xs: "1.2rem", sm: "1.5rem" },"@media(max-width:450px)": { fontSize: "0.9rem" },}}/>
                </Badge>

                <Divider sx={{bgcolor: "#878787",width: "1px",height: "2.5rem",display: { sm: "inline-flex", xs: "none" }, }} variant="middle" orientation="vertical"/>

                <Box onClick={handleMenuClick} sx={{display: "flex",flexDirection: "column",alignItems: "center",justifyContent: "center",p: { sm: 1, xs: 0 },cursor: "pointer", }}>
                  <AccountBoxSharpIcon sx={{ color: "#F37232", borderRadius: 3 }} />
                  <Typography fontSize={"0.7rem"} sx={{ "@media(max-width:450px)": { fontSize: "0.5rem" } }}>
                    User Name
                  </Typography>
                </Box>

                <Menu anchorEl={anchorEl} open={openMenu} onClose={handleMenuClose} anchorOrigin={{ vertical: "bottom", horizontal: "right" }} transformOrigin={{ vertical: "top", horizontal: "center" }} slotProps={{paper: {sx: {width: { sm: 130, xs: 110 },borderRadius: 2,boxShadow: 3,},},}}>
                  <MenuItem onClick={handleMenuClose} sx={{ fontSize: { sm: "1rem", xs: "0.9rem" } }}><PersonIcon sx={{ mr: 1, fontSize: { sm: "1.5rem", xs: "1rem" } }}/>Profile</MenuItem>
                  <MenuItem onClick={handleMenuClose} sx={{ fontSize: { sm: "1rem", xs: "0.9rem" } }} ><SettingsIcon sx={{ mr: 1, fontSize: { sm: "1.5rem", xs: "1rem" } }}/>Settings</MenuItem>
                  <Divider />
                  <MenuItem onClick={handleMenuClose} sx={{ fontSize: { sm: "1rem", xs: "0.9rem" } }} ><LogoutIcon sx={{ mr: 1, fontSize: { sm: "1.5rem", xs: "1rem" } }}/>Logout</MenuItem>
                </Menu>
              </Box>
            </Grid>
          </Grid>
          <LabTabs openDrawer={isSmallScreen? false: openDrawer}/>
        </Grid>
      </Box>
    </Box>
  );
};

export default NavBar;