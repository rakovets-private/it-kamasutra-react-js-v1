import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css"

const MyPosts = () => {
  let postData = [
    {id: 1, message: "Hi, how are you?", countLike: 1},
    {id: 2, message: "It's my first post", countLike: 2},
    {id: 3, message: "WTF?!", countLike: 3},
    {id: 4, message: "Oops!", countLike: 7},
  ]
  return (
    <div className={s.posts}>
      My posts
      <div className={"sender"}>
        <textarea></textarea><br/>
        <button>Add post</button>
      </div>
      <Post message={postData[0].message} countLike={postData[0].countLike}/>
      <Post message={postData[1].message} countLike={postData[1].countLike}/>
      <Post message={postData[2].message} countLike={postData[2].countLike}/>
      <Post message={postData[3].message} countLike={postData[3].countLike}/>
    </div>
  )
}

export default MyPosts;
