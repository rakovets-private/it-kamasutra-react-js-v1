import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css"

const MyPosts = () => {
  return (
    <div className={s.posts}>
      My posts
      <div className={"sender"}>
        <textarea></textarea><br/>
        <button>Add post</button>
      </div>
      <Post message="Hi, how are you?" countLike="2"/>
      <Post message="It's my first post" countLike="2"/>
      <Post message="WTF?!" countLike="2"/>
      <Post message="Oops!" countLike="2"/>
    </div>
  )
}

export default MyPosts;
