import {RestApi} from '../api/RestApi';

const FOLLOW_ACTION_TYPE = "FOLLOW"
const UNFOLLOW_ACTION_TYPE = "UNFOLLOW"
const SET_USERS_ACTION_TYPE = "SET_USERS"
const SET_CURRENT_PAGE_ACTION_TYPE = "SET_CURRENT_PAGE"
const SET_TOTAL_COUNT_USERS_ACTION_TYPE = "SET_TOTAL_COUNT_USERS"
const SET_TOGGLE_IS_FETCHING_ACTION_TYPE = "SET_TOGGLE_IS_FETCHING"
const UPDATE_FETCHING_USER_LIST_ACTION_TYPE = "UPDATE_FETCHING_USER_LIST"

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
    case SET_USERS_ACTION_TYPE:
      return {
        ...state,
        users: [...action.users]
      };
    case SET_CURRENT_PAGE_ACTION_TYPE:
      return {
        ...state,
        currentPage: action.currentPage
      };
    case SET_TOTAL_COUNT_USERS_ACTION_TYPE:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      };
    case SET_TOGGLE_IS_FETCHING_ACTION_TYPE:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case UPDATE_FETCHING_USER_LIST_ACTION_TYPE:
      return {
        ...state,
        fetchingUserList: (action.isFetching)
          ? [...state.fetchingUserList, action.userId]
          : state.fetchingUserList.filter(id => id !== action.userId)
      };
    case FOLLOW_ACTION_TYPE:
      return {
        ...state,
        users: state.users.map(u => {
            if (u.id === action.userId) {
              return {...u, followed: true};
            } else {
              return u;
            }
          }
        )
      };
    case UNFOLLOW_ACTION_TYPE:
      return {
        ...state,
        users: state.users.map(u => {
            if (u.id === action.userId) {
              return {...u, followed: false};
            } else {
              return u;
            }
          }
        )
      };
    default:
      return state;
  }
}

export const getUsersThunkCreator = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setToggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    RestApi.getUsers(currentPage, pageSize)
      .then(data => {
        dispatch(setUsers(data.data.items));
        dispatch(setTotalUsersCount(data.data.totalCount));
        dispatch(setToggleIsFetching(false));
      })
  }
}

export const unfollowThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(updateFetchingUserList(true, userId));
    RestApi.unfollowFromUser(userId)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(unfollow(userId));
          dispatch(updateFetchingUserList(false, userId));
        }
      })
  }
}

export const followThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(updateFetchingUserList(true, userId));
    RestApi.followToUser(userId)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(follow(userId));
          dispatch(updateFetchingUserList(false, userId));
        }
      })
  }
}

export const setUsers = (users) => {
  return {
    type: SET_USERS_ACTION_TYPE,
    users: users,
  }
}

export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE_ACTION_TYPE,
    currentPage: currentPage
  }
}

export const setTotalUsersCount = (totalUsersCount) => {
  return {
    type: SET_TOTAL_COUNT_USERS_ACTION_TYPE,
    totalUsersCount: totalUsersCount
  }
}

export const setToggleIsFetching = (isFetching) => {
  return {
    type: SET_TOGGLE_IS_FETCHING_ACTION_TYPE,
    isFetching: isFetching
  }
}

export const updateFetchingUserList = (isFetching, userId) => {
  return {
    type: UPDATE_FETCHING_USER_LIST_ACTION_TYPE,
    isFetching: isFetching,
    userId: userId
  }
}

export const follow = (userId) => {
  return {
    type: FOLLOW_ACTION_TYPE,
    userId: userId
  }
}

export const unfollow = (userId) => {
  return {
    type: UNFOLLOW_ACTION_TYPE,
    userId: userId
  }
}
