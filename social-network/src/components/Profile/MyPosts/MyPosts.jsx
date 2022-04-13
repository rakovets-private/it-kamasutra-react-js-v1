import React from "react";
import Post from "./Post/Post";
import AddNewPostForm from './AddNewPostForm/AddNewPostForm';
import s from "./MyPosts.module.css"

const MyPosts = (props) => {
  let postElements = props.posts.map(p => <Post key={p.id} message={p.message} countLike={p.countLike}/>)

  const addPost = (values) => {
    props.addPost(values.newPost);
  }

  return (
    <div className={s.posts}>
      My posts
      <AddNewPostForm onSubmit={addPost}/>
      {postElements}
    </div>
  )
}

export default MyPosts;
