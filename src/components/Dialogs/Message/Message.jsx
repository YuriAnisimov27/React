import React from 'react';
import classes from './Message.module.css'


const Message = (props) => {

  // let newMessageElement = React.createRef();

  // let addMessage = () => {
  //   let text = newMessageElement.current.value;
  //   alert(text);
  // };

  return (
    <div>
      <div className={classes.message}>{props.message}</div>
      {/*<div>*/}
      {/*    <textarea ref={newMessageElement}></textarea>*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*    <button onClick={ addMessage }>send</button>*/}
      {/*</div>*/}
    </div>

  )
}


export default Message;