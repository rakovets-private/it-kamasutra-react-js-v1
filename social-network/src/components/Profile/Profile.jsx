import React from "react";
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <main className={style.profile}>
      <div className={style.preview}>
      </div>
      <div className={style.info}>
        <div>
          <img alt="avatar"
               src={"https://images.squarespace-cdn.com/content/v1/58b4791ad2b857c893179e34/1537982923668-VL76J6S6ZAY9IXOG0F84/IMG_2849.jpg?format=1500w"}/>
        </div>
        <div>
          My description
        </div>
      </div>
      <MyPosts/>
    </main>
  )
}

export default Profile;
