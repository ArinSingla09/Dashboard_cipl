import { Box, Grid,Card,Typography,FormControl,InputLabel,Select,MenuItem } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import { useState } from "react";
import TotalComplaints from "./assets/TotalComplaints.png";

const Row4 = ({open}) =>{

    const [year,setYear]= useState('');
    const [month,setMonth]=useState('');
    const [billing3, setBilling3] = useState('Yearly');
    const [labour,setLabour] = useState("All");

    const handleChange1 = (event) =>{
        setYear(event.target.value);
    };

    const handleChange2 = (event) =>{
        setMonth(event.target.value);
    };

    const handleChange3 = (event) => {
        setBilling3(event.target.value);
    };

    const handleChange4 = (event) =>{
        setLabour(event.target.value);
    };


    return(
        <Grid>
            {!open && (
                <Grid container spacing={5}>
            <Grid container spacing={1}>
                <Grid container direction={"row"} size={12} sx={{justifyContent:{xs:"center",sm:"flex-end"}}} spacing={3}>
                   <FormControl sx={{ backgroundColor: "#FFE7DD80", borderRadius: 2, width: {xs:"6rem",sm:"8rem"}, height: "100%", justifyContent: "center"}} size="small">
                        <InputLabel id="year-select-label" sx={{ color: "#1976D2", fontWeight: "bold" }}>
                            Year
                        </InputLabel>
                        <Select labelId="year-select-label" id="year-select" value={year} label="Year" onChange={handleChange1} sx={{color: "#1976D2",fontWeight: "bold",'& .MuiSelect-icon': {color: "black",}, }}>
                            <MenuItem value="2022-23">2022-23</MenuItem>
                            <MenuItem value="2023-24">2023-24</MenuItem>
                            <MenuItem value="2024-25">2024-25</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ backgroundColor: "#FFE7DD80", borderRadius: 2, width: {xs:"6rem",sm:"8rem"}, height: "100%", justifyContent: "center"}} size="small">
                        <InputLabel id="year-select-label" sx={{ color: "#1976D2", fontWeight: "bold" }}>
                            Month
                        </InputLabel>
                        <Select labelId="year-select-label" id="year-select" value={month} label="Year" onChange={handleChange2} sx={{color: "#1976D2",fontWeight: "bold",'& .MuiSelect-icon': {color: "black",}, }}>
                            <MenuItem value="Jan">Jan</MenuItem>
                            <MenuItem value="Feb">Feb</MenuItem>
                            <MenuItem value="Mar">Mar</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid container rowSpacing={3} columnSpacing={6} justifyContent={"center"} mt={2}>
                    <Grid size={{xs:12,sm:6,md:4}}>
                        <Card sx={{display:"flex",alignItems:"center",justifyContent:"space-between",borderRadius:2, p:2}}>
                            <Box sx={{p:1,backgroundColor:"rgba(243, 114, 50, 0.12)",borderRadius:2,width:"20%",textAlign:"center"}}>
                                <Typography sx={{fontSize:{lg:"2rem",md:"1.5rem",sm:"2rem",xs:"1.5rem"},color: "transparent",WebkitTextStroke: "2px #0288D1",}}>62</Typography>
                            </Box>
                            <Typography sx={{textAlign:"center"}}>First Action Report (FAR)</Typography>
                            <InfoIcon sx={{color:"rgba(243, 114, 50, 1)"}}/>
                        </Card>
                    </Grid>
                    <Grid size={{xs:12,sm:6,md:4}}>
                        <Card sx={{display:"flex",alignItems:"center",justifyContent:"space-between",borderRadius:2, p:2}}>
                            <Box sx={{p:1,backgroundColor:"rgba(243, 114, 50, 0.12)",borderRadius:2,width:"20%",textAlign:"center"}}>
                                <Typography sx={{fontSize:{lg:"2rem",md:"1.5rem",sm:"2rem",xs:"1.5rem"},color: "transparent",WebkitTextStroke: "2px #0288D1",}}>42</Typography>
                            </Box>
                            <Typography sx={{textAlign:"center"}}>Second Action Report (SAR)</Typography>
                            <InfoIcon sx={{color:"rgba(243, 114, 50, 1)"}}/>
                        </Card>
                    </Grid>
                    <Grid size={{xs:12,sm:6,md:4}}>
                        <Card sx={{display:"flex",alignItems:"center",justifyContent:"space-between",borderRadius:2, p:2}}>
                            <Box sx={{p:1,backgroundColor:"rgba(243, 114, 50, 0.12)",borderRadius:2,width:"20%",textAlign:"center"}}>
                                <Typography sx={{fontSize:{lg:"2rem",md:"1.5rem",sm:"2rem",xs:"1.5rem"},color: "transparent",WebkitTextStroke: "2px #0288D1",}}>10</Typography>
                            </Box>
                            <Typography sx={{textAlign:"center"}}>Legal Action Report</Typography>
                            <InfoIcon sx={{color:"rgba(243, 114, 50, 1)"}}/>
                        </Card>
                    </Grid>
                    <Grid size={{xs:12,sm:6,md:4}}>
                        <Card sx={{display:"flex",alignItems:"center",justifyContent:"space-between",borderRadius:2, p:2}}>
                            <Box sx={{p:1,backgroundColor:"rgba(243, 114, 50, 0.12)",borderRadius:2,width:"20%",textAlign:"center"}}>
                                <Typography sx={{fontSize:{lg:"2rem",md:"1.5rem",sm:"2rem",xs:"1.5rem"},color: "transparent",WebkitTextStroke: "2px #0288D1",}}>14</Typography>
                            </Box>
                            <Typography sx={{textAlign:"center"}}>FAR Pending</Typography>
                            <InfoIcon sx={{color:"rgba(243, 114, 50, 1)"}}/>
                        </Card>
                    </Grid>
                    <Grid size={{xs:12,sm:6,md:4}}>
                        <Card sx={{display:"flex",alignItems:"center",justifyContent:"space-between",borderRadius:2, p:2}}>
                            <Box sx={{p:1,backgroundColor:"rgba(243, 114, 50, 0.12)",borderRadius:2,width:"20%",textAlign:"center"}}>
                                <Typography sx={{fontSize:{lg:"2rem",md:"1.5rem",sm:"2rem",xs:"1.5rem"},color: "transparent",WebkitTextStroke: "2px #0288D1",}}>4</Typography>
                            </Box>
                            <Typography sx={{textAlign:"center"}}>SAR Pending</Typography>
                            <InfoIcon sx={{color:"rgba(243, 114, 50, 1)"}}/>
                        </Card>
                    </Grid>
                    <Grid size={{xs:12,sm:6,md:4}}>
                        <Card sx={{display:"flex",alignItems:"center",justifyContent:"space-between",borderRadius:2, p:2}}>
                            <Box sx={{p:1,backgroundColor:"rgba(243, 114, 50, 0.12)",borderRadius:2,width:"20%",textAlign:"center"}}>
                                <Typography sx={{fontSize:{lg:"2rem",md:"1.5rem",sm:"2rem",xs:"1.5rem"},color: "transparent",WebkitTextStroke: "2px #198754",}}>15</Typography>
                            </Box>
                            <Typography sx={{textAlign:"center"}}>Resolved</Typography>
                            <InfoIcon sx={{color:"rgba(243, 114, 50, 1)"}}/>
                        </Card>
                    </Grid>
                    <Grid size={{xs:12,sm:6,md:4}}>
                        <Card sx={{display:"flex",alignItems:"center",justifyContent:"space-between",borderRadius:2, p:2}}>
                            <Box sx={{p:1,backgroundColor:"rgba(243, 114, 50, 0.12)",borderRadius:2,width:"20%",textAlign:"center"}}>
                                <Typography sx={{fontSize:{lg:"2rem",md:"1.5rem",sm:"2rem",xs:"1.5rem"},color: "transparent",WebkitTextStroke: "2px #F37232",}}>62</Typography>
                            </Box>
                            <Typography sx={{textAlign:"center"}}>FAR Crossed 48 Hrs</Typography>
                            <InfoIcon sx={{color:"rgba(243, 114, 50, 1)"}}/>
                        </Card>
                    </Grid>
                    <Grid size={{xs:12,sm:6,md:4}}>
                        <Card sx={{display:"flex",alignItems:"center",justifyContent:"space-between",borderRadius:2, p:2}}>
                            <Box sx={{p:1,backgroundColor:"rgba(243, 114, 50, 0.12)",borderRadius:2,width:"20%",textAlign:"center"}}>
                                <Typography sx={{fontSize:{lg:"2rem",md:"1.5rem",sm:"2rem",xs:"1.5rem"},color: "transparent",WebkitTextStroke: "2px #F37232",}}>2</Typography>
                            </Box>
                            <Typography sx={{textAlign:"center"}}>SAR Crossed 21 Days</Typography>
                            <InfoIcon sx={{color:"rgba(243, 114, 50, 1)"}}/>
                        </Card>
                    </Grid>
                    <Grid size={{xs:12,sm:6,md:4}}>
                        <Card sx={{display:"flex",alignItems:"center",justifyContent:"space-between",borderRadius:2, p:2}}>
                            <Box sx={{p:1,backgroundColor:"rgba(243, 114, 50, 0.12)",borderRadius:2,width:"20%",textAlign:"center"}}>
                                <Typography sx={{fontSize:{lg:"2rem",md:"1.5rem",sm:"2rem",xs:"1.5rem"},color: "transparent",WebkitTextStroke: "2px #198754",}}>10</Typography>
                            </Box>
                            <Typography sx={{textAlign:"center"}}>Closed</Typography>
                            <InfoIcon sx={{color:"rgba(243, 114, 50, 1)"}}/>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container size={12} spacing={1}>
                <Grid size={12} container direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                    <Typography sx={{fontSize:{xs:"0.8rem",sm:"1.5rem"}}}>Total Complaints for All Category</Typography>
                    <FormControl variant="standard" sx={{ float: "right" }}>
                        <Select value={billing3} onChange={handleChange3} disableUnderline sx={{color: '#0288d1',fontWeight: 'bold',fontSize: { xs: '0.7rem', sm: '1rem', md: '1.2rem' },'& .MuiSelect-icon': {color: 'black',},}}>
                            <MenuItem value="Yearly">Yearly</MenuItem>
                            <MenuItem value="Monthly">Monthly</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid size={12}>
                    <Card sx={{padding:1,pb:4,borderRadius:3, display:"flex",flexDirection:"column",alignItems:"center"}}>
                        <Box sx={{display:"flex", justifyContent:"flex-end",width:"100%"}}>
                            <FormControl sx={{ m: 1,height:{xs:20,sm:30,md:40} }}>
                                <Select value={labour} onChange={handleChange4} displayEmpty inputProps={{ 'aria-label': 'Without label' }} sx={{height:"100%",fontSize: { xs: '0.7rem', sm: '1rem', md: '1.2rem' }}} >
                                    <MenuItem value={"All"}>All</MenuItem>
                                    <MenuItem value={"Bonded Labour"}>Bonded Labour</MenuItem>
                                    <MenuItem value={"Child Labour"}>Child Labour</MenuItem>
                                    <MenuItem value={"Women Labour"}>Women Labour</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box component="img" src={TotalComplaints} width={"90%"}></Box>

                    </Card>
                </Grid>
            </Grid>
       </Grid>
            )}

        {open && (
            <Grid container spacing={5}>
            <Grid container spacing={1}>
                <Grid container direction={"row"} size={12} sx={{justifyContent:{xs:"center",sm:"flex-end"}}} spacing={3}>
                   <FormControl sx={{ backgroundColor: "#FFE7DD80", borderRadius: 2, width: {xs:"6rem",sm:"8rem"}, height: "100%", justifyContent: "center"}} size="small">
                        <InputLabel id="year-select-label" sx={{ color: "#1976D2", fontWeight: "bold" }}>
                            Year
                        </InputLabel>
                        <Select labelId="year-select-label" id="year-select" value={year} label="Year" onChange={handleChange1} sx={{color: "#1976D2",fontWeight: "bold",'& .MuiSelect-icon': {color: "black",}, }}>
                            <MenuItem value="2022-23">2022-23</MenuItem>
                            <MenuItem value="2023-24">2023-24</MenuItem>
                            <MenuItem value="2024-25">2024-25</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ backgroundColor: "#FFE7DD80", borderRadius: 2, width: {xs:"6rem",sm:"8rem"}, height: "100%", justifyContent: "center"}} size="small">
                        <InputLabel id="year-select-label" sx={{ color: "#1976D2", fontWeight: "bold" }}>
                            Month
                        </InputLabel>
                        <Select labelId="year-select-label" id="year-select" value={month} label="Year" onChange={handleChange2} sx={{color: "#1976D2",fontWeight: "bold",'& .MuiSelect-icon': {color: "black",}, }}>
                            <MenuItem value="Jan">Jan</MenuItem>
                            <MenuItem value="Feb">Feb</MenuItem>
                            <MenuItem value="Mar">Mar</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid container rowSpacing={3} columnSpacing={6} justifyContent={"center"} mt={2}>
                    <Grid size={{md:6,lg:4}}>
                        <Card sx={{display:"flex",alignItems:"center",justifyContent:"space-between",borderRadius:2, p:2}}>
                            <Box sx={{p:1,backgroundColor:"rgba(243, 114, 50, 0.12)",borderRadius:2,width:"20%",textAlign:"center"}}>
                                <Typography sx={{fontSize:{lg:"2rem",md:"1.5rem",sm:"2rem",xs:"1.5rem"},color: "transparent",WebkitTextStroke: "2px #0288D1",}}>62</Typography>
                            </Box>
                            <Typography sx={{textAlign:"center"}}>First Action Report (FAR)</Typography>
                            <InfoIcon sx={{color:"rgba(243, 114, 50, 1)"}}/>
                        </Card>
                    </Grid>
                    <Grid size={{md:6,lg:4}}>
                        <Card sx={{display:"flex",alignItems:"center",justifyContent:"space-between",borderRadius:2, p:2}}>
                            <Box sx={{p:1,backgroundColor:"rgba(243, 114, 50, 0.12)",borderRadius:2,width:"20%",textAlign:"center"}}>
                                <Typography sx={{fontSize:{lg:"2rem",md:"1.5rem",sm:"2rem",xs:"1.5rem"},color: "transparent",WebkitTextStroke: "2px #0288D1",}}>42</Typography>
                            </Box>
                            <Typography sx={{textAlign:"center"}}>Second Action Report (SAR)</Typography>
                            <InfoIcon sx={{color:"rgba(243, 114, 50, 1)"}}/>
                        </Card>
                    </Grid>
                    <Grid size={{md:6,lg:4}}>
                        <Card sx={{display:"flex",alignItems:"center",justifyContent:"space-between",borderRadius:2, p:2}}>
                            <Box sx={{p:1,backgroundColor:"rgba(243, 114, 50, 0.12)",borderRadius:2,width:"20%",textAlign:"center"}}>
                                <Typography sx={{fontSize:{lg:"2rem",md:"1.5rem",sm:"2rem",xs:"1.5rem"},color: "transparent",WebkitTextStroke: "2px #0288D1",}}>10</Typography>
                            </Box>
                            <Typography sx={{textAlign:"center"}}>Legal Action Report</Typography>
                            <InfoIcon sx={{color:"rgba(243, 114, 50, 1)"}}/>
                        </Card>
                    </Grid>
                    <Grid size={{md:6,lg:4}}>
                        <Card sx={{display:"flex",alignItems:"center",justifyContent:"space-between",borderRadius:2, p:2}}>
                            <Box sx={{p:1,backgroundColor:"rgba(243, 114, 50, 0.12)",borderRadius:2,width:"20%",textAlign:"center"}}>
                                <Typography sx={{fontSize:{lg:"2rem",md:"1.5rem",sm:"2rem",xs:"1.5rem"},color: "transparent",WebkitTextStroke: "2px #0288D1",}}>14</Typography>
                            </Box>
                            <Typography sx={{textAlign:"center"}}>FAR Pending</Typography>
                            <InfoIcon sx={{color:"rgba(243, 114, 50, 1)"}}/>
                        </Card>
                    </Grid>
                    <Grid size={{md:6,lg:4}}>
                        <Card sx={{display:"flex",alignItems:"center",justifyContent:"space-between",borderRadius:2, p:2}}>
                            <Box sx={{p:1,backgroundColor:"rgba(243, 114, 50, 0.12)",borderRadius:2,width:"20%",textAlign:"center"}}>
                                <Typography sx={{fontSize:{lg:"2rem",md:"1.5rem",sm:"2rem",xs:"1.5rem"},color: "transparent",WebkitTextStroke: "2px #0288D1",}}>4</Typography>
                            </Box>
                            <Typography sx={{textAlign:"center"}}>SAR Pending</Typography>
                            <InfoIcon sx={{color:"rgba(243, 114, 50, 1)"}}/>
                        </Card>
                    </Grid>
                    <Grid size={{md:6,lg:4}}>
                        <Card sx={{display:"flex",alignItems:"center",justifyContent:"space-between",borderRadius:2, p:2}}>
                            <Box sx={{p:1,backgroundColor:"rgba(243, 114, 50, 0.12)",borderRadius:2,width:"20%",textAlign:"center"}}>
                                <Typography sx={{fontSize:{lg:"2rem",md:"1.5rem",sm:"2rem",xs:"1.5rem"},color: "transparent",WebkitTextStroke: "2px #198754",}}>15</Typography>
                            </Box>
                            <Typography sx={{textAlign:"center"}}>Resolved</Typography>
                            <InfoIcon sx={{color:"rgba(243, 114, 50, 1)"}}/>
                        </Card>
                    </Grid>
                    <Grid size={{md:6,lg:4}}>
                        <Card sx={{display:"flex",alignItems:"center",justifyContent:"space-between",borderRadius:2, p:2}}>
                            <Box sx={{p:1,backgroundColor:"rgba(243, 114, 50, 0.12)",borderRadius:2,width:"20%",textAlign:"center"}}>
                                <Typography sx={{fontSize:{lg:"2rem",md:"1.5rem",sm:"2rem",xs:"1.5rem"},color: "transparent",WebkitTextStroke: "2px #F37232",}}>62</Typography>
                            </Box>
                            <Typography sx={{textAlign:"center"}}>FAR Crossed 48 Hrs</Typography>
                            <InfoIcon sx={{color:"rgba(243, 114, 50, 1)"}}/>
                        </Card>
                    </Grid>
                    <Grid size={{md:6,lg:4}}>
                        <Card sx={{display:"flex",alignItems:"center",justifyContent:"space-between",borderRadius:2, p:2}}>
                            <Box sx={{p:1,backgroundColor:"rgba(243, 114, 50, 0.12)",borderRadius:2,width:"20%",textAlign:"center"}}>
                                <Typography sx={{fontSize:{lg:"2rem",md:"1.5rem",sm:"2rem",xs:"1.5rem"},color: "transparent",WebkitTextStroke: "2px #F37232",}}>2</Typography>
                            </Box>
                            <Typography sx={{textAlign:"center"}}>SAR Crossed 21 Days</Typography>
                            <InfoIcon sx={{color:"rgba(243, 114, 50, 1)"}}/>
                        </Card>
                    </Grid>
                    <Grid size={{md:6,lg:4}}>
                        <Card sx={{display:"flex",alignItems:"center",justifyContent:"space-between",borderRadius:2, p:2}}>
                            <Box sx={{p:1,backgroundColor:"rgba(243, 114, 50, 0.12)",borderRadius:2,width:"20%",textAlign:"center"}}>
                                <Typography sx={{fontSize:{lg:"2rem",md:"1.5rem",sm:"2rem",xs:"1.5rem"},color: "transparent",WebkitTextStroke: "2px #198754",}}>10</Typography>
                            </Box>
                            <Typography sx={{textAlign:"center"}}>Closed</Typography>
                            <InfoIcon sx={{color:"rgba(243, 114, 50, 1)"}}/>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container size={12} spacing={1}>
                <Grid size={12} container direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                    <Typography sx={{fontSize:{xs:"0.8rem",sm:"1.5rem"}}}>Total Complaints for All Category</Typography>
                    <FormControl variant="standard" sx={{ float: "right" }}>
                        <Select value={billing3} onChange={handleChange3} disableUnderline sx={{color: '#0288d1',fontWeight: 'bold',fontSize: { xs: '0.7rem', sm: '1rem', md: '1.2rem' },'& .MuiSelect-icon': {color: 'black',},}}>
                            <MenuItem value="Yearly">Yearly</MenuItem>
                            <MenuItem value="Monthly">Monthly</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid size={12}>
                    <Card sx={{padding:1,pb:4,borderRadius:3, display:"flex",flexDirection:"column",alignItems:"center"}}>
                        <Box sx={{display:"flex", justifyContent:"flex-end",width:"100%"}}>
                            <FormControl sx={{ m: 1,height:{xs:20,sm:30,md:40} }}>
                                <Select value={labour} onChange={handleChange4} displayEmpty inputProps={{ 'aria-label': 'Without label' }} sx={{height:"100%",fontSize: { xs: '0.7rem', sm: '1rem', md: '1.2rem' }}} >
                                    <MenuItem value={"All"}>All</MenuItem>
                                    <MenuItem value={"Bonded Labour"}>Bonded Labour</MenuItem>
                                    <MenuItem value={"Child Labour"}>Child Labour</MenuItem>
                                    <MenuItem value={"Women Labour"}>Women Labour</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box component="img" src={TotalComplaints} width={"90%"}></Box>

                    </Card>
                </Grid>
            </Grid>
       </Grid>
        )}
        </Grid>
    )
}

export default Row4;