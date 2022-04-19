import {getAuthUserDataThunkCreator} from './auth-reducer';

const INITIALIZED_SUCCESS_ACTION_TYPE = 'INITIALIZED_SUCCESS';

let initialState = {
  initialized: false
};

export const appReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case INITIALIZED_SUCCESS_ACTION_TYPE:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS_ACTION_TYPE});

export const initializeThunkCreator = () => (dispatch) => {
  let promise = dispatch(getAuthUserDataThunkCreator());
  Promise.all([promise])
    .then(() => dispatch(initializedSuccess()));
}

