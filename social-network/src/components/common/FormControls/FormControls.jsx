import React from 'react';
import s from './FormControls.module.css'

export const Element = ({input, meta, ...props}) => {
  const hasError = meta && meta.touched && meta.error;
  return (<div className={s.formControl + ' ' + (hasError ? s.error : '')}>
    <div>
      <props.elementtype {...props} {...input}/>
    </div>
    {hasError && <div><span>{meta.error}</span></div>}
  </div>)
}

export const Textarea = (props) => {
  return (<Element {...props} elementtype='textarea'/>)
}

export const Input = (props) => {
  return (<Element {...props} elementtype='input'/>)
}
