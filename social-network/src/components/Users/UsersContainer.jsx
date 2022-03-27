import React from "react";
import {connect} from 'react-redux';
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from '../../redux/users-reducer';
import axios from 'axios';
import Users from './Users';

class UserContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCountUsers(response.data.totalCount);
      })
      .catch(
        reason => {
          console.log(reason);
        }
      )
  }

  onPageChange(pageNumber) {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        console.log(response.data.items);
        this.props.setUsers(response.data.items);
      })
      .catch(
        reason => {
          console.log(reason);
        }
      )
  }

  render() {
    return <Users
      users={this.props.users}
      pageSize={this.props.pageSize}
      totalCountUsers={this.props.totalCountUsers}
      currentPage={this.props.currentPage}
      onPageChange={this.onPageChange.bind(this)}
      follow={this.props.follow}
      unfollow={this.props.unfollow}
    />
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCountUsers: state.usersPage.totalCountUsers,
    currentPage: state.usersPage.currentPage
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => dispatch(followAC(userId)),
    unfollow: (userId) => dispatch(unfollowAC(userId)),
    setUsers: (users) => dispatch(setUsersAC(users)),
    setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
    setTotalCountUsers: (totalUsersCount) => dispatch(setTotalUsersCountAC(totalUsersCount))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
