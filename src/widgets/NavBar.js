import './NavBar.css';
import NavBarButton from './NavBarButton';
import { Box } from '@mui/material';

function NavBar(){
    return(
        <Box className="NavBarWrapper">
            <Box className='NavBar'>
                <NavBarButton text="Home" page="home"/>
                <NavBarButton text="About Us" page="about-us"/>
                <NavBarButton text="Our Work" page="our-work"/>
                <NavBarButton text="In News" page="in-news"/>
                <NavBarButton text="Our Team" page="our-team"/>
            </Box>
        </Box>
        
    );
}

export default NavBar;