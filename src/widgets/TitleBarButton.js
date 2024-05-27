import React from "react";
import './TitleBarButton.css';

function TitleBarButton(props){
    const handleClick = () => {
        alert("hellowww");
    }

    return(
        <button className="titleBarButton" type="button" onClick={handleClick}>{props.text}</button>
    );
    

}

export default TitleBarButton;