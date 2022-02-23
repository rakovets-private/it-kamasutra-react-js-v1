import React from "react";
import s from "./Dialogs.module.css"

const SelectedLink = () => {
  return (
    select => select.isActive ? s.activeLink : s.dialog
  )
};

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <div className={SelectedLink()}>Ivan</div>
        <div className={SelectedLink()}>Daniel</div>
        <div className={SelectedLink()}>Viktor</div>
        <div className={SelectedLink()}>Valentina</div>
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
