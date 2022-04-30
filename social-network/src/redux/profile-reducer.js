import {ProfileApi} from '../api/RestApi';

const ADD_POST = 'social-network/profile/ADD_POST';
const REMOVE_POST = 'social-network/profile/REMOVE_POST';
const UPDATE_USER_STATUS = 'social-network/profile/UPDATE_USER_STATUS';
const SET_USER_PROFILE = 'social-network/profile/SET_USER_PROFILE';

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
    case ADD_POST:
      stateCopy = {
        ...state,
        newPostText: '',
        postCounter: state.postCounter + 1,
        posts: [...state.posts, {id: state.postCounter, message: action.post, countLike: 0}]
      };
      break;
    case REMOVE_POST:
      stateCopy = {
        ...state,
        newPostText: '',
        posts: [...(state.posts.filter(post => post.id !== action.id))]
      };
      break;
    case UPDATE_USER_STATUS:
      stateCopy = {
        ...state,
        userStatus: action.userStatus
      };
      break;
    case SET_USER_PROFILE:
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

export const addPostActionCreator = (post) => {
  return {
    type: ADD_POST,
    post: post
  }
}

export const removePostActionCreator = (id) => {
  return {
    type: REMOVE_POST,
    id: id,
  }
}

export const setUserProfile = (userProfile) => {
  return {
    type: SET_USER_PROFILE,
    userProfile: userProfile,
  }
}

export const setUserStatus = (userStatus) => {
  return {
    type: UPDATE_USER_STATUS,
    userStatus: userStatus,
  }
}

export const setUserProfileTrunkCreator = (userId) => {
  return async (dispatch) => {
    let response = await ProfileApi.getProfile(userId)
    dispatch(setUserProfile(response.data));
  }
}

export const getUserStatusTrunkCreator = (userId) => {
  return async (dispatch) => {
    let response = await ProfileApi.getStatus(userId)
    dispatch(setUserStatus(response.data));
  }
}

export const setUserStatusTrunkCreator = (userStatus) => {
  return async (dispatch) => {
    let response = await ProfileApi.putStatus(userStatus)
    if (response.data.resultCode === 0) {
      dispatch(setUserStatus(userStatus));
    }
  }
}
