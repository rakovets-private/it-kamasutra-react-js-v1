import React from "react";
import s from './Post.module.css';
import avatar from './../../../../assets/images/profile-default.png'

const Post = (props) => {
  return (
    <div className={s.post}>
      <img className={s.img}
           src={avatar}
           alt={'avatar'}/>
      <span>{props.message}</span>
      <div>
        <span>like {props.countLike}</span>
      </div>
    </div>
  )
}

export default Post;
