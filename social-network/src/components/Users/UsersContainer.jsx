import React from "react";
import {connect} from 'react-redux';
import {
  follow,
  setCurrentPage,
  setToggleIsFetching,
  setTotalUsersCount,
  setUsers,
  unfollow
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {getUsers} from '../../api/api';

class UserContainer extends React.Component {
  componentDidMount() {
    this.props.setToggleIsFetching(true);
    
    getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        this.props.setUsers(data.data.items);
        this.props.setTotalUsersCount(data.data.totalCount);
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
    getUsers(pageNumber, this.props.pageSize)
      .then(data => {
        this.props.setUsers(data.data.items);
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
      {this.props.isFetching
        ? <Preloader
          isFetching={this.props.isFetching}
        />
        : <Users
          users={this.props.users}
          pageSize={this.props.pageSize}
          totalUsersCount={this.props.totalUsersCount}
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
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
};

export default connect(
  mapStateToProps,
  {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setToggleIsFetching}
)(UserContainer);
