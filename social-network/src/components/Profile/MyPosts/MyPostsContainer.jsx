import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import StoreContext from '../../../storeContext';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer>{
      (store) => {
        let addPost = (text) => {
          store.dispatch(addPostActionCreator(text));
        }

        let updateNewPostText = (text) => {
          store.dispatch(updateNewPostTextActionCreator(text));
        }

        return (<MyPosts
          addPost={addPost}
          updateNewPostText={updateNewPostText}
          newPostText={store.getState().profilePage.newPostText}
          posts={store.getState().profilePage.posts}
        />)
      }
    }</StoreContext.Consumer>
  );
}

export default MyPostsContainer;
