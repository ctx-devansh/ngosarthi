import './NavBarButton.css'

function NavBarButton(props){
    return(
        <button className="navBarButton">{props.text}</button>
    );
}

export default NavBarButton