import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css"
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/state';

const MyPosts = (props) => {
  let postElements = props.posts.map(p => <Post key={p.id} message={p.message} countLike={p.countLike}/>)
  let newPostElement = React.createRef()
  
  let addPost = () => {
    props.dispatch(addPostActionCreator(newPostElement.current.value));
    newPostElement.current.value = '';
  }

  let onPostChange = () => {
    props.dispatch(updateNewPostTextActionCreator(newPostElement.current.value));
  }

  return (
    <div className={s.posts}>
      My posts
      <div className={"sender"}>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/><br/>
        <button onClick={addPost}>Add post</button>
      </div>
      {postElements}
    </div>
  )
}

export default MyPosts;
