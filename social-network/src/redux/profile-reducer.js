import {ADD_MESSAGE_ACTION_TYPE, UPDATE_NEW_MESSAGE_TEXT_ACTION_TYPE} from './dialogs-reducer';

export const ADD_POST_ACTION_TYPE = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT_ACTION_TYPE = 'UPDATE-NEW-POST-TEXT';

export const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST_ACTION_TYPE:
      state.postCounter++;
      let newPost = {
        id: state.postCounter,
        message: action.post,
        countLike: 0
      }
      state.posts.push(newPost);
      state.newPostText = '';
      break;
    case UPDATE_NEW_POST_TEXT_ACTION_TYPE:
      state.newPostText = action.text;
      break
  }
  return state;
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
