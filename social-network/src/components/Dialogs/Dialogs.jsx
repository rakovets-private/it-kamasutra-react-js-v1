import React from "react";
import s from "./Dialogs.module.css"
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import AddMessageForm from './AddMessageForm/AddMessageForm';

const Dialogs = (props) => {
  let dialogElements = props.dialogs.map(d => <Dialog key={d.id} name={d.name} id={d.id}/>)
  let messageElements = props.messages.map(m => <Message key={m.id} message={m.message}/>)

  let addNewMessage = (values) => {
    props.addMessage(values.newMessageText);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogElements}
      </div>
      <div className={s.messages}>
        {messageElements}
      </div>
      <AddMessageForm onSubmit={addNewMessage}/>
    </div>
  )

}

export default Dialogs;
