import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className={"app-wrapper"}>
      <header className="header">
        <div className={"header-logo"}>
          <img alt={"logo"} src={"https://cryptologos.cc/logos/uniswap-uni-logo.svg?v=021"}/>
        </div>
      </header>
      <nav className={"nav"}>
        <div className={"nav-item"}>
          <a href={"#profile"}>Profile</a>
        </div>
        <div className={"nav-item"}>
          <a href={"#messages"}>Messages</a>
        </div>
        <div className={"nav-item"}>
          <a href={"#news"}>News</a>
        </div>
        <div className={"nav-item"}>
          <a href={"#music"}>Music</a>
        </div>
        <div className={"nav-item"}>
          <a href={"#settings"}>Settings</a>
        </div>
      </nav>
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
    </div>
  );
}

export default App;
