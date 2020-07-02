import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog_items}>
                <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to='/dialogs/1'>name 1</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/2'>name 2</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/3'>name 3</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/4'>name 4</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/5'>name 5</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/6'>name 6</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/7'>name 7</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>hi</div>
                <div className={classes.message}>How is your name?</div>
                <div className={classes.message}>How a u?</div>
            </div>
        </div>
    )
}

export default Dialogs;