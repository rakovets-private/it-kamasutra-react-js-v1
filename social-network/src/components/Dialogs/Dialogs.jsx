import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <Dialog name="Ivan" id="1"/>
        <Dialog name="Daniel" id="2"/>
        <Dialog name="Viktor" id="3"/>
        <Dialog name="Valentina" id="4"/>
      </div>
      <div className={s.messages}>
        <Message message="Hi"/>
        <Message message="Hello"/>
        <Message message="It's me!"/>
        <Message message="Cool"/>
      </div>
    </div>
  )
}

const Dialog = (props) => {
  return (
    <div className={s.dialog}>
      <NavLink to={"/dialogs/" + props.id} className={SelectedLink()}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={s.message}>{props.message}</div>
  )
}

const SelectedLink = () => {
  return (
    select => select.isActive ? s.activeLink : s.dialog
  )
};

export default Dialogs;
