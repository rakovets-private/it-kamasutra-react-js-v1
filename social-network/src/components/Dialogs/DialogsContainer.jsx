import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../storeContext';

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>{
      (store) => {
        let addMessage = (text) => {
          store.dispatch(addMessageActionCreator(text));
        }

        let updateNewMessageText = (text) => {
          store.dispatch(updateNewMessageTextActionCreator(text));
        }

        return <Dialogs
          dialogs={store.getState().dialogsPage.dialogs}
          messages={store.getState().dialogsPage.messages}
          newMessageText={store.getState().dialogsPage.newMessageText}
          updateNewMessageText={updateNewMessageText}
          addMessage={addMessage}
        />
      }
    }
    </StoreContext.Consumer>
  )
}

export default DialogsContainer;
