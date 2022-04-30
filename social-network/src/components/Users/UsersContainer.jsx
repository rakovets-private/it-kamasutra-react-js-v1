import React from "react";
import {connect} from 'react-redux';
import {followThunkCreator, getUsersThunkCreator, unfollowThunkCreator} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {
  getCurrentPage,
  getFetchingUserList,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers
} from '../../redux/user-selectors';

class UserContainer extends React.Component {
  componentDidMount() {
    const {getUsers, currentPage, pageSize} = this.props;
    getUsers(currentPage, pageSize);
  }

  onPageChange(pageNumber) {
    const {getUsers, pageSize} = this.props;
    getUsers(pageNumber, pageSize);
  }

  render() {
    return (<>
      {this.props.isFetching ? <Preloader
        isFetching={this.props.isFetching}
      /> : <Users
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
    isFetching: getIsFetching(state),
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    fetchingUserList: getFetchingUserList(state),
  }
};

export default connect(mapStateToProps, {
  getUsers: getUsersThunkCreator, follow: followThunkCreator, unfollow: unfollowThunkCreator
})(UserContainer);
