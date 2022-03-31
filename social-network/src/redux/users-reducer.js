const FOLLOW_ACTION_TYPE = "FOLLOW"
const UNFOLLOW_ACTION_TYPE = "UNFOLLOW"
const SET_USERS_ACTION_TYPE = "SET_USERS"
const SET_CURRENT_PAGE_ACTION_TYPE = "SET_CURRENT_PAGE"
const SET_TOTAL_COUNT_USERS_ACTION_TYPE = "SET_TOTAL_COUNT_USERS"
const SET_TOGGLE_IS_FETCHING_ACTION_TYPE = "SET_TOGGLE_IS_FETCHING"

let initialState = {
  users: [],
  pageSize: 10,
  currentPage: 1,
  totalCountUsers: 0,
  isFetching: true
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
