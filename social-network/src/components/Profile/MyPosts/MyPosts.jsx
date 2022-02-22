import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={"posts"}>
      My posts
      <div className={"sender"}>
        <textarea></textarea>
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
