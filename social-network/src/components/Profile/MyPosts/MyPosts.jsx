import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css"

const MyPosts = () => {
  let posts = [
    {id: 1, message: "Hi, how are you?", countLike: 1},
    {id: 2, message: "It's my first post", countLike: 2},
    {id: 3, message: "WTF?!", countLike: 3},
    {id: 4, message: "Oops!", countLike: 7},
  ]

  let postElements = posts.map(p => <Post message={p.message} countLike={p.countLike}/>)

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
