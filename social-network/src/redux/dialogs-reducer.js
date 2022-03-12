const ADD_MESSAGE_ACTION_TYPE = 'ADD-MESSAGE-ACTION-TYPE';
const UPDATE_NEW_MESSAGE_TEXT_ACTION_TYPE = 'UPDATE-NEW-MESSAGE-TEXT';

export const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE_ACTION_TYPE:
      state.messageCounter++;
      let newMessage = {
        id: state.messageCounter,
        message: action.message
      };
      state.messages.push(newMessage);
      state.newMessageText = '';
      break;
    case UPDATE_NEW_MESSAGE_TEXT_ACTION_TYPE:
      state.newMessageText = action.text;
      break;
  }
  return state;
}


export const addMessageActionCreator = (message) => {
  return {
    type: ADD_MESSAGE_ACTION_TYPE,
    message: message
  }
}

export const updateNewMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT_ACTION_TYPE,
    text: text
  }
}
