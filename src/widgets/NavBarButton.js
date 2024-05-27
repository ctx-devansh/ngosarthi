import './NavBarButton.css'
import { useNavigate } from 'react-router-dom';

function NavBarButton(props){
    
    let navigate = useNavigate();
    const redirect = () => {
        let path = "/"+props.page;
        navigate(path);
    }

    return(
        <button className="navBarButton" onClick={() => redirect()}>{props.text}</button>
    );
}

export default NavBarButton