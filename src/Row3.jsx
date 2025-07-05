import { Box, Card, Grid, Typography } from "@mui/material";
import React, { useState } from 'react';
import { Select, MenuItem, FormControl } from '@mui/material';
import Registered from "./assets/Registered.png"
import Duplicated from "./assets/Duplicated.png"
import Point from "./assets/PointChart.png"
import Pyramid from "./assets/PYRAMID.png"
import Curves from "./assets/curves.png"
import Row4 from "./Row4";

const Row3 = ({open}) => {
  const [billing1, setBilling1] = useState('Yearly');
  const [billing2, setBilling2] = useState('Yearly');
  const [billing3, setBilling3] = useState('Yearly');
  const [billing4, setBilling4] = useState('Yearly');

  const handleChange1 = (event) => {
    setBilling1(event.target.value);
  };

  const handleChange2 = (event) => {
    setBilling2(event.target.value);
  };

  const handleChange3 = (event) => {
    setBilling3(event.target.value);
  };
  const handleChange4 = (event) => {
    setBilling4(event.target.value);
  };

  return (
    <Grid container spacing={{xs:2,md:5}}>
        {!open &&(
            <Grid container spacing={{xs:2,md:5}} mt={5}>
                <Grid container size={12} spacing={{xs:3,md:5}} width={"100%"}>
            <Grid size={{xs:12,md:6}}>
                <Card sx={{ p: 3, borderRadius:3,position:"relative"}} raised>
                    <FormControl variant="standard" sx={{ right: 25, position: "absolute" }}>
                        <Select value={billing1} onChange={handleChange1} disableUnderline sx={{color: '#0288d1',fontWeight: 'bold',fontSize: { xs: '0.7rem', sm: '1rem', md: '1.2rem' },'& .MuiSelect-icon': { color: 'black' },}}>
                            <MenuItem value="Yearly">Yearly</MenuItem>
                            <MenuItem value="Monthly">Monthly</MenuItem>
                        </Select>
                    </FormControl>
                    <Box display={"flex"} alignItems={"flex-end"} justifyContent={"space-between"}>
                        <Box display={"flex"} flexDirection={"column"} textAlign={"right"} gap={1} width={"20%"}>
                            <Typography fontWeight={"bold"}  color="rgba(36, 132, 201, 1)" fontSize={{xs:"1.4rem",sm:"2rem"}}>424</Typography>
                            <Typography fontWeight={"bold"} fontSize={{xs:"0.6rem",sm:"1rem"}}>Total Complaints Registered</Typography>
                        </Box>
                        <Box component="img" src={Registered} alt=" " sx={{ maxWidth: "20%", height: "auto", minWidth:"15%"}}></Box>
                        <Box component="img" src={Duplicated} alt=" " sx={{ maxWidth: "20%", height: "auto", minWidth:"15%"}}></Box>
                        <Box display={"flex"} flexDirection={"column"} textAlign={"left"} gap={1} width={"20%"}>
                            <Typography fontWeight={"bold"}  color="rgba(175, 37, 37, 1)" fontSize={{xs:"1.4rem",sm:"2rem"}}>24</Typography>
                            <Typography fontSize={{xs:"0.6rem",sm:"1rem"}} fontWeight={"bold"}>Repetitive Complaints Registered</Typography>
                        </Box>
                    </Box>
                </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <Card sx={{p: 3,borderRadius: 3,position: 'relative',display: 'flex',flexDirection: 'column',alignItems: 'center',}}raised>
                    <FormControl variant="standard" sx={{ right: 25, position: "absolute" }}>
                        <Select value={billing2} onChange={handleChange2} disableUnderline sx={{color: '#0288d1',fontWeight: 'bold',fontSize: { xs: '0.7rem', sm: '1rem', md: '1.2rem' },'& .MuiSelect-icon': { color: 'black' },}}>
                            <MenuItem value="Yearly">Yearly</MenuItem>
                            <MenuItem value="Monthly">Monthly</MenuItem>
                        </Select>
                    </FormControl>
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%" >
                        <Box display="flex" alignItems="flex-end" justifyContent="space-between" width="100%" py={4}>
                            <Box display="flex" flexDirection="column" alignItems="flex-end" width="20%">
                                <Typography fontWeight="bold" color="rgba(36, 132, 201, 1)" fontSize={{ xs: '1.4rem', sm: '2rem' }}>181</Typography>
                            </Box>
                            <Box component="img" src={Point} alt="Chart" sx={{maxWidth: '60%',width: { xs: '60%', sm: '70%', md: '60%' },height: 'auto', }}/>
                            <Box display="flex" flexDirection="column" alignItems="flex-start" width="20%" >
                                <Typography fontWeight="bold" color="rgba(243, 114, 50, 1)" fontSize={{ xs: '1.4rem', sm: '2rem' }}>221</Typography>
                            </Box>
                        </Box>  
                        <Box display="flex" justifyContent="space-between" width="100%" gap={2}>
                            <Typography fontSize={{ xs: '0.7rem', md: '0.8rem' }} fontWeight={700} textAlign="left" width="35%" lineHeight="normal" textTransform="uppercase">Total Cases with Completed Trials</Typography>
                            <Typography fontSize={{ xs: '0.7rem', md: '0.8rem' }} fontWeight={700} textAlign="right" width="35%" lineHeight="normal" textTransform="uppercase">Total Release Certificate Generated</Typography>
                        </Box>
                    </Box>
                </Card>
            </Grid>
        </Grid>
        
        <Grid size={12}>
            <Card sx={{p:{xs:1,md:3},borderRadius:3}} raised>
                <Typography fontSize={{xs:"0.7rem", sm:"1rem",md:"1.5rem"}} display={"inline-flex"} mb={2} color="rgba(53, 53, 53, 1)">Labour: Rescued & Rehabilated</Typography>
                <FormControl variant="standard" sx={{ float: "right" }}>
                    <Select value={billing3} onChange={handleChange3} disableUnderline sx={{color: '#0288d1',fontWeight: 'bold',fontSize: { xs: '0.7rem', sm: '1rem', md: '1.2rem' },'& .MuiSelect-icon': {color: 'black',},}}>
                        <MenuItem value="Yearly">Yearly</MenuItem>
                        <MenuItem value="Monthly">Monthly</MenuItem>
                    </Select>
                </FormControl>
                <Box component="img" src={Pyramid} alt=""></Box>
            </Card>
        </Grid>
        
        <Grid size={12}>
            <Card sx={{p:{xs:1,md:3},borderRadius:3}} raised>
                <Typography fontSize={{xs:"0.5rem", sm:"1rem",md:"1.3rem"}} display={"inline-flex"} mb={2} color="rgba(53, 53, 53, 1)">Cases : Pending for Trials; Pending for Payments</Typography>
                <FormControl variant="standard" sx={{ float: "right" }}>
                    <Select value={billing4} onChange={handleChange4} disableUnderline sx={{color: '#0288d1',fontWeight: 'bold',fontSize: { xs: '0.7rem', sm: '1rem', md: '1.2rem' },'& .MuiSelect-icon': {color: 'black',},}}>
                        <MenuItem value="Yearly">Yearly</MenuItem>
                        <MenuItem value="Monthly">Monthly</MenuItem>
                    </Select>
                </FormControl>
                <Box component="img" src={Curves} alt=""></Box>
            </Card>
        </Grid>
            </Grid>
        )}
        {open &&(
            <Grid container spacing={{xs:2,md:5}} mt={5}>
                <Grid container size={12} spacing={{xs:3,md:5}} width={"100%"}>
                    <Grid size={{xs:12,md:6}}>
                        <Card sx={{ p: 3, borderRadius:3,position:"relative"}} raised>
                            <FormControl variant="standard" sx={{ right: 25, position: "absolute" }}>
                                <Select value={billing1} onChange={handleChange1} disableUnderline sx={{color: '#0288d1',fontWeight: 'bold',fontSize: { xs: '0.7rem', sm: '1rem', md: '1.2rem' },'& .MuiSelect-icon': { color: 'black' },}}>
                                    <MenuItem value="Yearly">Yearly</MenuItem>
                                    <MenuItem value="Monthly">Monthly</MenuItem>
                                </Select>
                            </FormControl>
                            <Box display={"flex"} alignItems={"flex-end"} justifyContent={"space-between"}>
                                <Box display={"flex"} flexDirection={"column"} textAlign={"right"} gap={1} width={"20%"}>
                                    <Typography fontWeight={"bold"}  color="rgba(36, 132, 201, 1)" fontSize={{xs:"1.4rem",sm:"2rem"}}>424</Typography>
                                    <Typography fontWeight={"bold"} fontSize={{xs:"0.6rem",sm:"1rem"}}>Total Complaints Registered</Typography>
                                </Box>
                                <Box component="img" src={Registered} alt=" " sx={{ maxWidth: "20%", height: "auto", minWidth:"15%"}}></Box>
                                <Box component="img" src={Duplicated} alt=" " sx={{ maxWidth: "20%", height: "auto", minWidth:"15%"}}></Box>
                                <Box display={"flex"} flexDirection={"column"} textAlign={"left"} gap={1} width={"20%"}>
                                    <Typography fontWeight={"bold"}  color="rgba(175, 37, 37, 1)" fontSize={{xs:"1.4rem",sm:"2rem"}}>24</Typography>
                                    <Typography fontSize={{xs:"0.6rem",sm:"1rem"}} fontWeight={"bold"}>Repetitive Complaints Registered</Typography>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Card sx={{p: 3,borderRadius: 3,position: 'relative',display: 'flex',flexDirection: 'column',alignItems: 'center',}}raised>
                            <FormControl variant="standard" sx={{ right: 25, position: "absolute" }}>
                                <Select value={billing2} onChange={handleChange2} disableUnderline sx={{color: '#0288d1',fontWeight: 'bold',fontSize: { xs: '0.7rem', sm: '1rem', md: '1.2rem' },'& .MuiSelect-icon': { color: 'black' },}}>
                                    <MenuItem value="Yearly">Yearly</MenuItem>
                                    <MenuItem value="Monthly">Monthly</MenuItem>
                                </Select>
                            </FormControl>
                            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%" >
                                <Box display="flex" alignItems="flex-end" justifyContent="space-between" width="100%" py={4}>
                                    <Box display="flex" flexDirection="column" alignItems="flex-end" width="20%">
                                        <Typography fontWeight="bold" color="rgba(36, 132, 201, 1)" fontSize={{ xs: '1.4rem', sm: '2rem' }}>181</Typography>
                                    </Box>
                                    <Box component="img" src={Point} alt="Chart" sx={{maxWidth: '60%',width: { xs: '60%', sm: '70%', md: '60%' },height: 'auto', }}/>
                                    <Box display="flex" flexDirection="column" alignItems="flex-start" width="20%" >
                                        <Typography fontWeight="bold" color="rgba(243, 114, 50, 1)" fontSize={{ xs: '1.4rem', sm: '2rem' }}>221</Typography>
                                    </Box>
                                </Box>  
                                <Box display="flex" justifyContent="space-between" width="100%" gap={2}>
                                    <Typography fontSize={{ xs: '0.7rem', md: '0.8rem' }} fontWeight={700} textAlign="left" width="35%" lineHeight="normal" textTransform="uppercase">Total Cases with Completed Trials</Typography>
                                    <Typography fontSize={{ xs: '0.7rem', md: '0.8rem' }} fontWeight={700} textAlign="right" width="35%" lineHeight="normal" textTransform="uppercase">Total Release Certificate Generated</Typography>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
                
                <Grid size={12}>
                    <Card sx={{p:{xs:1,md:3},borderRadius:3}} raised>
                        <Typography fontSize={{xs:"0.7rem", sm:"1rem",md:"1.5rem"}} display={"inline-flex"} mb={2} color="rgba(53, 53, 53, 1)">Labour: Rescued & Rehabilated</Typography>
                        <FormControl variant="standard" sx={{ float: "right" }}>
                            <Select value={billing3} onChange={handleChange3} disableUnderline sx={{color: '#0288d1',fontWeight: 'bold',fontSize: { xs: '0.7rem', sm: '1rem', md: '1.2rem' },'& .MuiSelect-icon': {color: 'black',},}}>
                                <MenuItem value="Yearly">Yearly</MenuItem>
                                <MenuItem value="Monthly">Monthly</MenuItem>
                            </Select>
                        </FormControl>
                        <Box component="img" src={Pyramid} alt=""></Box>
                    </Card>
                </Grid>
                
                <Grid size={12}>
                    <Card sx={{p:{xs:1,md:3},borderRadius:3}} raised>
                        <Typography fontSize={{xs:"0.5rem", sm:"1rem",md:"1.3rem"}} display={"inline-flex"} mb={2} color="rgba(53, 53, 53, 1)">Cases : Pending for Trials; Pending for Payments</Typography>
                        <FormControl variant="standard" sx={{ float: "right" }}>
                            <Select value={billing4} onChange={handleChange4} disableUnderline sx={{color: '#0288d1',fontWeight: 'bold',fontSize: { xs: '0.7rem', sm: '1rem', md: '1.2rem' },'& .MuiSelect-icon': {color: 'black',},}}>
                                <MenuItem value="Yearly">Yearly</MenuItem>
                                <MenuItem value="Monthly">Monthly</MenuItem>
                            </Select>
                        </FormControl>
                        <Box component="img" src={Curves} alt=""></Box>
                    </Card>
                </Grid>
            </Grid>)}

        <Row4 open={open}/>
    </Grid>
  );
};

export default Row3;
