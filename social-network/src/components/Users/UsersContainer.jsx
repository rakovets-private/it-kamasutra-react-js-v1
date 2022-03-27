import React from "react";
import {connect} from 'react-redux';
import {
  followAC,
  setCurrentPageAC,
  setToggleIsFetchingAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowAC
} from '../../redux/users-reducer';
import axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UserContainer extends React.Component {
  componentDidMount() {
    this.props.setToggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCountUsers(response.data.totalCount);
        this.props.setToggleIsFetching(false);
      })
      .catch(
        reason => {
          console.log(reason);
        }
      )
  }

  onPageChange(pageNumber) {
    this.props.setCurrentPage(pageNumber);
    this.props.setToggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setToggleIsFetching(false);
      })
      .catch(
        reason => {
          console.log(reason);
        }
      )
  }

  render() {
    return (<>
      { this.props.isFetching
        ? <Preloader
          isFetching={this.props.isFetching}
        />
        : <Users
          users={this.props.users}
          pageSize={this.props.pageSize}
          totalCountUsers={this.props.totalCountUsers}
          currentPage={this.props.currentPage}
          onPageChange={this.onPageChange.bind(this)}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />}
    </>)
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCountUsers: state.usersPage.totalCountUsers,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => dispatch(followAC(userId)),
    unfollow: (userId) => dispatch(unfollowAC(userId)),
    setUsers: (users) => dispatch(setUsersAC(users)),
    setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
    setTotalCountUsers: (totalUsersCount) => dispatch(setTotalUsersCountAC(totalUsersCount)),
    setToggleIsFetching: (isFetching) => dispatch(setToggleIsFetchingAC(isFetching))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
