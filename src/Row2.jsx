import { Grid,Card, Box, Typography } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import Row3 from "./Row3";
import Approved from "./assets/Approved.png"
import Repitative from "./assets/Repitative.png"
import Pending from "./assets/Pending.png"
import Completed from "./assets/Completed.png"
import Payments from "./assets/Pending\ Payments.png"
import Rescued from "./assets/Rescued.png"
import Rehab from "./assets/Rehabilitation.png"


const Row2=({open}) =>{
    return(
        <Grid>
            {!open &&(
                <Grid container spacing={2} mt={5} justifyContent={"center"} columns={{xs:12,md:14}}>
                <Grid size={{xs:12,sm:3,md:2}}>
                    <Card raised sx={{backgroundColor:"rgba(254, 163, 59, 1)",position:"relative", borderRadius:3,height:"100%"}}>
                        <InfoIcon sx={{color:"white",position:"absolute",right:0, padding:1,fontSize:40}}/>
                        <Box sx={{display:"flex",width:"100%",flexDirection:"column",alignItems:"center", mt:2}}>
                            <Box component="img" src={Approved} alt=""></Box>
                            <Typography textAlign={"center"} backgroundColor={"white"} p={1} px={1.5} borderRadius={2} color="rgba(36, 132, 201, 1)" mt={1} fontWeight={"bold"}>64</Typography>
                            <Typography textAlign={"center"} fontSize={"0.75rem"} py={2}  px={1}>Total <span style={{color:"white", fontWeight:"bold"}}>Release Certificate</span> Generated</Typography>
                        </Box>
                    </Card>
                </Grid>
                <Grid size={{md:2,sm:3,xs:12 }}>
                    <Card raised sx={{position:"relative", borderRadius:3,height:"100%"}}>
                        <InfoIcon sx={{color:"rgba(243, 114, 50, 1)",position:"absolute",right:0, padding:1,fontSize:40}}/>
                        <Box sx={{display:"flex",width:"100%",flexDirection:"column",alignItems:"center", mt:2}}>
                            <Box component="img" src={Repitative} alt=""></Box>
                            <Typography textAlign={"center"} backgroundColor={"white"} p={1} px={1.5} borderRadius={2} color="rgba(171, 57, 0, 1)" mt={1} fontWeight={"bold"}>10</Typography>
                            <Typography textAlign={"center"} fontSize={"0.75rem"} py={2}  px={1}>Total <span style={{color:"rgba(171,57,0,1)",fontWeight:"bold"}}>Repetitive</span> Cases</Typography>
                        </Box>
                    </Card>
                </Grid>
                <Grid size={{md:2,sm:3,xs:12 }}>
                    <Card raised sx={{position:"relative", borderRadius:3,height:"100%"}}>
                        <InfoIcon sx={{color:"rgba(243, 114, 50, 1)",position:"absolute",right:0, padding:1,fontSize:40}}/>
                        <Box sx={{display:"flex",width:"100%",flexDirection:"column",alignItems:"center", mt:2}}>
                            <Box component="img" src={Pending} alt=""></Box>
                            <Typography textAlign={"center"} backgroundColor={"white"} p={1} px={1.5} borderRadius={2} color="rgba(240, 154, 7, 1)" mt={1} fontWeight={"bold"}>33</Typography>
                            <Typography textAlign={"center"} fontSize={"0.75rem"} py={2}  px={1}>Total Cases with <span style={{color:"rgba(240,154,7,1)",fontWeight:"bold"}}>Pending</span> Trials</Typography>
                        </Box>
                    </Card>
                </Grid>
                <Grid size={{md:2,sm:3,xs:12 }}>
                    <Card raised sx={{position:"relative", borderRadius:3,height:"100%"}}>
                        <InfoIcon sx={{color:"rgba(243, 114, 50, 1)",position:"absolute",right:0, padding:1,fontSize:40}}/>
                        <Box sx={{display:"flex",width:"100%",flexDirection:"column",alignItems:"center", mt:2}}>
                            <Box component="img" src={Completed} alt="" pb={1}></Box>
                            <Typography textAlign={"center"} backgroundColor={"white"} p={1} px={1.5} borderRadius={2} color="rgba(25, 135, 41, 1)" mt={1} fontWeight={"bold"}>55</Typography>
                            <Typography textAlign={"center"} fontSize={"0.75rem"} py={2}  px={1}>Total Cases with <span style={{color:"rgba(25, 135, 41, 1)", fontWeight:"bold"}}>Completed</span> Trials</Typography>
                        </Box>
                    </Card>
                </Grid>
                <Grid size={{md:2,sm:3,xs:12 }}>
                    <Card raised sx={{position:"relative", borderRadius:3,height:"100%"}}>
                        <InfoIcon sx={{color:"rgba(243, 114, 50, 1)",position:"absolute",right:0, padding:1,fontSize:40}}/>
                        <Box sx={{display:"flex",width:"100%",flexDirection:"column",alignItems:"center", mt:2}}>
                            <Box component="img" src={Payments} alt="" pb={1}></Box>
                            <Typography textAlign={"center"} backgroundColor={"white"} p={1} px={1.5} borderRadius={2} color="rgba(240, 154, 7, 1)" mt={1} fontWeight={"bold"}>15</Typography>
                            <Typography textAlign={"center"} fontSize={"0.68rem"} py={2} px={1}>Total Cases <span style={{color:"rgba(240,154,7,1)", fontWeight:"bold"}}>Pending</span> for <span style={{fontWeight:"bold",fontStyle:"italic"}}>Immediate Payments</span></Typography>
                        </Box>
                    </Card>
                </Grid>
                <Grid size={{md:2,sm:3,xs:12 }}>
                    <Card raised sx={{position:"relative", borderRadius:3,height:"100%"}}>
                        <InfoIcon sx={{color:"rgba(243, 114, 50, 1)",position:"absolute",right:0, padding:1,fontSize:40}}/>
                        <Box sx={{display:"flex",width:"100%",flexDirection:"column",alignItems:"center", mt:2}}>
                            <Box component="img" src={Rescued} alt=""></Box>
                            <Typography textAlign={"center"} backgroundColor={"white"} p={1} px={1.5} borderRadius={2} color="rgba(36, 132, 201, 1)" mt={1} fontWeight={"bold"}>104</Typography>
                            <Typography textAlign={"center"} fontSize={"0.75rem"} py={2}  px={1}>Total Labour <span style={{color:"rgba(36,132,201,1)",fontWeight:"bold"}}>Rescued</span></Typography>
                        </Box>
                    </Card>
                </Grid>
                <Grid size={{md:2,sm:3,xs:12 }}>
                    <Card raised sx={{backgroundColor:"rgba(243, 114, 50, 1)",position:"relative", borderRadius:3,height:"100%"}}>
                        <InfoIcon sx={{color:"white",position:"absolute",right:0, padding:1,fontSize:40}}/>
                        <Box sx={{display:"flex",width:"100%",flexDirection:"column",alignItems:"center", mt:2}}>
                            <Box component="img" src={Rehab} alt="" pb={1}></Box>
                            <Typography textAlign={"center"} backgroundColor={"white"} p={1} px={1.5} borderRadius={2} color="rgba(36, 132, 201, 1)" mt={1} fontWeight={"bold"}>64</Typography>
                            <Typography textAlign={"center"} fontSize={"0.75rem"} py={2} px={1}>Total Labour <span style={{color:"white",fontWeight:"bold"}}>Rehabilitation</span> Done</Typography>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
            )}

            {open && (
                <Grid container spacing={2} mt={5} justifyContent={"center"} columns={{lg:14,md:12}}>
                <Grid size={{lg:2,md:3}}>
                    <Card raised sx={{backgroundColor:"rgba(254, 163, 59, 1)",position:"relative", borderRadius:3,height:"100%"}}>
                        <InfoIcon sx={{color:"white",position:"absolute",right:0, padding:1,fontSize:40}}/>
                        <Box sx={{display:"flex",width:"100%",flexDirection:"column",alignItems:"center", mt:2}}>
                            <Box component="img" src={Approved} alt=""></Box>
                            <Typography textAlign={"center"} backgroundColor={"white"} p={1} px={1.5} borderRadius={2} color="rgba(36, 132, 201, 1)" mt={1} fontWeight={"bold"}>64</Typography>
                            <Typography textAlign={"center"} fontSize={"0.75rem"} py={2}  px={1}>Total <span style={{color:"white", fontWeight:"bold"}}>Release Certificate</span> Generated</Typography>
                        </Box>
                    </Card>
                </Grid>
                <Grid size={{lg:2,md:3}}>
                    <Card raised sx={{position:"relative", borderRadius:3,height:"100%"}}>
                        <InfoIcon sx={{color:"rgba(243, 114, 50, 1)",position:"absolute",right:0, padding:1,fontSize:40}}/>
                        <Box sx={{display:"flex",width:"100%",flexDirection:"column",alignItems:"center", mt:2}}>
                            <Box component="img" src={Repitative} alt=""></Box>
                            <Typography textAlign={"center"} backgroundColor={"white"} p={1} px={1.5} borderRadius={2} color="rgba(171, 57, 0, 1)" mt={1} fontWeight={"bold"}>10</Typography>
                            <Typography textAlign={"center"} fontSize={"0.75rem"} py={2}  px={1}>Total <span style={{color:"rgba(171,57,0,1)",fontWeight:"bold"}}>Repetitive</span> Cases</Typography>
                        </Box>
                    </Card>
                </Grid>
                <Grid size={{lg:2,md:3}}>
                    <Card raised sx={{position:"relative", borderRadius:3,height:"100%"}}>
                        <InfoIcon sx={{color:"rgba(243, 114, 50, 1)",position:"absolute",right:0, padding:1,fontSize:40}}/>
                        <Box sx={{display:"flex",width:"100%",flexDirection:"column",alignItems:"center", mt:2}}>
                            <Box component="img" src={Pending} alt=""></Box>
                            <Typography textAlign={"center"} backgroundColor={"white"} p={1} px={1.5} borderRadius={2} color="rgba(240, 154, 7, 1)" mt={1} fontWeight={"bold"}>33</Typography>
                            <Typography textAlign={"center"} fontSize={"0.75rem"} py={2}  px={1}>Total Cases with <span style={{color:"rgba(240,154,7,1)",fontWeight:"bold"}}>Pending</span> Trials</Typography>
                        </Box>
                    </Card>
                </Grid>
                <Grid size={{lg:2,md:3}}>
                    <Card raised sx={{position:"relative", borderRadius:3,height:"100%"}}>
                        <InfoIcon sx={{color:"rgba(243, 114, 50, 1)",position:"absolute",right:0, padding:1,fontSize:40}}/>
                        <Box sx={{display:"flex",width:"100%",flexDirection:"column",alignItems:"center", mt:2}}>
                            <Box component="img" src={Completed} alt="" pb={1}></Box>
                            <Typography textAlign={"center"} backgroundColor={"white"} p={1} px={1.5} borderRadius={2} color="rgba(25, 135, 41, 1)" mt={1} fontWeight={"bold"}>55</Typography>
                            <Typography textAlign={"center"} fontSize={"0.75rem"} py={2}  px={1}>Total Cases with <span style={{color:"rgba(25, 135, 41, 1)", fontWeight:"bold"}}>Completed</span> Trials</Typography>
                        </Box>
                    </Card>
                </Grid>
                <Grid size={{lg:2,md:3}}>
                    <Card raised sx={{position:"relative", borderRadius:3,height:"100%"}}>
                        <InfoIcon sx={{color:"rgba(243, 114, 50, 1)",position:"absolute",right:0, padding:1,fontSize:40}}/>
                        <Box sx={{display:"flex",width:"100%",flexDirection:"column",alignItems:"center", mt:2}}>
                            <Box component="img" src={Payments} alt="" pb={1}></Box>
                            <Typography textAlign={"center"} backgroundColor={"white"} p={1} px={1.5} borderRadius={2} color="rgba(240, 154, 7, 1)" mt={1} fontWeight={"bold"}>15</Typography>
                            <Typography textAlign={"center"} fontSize={"0.68rem"} py={2} px={1}>Total Cases <span style={{color:"rgba(240,154,7,1)", fontWeight:"bold"}}>Pending</span> for <span style={{fontWeight:"bold",fontStyle:"italic"}}>Immediate Payments</span></Typography>
                        </Box>
                    </Card>
                </Grid>
                <Grid size={{lg:2,md:3}}>
                    <Card raised sx={{position:"relative", borderRadius:3,height:"100%"}}>
                        <InfoIcon sx={{color:"rgba(243, 114, 50, 1)",position:"absolute",right:0, padding:1,fontSize:40}}/>
                        <Box sx={{display:"flex",width:"100%",flexDirection:"column",alignItems:"center", mt:2}}>
                            <Box component="img" src={Rescued} alt=""></Box>
                            <Typography textAlign={"center"} backgroundColor={"white"} p={1} px={1.5} borderRadius={2} color="rgba(36, 132, 201, 1)" mt={1} fontWeight={"bold"}>104</Typography>
                            <Typography textAlign={"center"} fontSize={"0.75rem"} py={2}  px={1}>Total Labour <span style={{color:"rgba(36,132,201,1)",fontWeight:"bold"}}>Rescued</span></Typography>
                        </Box>
                    </Card>
                </Grid>
                <Grid size={{lg:2,md:3}}>
                    <Card raised sx={{backgroundColor:"rgba(243, 114, 50, 1)",position:"relative", borderRadius:3,height:"100%"}}>
                        <InfoIcon sx={{color:"white",position:"absolute",right:0, padding:1,fontSize:40}}/>
                        <Box sx={{display:"flex",width:"100%",flexDirection:"column",alignItems:"center", mt:2}}>
                            <Box component="img" src={Rehab} alt="" pb={1}></Box>
                            <Typography textAlign={"center"} backgroundColor={"white"} p={1} px={1.5} borderRadius={2} color="rgba(36, 132, 201, 1)" mt={1} fontWeight={"bold"}>64</Typography>
                            <Typography textAlign={"center"} fontSize={"0.75rem"} py={2} px={1}>Total Labour <span style={{color:"white",fontWeight:"bold"}}>Rehabilitation</span> Done</Typography>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
            )}
            <Row3 open={open} />
        </Grid>
    )
};

export default Row2;