import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
  let dialogsData = [
    {id: 1, name: "Ivan"},
    {id: 2, name: "Daniel"},
    {id: 3, name: "Viktor"},
    {id: 4, name: "Valentina"},
  ];
  let messageData = [
    {id: 1, message: "Hi"},
    {id: 2, message: "Hello"},
    {id: 3, message: "It's me!"},
    {id: 4, message: "Cool"},
  ]

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <Dialog name={dialogsData[0].name} id={dialogsData[0].id}/>
        <Dialog name={dialogsData[1].name} id={dialogsData[1].id}/>
        <Dialog name={dialogsData[2].name} id={dialogsData[2].id}/>
        <Dialog name={dialogsData[3].name} id={dialogsData[3].id}/>
      </div>
      <div className={s.messages}>
        <Message message={messageData[0].message}/>
        <Message message={messageData[1].message}/>
        <Message message={messageData[2].message}/>
        <Message message={messageData[3].message}/>
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
