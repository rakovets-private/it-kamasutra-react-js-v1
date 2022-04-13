import React from 'react';
import s from './FormControls.module.css'

export const Element = ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error;
  return (<div className={s.formControl + ' ' + (hasError ? s.error : '')}>
    <div>
      <props.elementType {...props} {...input}/>
    </div>
    {hasError && <div><span>{meta.error}</span></div>}
  </div>)
}

export const Textarea = (props) => {
  return (<Element {...props} elementType='textarea'/>)
}

export const Input = ({input, meta, ...props}) => {
  return (<Element {...props} elementType='input'/>)
}
