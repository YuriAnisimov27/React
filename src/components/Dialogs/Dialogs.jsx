import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
        </div>)
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>)
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog_items}>
                <DialogItem name='Dima' id='1'/>
                <DialogItem name='2' id='2'/>
                <DialogItem name='3' id='3'/>
                <DialogItem name='4' id='4'/>
                <DialogItem name='5' id='5'/>
                <DialogItem name='6' id='6'/>
                <DialogItem name='7' id='7'/>
            </div>
            <div className={classes.messages}>
                <Message message='Hello World!'/>
                <Message message='How is your name?'/>
                <Message message='How a u?'/>
            </div>
        </div>
    )
}

export default Dialogs;