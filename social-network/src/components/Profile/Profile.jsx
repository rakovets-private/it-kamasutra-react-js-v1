import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {Navigate} from 'react-router-dom';

const Profile = (props) => {
  if (!props.isAuth) {
    return <Navigate to={'/login'}/>
  }
  
  return (
    <div>
      <ProfileInfo {...props.userProfile}/>
      <MyPostsContainer/>
    </div>
  )
}

export default Profile;
