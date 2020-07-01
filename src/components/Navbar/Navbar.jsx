import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
    <nav className={classes.nav}>
        <div><a className={classes.item} href="/profile" title='Profile'>Profile</a></div>
        <div><a className={classes.item} href="/dialogs" title='Messages'>Messages</a></div>
        <div><a className={classes.item} href="#" title='News'>News</a></div>
        <div><a className={classes.item} href="#" title='Music'>Music</a></div>
        <div><a className={`${classes.item} ${classes.active}`} href="#" title='Settings'>Settings</a></div>
    </nav>
    )
}

export default Navbar;