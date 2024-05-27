import { useState } from 'react';
import './NavBar.css';
import NavBarButton from './NavBarButton';

function NavBar(){
    return(
        <div className='NavBar'>
            <NavBarButton text="Home" page="home"/>
            <NavBarButton text="About Us" page="about-us"/>
            <NavBarButton text="Our Work" page="our-work"/>
            <NavBarButton text="In News" page="in-news"/>
            <NavBarButton text="Our Team" page="our-team"/>
        </div>
    );
}

export default NavBar;