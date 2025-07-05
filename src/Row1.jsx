import { Card, Grid, Typography,Box,Link,CircularProgress} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import React from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Row2 from "./Row2";
import Map from "./assets/Jharkhand\ map.png"
import District from "./assets/District.png"
import icon from "./assets/icon.png"
const Row1 =({open}) =>{
    const [year, setYear] = React.useState('2024-25');

    const handleChange = (event) => {
        setYear(event.target.value);
    };
    
    return(
        <Grid>
            {!open && (
                <Grid container spacing={{xs:3,md:5}}>
                <Grid size={{xs:12,md:5}} wrap="wrap">
                    <Grid container spacing={{md:2,sm:15,xs:2}}>
                        <Grid size={6}>
                            <Card raised sx={{borderRadius:3, height:{sm:230,xs:200}, display:"flex", flexDirection:"column",justifyContent:"space-between",alignItems:"center"}}>
                                <Box width={"100%"} height={"80%"} sx={{display:"flex", flexDirection:"column",justifyContent:"space-around",alignItems:"center"}}>
                                    <Card raised sx={{height:{xs:"40%",sm:"50%"},mt:1,width:"32%", display:"flex", alignItems:"center",justifyContent:"center",backgroundColor:"#EEF5FB"}}>
                                        <Box component="img" alt="Jharkhand" src={Map} width={"100%"}></Box>
                                    </Card>
                                    <Typography sx={{fontSize:"1.25rem",fontWeight:"bold", color:"black"}}>State</Typography>
                                </Box>
                                <Link href='#' textAlign={"center"} underline="none" width={"100%"} py={{md:1.2,xs:1.2,sm:1}} sx={{backgroundImage:"radial-gradient(#ffffff, #D4D4D4)",fontWeight:"bold",fontSize:{xs:"0.8rem",sm:"1rem",md:"0.8rem"}}}>Arunachal Pradesh</Link>
                            </Card>
                        </Grid>
                        <Grid size={6}>
                            <Card raised sx={{borderRadius:3, height:{sm:230,xs:200}, display:"flex", flexDirection:"column",justifyContent:"space-around",alignItems:"center"}}>
                                <Box width={"100%"} height={"80%"} sx={{display:"flex", flexDirection:"column",justifyContent:"space-around",alignItems:"center"}}>
                                    <Card raised sx={{height:{xs:"40%",sm:"50%"},mt:1,width:"32%", display:"flex", alignItems:"center",justifyContent:"center",backgroundColor:"#EEF5FB"}}>
                                        <Box component="img" alt="District" src={District} width={"100%"}></Box>
                                    </Card>
                                    <Typography sx={{fontSize:"1.25rem",fontWeight:"bold", color:"black"}}>District</Typography>
                                </Box>
                                <Link href='#' textAlign={"center"} underline="none" width={"100%"} py={{md:1.2,xs:1.2,sm:1}} sx={{backgroundImage:"radial-gradient(#ffffff, #D4D4D4)",fontWeight:"bold",fontSize:{xs:"0.8rem",sm:"1rem",md:"0.8rem"}}}>South Garo Hills</Link>
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid mt={2}>
                        <Card raised sx={{height:59, display:"flex", alignItems:"center", justifyContent:"space-around", borderRadius:3}}> 
                            <Box component="img" src={icon} alt="" sx={{'@media (max-width:473px)': {width:"11%"}}} />
                            <Typography fontSize={"0.7rem"} sx={{"@media(max-width:427px)":{fontSize:"0.6rem"},"@media(max-width:371px)":{fontSize:"0.55rem"}}}>Vigilance Committee</Typography>
                            <Typography variant="subtitle2" fontSize={"0.7rem"} sx={{display:"flex", alignItems:"center", gap:0.5,"@media(max-width:427px)":{fontSize:"0.6rem"},"@media(max-width:371px)":{fontSize:"0.55rem"} }}><Box sx={{height:10,width:10,borderRadius:10,backgroundColor:"#03CD10",border:"2px solid #DDDDDD"}}></Box> Active (on DD/MM/YYYY)</Typography>
                            <InfoIcon sx={{color:"#F37232"}}/>    
                        </Card>
                    </Grid>
                </Grid>
                <Grid size={{xs:12,md:7}}>
                    <Card raised sx={{height:{xs:"13rem",sm:"19rem"}, borderRadius:3,alignItems:"center",display:"flex"}}>
                        <Grid container size={12} sx={{alignItems:"center",height:"100%"}}>
                            <Grid size={1}>
                                <Typography sx={{writingMode:"vertical-rl",fontWeight:"bold",color:"#F37232",fontSize:{xs:"0.8rem",sm:"1rem"}, ml:{xs:"15%",sm:2} ,transform:"rotate(180deg)"}}>Source</Typography>
                            </Grid>
                            <Grid size={10} sx={{height:"100%"}} display={"flex"} justifyContent={"space-around"} flexDirection={"column"}>
                                <Grid display={"flex"} justifyContent={"space-around"} alignItems={"center"} width={"100%"}>
                                    <Typography variant="body1" sx={{fontWeight:"bold",fontSize:"1.5rem","@media(max-width:491px)":{fontSize:"1rem"}}} color="#F37232">
                                        424
                                    </Typography>
                                    <Typography variant="body1" sx={{fontWeight:"bold",fontSize:"1rem","@media(max-width:491px)":{fontSize:"0.63rem"}}} >
                                        Complaints Registered -
                                    </Typography>
                                    <FormControl sx={{ width: {sm:"8rem", xs:"5.5rem"} }}>
                                        <Select value={year} onChange={handleChange} inputProps={{ name: 'Year', id: 'uncontrolled-native' }} sx={{height:{sm:40,xs:30},backgroundColor: "#FFE7DD",borderRadius: 1.5,fontWeight: "bold",fontSize: {xs:"0.7rem",sm:"1rem"},'& .MuiSelect-select': {  display: 'flex',  alignItems: 'center',},}}>
                                            <MenuItem value="2022-23">2022-23</MenuItem>
                                            <MenuItem value="2023-24">2023-24</MenuItem>
                                            <MenuItem value="2024-25">2024-25</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid> 
                                <Grid>
                                    <Box sx={{display:"flex", justifyContent:"space-around"}}>
                                        <Box textAlign={"center"}>
                                            <Box sx={{position: 'relative',display: 'inline-flex',width: { xs: 70, sm: 120 },height: { xs: 70, sm: 120 },}}>
                                                <CircularProgress variant="determinate" value={100} sx={{color: 'orange',position: 'absolute',left: 0,top: 0,}} size="100%" thickness={3}/>
                                                <CircularProgress variant="determinate" value={100-64} sx={{ color: '#D4D4D4' }} size="100%" thickness={3}/>
                                                <Box sx={{ top: 0, left: 0, bottom: 0, right: 0, position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
                                                    <Typography variant="h6" component="div" fontWeight="bold">64%</Typography>
                                                </Box>
                                            </Box>
                                            <Typography sx={{fontWeight:"bold"}}>
                                                Portal
                                            </Typography>
                                        </Box>
                                        <Box textAlign={"center"}>
                                            <Box sx={{position: 'relative',display: 'inline-flex',width: { xs: 70, sm: 120 },height: { xs: 70, sm: 120 },}}>
                                                <CircularProgress variant="determinate" value={100} sx={{color: 'orange',position: 'absolute',left: 0,top: 0,}} size="100%" thickness={3}/>
                                                <CircularProgress variant="determinate" value={100-28} sx={{ color: '#D4D4D4' }} size="100%" thickness={3}/>
                                                <Box sx={{ top: 0, left: 0, bottom: 0, right: 0, position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
                                                    <Typography variant="h6" component="div" fontWeight="bold">28%</Typography>
                                                </Box>
                                            </Box>
                                            <Typography sx={{fontWeight:"bold"}}>
                                                Portal
                                            </Typography>
                                        </Box>
                                        <Box textAlign={"center"}>
                                            <Box sx={{position: 'relative',display: 'inline-flex',width: { xs: 70, sm: 120 },height: { xs: 70, sm: 120 },}}>
                                                <CircularProgress variant="determinate" value={100} sx={{color: 'orange',position: 'absolute',left: 0,top: 0,}} size="100%" thickness={3}/>
                                                <CircularProgress variant="determinate" value={100-14} sx={{ color: '#D4D4D4' }} size="100%" thickness={3}/>
                                                <Box sx={{ top: 0, left: 0, bottom: 0, right: 0, position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
                                                    <Typography variant="h6" component="div" fontWeight="bold">14%</Typography>
                                                </Box>
                                            </Box>
                                            <Typography sx={{fontWeight:"bold"}}>
                                                Portal
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
            )}

            {open && (<Grid container spacing={{xs:3,md:3}}>
                <Grid size={{xs:12,md:5}} wrap="wrap">
                    <Grid container spacing={{md:2,sm:15,xs:2}}>
                        <Grid size={6}>
                            <Card raised sx={{borderRadius:3, height:{lg:230,md:200}, display:"flex", flexDirection:"column",justifyContent:"space-between",alignItems:"center"}}>
                                <Box width={"100%"} height={"80%"} sx={{display:"flex", flexDirection:"column",justifyContent:"space-around",alignItems:"center"}}>
                                    <Card raised sx={{height:{xs:"40%",sm:"50%"},mt:1,width:{lg:"32%",md:"40%"}, display:"flex", alignItems:"center",justifyContent:"center",backgroundColor:"#EEF5FB"}}>
                                        <Box component="img" alt="Jharkhand" src={Map} width={"100%"}></Box>
                                    </Card>
                                    <Typography sx={{fontSize:"1.25rem",fontWeight:"bold", color:"black"}}>State</Typography>
                                </Box>
                                <Link href='#' textAlign={"center"} underline="none" width={"100%"} py={{md:1.2}} sx={{backgroundImage:"radial-gradient(#ffffff, #D4D4D4)",fontWeight:"bold",fontSize:{md:"0.7rem"}}}>Arunachal Pradesh</Link>
                            </Card>
                        </Grid>
                        <Grid size={6}>
                            <Card raised sx={{borderRadius:3, height:{lg:230,md:200}, display:"flex", flexDirection:"column",justifyContent:"space-around",alignItems:"center"}}>
                                <Box width={"100%"} height={"80%"} sx={{display:"flex", flexDirection:"column",justifyContent:"space-around",alignItems:"center"}}>
                                    <Card raised sx={{height:{xs:"40%",sm:"50%"},mt:1,width:{lg:"32%",md:"40%"}, display:"flex", alignItems:"center",justifyContent:"center",backgroundColor:"#EEF5FB"}}>
                                        <Box component="img" alt="District" src={District} width={"100%"}></Box>
                                    </Card>
                                    <Typography sx={{fontSize:"1.25rem",fontWeight:"bold", color:"black"}}>District</Typography>
                                </Box>
                                <Link href='#' textAlign={"center"} underline="none" width={"100%"} py={{md:1.2}} sx={{backgroundImage:"radial-gradient(#ffffff, #D4D4D4)",fontWeight:"bold",fontSize:{md:"0.7rem"}}}>South Garo Hills</Link>
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid mt={2}>
                        <Card raised sx={{height:59, display:"flex", alignItems:"center", justifyContent:"space-around", borderRadius:3}}> 
                            <Box component="img" src={icon} alt="" sx={{width:{md:"18%"}}} />
                            <Typography sx={{fontSize:{lg:"0.7rem",md:"0.6rem"}}}>Vigilance Committee</Typography>
                            <Typography variant="subtitle2" fontSize={"0.7rem"} sx={{display:"flex", alignItems:"center", gap:0.5,fontSize:{lg:"0.7rem",md:"0.6rem"} }}><Box sx={{height:10,width:10,borderRadius:10,backgroundColor:"#03CD10",border:"2px solid #DDDDDD"}}></Box> Active (on DD/MM/YYYY)</Typography>
                            <InfoIcon sx={{color:"#F37232"}}/>    
                        </Card>
                    </Grid>
                </Grid>
                <Grid size={{xs:12,md:7}}>
                    <Card raised sx={{height:"100%", borderRadius:3,alignItems:"center",display:"flex"}}>
                        <Grid container size={12} sx={{alignItems:"center",height:"100%"}}>
                            <Grid size={1}>
                                <Typography sx={{writingMode:"vertical-rl",fontWeight:"bold",color:"#F37232",fontSize:{lg:"1rem",md:"0.75rem"}, ml:{md:"25%",lg:2} ,transform:"rotate(180deg)"}}>Source</Typography>
                            </Grid>
                            <Grid size={10} sx={{height:"100%"}} display={"flex"} justifyContent={"space-around"} flexDirection={"column"}>
                                <Grid display={"flex"} justifyContent={"space-around"} alignItems={"center"} width={"100%"}>
                                    <Typography variant="body1" sx={{fontWeight:"bold",fontSize:{lg:"1.5rem",md:"1.2rem"}}} color="#F37232">
                                        424
                                    </Typography>
                                    <Typography variant="body1" sx={{fontWeight:"bold",fontSize:{lg:"1rem",md:"0.75rem"},}} >
                                        Complaints Registered -
                                    </Typography>
                                    <FormControl sx={{ width: {lg:"8rem",md:"6.5rem"} }}>
                                        <Select value={year} onChange={handleChange} inputProps={{ name: 'Year', id: 'uncontrolled-native' }} sx={{height:{sm:40,xs:30},backgroundColor: "#FFE7DD",borderRadius: 1.5,fontWeight: "bold",fontSize: {xs:"0.7rem",sm:"1rem"},'& .MuiSelect-select': {  display: 'flex',  alignItems: 'center',},}}>
                                            <MenuItem value="2022-23">2022-23</MenuItem>
                                            <MenuItem value="2023-24">2023-24</MenuItem>
                                            <MenuItem value="2024-25">2024-25</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid> 
                                <Grid>
                                    <Box sx={{display:"flex", justifyContent:"space-around"}}>
                                        <Box textAlign={"center"}>
                                            <Box sx={{position: 'relative',display: 'inline-flex',width:{lg:120,md:95},height: {lg:120,md:95},}}>
                                                <CircularProgress variant="determinate" value={100} sx={{color: 'orange',position: 'absolute',left: 0,top: 0,}} size="100%" thickness={3}/>
                                                <CircularProgress variant="determinate" value={100-64} sx={{ color: '#D4D4D4' }} size="100%" thickness={3}/>
                                                <Box sx={{ top: 0, left: 0, bottom: 0, right: 0, position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
                                                    <Typography variant="h6" component="div" fontWeight="bold">64%</Typography>
                                                </Box>
                                            </Box>
                                            <Typography sx={{fontWeight:"bold"}}>
                                                Portal
                                            </Typography>
                                        </Box>
                                        <Box textAlign={"center"}>
                                            <Box sx={{position: 'relative',display: 'inline-flex',width: {lg:120,md:95},height:{lg:120,md:95},}}>
                                                <CircularProgress variant="determinate" value={100} sx={{color: 'orange',position: 'absolute',left: 0,top: 0,}} size="100%" thickness={3}/>
                                                <CircularProgress variant="determinate" value={100-28} sx={{ color: '#D4D4D4' }} size="100%" thickness={3}/>
                                                <Box sx={{ top: 0, left: 0, bottom: 0, right: 0, position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
                                                    <Typography variant="h6" component="div" fontWeight="bold">28%</Typography>
                                                </Box>
                                            </Box>
                                            <Typography sx={{fontWeight:"bold"}}>
                                                Portal
                                            </Typography>
                                        </Box>
                                        <Box textAlign={"center"}>
                                            <Box sx={{position: 'relative',display: 'inline-flex',width: {lg:120,md:95},height: {lg:120,md:95},}}>
                                                <CircularProgress variant="determinate" value={100} sx={{color: 'orange',position: 'absolute',left: 0,top: 0,}} size="100%" thickness={3}/>
                                                <CircularProgress variant="determinate" value={100-14} sx={{ color: '#D4D4D4' }} size="100%" thickness={3}/>
                                                <Box sx={{ top: 0, left: 0, bottom: 0, right: 0, position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
                                                    <Typography variant="h6" component="div" fontWeight="bold">14%</Typography>
                                                </Box>
                                            </Box>
                                            <Typography sx={{fontWeight:"bold"}}>
                                                Portal
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>)}
            <Row2 open={open}/>
        </Grid>
    )
};

export default Row1;