import {dialogsReducer} from './dialogs-reducer';
import {profileReducer} from './profile-reducer';

let store = {
  _observers: [],
  _state: {
    profilePage: {
      postCounter: 10,
      newPostText: '',
      posts: [
        {id: 1, message: "Hi, how are you?", countLike: 1},
        {id: 2, message: "It's my first post", countLike: 2},
        {id: 3, message: "WTF?!", countLike: 3},
        {id: 4, message: "Oops!", countLike: 7},
      ],
    },
    dialogsPage: {
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
    }
  },

  getState() {
    return this._state;
  },

  dispatch(action) {
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._notify();
  },

  observe(observer) {
    this._observers.push(observer);
  },

  _notify() {
    this._observers.forEach(observer => observer(this));
  }
}

export default store;
window.store = store;
