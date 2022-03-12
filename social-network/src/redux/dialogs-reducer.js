const ADD_MESSAGE_ACTION_TYPE = 'ADD-MESSAGE-ACTION-TYPE';
const UPDATE_NEW_MESSAGE_TEXT_ACTION_TYPE = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
  messageCounter: 10,
  newMessageText: '',
  dialogs: [
    {id: 1, name: "Ivan"},
    {id: 2, name: "Daniel"},
    {id: 3, name: "Viktor"},
    {id: 4, name: "Valentina"},
  ],
  messages: [
    {id: 1, message: "Hi"},
    {id: 2, message: "Hello"},
    {id: 3, message: "It's me!"},
    {id: 4, message: "Cool"},
  ]
};

export const dialogsReducer = (state = initialState, action) => {
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
