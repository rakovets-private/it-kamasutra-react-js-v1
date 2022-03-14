import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  let addMessage = (text) => {
    props.store.dispatch(addMessageActionCreator(text));
  }

  let updateNewMessageText = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  }

  return (<Dialogs
    dialogs={props.store.getState().dialogsPage.dialogs}
    messages={props.store.getState().dialogsPage.messages}
    newMessageText={props.store.getState().dialogsPage.newMessageText}
    updateNewMessageText={updateNewMessageText}
    addMessage={addMessage}
  />)
}

export default DialogsContainer;
