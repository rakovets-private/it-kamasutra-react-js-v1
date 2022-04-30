import {AuthApi} from '../api/RestApi';
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'social-network/auth/SET_USER_DATA';

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
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
    type: SET_USER_DATA,
    payload: data,
  }
}

export const getAuthUserDataThunkCreator = () => {
  return async (dispatch) => {
    let response = await AuthApi.auth();
    if (Object.keys(response.data.data).length !== 0) {
      dispatch(setAuthUserData({...response.data.data, isAuth: true}));
    }
  }
}

export const loginThunkCreator = (email, password, rememberMe) => {
  return async (dispatch) => {
    let response = await AuthApi.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserDataThunkCreator());
    } else {
      let errorMessage = response.data.messages.length >= 1 ? response.data.messages[0] : 'Some error';
      dispatch(stopSubmit('loginForm', {_error: errorMessage}));
    }
  }
}

export const logoutThunkCreator = () => {
  return async (dispatch) => {
    let response = await AuthApi.logout()
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData({id: null, login: null, email: null, isAuth: false}))
    }
  }
}
