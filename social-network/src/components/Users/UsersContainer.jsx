import React from "react";
import {connect} from 'react-redux';
import Users from './Users';
import {followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC} from '../../redux/users-reducer';

let mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalCountUsers: state.usersPage.totalCountUsers,
  currentPage: state.usersPage.currentPage
});

let mapDispatchToProps = (dispatch) => ({
  follow: (userId) => {
    dispatch(followAC(userId));
  },
  unfollow: (userId) => {
    dispatch(unfollowAC(userId));
  },
  setUsers: (users) => {
    dispatch(setUsersAC(users));
  },
  setCurrentPage: (currentPage) => {
    dispatch(setCurrentPageAC(currentPage));
  },
  setTotalCountUsers: (totalUsersCount) => {
    dispatch(setTotalUsersCountAC(totalUsersCount))
  }
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
