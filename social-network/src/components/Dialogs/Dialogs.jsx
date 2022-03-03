import React from "react";
import s from "./Dialogs.module.css"
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer';

const Dialogs = (props) => {
  let dialogElements = props.state.dialogs.map(d => <Dialog key={d.id} name={d.name} id={d.id}/>)
  let messageElements = props.state.messages.map(m => <Message key={m.id} message={m.message}/>)
  let newMessageElement = React.createRef()

  let addMessage = () => {
    props.dispatch(addMessageActionCreator(newMessageElement.current.value));
    newMessageElement.current.value = '';
  }

  let onMessageChange = () => {
    props.dispatch(updateNewMessageTextActionCreator(newMessageElement.current.value));
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
        <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText}/><br/>
        <button onClick={addMessage}>Add post</button>
      </div>
    </div>
  )
}

export default Dialogs;
