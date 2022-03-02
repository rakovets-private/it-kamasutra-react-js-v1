const ADD_POST_ACTION_TYPE = 'ADD-POST';
const UPDATE_NEW_POST_TEXT_ACTION_TYPE = 'UPDATE-NEW-POST-TEXT';

let store = {
  _observers: [],
  _postCounter: 10,
  _state: {
    profilePage: {
      newPostText: '',
      posts: [
        {id: 1, message: "Hi, how are you?", countLike: 1},
        {id: 2, message: "It's my first post", countLike: 2},
        {id: 3, message: "WTF?!", countLike: 3},
        {id: 4, message: "Oops!", countLike: 7},
      ],
    },
    dialogsPage: {
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
    console.log(action);
    if (action.type === ADD_POST_ACTION_TYPE) {
      this._postCounter++;
      let newPost = {
        id: this._postCounter,
        message: action.post,
        countLike: 0
      }
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._notify();
    } else if (action.type === UPDATE_NEW_POST_TEXT_ACTION_TYPE) {
      this._state.profilePage.newPostText = action.text;
      this._notify();
    }
  },

  observe(observer) {
    this._observers.push(observer);
  },

  _notify() {
    this._observers.forEach(observer => observer(this));
  }
}

export const addPostActionCreator = (post) => {
  return {
    type: ADD_POST_ACTION_TYPE,
    post: post
  }
}

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT_ACTION_TYPE,
    text: text
  }
}

export default store;
window.store = store;
