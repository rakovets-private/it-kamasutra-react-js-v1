import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const SelectedLink = () => {
  return (
    select => select.isActive ? s.activeLink : s.dialog
  )
};

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <div className={s.dialog}>
          <NavLink to={"/dialogs/1"} className={SelectedLink()}>Ivan</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to={"/dialogs/2"} className={SelectedLink()}>Daniel</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to={"/dialogs/3"} className={SelectedLink()}>Viktor</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to={"/dialogs/4"} className={SelectedLink()}>Valentina</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>Hello</div>
        <div className={s.message}>It's me!</div>
        <div className={s.message}>Cool</div>
      </div>
    </div>
  )
}

export default Dialogs;
