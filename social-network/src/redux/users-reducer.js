const SHOW_MORE_ACTION_TYPE = "SHOW-MORE"
const FOLLOW_ACTION_TYPE = "FOLLOW"
const UNFOLLOW_ACTION_TYPE = "UNFOLLOW"

let initialState = {
  users: [
    {
      id: 1,
      followed: true,
      shortname: 'Dmitry R.',
      status: '...',
      location: {country: 'Belarus', city: 'Minsk'},
      avatarUrl: "https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg"
    },
    {
      id: 2,
      followed: false,
      shortname: 'Genry T.',
      status: '...',
      location: {country: 'USA', city: 'New-York'},
      avatarUrl: "https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg"
    },
    {
      id: 3,
      followed: true,
      shortname: 'Bogdan S.',
      status: '...',
      location: {country: 'Ukraine', city: 'Kiev'},
      avatarUrl: "https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg"
    },
    {
      id: 4,
      followed: false,
      shortname: 'Elena A.',
      status: '...',
      location: {country: 'Belarus', city: 'Brest'},
      avatarUrl: "https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg"
    }
  ]
};

export const usersReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case SHOW_MORE_ACTION_TYPE:
      return {
        ...state,
        users: [...state.users, ...action.users]
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

export const showMoreAC = (users) => {
  return {
    type: SHOW_MORE_ACTION_TYPE,
    users: users
  }
}

export const followAC = (userId) => {
  return {
    type: FOLLOW_ACTION_TYPE,
    userId: userId
  }
}

export const unfollowAC = (userId) => {
  return {
    type: UNFOLLOW_ACTION_TYPE,
    userId: userId
  }
}
