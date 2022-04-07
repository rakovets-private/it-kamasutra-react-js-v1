import React from 'react';
import {Field, reduxForm} from 'redux-form';

const Login = () => {
  let login = (formData) => {
    console.log(formData);
  }
  
  return (<>
      <h2>Login</h2>
      <LoginReduxForm onSubmit={login}/>
    </>
  )
}

const LoginForm = (props) => {
  return (<form onSubmit={props.handleSubmit}>
    <div><Field name='login' component='input' placeholder={'Login'}/></div>
    <div><Field name='password' component='input' type='password' placeholder={'Password'}/></div>
    <div><label><Field name='rememberMe' component='input' type='checkbox'/>Remember me</label></div>
    <div><input type='submit' value={'Sign in'}/></div>
  </form>)
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default Login;
