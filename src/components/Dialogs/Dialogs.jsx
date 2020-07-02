import React from 'react';
import classes from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog_items}>
                <div className={classes.dialog + ' ' + classes.active}>
                    name 1
                </div>
                <div className={classes.dialog}>
                    name 2
                </div>
                <div className={classes.dialog}>
                    name 3
                </div>
                <div className={classes.dialog}>
                    valera
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