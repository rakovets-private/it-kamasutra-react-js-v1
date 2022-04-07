import React from "react";
import ProfileStatus from './ProfileStatus';
import s from './ProfileInfo.module.css';
import avatar from './../../../assets/images/profile-default.png'

const ProfileInfo = (props) => {
  return (
    <div className={s.profile}>
      <div className={s.preview}>
      </div>
      <div className={s.info}>
        <div className={s.avatar}>
          <img alt="avatar"
               src={props.photos.large ? props.photos.large : avatar}/>
        </div>
        <div className={s.description}>
          <div><b>Full name</b>: {props.fullName}</div>
          <div><b>About me</b>: {props.aboutMe}</div>
          <div><b>Looking for a job</b>: {props.lookingForAJob ? 'Yes' : 'No'}</div>
          <div><b>Job Description</b>: {props.lookingForAJobDescription}</div>
        </div>
        <ProfileStatus 
          userId={props.userId}
          userStatus={props.userStatus}
          setUserStatusTrunkCreator={props.setUserStatusTrunkCreator}
        />
      </div>
    </div>
  )
}

export default ProfileInfo;
