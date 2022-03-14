import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';

let mapStateToProps = (state) => ({
  dialogs: state.dialogsPage.dialogs,
  messages: state.dialogsPage.messages,
  newMessageText: state.dialogsPage.newMessageText
});

let mapDispatchToProps = (dispatch) => ({
  updateNewMessageText: (text) => {
    console.log(text)
    dispatch(updateNewMessageTextActionCreator(text))
  },
  addMessage: (text) => dispatch(addMessageActionCreator(text))
});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
