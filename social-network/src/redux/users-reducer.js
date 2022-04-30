import {RestApi} from '../api/RestApi';
import {updateObjectInArrayById} from '../utils/object-util';

const FOLLOW = "social-network/users/FOLLOW"
const UNFOLLOW = "social-network/users/UNFOLLOW"
const SET_USERS = "social-network/users/SET_USERS"
const SET_CURRENT_PAGE = "social-network/users/SET_CURRENT_PAGE"
const SET_TOTAL_COUNT_USERS = "social-network/users/SET_TOTAL_COUNT_USERS"
const SET_TOGGLE_IS_FETCHING = "social-network/users/SET_TOGGLE_IS_FETCHING"
const UPDATE_FETCHING_USER_LIST = "social-network/users/UPDATE_FETCHING_USER_LIST"

let initialState = {
  users: [],
  pageSize: 10,
  currentPage: 1,
  totalCountUsers: 0,
  isFetching: true,
  fetchingUserList: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: [...action.users]
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };
    case SET_TOTAL_COUNT_USERS:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      };
    case SET_TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case UPDATE_FETCHING_USER_LIST:
      return {
        ...state,
        fetchingUserList: (action.isFetching)
          ? [...state.fetchingUserList, action.userId]
          : state.fetchingUserList.filter(id => id !== action.userId)
      };
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArrayById(state.users, action.userId, 'id', {followed: true})
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArrayById(state.users, action.userId, 'id', {followed: false})
      };
    default:
      return state;
  }
}

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users: users,
  }
}

export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
  }
}

export const setTotalUsersCount = (totalUsersCount) => {
  return {
    type: SET_TOTAL_COUNT_USERS,
    totalUsersCount: totalUsersCount
  }
}

export const setToggleIsFetching = (isFetching) => {
  return {
    type: SET_TOGGLE_IS_FETCHING,
    isFetching: isFetching
  }
}

export const updateFetchingUserList = (isFetching, userId) => {
  return {
    type: UPDATE_FETCHING_USER_LIST,
    isFetching: isFetching,
    userId: userId
  }
}

export const follow = (userId) => {
  return {
    type: FOLLOW,
    userId: userId
  }
}

export const unfollow = (userId) => {
  return {
    type: UNFOLLOW,
    userId: userId
  }
}

export const getUsersThunkCreator = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(setToggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    let response = await RestApi.getUsers(currentPage, pageSize)
    dispatch(setUsers(response.data.items));
    dispatch(setTotalUsersCount(response.data.totalCount));
    dispatch(setToggleIsFetching(false));
  }
}

export const unfollowThunkCreator = (userId) => {
  return async (dispatch) => {
    await toggleFollow(dispatch, userId, RestApi.unfollowFromUser, unfollow);
  }
}

export const followThunkCreator = (userId) => {
  return async (dispatch) => {
    await toggleFollow(dispatch, userId, RestApi.followToUser, follow);
  }
}

const toggleFollow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(updateFetchingUserList(true, userId));
  let response = await apiMethod(userId)
  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
    dispatch(updateFetchingUserList(false, userId));
  }
}
