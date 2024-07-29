import {Box, Typography} from '@mui/material';
 
function OurMission(){

    const ourMissionCardImgStyle = {width: "100%", height: "100%", objectFit: "cover"};

    return (
        <Box className="ourMissionCard" sx={{height:"70vh",width:"100vw", display:"flex", flexDirection:"row" }}>
            <Box className="ourMissionCardImg" sx={{height:"70vh",width:"35%"}}>
                <img src="https://i.ibb.co/t3FVgzL/study.png" alt="study" border="0" style={ourMissionCardImgStyle}/>
            </Box>
            <Box className="ourMissionCardText" sx={{backgroundColor:"#00FF00", width:"65%"}}>

            </Box>
        </Box>
    );
}

export default OurMission;