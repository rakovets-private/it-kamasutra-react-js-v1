import React from "react";
import s from "./Dialogs.module.css"
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {
  let dialogElements = props.state.dialogs.map(d => <Dialog name={d.name} id={d.id}/>)
  let messageElements = props.state.messages.map(m => <Message message={m.message}/>)
  let newMessageElement = React.createRef()
  let addMessage = () => {
    alert(newMessageElement.current.value);
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
        <textarea ref={newMessageElement}/><br/>
        <button onClick={addMessage}>Add post</button>
      </div>
    </div>
  )
}

export default Dialogs;
