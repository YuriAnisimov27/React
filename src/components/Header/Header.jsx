import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
    <header className={classes.header}>
        <img src='https://ecc.co.nz/media/uploads/2015_08/Pingy.jpg.3600x900_q85_upscale.jpg' alt='logo'/>
        <img src='https://picsum.photos/1241/54' alt='pictute'/>
        
    </header>
    )
}

export default Header;