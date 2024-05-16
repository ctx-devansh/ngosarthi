import './NavBar.css';
import NavBarButton from './NavBarButton';

function NavBar(){
    return(
        <div className='container'>
            <NavBarButton text="Home"/>
            <NavBarButton text="About Us"/>
            <NavBarButton text="Our Work"/>
            <NavBarButton text="In News"/>
            <NavBarButton text="Our Team"/>
        </div>
    );
}

export default NavBar;