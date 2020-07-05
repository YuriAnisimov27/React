import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Vova' },
        { id: 3, name: 'Masha' },
        { id: 4, name: 'Igor' },
        { id: 5, name: 'Klava' },
        { id: 6, name: 'Jack' },
        { id: 7, name: 'Jhon' }
    ]

    let messages = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello World!' },
        { id: 3, message: 'BinPot)' },
        { id: 4, message: 'How is your name?' },
        { id: 5, message: 'How a u?' },
    ]

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map( m => <Message message={m.message}/>);

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