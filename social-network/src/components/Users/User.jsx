import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Users.module.css';
import avatar from './../../assets/images/profile-default.png'

const User = ({user, fetchingUserList, unfollow, follow}) => {
  return (<div>
          <span>
            <div>
              <NavLink to={'/profile/' + user.id}>
              <img className={s.img} src={user.photos.small ? user.photos.small : avatar} alt="avatar"/>
              </NavLink>
            </div>
            <div>
              {user.followed ? <button disabled={fetchingUserList.some(id => id === user.id)}
                                       onClick={() => {
                                         unfollow(user.id)
                                       }}>Unfollow</button> :
                <button disabled={fetchingUserList.some(id => id === user.id)}
                        onClick={() => {
                          follow(user.id)
                        }}>Follow</button>}
            </div>
          </span>
      <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              {/*todo: update REST API*/}
              <div>{"user.location.country"}</div>
              <div>{"user.location.city"}</div>
            </span>
          </span>
      <br/>
    </div>);
}

export default User;
