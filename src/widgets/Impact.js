import './Impact.css';
import NumberCount from './NumberCount';
import { Box } from '@mui/material';


function Impact(){
    const impactContainerStyle = {height:"80vh"};
    const impactBgStyle = {width: "100%", height: "100%", objectFit: "cover" , filter: "brightness(50%)"};
    return (
        <div className="impactContainer">
            <img src="https://plus.unsplash.com/premium_photo-1683121334505-907a00cf904c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={impactBgStyle}/>
            <div className='count1' sx={{  }}>
                <NumberCount value="2000"/>
            </div>
            
        </div>
    );
}

export default Impact;