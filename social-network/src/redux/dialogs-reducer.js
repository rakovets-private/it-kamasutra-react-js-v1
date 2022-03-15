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
  let stateCopy = {...state};
  switch (action.type) {
    case ADD_MESSAGE_ACTION_TYPE:
      stateCopy.messageCounter++;
      let newMessage = {
        id: state.messageCounter,
        message: action.message
      };
      stateCopy.messages = [...state.messages];
      stateCopy.messages.push(newMessage);
      stateCopy.newMessageText = '';
      break;
    case UPDATE_NEW_MESSAGE_TEXT_ACTION_TYPE:
      stateCopy.newMessageText = action.text;
      break;
  }
  return stateCopy;
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
