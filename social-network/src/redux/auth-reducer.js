const SET_USER_DATA_ACTION_TYPE = 'SET_USER_DATA';

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
};

export const authReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case SET_USER_DATA_ACTION_TYPE:
      return {
        ...state,
        ...action.data,
      };
    default:
      return  state;
  }
}

export const setAuthUserData = (data) => {
  return {
    type: SET_USER_DATA_ACTION_TYPE,
    data: data,
  }
}
