import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

const Users = (props) => {
  return (<div>
    <Paginator
      totalCount={props.totalUsersCount}
      pageSize={props.pageSize}
      currentPage={props.currentPage}
      onPageChange={props.onPageChange}/>
    {props.users.map(user => <User
      key={user.id}
      user={user}
      fetchingUserList={props.fetchingUserList}
      unfollow={props.unfollow}
      follow={props.follow}/>)}
  </div>)
}

export default Users;
