import React from 'react';
import {connect} from 'react-redux';
import LoginForm from './LoginForm/LoginForm';
import {loginThunkCreator} from '../../redux/auth-reducer';
import {Navigate} from 'react-router-dom';

const Login = (props) => {
  let login = (values) => {
    props.loginThunkCreator(values.email, values.password, values.rememberMe);
  }

  if (props.isAuth) {
    return <Navigate to={'/profile'}/>
  }
  
  return (<div>
      <h2>Login</h2>
      <LoginForm onSubmit={login}/>
    </div>
  )
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {loginThunkCreator})(Login);
