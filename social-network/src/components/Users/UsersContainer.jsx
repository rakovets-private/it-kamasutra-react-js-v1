import React from "react";
import {connect} from 'react-redux';
import {
  unfollowThunkCreator,
  getUsersThunkCreator,
  followThunkCreator
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UserContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChange(pageNumber) {
    this.props.getUsers(pageNumber, this.props.pageSize);
  }

  render() {
    return (<>
      {this.props.isFetching
        ? <Preloader
          isFetching={this.props.isFetching}
        />
        : <Users
          users={this.props.users}
          pageSize={this.props.pageSize}
          totalUsersCount={this.props.totalUsersCount}
          currentPage={this.props.currentPage}
          fetchingUserList={this.props.fetchingUserList}
          onPageChange={this.onPageChange.bind(this)}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />}
    </>)
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.usersPage.isFetching,
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    fetchingUserList: state.usersPage.fetchingUserList,
  }
};

export default connect(
  mapStateToProps,
  {
    getUsers: getUsersThunkCreator,
    follow: followThunkCreator,
    unfollow: unfollowThunkCreator
  }
)(UserContainer);
