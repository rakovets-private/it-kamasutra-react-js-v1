import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';

const Users = (props) => {
  if (props.users.length === 0) {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        console.log(response.data.items);
        props.addUsers(response.data.items);
      })
      .catch(
        reason => {
          console.log(reason);
        }
      )
  }
  
  let users = [
    {
      id: 5,
      followed: false,
      shortname: 'Elena A.',
      status: '...',
      location: {country: 'Belarus', city: 'Brest'},
      avatarUrl: "https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg"
    }
  ]
  
  return (
    <div>
      {
        props.users.map(u => <div key={u.id}>
          <span>
            <div><img className={s.img} src={u.avatarUrl} alt="avatar"/></div>
            <div>
              {u.followed
                ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button> 
                : <button onClick={() => props.follow(u.id)}>Follow</button>}
            </div>
          </span>
          <span>
            <span>
              <div>{u.shortname}</div>
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
      <button onClick={() => props.addUsers(users)}>Show more</button>
    </div>
  )
}

export default Users;
