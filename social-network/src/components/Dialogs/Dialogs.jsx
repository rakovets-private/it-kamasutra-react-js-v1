import React from "react";
import s from "./Dialogs.module.css"
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {
  let dialogs = [
    {id: 1, name: "Ivan"},
    {id: 2, name: "Daniel"},
    {id: 3, name: "Viktor"},
    {id: 4, name: "Valentina"},
  ];
  let messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "Hello"},
    {id: 3, message: "It's me!"},
    {id: 4, message: "Cool"},
  ]
  
  let dialogElements = dialogs.map(d => <Dialog name={d.name} id={d.id}/>)
  let messageElements = messages.map(m => <Message message={m.message}/>)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogElements}
      </div>
      <div className={s.messages}>
        {messageElements}
      </div>
    </div>
  )
}

export default Dialogs;
