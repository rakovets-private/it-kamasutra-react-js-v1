import React from "react";
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
  return (
    <div className={s.dialog}>
      <NavLink to={"/dialogs/" + props.id} className={SelectedLink()}>{props.name}</NavLink>
    </div>
  )
}

const SelectedLink = () => {
  return (
    select => select.isActive ? s.activeLink : s.dialog
  )
};

export default Dialog;
