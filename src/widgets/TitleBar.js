import React from 'react';
import './TitleBar.css';
import TitleBarButton from './TitleBarButton';
import Spacer from './Spacer';

function TitleBar() {
    return (
        <div className="TitleBar">
            <div className='title'>
                <h1 className='sarthiText'>Sarthi</h1>
            </div>
            <div className='buttons'>
                <TitleBarButton text="Contact Us"/>
                <Spacer/>
                <TitleBarButton text="Donate Now"/>
            </div>
        </div>
    );
}

export default TitleBar;