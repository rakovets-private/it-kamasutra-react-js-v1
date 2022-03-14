import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  let addPost = (text) => {
    props.store.dispatch(addPostActionCreator(text));
  }

  let updateNewPostText = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  }

  return (<MyPosts
    addPost={addPost}
    updateNewPostText={updateNewPostText}
    newPostText={props.store.getState().profilePage.newPostText}
    posts={props.store.getState().profilePage.posts}
  />);
}

export default MyPostsContainer;
