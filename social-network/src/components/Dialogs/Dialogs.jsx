import React from "react";
import s from "./Dialogs.module.css"
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { Navigate } from 'react-router-dom';

const Dialogs = (props) => {
  let dialogElements = props.dialogs.map(d => <Dialog key={d.id} name={d.name} id={d.id}/>)
  let messageElements = props.messages.map(m => <Message key={m.id} message={m.message}/>)
  let newMessageElement = React.createRef()

  let onClickAddMessage = () => {
    props.addMessage(newMessageElement.current.value);
    newMessageElement.current.value = '';
  }

  let onMessageChange = () => {
    props.updateNewMessageText(newMessageElement.current.value);
  }

  if (!props.isAuth) {
    return <Navigate to={'/login'}/>
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogElements}
      </div>
      <div className={s.messages}>
        {messageElements}
      </div>
      <div className={"sender"}>
        <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText}
                  placeholder="My new message"/><br/>
        <button onClick={onClickAddMessage}>Add message</button>
      </div>
    </div>
  )
}

export default Dialogs;
