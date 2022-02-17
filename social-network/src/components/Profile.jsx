import React from "react";
import style from './Profile.module.css';

const Profile = () => {
  return (
    <main className={style.profile}>
      <div className={style.preview}>
      </div>
      <div className={style.info}>
        <div>
          <img alt="avatar" src={"https://images.squarespace-cdn.com/content/v1/58b4791ad2b857c893179e34/1537982923668-VL76J6S6ZAY9IXOG0F84/IMG_2849.jpg?format=1500w"}/>
        </div>
        <div>
          My description
        </div>
      </div>
      <div className={"posts"}>
        My posts
        <div className={"sender"}>
          new post
        </div>
        <div className={"item"}>
          post 1
        </div>
        <div className={"item"}>
          post 2
        </div>
      </div>
    </main>
  )
}

export default Profile;