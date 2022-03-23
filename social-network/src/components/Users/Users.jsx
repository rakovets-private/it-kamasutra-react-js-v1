import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.getUsers();
  }
  
  render() {
    return (
      <div>
        {
          this.props.users.map(u => <div key={u.id}>
          <span>
            <div><img className={s.img} src={u.avatarUrl} alt="avatar"/></div>
            <div>
              {u.followed
                ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                : <button onClick={() => this.props.follow(u.id)}>Follow</button>}
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
        <button onClick={() => this.getUsers()}>Show more</button>
      </div>
    )
  }

  getUsers = () => {
    if (this.props.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
          console.log(response.data.items);
          this.props.addUsers(response.data.items);
        })
        .catch(
          reason => {
            console.log(reason);
          }
        )
    }
  }
}

export default Users;
