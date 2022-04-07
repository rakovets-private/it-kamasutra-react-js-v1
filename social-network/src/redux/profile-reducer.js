import {ProfileApi, RestApi} from '../api/RestApi';

const ADD_POST_ACTION_TYPE = 'ADD_POST';
const UPDATE_NEW_POST_TEXT_ACTION_TYPE = 'UPDATE_NEW_POST_TEXT';
const UPDATE_USER_STATUS_ACTION_TYPE = 'UPDATE_USER_STATUS';
const SET_USER_PROFILE_ACTION_TYPE = 'SET_USER_PROFILE';

let initialState = {
  postCounter: 10,
  newPostText: '',
  posts: [
    {id: 1, message: "Hi, how are you?", countLike: 1},
    {id: 2, message: "It's my first post", countLike: 2},
    {id: 3, message: "WTF?!", countLike: 3},
    {id: 4, message: "Oops!", countLike: 7},
  ],
  userProfile: null,
  isFetching: true,
  userStatus: '',
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
    case UPDATE_USER_STATUS_ACTION_TYPE:
      stateCopy = {
        ...state,
        userStatus: action.userStatus
      };
      break;
    case SET_USER_PROFILE_ACTION_TYPE:
      stateCopy = {
        ...state,
        userProfile: action.userProfile,
        isFetching: false,
      };
      break;
    default:
      stateCopy = state;
  }
  return stateCopy;
}

export const setUserProfileTrunkCreator = (userId) => {
  return (dispatch) => {
    ProfileApi.getProfile(userId)
      .then(response => {
        dispatch(setUserProfile(response.data));
      })
  }
}

export const getUserStatusTrunkCreator = (userId) => {
  return (dispatch) => {
    ProfileApi.getStatus(userId)
      .then(response => {
        dispatch(setUserStatus(response.data));
      })
  } 
}

export const setUserStatusTrunkCreator = (userStatus) => {
  return (dispatch) => {
    ProfileApi.putStatus(userStatus)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(setUserStatus(userStatus));
        }
      })
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

export const setUserProfile = (userProfile) => {
  return {
    type: SET_USER_PROFILE_ACTION_TYPE,
    userProfile: userProfile,
  }
}

export const setUserStatus = (userStatus) => {
  return {
    type: UPDATE_USER_STATUS_ACTION_TYPE,
    userStatus: userStatus,
  }
}
