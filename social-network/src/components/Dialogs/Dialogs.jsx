import React from "react";
import {Field, reduxForm} from 'redux-form';
import s from "./Dialogs.module.css"
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

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
      <AddMessageReduxFrom onSubmit={addNewMessage}/>
    </div>
  )

}
const AddMessageForm = (props) => {
  return (<form onSubmit={props.handleSubmit}>
    <div><Field component='textarea' name='newMessageText' placeholder='My new message'/></div>
    <div><input type='submit' value='Add message'/></div>
  </form>);
}

const AddMessageReduxFrom = reduxForm({form: 'dialogsAddMessageForm'})(AddMessageForm);

export default Dialogs;
