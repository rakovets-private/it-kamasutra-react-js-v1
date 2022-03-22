const ADD_POST_ACTION_TYPE = 'ADD-POST';
const UPDATE_NEW_POST_TEXT_ACTION_TYPE = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  postCounter: 10,
  newPostText: '',
  posts: [
    {id: 1, message: "Hi, how are you?", countLike: 1},
    {id: 2, message: "It's my first post", countLike: 2},
    {id: 3, message: "WTF?!", countLike: 3},
    {id: 4, message: "Oops!", countLike: 7},
  ],
};

export const profileReducer = (state = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    case ADD_POST_ACTION_TYPE:
      stateCopy = {
        ...state,
        newPostText: '',
        postCounter: state.postCounter + 1,
        posts: [...state.posts, {id: state.postCounter, message: action.post, countLike: 0}]
      };
      break;
    case UPDATE_NEW_POST_TEXT_ACTION_TYPE:
      stateCopy = {
        ...state,
        newPostText: action.text
      };
      break;
    default:
      stateCopy = state;
  }
  return stateCopy;
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
