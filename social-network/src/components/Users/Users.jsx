import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';

class Users extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        console.log(response.data.items);
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
    let pageCount = Math.ceil(this.props.totalCountUsers / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
      if (i === 1 || i === 2 
        || i === pageCount || i === pageCount - 1 
        || i === this.props.currentPage || i === this.props.currentPage - 1 || i === this.props.currentPage + 1) {
        pages.push(i);
      }
    }
    return (
      <div>
        <div>
          {
            pages.map(p =>
              <span key={p} className={(this.props.currentPage !== p) ? s.page : s.selectedPage} 
                    onClick={(e) => this.onPageChange(p) }>{p}</span>)
          }
        </div>

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
        <button onClick={() => null}>Show more</button>
      </div>
    )
  }
}

export default Users;
