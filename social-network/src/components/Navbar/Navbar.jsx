import React from "react";
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const SelectedLink = () => {
  return (
    select => select.isActive ? style.activeLink : style.item
  )
};

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <NavLink to="/profile" className={SelectedLink()}>Profile</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/dialogs" className={SelectedLink()}>Messages</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/news" className={SelectedLink()}>News</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/music" className={SelectedLink()}>Music</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/settings" className={SelectedLink()}>Settings</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;
