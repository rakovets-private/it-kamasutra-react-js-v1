import React from "react";
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.post}>
      <img className={s.img}
           src='https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg'
      />
      <span>{props.message}</span>
      <div>
        <span>like {props.countLike}</span>
      </div>
    </div>
  )
}

export default Post;
