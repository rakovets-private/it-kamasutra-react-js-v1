const ADD_MESSAGE = 'social-network/dialogs/ADD_MESSAGE';

let initialState = {
  messageCounter: 10,
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
  let stateCopy;
  switch (action.type) {
    case ADD_MESSAGE:
      stateCopy = {
        ...state,
        messageCounter: state.messageCounter + 1,
        messages: [...state.messages, {id: state.messageCounter, message: action.message}],
      }
      break;
    default:
      stateCopy = state;
  }
  return stateCopy;
}

export const addMessageActionCreator = (message) => {
  return {
    type: ADD_MESSAGE,
    message: message
  }
}
