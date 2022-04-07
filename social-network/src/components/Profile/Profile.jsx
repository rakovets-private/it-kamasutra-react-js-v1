import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo {...props.userProfile}
                   userStatus={props.userStatus}
                   setUserStatusTrunkCreator={props.setUserStatusTrunkCreator}
      />
      <MyPostsContainer/>
    </div>
  )
}

export default Profile;
