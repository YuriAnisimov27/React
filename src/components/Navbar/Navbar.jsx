import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}><NavLink to="/profile" activeClassName={classes.active}
                                             title='Profile'>Profile</NavLink></div>
      <div className={classes.item}><NavLink to="/dialogs" activeClassName={classes.active}
                                             title='Messages'>Messages</NavLink></div>
      <div className={classes.item}><NavLink to="/news" activeClassName={classes.active} title='News'>News</NavLink>
      </div>
      <div className={classes.item}><NavLink to="/music" activeClassName={classes.active} title='Music'>Music</NavLink>
      </div>
      <div className={classes.item}><NavLink to="/users" activeClassName={classes.active} title='Users'>Users</NavLink>
      </div>
      <div><NavLink className={`${classes.item} ${classes.settings}`} to="/settings" title='Settings'>Settings</NavLink>
      </div>
    </nav>
  )
};

export default Navbar;