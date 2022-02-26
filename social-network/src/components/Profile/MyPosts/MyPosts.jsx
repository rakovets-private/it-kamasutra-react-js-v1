import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css"

const MyPosts = (props) => {
  let postElements = props.posts.map(p => <Post key={p.id} message={p.message} countLike={p.countLike}/>)

  return (
    <div className={s.posts}>
      My posts
      <div className={"sender"}>
        <textarea></textarea><br/>
        <button>Add post</button>
      </div>
      {postElements}
    </div>
  )
}

export default MyPosts;
