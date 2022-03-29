import React from 'react';
import avatar from './../../assets/images/profile-default.png'
import s from './Users.module.css';
import {NavLink} from 'react-router-dom';

let Users = (props) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    if (i === 1 || i === 2
      || i === pageCount || i === pageCount - 1
      || i === props.currentPage || i === props.currentPage - 1 || i === props.currentPage + 1) {
      pages.push(i);
    }
  }
  return (
    <div>
      <div>
        {
          pages.map(p =>
            <span key={p} className={(props.currentPage !== p) ? s.page : s.selectedPage}
                  onClick={(e) => props.onPageChange(p)}>{p}</span>)
        }
      </div>

      {
        props.users.map(u => <div key={u.id}>
          <span>
            <div>
              <NavLink to={'/profile/' + u.id}>
              <img className={s.img} src={u.photos.small ? u.photos.small : avatar} alt="avatar"/>
              </NavLink>
            </div>
            <div>
              {u.followed
                ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                : <button onClick={() => props.follow(u.id)}>Follow</button>}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              {/*todo: update REST API*/}
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
          <br/></div>)
      }
      <button onClick={() => null}>Show more</button>
    </div>
  )
}

export default Users;
