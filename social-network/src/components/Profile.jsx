import React from "react";

const Profile = () => {
  return (
    <main className={"content"}>
      <div className={"content-preview"}>
      </div>
      <div className={"content-profile"}>
        <div className={"content-profile-avatar"}>
          <img alt="avatar" src={"https://images.squarespace-cdn.com/content/v1/58b4791ad2b857c893179e34/1537982923668-VL76J6S6ZAY9IXOG0F84/IMG_2849.jpg?format=1500w"}/>
        </div>
        <div className={"content-profile-description"}>
          My description
        </div>
      </div>
      <div className={"content-post"}>
        My posts
        <div className={"content-post-sender"}>
          new post
        </div>
        <div className={"content-post-item"}>
          post 1
        </div>
        <div className={"content-post-item"}>
          post 2
        </div>
      </div>
    </main>
  )
}

export default Profile;