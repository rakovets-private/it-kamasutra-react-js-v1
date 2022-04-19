import {AuthApi} from '../api/RestApi';
import {stopSubmit} from 'redux-form';

const SET_USER_DATA_ACTION_TYPE = 'SET_USER_DATA';

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA_ACTION_TYPE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

export const setAuthUserData = (data) => {
  return {
    type: SET_USER_DATA_ACTION_TYPE,
    payload: data,
  }
}

export const getAuthUserDataThunkCreator = () => {
  return (dispatch) => {
    AuthApi.auth()
      .then(response => {
        if (Object.keys(response.data.data).length !== 0) {
          dispatch(setAuthUserData({...response.data.data, isAuth: true}));
        }
      })
  }
}

export const loginThunkCreator = (email, password, rememberMe) => (dispatch) => {
  return (
    AuthApi.login(email, password, rememberMe)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(getAuthUserDataThunkCreator());
        } else {
          let errorMessage = response.data.messages.length >= 1 ? response.data.messages[0] : 'Some error';
          dispatch(stopSubmit('loginForm', {_error: errorMessage}));
        }
      }));
}

export const logoutThunkCreator = () => {
  return (dispatch) => {
    AuthApi.logout()
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(setAuthUserData({id: null, login: null, email: null, isAuth: false}))
        }
      })
  }
}

