import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css"
import {Field, reduxForm} from 'redux-form';

const MyPosts = (props) => {
  let postElements = props.posts.map(p => <Post key={p.id} message={p.message} countLike={p.countLike}/>)

  const addPost = (values) => {
    props.addPost(values.newPost);
  }

  return (
    <div className={s.posts}>
      My posts
      <AddNewPostReduxForm onSubmit={addPost}/>
      {postElements}
    </div>
  )
}

const AddNewPostFrom = (props) => {
  return (<form onSubmit={props.handleSubmit}>
    <div className={"sender"}>
      <div><Field component='textarea' name='newPost' placeholder='My new post'/></div>
      <div><input type='submit' value='Add post'/></div>
    </div>
  </form>);
}

const AddNewPostReduxForm = reduxForm({form: 'myPostAddPostForm'})(AddNewPostFrom);

export default MyPosts;
