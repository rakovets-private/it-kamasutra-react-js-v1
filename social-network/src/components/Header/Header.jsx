import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.header_logo}>
        <img alt={'logo'} src={'https://cryptologos.cc/logos/uniswap-uni-logo.svg?v=021'}/>
      </div>
      <div className={s.login_block}>
      {(props.isAuth) 
        ? props.login
        : <NavLink to={'/login'}>Login</NavLink>
      }
      </div>
    </header>
  )
}

export default Header;
