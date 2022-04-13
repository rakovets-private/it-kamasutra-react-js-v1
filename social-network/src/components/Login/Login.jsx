import React from 'react';
import LoginForm from './LoginForm/LoginForm';

const Login = () => {
  let login = (formData) => {
    console.log(formData);
  }
  
  return (<>
      <h2>Login</h2>
      <LoginForm onSubmit={login}/>
    </>
  )
}

export default Login;
