import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map( m => <Message message={m.message}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog_items}>

                {dialogsElements}

            </div>
            <div className={classes.messages}>

                {messagesElements}

            </div>
        </div>
    )
}

export default Dialogs;
