import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={s.profile}>
      <div className={s.preview}>
      </div>
      <div className={s.info}>
        <div>
          <img alt="avatar"
               src={"https://images.squarespace-cdn.com/content/v1/58b4791ad2b857c893179e34/1537982923668-VL76J6S6ZAY9IXOG0F84/IMG_2849.jpg?format=1500w"}/>
        </div>
        <div>
          My description
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;
