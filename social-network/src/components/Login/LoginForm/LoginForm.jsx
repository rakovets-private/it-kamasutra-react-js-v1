import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Input} from '../../common/FormControls/FormControls';
import {required} from '../../../utils/validatos';
import s from './LoginForm.module.css';

const LoginForm = (props) => {
  return (<form onSubmit={props.handleSubmit}>
    <div>
      <Field name='email' component={Input} type='email' placeholder={'Login'} validate={[required]}/>
    </div>
    <div>
      <Field name='password' component={Input} type='password' placeholder={'Password'} validate={[required]}/>
    </div>
    <div>
      <label><Field name='rememberMe' component={Input} type='checkbox'/>Remember me</label>
    </div>
    {props.error && <div className={s.formError}>{props.error}</div>}
    <div>
      <input type='submit' value={'Sign in'}/>
    </div>
  </form>)
}

export default reduxForm({form: 'loginForm'})(LoginForm);
