import React from "react";
import {connect} from 'react-redux';
import Users from './Users';
import {followAC, addUsersAC, unfollowAC} from '../../redux/users-reducer';

let mapStateToProps = (state) => ({
  users: state.usersPage.users
});

let mapDispatchToProps = (dispatch) => ({
  follow: (userId) => {
    dispatch(followAC(userId));
  },
  unfollow: (userId) => {
    dispatch(unfollowAC(userId));
  },
  addUsers: (users) => {
    dispatch(addUsersAC(users));
  }
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
