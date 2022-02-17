import React from "react";

const Navbar = () => {
  return (
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
  )
}

export default Navbar;